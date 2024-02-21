import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
  status?: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
  users = [{ name: 'Pesho', age: 18,status:'green' },
    { name: 'Maja', age: 33 ,status:'red'},
    { name: 'Peter', age: 12,status:'yellow' },
    { name: 'PuShko', age: 48 ,status:'green'},
    { name: 'Dimitar', age: 24,status:'red' },
    { name: 'Ili', age: 53 },
    { name: 'GARY', age: 28,status:'yellow' },
  ] as User[];


}
