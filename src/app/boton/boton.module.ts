import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton.component';



@NgModule({
  declarations: [
    BotonComponent
  ],
  exports:[
    BotonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BotonModule { }
