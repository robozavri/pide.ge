import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { FormComponent as _FormComponent } from '../../../../../../shared/components/form.component';
import { RequestedWalker } from 'app/shared/models/requested-walker';
import { ImageSizesByModule } from 'app/shared/constants/image';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent extends _FormComponent implements OnInit {
  
  @Input() formData: RequestedWalker;
  @Input() showSubmit = true;
  @Output() submitForm = new EventEmitter<RequestedWalker>();
 
  form: FormGroup;
  imageSizes = ImageSizesByModule.stories;
  

  get tags(): FormArray {
      return this.form.get('tags') as FormArray;
  }
  constructor(
    private fb: FormBuilder,
    
  ) {
    super();
  }

  ngOnInit(): void {
    
    this.formData.name = this.formData.name || {};
    this.formData.description = this.formData.description || {};
    this.formData.Image = this.formData.Image || {};
    const tagObj = { account: '', link: ''};
    const tagsArray = (this.formData.tags || [tagObj]).map((item: any) => this.createTag(item));


    this.form = this.fb.group({
      name: this.fb.group({
        en: [this.formData.name.en || ''],
        ge: [this.formData.name.ge || '', [Validators.required]],
        ru: [this.formData.name.ru || ''],
      }),
      description: this.fb.group({
        en: [this.formData.description.en || ''],
        ge: [this.formData.description.ge || '', [Validators.required]],
        ru: [this.formData.description.ru || ''],
      }), 
      Image: this.fb.group({
        url: [this.formData.Image.url || '']
      }),
      tags: this.fb.array(tagsArray),
    });
  }

  
  onUploadCompleteImage3(data: any): void {
    this.form.get('Image').get('url').markAsTouched();
    this.form.get('Image').get('url').setValue(data.url);
  }

  // tags methods
  createTag(data: any): FormGroup {
    return this.fb.group({
      en: [data.en || ''],
      ge: [data.ge || ''],
      ru: [data.ru || ''],
    });
  }
  
  addTag(): void {
    const detailsForm = this.fb.group({
      en: [''],
      ge: [''],
      ru: [''],
    });
    this.tags.push(detailsForm);
  }

  deleteTag(i: any): void{
    this.tags.removeAt(i);
  }

  submit(): void {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }
}
