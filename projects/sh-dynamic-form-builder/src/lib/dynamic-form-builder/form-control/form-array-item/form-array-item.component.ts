import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IFormArrayFieldItem } from '../../shared/model/form-array-field-item.interface';

@Component({
  selector: 'app-form-array-item',
  templateUrl: './form-array-item.component.html',
  styleUrls: ['./form-array-item.component.scss']
})
export class FormArrayItemComponent implements OnInit {
  @Input() form!: any;
  @Input() field!: IFormArrayFieldItem;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  get required() { return this.field?.validators?.some(x => x.key == 'required') };
  constructor() { }
  ngOnInit(): void {
    this.form = this.form as FormGroup;
  }

}
