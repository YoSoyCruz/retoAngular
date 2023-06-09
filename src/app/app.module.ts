import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { LoremComponent } from './lorem/lorem.component';

@NgModule({
  declarations: [
    AppComponent,
    LoremIpsumComponent,
    LoremComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
