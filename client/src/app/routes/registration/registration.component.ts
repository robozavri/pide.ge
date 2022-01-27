import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      phoneNumber:  [null, [
        Validators.required,
        Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/)
      ]],
      password:  ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]],
      repeatPassword: '',
      code: '',
      firstname: '',
      lastname: '',
    });
  }

}
