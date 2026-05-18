import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginInterface } from './interfaces/login-interface';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormField],
})
export class App {
  login = signal<LoginInterface>({
    email: '',
    password: '',
  });
  loginForm = form(this.login, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is requied!' });
    email(schemaPath.email, { message: 'Enter valid email address' });
    required(schemaPath.password, { message: 'Password is required!' });
  });
  onSubmit(event: Event) {
    event.preventDefault();
    const credentials = this.login()
    
    console.log(credentials);
  }
}
