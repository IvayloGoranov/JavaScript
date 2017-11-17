import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router'

import { Component } from '@angular/core';
import { LoginUser } from './login-user.model';
import { UsersActions } from '../store/users/users.actions';
import { IAppState } from '../store/store';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private user: LoginUser;

  constructor(private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>, private router: Router){
    this.user = new LoginUser('', '');
    this.usersActions.register(this.user);
  }

  public login(): void{
    this.usersActions.register(this.user);
    this.ngRedux.select(state => state.users.userRegistered)
      .subscribe(userRegistered => {
        if(userRegistered){
          this.router.navigateByUrl('/users/login')
        }
      });
  }
}
