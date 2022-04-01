import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMainFieldItem } from '../../shared/model/main-field-item.interface';

@Component({
  selector: 'lib-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  constructor() { }
}
