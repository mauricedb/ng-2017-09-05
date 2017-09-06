import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person = {
    firstName: 'Maurice',
    lastName: 'de Beijer'
  }
  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('Saving', this.person)
  }

}
