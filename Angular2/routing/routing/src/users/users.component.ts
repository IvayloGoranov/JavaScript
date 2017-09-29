import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'users',
  template: `
    <h1>{{username}}</h1>
  `
})
export class UsersComponent {
  private username: string;

  constructor(private usersService: UsersService){
    this.username = this.usersService.getUsername();
  }
}
