import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DateComponent } from './date/date.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FileComponent } from './file/file.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RangeComponent } from './range/range.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
const DECLARATIONS = [
  CheckboxComponent,
  DropdownComponent,
  FileComponent,
  RadioComponent,
  InputComponent,
  DateComponent,
  RangeComponent,
  PasswordComponent
]
@NgModule({
  declarations: [
    DECLARATIONS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    DECLARATIONS
  ]
})
export class formControlModule { }
