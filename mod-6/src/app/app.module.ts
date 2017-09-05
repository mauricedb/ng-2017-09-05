import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { PersonComponent } from './person/person.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PersonComponent,
    PersonEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
