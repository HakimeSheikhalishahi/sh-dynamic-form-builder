import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
const DECLARATIONS = [
  DividerComponent,
  ValidationErrorComponent
]
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    OrdinalNumbersModule
  ],
  exports: DECLARATIONS
})
export class ComponentModule { }
