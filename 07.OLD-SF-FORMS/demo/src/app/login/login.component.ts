import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  // @ViewChild('loginForm' ,{ static: true}) loginForm!: NgForm;


  handleFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const value: { email: string; password: string } = form.value;
    form.setValue({ email: "", password: "" });
    console.log(value);
  }
}
