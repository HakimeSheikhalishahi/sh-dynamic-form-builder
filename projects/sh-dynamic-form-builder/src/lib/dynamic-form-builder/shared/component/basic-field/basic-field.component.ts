import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IMainFieldItem } from '../../model/main-field-item.interface';

@Component({
  selector: 'lib-basic-field',
  templateUrl: './basic-field.component.html',
  styleUrls: ['./basic-field.component.css']
})
export class BasicFieldComponent implements OnInit {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
