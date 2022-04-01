import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMainFieldItem } from '../../shared/model/main-field-item.interface';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent {

  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  constructor() { }
}