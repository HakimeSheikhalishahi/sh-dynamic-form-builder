import { Component, Input, OnInit } from '@angular/core';
import { IDivider } from '../../model/divider.interface';

@Component({
  selector: 'lib-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() counter: number = 0;
  // @Input() field!: IMainFieldItem;
  @Input() divider!: IDivider;
  size: string = '';
  constructor() { }

  ngOnInit(): void {
    this.size = (this.divider?.height || 3) + 'px';
  }
}
