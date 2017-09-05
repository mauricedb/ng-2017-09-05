import { Component, OnInit } from '@angular/core';
import {TimeService } from '../time.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

    public now: Date;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.now = this.timeService.getTime();

    setInterval(() => this.now = this.timeService.getTime(), 1000);
  }

}
