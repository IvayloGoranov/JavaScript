import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router'

import { Component } from '@angular/core';
import { LoginUser } from './login-user.model';
import { UsersActions } from '../store/users/users.actions';
import { IAppState } from '../store/app.state';
import {AuthService} from "../core/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private user: LoginUser;

  constructor(private usersActions: UsersActions,
              private ngRedux: NgRedux<IAppState>,
              private router: Router,
              private authService: AuthService){
    this.user = new LoginUser('', '');
    this.usersActions.login(this.user);
  }

  public login(): void{
    this.usersActions.login(this.user);
    this.ngRedux.select(state => state.users)
      .subscribe(users => {
        if(users.userAuthenticated){
          this.authService.authenticateUser(users.token);
          this.authService.saveUser(users.username);
          this.router.navigateByUrl('')
        }
      });
  }
}
