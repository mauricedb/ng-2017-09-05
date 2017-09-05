import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-director',
  template: `
  <p>
    director works!
  </p>
  <app-director *ngIf="false"></app-director>`,
})
export class DirectorComponent {

}
