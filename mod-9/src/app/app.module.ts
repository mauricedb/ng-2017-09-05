import { packageChunkSort } from '@angular/cli/utilities/package-chunk-sort';
import { RouterModule } from '@angular/router';
// import { DirectorsModule, DirectorsComponent } from './directors/directors.module';
// import { MoviesModule, MoviesComponent } from './movies/movies.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MovieGuardService} from './movie-guard.service';

import { AppComponent } from './app.component';

var routesModule = RouterModule.forRoot([
  {
    path: 'kill-bill',
    loadChildren : './movies/movies.module#MoviesModule'
  },
  {
    path: 'director',
    loadChildren: './directors/directors.module#DirectorsModule'
  },
  // {
  //   path:'kill-bill/:versie',
  //   component : MoviesComponent,
  //   canActivate: [MovieGuardService]
  // },
  // {
  //   path:'director',
  //   component : DirectorsComponent
  // },
  // {
  //   path : '**',
  //   redirectTo :'kill-bill/1'
  // }

])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // MoviesModule,
    // DirectorsModule,
    routesModule
  ],
  providers: [MovieGuardService],
  bootstrap: [AppComponent],
})
export class AppModule { }
