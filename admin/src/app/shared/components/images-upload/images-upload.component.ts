import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileApiService } from '../../http/files-api.service';
import { LoadingService } from 'app/shared/services/loading.service';
import { ImageSizes } from 'app/shared/models/imageSizes';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.scss']
})
export class ImagesUploadComponent {

  @Input() image: any;
  @Input() images: any;
  @Input() imageHeight: any;
  @Input() imageWidth: any;
  @Input() imageSizes: ImageSizes;
  @Output() uploadComplete = new EventEmitter<any>();
  @Output() removeImage = new EventEmitter<any>();

  selectedImage: any;
  public multiple = 'multiple';
  filesToDestroy = [];
  filesToCreate = [];

  createdFiles = [];

  constructor(
    private fileApiService: FileApiService,
    public loadingService: LoadingService,
  ) {
  }

  removeImageItem(index: any, imageItem: any): void {
    const filesToDestroy = [];
    filesToDestroy.push(imageItem.url);
    this.removeImage.emit(index);
    this.fileApiService.destroyFiles(filesToDestroy)
    .subscribe();
  }

  onImageSelected(selectedImage: any): void {
    this.selectedImage = selectedImage;
    const filesToCreate = [];
    filesToCreate.push(selectedImage.file);
    
    this.loadingService.start();
    this.fileApiService.createFiles(filesToCreate, [], this.imageSizes)
        .subscribe((data: any) => {
          this.uploadComplete.emit({ url: data[0] });
        }, (data: any) => {
          this.uploadComplete.next({ url: selectedImage.file.name });
        }, () => {
          this.loadingService.stop();
        });
  }

}
