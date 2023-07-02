import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],

})
export class LogInComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),
  });

  logIn(form: FormGroup) {
    console.log(form);
  }
}
