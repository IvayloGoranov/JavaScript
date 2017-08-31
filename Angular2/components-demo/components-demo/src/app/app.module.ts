import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { ArticleDetailComponent } from '../articles/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
