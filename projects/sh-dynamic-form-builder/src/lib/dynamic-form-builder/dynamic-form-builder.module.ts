import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsComponent } from './fields/fields.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    DynamicFormBuilderComponent,
    FieldsComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    DynamicFormBuilderComponent
  ]
})
export class DynamicFormBuilderModule { }
