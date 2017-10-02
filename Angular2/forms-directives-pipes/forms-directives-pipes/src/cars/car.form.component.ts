import { Component } from '@angular/core';
import { Car } from '../data/Car';

@Component({
  selector: 'car-form',
  templateUrl: './car.form.component.html'
})
export class CarFormComponent {
  private engines : number[] = [1.6, 1.8, 2.0, 4.0];
  private car : Car = new Car('BMW', '320i', this.engines[2]);

  public onSubmit(): void {
    console.log(this.car);
  }

  public clearCar(): void {
    this.car = new Car("", "", 0);
  }
}
