import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { FormComponent } from 'app/shared/components/form.component';
import { FormComponent as _FormComponent } from '../../form/form.component';
import { Story } from 'app/shared/models/story';

@Component({
  selector: 'app-story-modal',
  templateUrl: './story-modal.component.html',
  styleUrls: ['./story-modal.component.scss']
})
export class StoryModalComponent implements OnInit, AfterViewInit {
  showFormWarning = false;
  submitted = false;
  showSubmit = false;
  

  @ViewChild('storyForm', { static: false }) storyFormComponent: _FormComponent;
  

  storyType: Story;

  constructor(
    private dialogRef: MatDialogRef<StoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Story
  ) { }

  formComponents: FormComponent[];

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.formComponents = [
      this.storyFormComponent,
      
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
      this.dialogRef.close(this.getStoryData());
    } else {
      this.showFormWarning = true;
    }
  }

  getStoryData(): any {
    const data = _.cloneDeep(_.merge(
      this.storyType,
      this.storyFormComponent.getFormValue(),
      
    ));
    return data;
  }

} 
