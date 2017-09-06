import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirectorsComponent } from "./directors/directors.component";
import { RouterModule } from "@angular/router";

export { DirectorsComponent};

var routeModule = RouterModule.forChild([
  {
    path: '',
    component: DirectorsComponent
  }
])

@NgModule({
  imports: [CommonModule, routeModule],
  declarations: [DirectorsComponent],
  exports: []
})
export class DirectorsModule {}
