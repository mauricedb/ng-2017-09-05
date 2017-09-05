import { retry } from 'rxjs/operator/retry';
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonEditorComponent implements OnInit {

@Input()  firstName = ""
@Output() firstNameChange  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  xxx() {
    console.count('app-person-editor')
    return ''
  }

  onChange(e){
    this.firstName = e.target.value
    console.log(this.firstName)
    this.firstNameChange.emit(e.target.value)
  }
}
