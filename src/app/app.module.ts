import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoremModule } from './lorem/lorem.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonModule } from './boton/boton.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoremModule,
    BrowserAnimationsModule,
    BotonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
