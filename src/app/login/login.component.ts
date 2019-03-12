import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _FB: FormBuilder) {}

  userLogin = this._FB.group({
    username: this._FB.control('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    password: this._FB.control('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  login() {
    console.log('hello');
  }

  ngOnInit() {}
}
