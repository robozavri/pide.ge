import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { CommonApiService } from 'app/shared/http/common-api.service';
import { largeSize } from 'app/shared/constants/image';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqPageComponent implements OnInit {
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
      this.formData = data.faqs;
      this.loadData();
    });
  }
  
  loadData(): any {
 
    this.formData.banner = this.formData.banner || {};

    this.form = this.fb.group({
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
    this.api.update({ faqs: {...this.form.value}}).subscribe(
      () => this.snackBarService.open('Updated Successfully'),
      () => this.snackBarService.open('Update Failed'),
    );
  }

}
