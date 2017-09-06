import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
form;

@ViewChild('firstName') firstName: NgModel;

  errorText = '';
  person = {
    firstName: 'Maurice',
    lastName: 'de Beijer'
  }
  constructor() { }

  ngOnInit() {
    this.firstName.valueChanges.subscribe(v => {
      console.log(v)
      if (!v) {
        this.errorText = 'Please enter name'
        // this.firstName.errors = { required : {}}
      }
    })
  }

  save(form) {
    console.log('Saving', this.person, form, this.firstName)
  }

}
