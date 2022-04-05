import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsComponent } from './fields/fields.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { formControlModule } from './form-control/form-control.module';
import { FormArrayItemComponent } from './form-control/form-array-item/form-array-item.component';
import { FormArrayComponent } from './form-control/form-array/form-array.component';
import { ComponentModule } from './shared/component/component.module';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
@NgModule({
  declarations: [
    DynamicFormBuilderComponent,
    FieldsComponent,
    DynamicFormComponent,
    FormArrayItemComponent,
    FormArrayComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    formControlModule,
    ComponentModule
  ],
  exports:[
    DynamicFormBuilderComponent
  ]
})
export class DynamicFormBuilderModule { }
