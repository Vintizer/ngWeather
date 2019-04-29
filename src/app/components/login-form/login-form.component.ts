import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;

  public constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['Test', [Validators.required, Validators.pattern(/^[a-z]{3,5}$/)]],
      password: ''
    });
  }
  public onSubmit(): void {
    console.log('OnSubmit');
  }
}
