import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { OrdinalNumbersModule } from 'sh-ordinal-numbers';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { BasicFieldComponent } from './basic-field/basic-field.component';
import { CheckboxComponent } from './form-control/checkbox/checkbox.component';
import { DateComponent } from './form-control/date/date.component';
import { DropdownComponent } from './form-control/dropdown/dropdown.component';
import { FileComponent } from './form-control/file/file.component';
import { FormArrayItemComponent } from './form-control/form-array-item/form-array-item.component';
import { FormArrayComponent } from './form-control/form-array/form-array.component';
import { InputComponent } from './form-control/input/input.component';
import { PasswordComponent } from './form-control/password/password.component';
import { RadioComponent } from './form-control/radio/radio.component';
import { RangeComponent } from './form-control/range/range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NestedFormGroupComponent } from './form-control/nested-form-group/nested-form-group.component';
import { NestedFormGroupItemComponent } from './form-control/nested-form-group-item/nested-form-group-item.component';
const DECLARATIONS = [
  DividerComponent,
  ValidationErrorComponent,
  BasicFieldComponent,
  CheckboxComponent,
  DropdownComponent,
  FileComponent,
  RadioComponent,
  InputComponent,
  DateComponent,
  RangeComponent,
  PasswordComponent,
  FormArrayComponent,
  FormArrayItemComponent,
  NestedFormGroupComponent
]
@NgModule({
  declarations: [DECLARATIONS, NestedFormGroupItemComponent],
  imports: [
    CommonModule,
    OrdinalNumbersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DECLARATIONS]
})
export class ComponentModule { }
