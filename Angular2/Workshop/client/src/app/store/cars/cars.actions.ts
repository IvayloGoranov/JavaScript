import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { CarsService } from '../../cars/cars.service';
import { IAppState } from '../app.state';

export const ADD_CAR = 'cars/ADD';
export const ALL_CARS = 'cars/ALL';

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

  allCars(page = 1){
    return this.carsService.allCars(page)
      .subscribe(cars => {
        this.ngRedux.dispatch({
          type: ALL_CARS,
          cars
        })
      });
  }
}
