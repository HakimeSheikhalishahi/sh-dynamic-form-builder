import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFieldItem } from '../../shared/model/field-item.interface';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() field!: IFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  constructor() { }
}
