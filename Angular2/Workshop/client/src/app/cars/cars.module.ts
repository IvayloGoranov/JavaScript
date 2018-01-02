import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddCarComponent } from './add-car.component';
import { ListCarsComponent } from './list-cars.component';
import { CarsActions } from '../store/cars/cars.actions';
import {CarsService} from "./cars.service";

@NgModule({
  declarations: [
    AddCarComponent,
    ListCarsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
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
