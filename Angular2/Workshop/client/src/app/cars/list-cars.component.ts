import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Router, ActivatedRoute } from '@angular/router'

import { CarsActions } from '../store/cars/cars.actions';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'list-cars',
  templateUrl: './list-cars.component.html'
})
export class ListCarsComponent implements OnInit {
  private cars: Array<object> = [];
  private page = 1;

  constructor(private carsActions: CarsActions,
              private ngRedux: NgRedux<IAppState>,
              private router: Router,
              private activatedRoute: ActivatedRoute){
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const queryPage = params['page'];
      this.page = queryPage ? queryPage : 1;
      this.carsActions.allCars(this.page);
      this.ngRedux.select(state => state.cars.allCars)
        .subscribe(cars => this.cars = cars);
    });
  }

  prevPage(){
    if(this.page === 1){
      return;
    }

    this.router.navigateByUrl(`cars/all?page=${this.page - 1}`);
  }

  nextPage(){
    if(this.cars.length === 0){
      return;
    }

    this.router.navigateByUrl(`cars/all?page=${this.page + 1}`);
  }
}
