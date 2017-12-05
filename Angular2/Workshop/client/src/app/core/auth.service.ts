import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
  saveUser(user){
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(){
    const userJSON = window.localStorage.getItem('user');
    if(userJSON){
      return JSON.parse(userJSON);
    }

    return {};
  }

  authenticateUser(token){
    window.localStorage.setItem('token', token);
  }

  deauthenticateUser(){
    window.localStorage.removeItem('token');
  }

  isUserAuthenticated(){
    return window.localStorage.getItem('token') !== null;
  }

  getToken(){
    return window.localStorage.getItem('token');
  }

  removeUser(){
    window.localStorage.removeItem('user');
  }
}
