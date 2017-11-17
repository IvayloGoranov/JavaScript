import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:5000/'

@Injectable()
export class HttpService {
  constructor(private http: Http){
  }

  public post(url: string, data:{}): Observable<any>{
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const requestOptions = new RequestOptions({
      headers: headers
    });

    return this.http.post(baseUrl + url, JSON.stringify(data), requestOptions)
                    .map(response => response.json());
  }
}
