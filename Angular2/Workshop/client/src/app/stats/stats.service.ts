import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../core/http.service';

@Injectable()
export class StatsService {
  constructor(private httpService: HttpService){
  }

  public get(): Observable<any>{
    return this.httpService.get('stats');
  }
}
