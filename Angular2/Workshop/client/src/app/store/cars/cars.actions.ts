import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { CarsService } from '../../cars/cars.service';
import { IAppState } from '../app.state';

export const ADD_CAR = 'cars/ADD';

@Injectable()
export class CarsActions {
  constructor(private carsService: CarsService,
              private ngRedux: NgRedux<IAppState>){
  }

  addCar(car){
    return this.carsService.addCar(car)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ADD_CAR,
          result
        })
      });
  }
}
