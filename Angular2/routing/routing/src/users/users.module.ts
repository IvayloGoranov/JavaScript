import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from '../users/users.service';
import {UsersComponent} from "../users/users.component";

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [CommonModule],
  providers: [UsersService],
  exports: [UsersComponent]
})
export class UsersModule{

}
