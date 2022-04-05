import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';
@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule,
    OrdinalNumbersModule
  ],
  exports:[
    DividerComponent
  ]
})
export class ComponentModule { }
