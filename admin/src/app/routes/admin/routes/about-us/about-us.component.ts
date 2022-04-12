import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { CommonApiService } from 'app/shared/http/common-api.service';
import { ImageSizesByModule } from 'app/shared/constants/image';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {
  form: FormGroup;
  formData: any = {};
  imageSizes = ImageSizesByModule.banner;

  constructor(
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
    public api: CommonApiService,
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.api.getOne().subscribe((data: any) => {
      this.formData = data.aboutUs;
      this.loadData();
    });
  }
  
  loadData(): any {
 
    this.formData.content = this.formData.content || {};
    this.formData.banner = this.formData.banner || {};

    this.form = this.fb.group({
      content:  this.fb.group({
        ge: [this.formData.content.ge || '', [Validators.required]],
        en: [this.formData.content.en || ''],
        ru: [this.formData.content.ru || ''],
      }),
      banner: this.fb.group({
        url: [this.formData.banner.url || '']
      }),
    });
  }

  onUploadCompleteImage3(data: any): void {
    this.form.get('banner').get('url').markAsTouched();
    this.form.get('banner').get('url').setValue(data.url);
  }

  submit(): void {
    this.api.update({ aboutUs: {...this.form.value}}).subscribe(
      () => this.snackBarService.open('Updated Successfully'),
      () => this.snackBarService.open('Update Failed'),
    );
  }

}
