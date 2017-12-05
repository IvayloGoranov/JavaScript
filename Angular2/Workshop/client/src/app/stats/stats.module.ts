import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { StatsComponent } from './stats.component';
import { StatsService } from './stats.service';
import { StatsActions } from '../store/stats/stats.actions';

@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StatsService,
    StatsActions
  ],
  exports: [
  ]
})
export class StatsModule {
}
