import { retry } from 'rxjs/operator/retry';
import { Component, NgZone, OnInit } from "@angular/core";
import {TimeService} from '../time.service';

class Test{
  getDate() {
  return new Date(2000,0,1)
  }
}

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"],
  // providers:[TimeService]
  viewProviders: [{ provide: TimeService, useClass: Test}]
})
export class ClockComponent implements OnInit {
  count = 0;
  now = new Date();

  constructor(private zone: NgZone, private svc : TimeService) {}

  ngOnInit() {
    
    this.zone.runOutsideAngular(() =>
      setInterval(() => {
        this.count++;
        if (this.count % 330 === 0) {
          this.zone.run(() => (this.now = this.svc.getDate()));
        }
      }, 10)
    );
  }
}
