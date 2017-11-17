import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from 'ng2-redux';

import { AppComponent } from './app.component';
import { store, IAppState } from './store';

import { UsersModule } from './users/users.module';
import { CarRoutesModule } from './routes.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    UsersModule,
    CarRoutesModule,
    CoreModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>){
    this.ngRedux.provideStore(store);
  }
}


