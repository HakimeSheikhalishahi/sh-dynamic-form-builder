import { NgModule } from '@angular/core';
import { DynamicFormBuilderModule } from './dynamic-form-builder';
import { ShDynamicFormBuilderComponent } from './sh-dynamic-form-builder.component';



@NgModule({
  declarations: [
    ShDynamicFormBuilderComponent
  ],
  imports: [
  ],
  exports: [
    ShDynamicFormBuilderComponent,
    DynamicFormBuilderModule
  ]
})
export class ShDynamicFormBuilderModule { }
