import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IFieldItem } from '../../shared/model/field-item.interface';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() field!: IFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  constructor() { }
}
