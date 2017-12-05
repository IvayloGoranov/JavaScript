import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { UsersService } from '../../users/users.service';
import { RegisterUser } from '../../users/register-user.model';
import { LoginUser } from '../../users/login-user.model';
import { IAppState } from '../app.state';

export const USER_REGISTERED = 'users/REGISTER';
export const USER_LOGGED_IN = 'users/LOGIN';
export const USER_LOG_OUT = 'users/LOGOUT';

@Injectable()
export class UsersActions {
  constructor(private usersService: UsersService, private ngRedux: NgRedux<IAppState>){
  }

  register(user: RegisterUser){
    this.usersService.register(user)
                     .subscribe(result => this.ngRedux.dispatch({
                                  type: USER_REGISTERED,
                                  result
                                })
                      );
  }

  login(user: LoginUser){
    this.usersService.login(user)
      .subscribe(result => this.ngRedux.dispatch({
          type: USER_LOGGED_IN,
          result
        })
      );
  }

  logout(){
    this.ngRedux.dispatch({
      type: USER_LOG_OUT
    });
  }
}

