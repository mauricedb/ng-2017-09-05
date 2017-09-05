import { first } from 'rxjs/operator/first';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  // styleUrls: ['./demo.component.css']
})
export class DemoComponent  {
  person = {firstName : 'Maurice'}


  showMe(firstName) {
    alert(firstName)
  }
}
