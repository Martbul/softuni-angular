import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Demo-app';
  appUsers: User[] = [];

  constructor(public UserService: UserService) {
    this.appUsers = this.UserService.users
  }

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.UserService.addUser(inputName, inputAge);
  }
}
