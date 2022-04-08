import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { FormComponent } from 'app/shared/components/form.component';
import { FormComponent as _FormComponent } from '../../form/form.component';
import { Faq } from 'app/shared/models/faq';

@Component({
  selector: 'app-faq-modal',
  templateUrl: './faq-modal.component.html',
  styleUrls: ['./faq-modal.component.scss']
})
export class FaqModalComponent implements OnInit, AfterViewInit {
  showFormWarning = false;
  submitted = false;
  showSubmit = false;
  

  @ViewChild('faqForm', { static: false }) faqFormComponent: _FormComponent;
  

  faqType: Faq;

  constructor(
    private dialogRef: MatDialogRef<FaqModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Faq
  ) { }

  formComponents: FormComponent[];

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.formComponents = [
      this.faqFormComponent,
      
    ];
  }

  formsAreValid(): any {
    return this.formComponents.filter(component => component)
      .every((formComponent: FormComponent) => formComponent.formIsValid());
  }

  onFinish(): void {
    this.showFormWarning = false;
    this.submitted = true;
    if (this.formsAreValid()) {
      this.dialogRef.close(this.getFaqData());
    } else {
      this.showFormWarning = true;
    }
  }

  getFaqData(): any {
    const data = _.cloneDeep(_.merge(
      this.faqType,
      this.faqFormComponent.getFormValue(),
      
    ));
    return data;
  }

} 
