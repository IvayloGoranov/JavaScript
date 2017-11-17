import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UsersService } from './users.service';
import { UsersActions } from '../store/users/users.actions';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule
  ],
  providers: [
    UsersService,
    UsersActions
  ],
  exports: [
    RegisterComponent
  ]
})
export class UsersModule {
}
