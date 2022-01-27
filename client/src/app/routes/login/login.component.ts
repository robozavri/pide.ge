import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    });
  }

}
