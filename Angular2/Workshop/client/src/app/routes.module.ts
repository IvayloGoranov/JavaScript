import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';

const routes: Routes = [
  {
    path: 'users/register',
    component: RegisterComponent
  },
  {
    path: 'users/login',
    component: LoginComponent
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
