import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router'

import { Component } from '@angular/core';
import { RegisterUser } from './register-user.model';
import { UsersActions } from '../store/users/users.actions';
import { IAppState } from '../store';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  private user: RegisterUser;

  constructor(private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>, private router: Router){
    this.user = new RegisterUser('', '', '', '');
    this.usersActions.register(this.user);
  }

  public register(): void{
    this.usersActions.register(this.user);
    this.ngRedux.select(state => state.users.userRegistered)
                .subscribe(userRegistered => {
                  if(userRegistered){
                    this.router.navigateByUrl('/users/login')
                  }
                });
  }
}
