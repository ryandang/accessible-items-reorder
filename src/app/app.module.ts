import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReorderComponent } from './reorder/reorder.component';
import { ReorderModule } from './reorder/reorder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReorderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
