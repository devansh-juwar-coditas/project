import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginInterface } from './interfaces/login-interface';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormField, RouterOutlet],
})
export class App {}
