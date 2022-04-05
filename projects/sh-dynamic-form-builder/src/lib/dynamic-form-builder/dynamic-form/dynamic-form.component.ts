import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IMainFieldItem } from '../shared/model/main-field-item.interface';
@Component({
  selector: 'lib-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: IMainFieldItem[] = [];
  @Input() formGroup!: FormGroup ;
  constructor() { }
  ngOnInit(): void {
  }
}
