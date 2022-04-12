import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { FormComponent as _FormComponent } from '../../../../../../shared/components/form.component';
import { Story } from 'app/shared/models/story';
import { ImageSizesByModule } from 'app/shared/constants/image';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends _FormComponent implements OnInit {
  
  @Input() formData: Story;
  @Input() showSubmit = true;
  @Output() submitForm = new EventEmitter<Story>();

  form: FormGroup;
  imageSizes = ImageSizesByModule.stories;
  

  constructor(
    private fb: FormBuilder,
  ) {
    super();
  }

  ngOnInit(): void {
  
    this.formData.title = this.formData.title || {};
    this.formData.description = this.formData.description || {};
    this.formData.Image = this.formData.Image || {};

    this.form = this.fb.group({ 
      title: this.fb.group({        
        en: [this.formData.title.en || ''],
        ge: [this.formData.title.ge || '', [Validators.required]],
        ru: [this.formData.title.ru || ''],
      }),
      description: this.fb.group({        
        en: [this.formData.description.en || ''],
        ge: [this.formData.description.ge || '', [Validators.required]],
        ru: [this.formData.description.ru || ''],
      }), 
      Image: this.fb.group({
        url: [this.formData.Image.url || '']
      }),
    });
  }
  
  onUploadCompleteImage6(data: any): void {
    this.form.get('Image').get('url').markAsTouched();
    this.form.get('Image').get('url').setValue(data.url);
  }
  submit(): void {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }
}
