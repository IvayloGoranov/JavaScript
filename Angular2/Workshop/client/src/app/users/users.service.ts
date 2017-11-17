import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RegisterUser } from './register-user.model';
import { LoginUser } from './login-user.model';
import { HttpService } from '../core/http.service';

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService){
  }

  public register(user: RegisterUser): Observable<any>{
    return this.httpService.post('auth/signup', user);
  }

  public login(user: LoginUser): Observable<any>{
    return this.httpService.post('auth/login', user);
  }
}
