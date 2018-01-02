import { Injectable } from '@angular/core';

import { HttpService } from '../core/http.service';
import {AuthService} from "../core/auth.service";
import { AddCarModel } from './add-car.model';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CarsService {
  constructor(private httpService: HttpService, private authService: AuthService){
  }

  public addCar(car: AddCarModel): Observable<any>{
    return this.httpService.post('cars/create', car, this.authService.isUserAuthenticated());
  }

  public allCars(page = 1): Observable<any>{
    return this.httpService.get(`cars/all?page=${{page}}`);
  }
}
