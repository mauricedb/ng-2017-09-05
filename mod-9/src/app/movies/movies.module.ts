import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviesComponent } from "./movies/movies.component";

export {MoviesComponent } ;

var routeModule= RouterModule.forChild([
  {
    path: ':versie',
    component: MoviesComponent
  }
])

@NgModule({
  imports: [CommonModule, routeModule],
  declarations: [MoviesComponent],
  exports: []
})
export class MoviesModule {}
