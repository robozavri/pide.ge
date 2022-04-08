import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { CommonApiService } from 'app/shared/http/common-api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {
  form: FormGroup;
  formData: any = {};

  constructor(
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
    public api: CommonApiService,
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.api.getOne().subscribe((data: any) => {
      this.formData = data.aboutUs;
      console.log('data', data)
      console.log('this.formData', this.formData)
      this.loadData();
    });
  }
  
  loadData(): any {
 
    this.formData.content = this.formData.content || {};
    console.log('this.formData.content', this.formData.content)
    this.form = this.fb.group({
      content:  this.fb.group({
        ge: [this.formData.content.ge || ''],
        en: [this.formData.content.en || ''],
        ru: [this.formData.content.ru || ''],
      })
    });
  }

  submit(): void {
    this.api.update({ aboutUs: {...this.form.value}}).subscribe(
      () => this.snackBarService.open('Updated Successfully'),
      () => this.snackBarService.open('Update Failed'),
    );
  }

}
