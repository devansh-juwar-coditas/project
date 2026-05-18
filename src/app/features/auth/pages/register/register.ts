import { Component, signal } from '@angular/core';
import { CandidateInterface } from '../../../../interfaces/candidate-interface';
import { form, FormField, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormField, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerModel = signal<CandidateInterface>({
    title: '',
    name: '',
    surname: '',
    degree: '',
    yearofPassing: 0,
    email: '',
    password: '',
  });
  registerForm = form(this.registerModel, (path) => {
    required(path.title, {
      message: 'Title is required',
    });
    (required(path.name, {
      message: 'Name is required',
    }),
      required(path.surname, {
        message: 'Surname is required',
      }),
      required(path.degree, {
        message: 'Degree is required',
      }),
      required(path.yearofPassing, {
        message: 'Year of Passing is required',
      }),
      required(path.email, {
        message: 'Enter valid email',
      }),
      required(path.password, {
        message: 'Password is required',
      }));
  });
  onSubmitCandidate(event: Event) {
    event.preventDefault();
    const candidateData = this.registerModel();
    console.log(candidateData);
  }
}
