import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';



@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  form: FormGroup;
  myModel = false;

  get getAtWalk(): FormArray {
    return this.form.get('atWalk') as FormArray;
  }

  get getAtGuest(): FormArray {
    return this.form.get('atGuest') as FormArray;
  }

  petWeights = [
    '3-5',
    '5-10',
    '10-20',
  ];

  public atWalk: any = [
    {
      title: 'ხტომა',
      value: false
    },
    {
      title: 'სირბილი',
      value: true
    },
    {
      title: 'ძუნძული',
      value: true
    },
  ];
  public atGuest: any = [
    {
      title: 'დარბის',
      value: false
    },
    {
      title: 'ხრღნის',
      value: true
    },
    {
      title: 'კუდს აქიცინებს',
      value: true
    },
  ];

  constructor(
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {
    const characteristicObj = { title: '', value: ''};
    const characteristics1 = (this.atWalk || [characteristicObj]).map((item: any) => this.createCharacteristics(item));
    const characteristics2 = (this.atGuest || [characteristicObj]).map((item: any) => this.createCharacteristics(item));

    this.form = this.fb.group({
      photo: ['', Validators.required],
      petname: ['', Validators.required],
      patBirthday: ['', Validators.required],
      breed: ['', Validators.required],
      weight: this.petWeights[0],
      atWalk: this.fb.array(characteristics1),
      atGuest: this.fb.array(characteristics2),
    });
  }

  openFile(){
    document.querySelector('input').click();
  }
  handle(e){
    console.log('Change input file',)
  }

  createCharacteristics(item: any): FormGroup  {
      return this.fb.group({
        title: [ item.title ],
        value: [ item.value ],
      });
  }

  onCheckChange(e, i) {
    // console.log('characteristicsFormArray: ', this.characteristicsFormArray.value)
  }

}
