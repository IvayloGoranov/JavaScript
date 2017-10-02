import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarFormComponent } from '../cars/Car.form.component';
import { HighlightDirective } from '../directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
