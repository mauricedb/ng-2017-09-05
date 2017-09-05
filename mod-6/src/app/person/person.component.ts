import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class PersonComponent implements OnInit {
  @Input() person;
  @Output() onShowMe = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  showMe() {
    this.onShowMe.emit("Via emit:" + this.person.firstName);
  }
}
