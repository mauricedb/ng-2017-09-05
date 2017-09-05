import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { ClickerDirective } from './clicker.directive';
import { TimePipe } from './time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClockComponent, ClickerDirective, TimePipe],
  exports: [ClockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class ClockModule { }
