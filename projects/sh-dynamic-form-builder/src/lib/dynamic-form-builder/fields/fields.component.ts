import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IMainFieldItem } from '../shared/model/main-field-item.interface';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;

  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  get required() { return this.field?.validators?.some(x => x.key == 'required') };
  constructor() {
  }
}
