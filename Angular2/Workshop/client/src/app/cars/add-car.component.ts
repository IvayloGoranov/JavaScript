import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router'

import { AddCarModel } from './add-car.model';
import { CarsActions } from '../store/cars/cars.actions';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'add-car',
  templateUrl: './add-car.component.html'
})
export class AddCarComponent {
  private car: AddCarModel = new AddCarModel();

  constructor(private carsActions: CarsActions,
              private ngRedux: NgRedux<IAppState>,
              private router: Router){
  }

  addCar(){
    this.carsActions.addCar(this.car);
    this.ngRedux.select(state => state.cars)
      .subscribe(cars => {
        if(cars.carAdded){
          this.router.navigateByUrl(`/cars/details/${cars.carId}`);
        }
      });
  }
}
