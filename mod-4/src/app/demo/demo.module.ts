import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { DirectorComponent } from './director/director.component';
import { ClockComponent } from './clock/clock.component';
import { TimeService } from './time.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MovieComponent, DirectorComponent, ClockComponent],
  exports: [MovieComponent, ClockComponent],
  providers: [TimeService]
})
export class DemoModule { }
