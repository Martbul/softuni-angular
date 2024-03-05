import { GlobalLoaderService } from '../../core/services/global-loader.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: IUser[] | null = null;
  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(): void {
    this.globalLoaderService.showLoader('loading users');
    this.userService.loadUsers().subscribe({
      next: (userList) => {
        this.globalLoaderService.hideLoader();
        this.userList = userList;
      },
    });
  }

  reloadUsersHandler(): void {
    this.loadUsers();
  }
}
