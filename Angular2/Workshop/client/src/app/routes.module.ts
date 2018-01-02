import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';
import { AddCarComponent } from './cars/add-car.component';
import { ListCarsComponent } from './cars/list-cars.component';
import { StatsComponent } from './stats/stats.component';
import { PrivateRoute } from './core/private-route';

const routes: Routes = [
  {
    path: 'users/register',
    component: RegisterComponent
  },
  {
    path: 'users/login',
    component: LoginComponent
  },
  {
    path: 'cars/add',
    component: AddCarComponent,
    canActivate:[PrivateRoute]
  },
  {
    path: '',
    component: StatsComponent
  },
  {
    path: 'cars/all',
    component: ListCarsComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class CarRoutesModule {
}
