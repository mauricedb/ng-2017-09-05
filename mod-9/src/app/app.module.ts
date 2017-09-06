import { DirectorsModule } from './directors/directors.module';
import { MoviesModule } from './movies/movies.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    DirectorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
