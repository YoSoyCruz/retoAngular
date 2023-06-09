import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoremComponent } from './lorem.component';


@NgModule({
  declarations: [
    LoremComponent
  ],
  exports:[
    LoremComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoremModule { }
