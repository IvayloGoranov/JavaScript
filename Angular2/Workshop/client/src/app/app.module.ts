import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { store, IAppState } from './store';

import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { CarRoutesModule } from './routes.module';
import { CoreModule } from './core/core.module';
import { StatsModule } from './stats/stats.module';

import { config } from './store/core/config';
import { AuthService } from './core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    UsersModule,
    CarsModule,
    CarRoutesModule,
    CoreModule,
    StatsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private router: Router,
              private authService: AuthService){
    this.ngRedux.provideStore(store);

    config(this.ngRedux, this.router, this.authService);
  }
}


