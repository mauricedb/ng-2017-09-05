import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirectorsComponent } from "./directors/directors.component";

@NgModule({
  imports: [CommonModule],
  declarations: [DirectorsComponent],
  exports: [DirectorsComponent]
})
export class DirectorsModule {}
