import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user';


@Injectable()
export class UserService  implements OnDestroy {
  users: User[] = [
    { name: 'John', age: 10 },
    { name: 'John', age: 1031 },
    { name: 'John', age: 510 },
    { name: 'John', age: 1 },
  ];

  ngOndestroy(): void{
  
  }
  
  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    };

    this.users.push(user);

    inputAge.value = '';
    inputName.value = '';
  }
}
