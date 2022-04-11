import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { CommonApiService } from 'app/shared/http/common-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
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
      this.formData = data.contacts;
      this.loadData();
    });
  }
  
  loadData(): any {
 
    this.formData.email = this.formData.email || '';
    this.formData.phone = this.formData.phone || '';
    this.formData.phone2 = this.formData.phone2 || '';
    this.formData.phone3 = this.formData.phone3 || '';

    this.form = this.fb.group({
      email: [this.formData.email || ''],
      phone: [this.formData.phone || ''],
      phone2: [this.formData.phone2 || ''],
      phone3: [this.formData.phone3 || '']
    });
  }

  submit(): void {
    this.api.update({ contacts: {...this.form.value}}).subscribe(
      () => this.snackBarService.open('Updated Successfully'),
      () => this.snackBarService.open('Update Failed'),
    );
  }

}
