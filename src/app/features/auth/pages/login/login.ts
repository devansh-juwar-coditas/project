import { Component, signal } from '@angular/core';
import { LoginInterface } from '../../../../interfaces/login-interface';
import { email, form, FormField, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormField,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  login = signal<LoginInterface>({
    email: '',
    password: '',
  });
  loginForm = form(this.login, (path) => {
    required(path.email, {
      message: 'Email is required',
    });
    email(path.email, {
      message: 'Enter valid email',
    });
    required(path.password, {
      message: 'Password is required',
    });
  });
  onSubmit(e: Event) {
    e.preventDefault();
    const loginData = this.login();
    console.log(loginData);
  }
}
