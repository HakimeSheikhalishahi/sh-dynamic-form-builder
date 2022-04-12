import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IMainFieldItem } from '../../../model/main-field-item.interface';
@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  constructor() { }
}
