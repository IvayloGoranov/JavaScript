import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddCarComponent } from './add-car.component';
import { CarsActions } from '../store/cars/cars.actions';
import {CarsService} from "./cars.service";

@NgModule({
  declarations: [
    AddCarComponent
  ],
  imports: [
    FormsModule
  ],
  providers: [
    CarsActions,
    CarsService
  ],
  exports: [
  ]
})
export class CarsModule {
}
