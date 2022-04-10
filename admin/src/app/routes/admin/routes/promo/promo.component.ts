import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { CommonApiService } from 'app/shared/http/common-api.service';
import { largeSize } from 'app/shared/constants/image';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromoComponent implements OnInit {
  form: FormGroup;
  formData: any = {};
  imageSize = largeSize;

  constructor(
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
    public api: CommonApiService,
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.api.getOne().subscribe((data: any) => {
      this.formData = data.promo;
      this.loadData();
    });
  }
  
  loadData(): any {
 
    this.formData.title = this.formData.title || {};
    this.formData.image = this.formData.image || {};

    this.form = this.fb.group({
      title:  this.fb.group({
        ge: [this.formData.title.ge || ''],
        en: [this.formData.title.en || ''],
        ru: [this.formData.title.ru || ''],
      }),
      image: this.fb.group({
        url: [this.formData.image.url || '']
      }),
    });
  }

  onUploadCompleteImage(data: any): void {
    this.form.get('image').get('url').markAsTouched();
    this.form.get('image').get('url').setValue(data.url);
  }

  submit(): void {
    this.api.update({ promo: {...this.form.value}}).subscribe(
      () => this.snackBarService.open('Updated Successfully'),
      () => this.snackBarService.open('Update Failed'),
    );
  }

}
