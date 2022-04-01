import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMainFieldItem } from '../../shared/model/main-field-item.interface';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  constructor() { }
}
