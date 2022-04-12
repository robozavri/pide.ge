import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileApiService } from '../../http/files-api.service';
import { LoadingService } from 'app/shared/services/loading.service';
import { ImageSizes } from 'app/shared/models/imageSizes';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  @Input() image: any;
  @Input() imageHeight: any;
  @Input() imageWidth: any;
  @Input() imageSizes: ImageSizes;
  @Output() uploadComplete = new EventEmitter<any>();

  selectedImage: any;

  constructor(
    private fileApiService: FileApiService,
    public loadingService: LoadingService,
  ) { }

  onImageSelected(selectedImage: any): void {
    this.selectedImage = selectedImage;
    const filesToDestroy = [];
    const filesToCreate = [];
    filesToDestroy.push(this.image.url);
    filesToCreate.push(this.selectedImage.file);
    this.loadingService.start();
    this.fileApiService.createFiles(filesToCreate, filesToDestroy, this.imageSizes)
      .subscribe((data: any) => {
        this.uploadComplete.emit({ url: data[0] });
      }, (data: any) => {
        this.uploadComplete.next({ url: this.selectedImage.file.name });
      }, () => {
        this.loadingService.stop();
      });
  }

}
