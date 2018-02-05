import { ReorderComponent } from './reorder.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReorderComponent
  ],
  exports: [
    ReorderComponent
  ],
  imports:[
    BrowserModule,
    FormsModule
  ]
})
export class ReorderModule { }
