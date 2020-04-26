import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApoComponent } from './apo.component';

@NgModule({
  declarations: [
    ApoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ApoComponent]
})
export class ApoModule { }
