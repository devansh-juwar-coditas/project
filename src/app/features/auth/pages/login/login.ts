import { Component, signal } from '@angular/core';
import { LoginInterface } from '../../../../interfaces/login-interface';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  login = signal<LoginInterface>({
    email: '',
    password: '',
  });
  loginForm = form(this.login);

}
