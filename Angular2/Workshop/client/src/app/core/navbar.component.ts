import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router'

import { IAppState } from '../store/app.state';
import { UsersActions } from '../store/users/users.actions';
import { AuthService } from './auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  private authetnticated: boolean = false;
  private username: string = null;

  constructor(private ngRedux: NgRedux<IAppState>,
              private usersActions: UsersActions,
              private authService: AuthService,
              private router: Router){
  }

  ngOnInit(){
    this.ngRedux.select(state => state.users)
                .subscribe(users => {
                  this.authetnticated = users.userAuthenticated;
                  this.username = users.username;
                });
  }

  logout(){
    this.usersActions.logout();
    this.authService.deauthenticateUser();
    this.authService.removeUser();
    this.router.navigateByUrl('');
  }
}
