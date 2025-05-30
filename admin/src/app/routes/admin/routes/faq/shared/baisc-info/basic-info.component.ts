import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { FormComponent as _FormComponent } from '../../../../../../shared/components/form.component';
import { Faq } from 'app/shared/models/faq';
import { largeSize } from 'app/shared/constants/image';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent extends _FormComponent implements OnInit {
  
  @Input() formData: Faq;
  @Input() showSubmit = true;
  @Output() submitForm = new EventEmitter<Faq>();
 
  form: FormGroup;
  imageSize = largeSize;
  
  constructor(
    private fb: FormBuilder,
    
  ) {
    super();
  }

  ngOnInit(): void {
    
    this.formData.question = this.formData.question || {};
    this.formData.answer = this.formData.answer || {};

    this.form = this.fb.group({
      question: this.fb.group({
        en: [this.formData.question.en || ''],
        ge: [this.formData.question.ge || '', [Validators.required]],
        ru: [this.formData.question.ru || ''],
      }),
      answer: this.fb.group({
        en: [this.formData.answer.en || '',],
        ge: [this.formData.answer.ge || '', [Validators.required]],
        ru: [this.formData.answer.ru || ''],
      }),
    });
  }

  

  submit(): void {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }
}
