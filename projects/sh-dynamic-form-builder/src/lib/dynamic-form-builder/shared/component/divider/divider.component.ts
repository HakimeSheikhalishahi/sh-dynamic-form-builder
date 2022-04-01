import { Component, Input, OnInit } from '@angular/core';
import { IMainFieldItem } from '../../model/main-field-item.interface';

@Component({
  selector: 'lib-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() field!: IMainFieldItem;
  constructor() { }

  ngOnInit(): void {
  }

}
