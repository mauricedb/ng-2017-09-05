import { retry } from "rxjs/operator/retry";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-person-editor",
  templateUrl: "./person-editor.component.html",
  styleUrls: ["./person-editor.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonEditorComponent implements OnInit {
  @Input() firstName = "";
  @Output() firstNameChange = new EventEmitter();

  counter = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.counter++;
      this.cd.detectChanges();
    }, 1000);
  }

  xxx() {
    console.count("app-person-editor");
    return "";
  }

  onChange(e) {
    this.firstName = e.target.value;
    console.log(this.firstName);
    this.firstNameChange.emit(e.target.value);
  }
}
