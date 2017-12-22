import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';

const baseUrl = 'http://localhost:5000/';
const getMethod = 'get';
const postMethod = 'post';

@Injectable()
export class HttpService {
  constructor(private http: Http, private authService: AuthService){
  }

  public get(url: string, authenticated: boolean = false): Observable<any>{
    const requestOptions = this.getRequestOptions(getMethod, authenticated);

    return this.http.get(baseUrl + url, requestOptions)
                    .map(response => response.json());
  }

  public post(url: string, data:{}, authenticated: boolean = false): Observable<any>{
    const requestOptions = this.getRequestOptions(postMethod, authenticated);

    return this.http.post(baseUrl + url, JSON.stringify(data), requestOptions)
                    .map(response => response.json());
  }

  private getRequestOptions(method, authenticated){
    const headers = new Headers();
    if (method !== getMethod){
      headers.append('Content-Type', 'application/json');
    }

    if (authenticated){
      headers.append('Authorization', `Bearer ${this.authService.getToken()}`);
    }

    const requestOptions = new RequestOptions({
      headers: headers
    });

    return requestOptions;
  }
}
