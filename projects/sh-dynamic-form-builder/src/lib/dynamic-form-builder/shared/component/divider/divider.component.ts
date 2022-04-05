import { Component, Input, OnInit } from '@angular/core';
import { IDivider } from '../../model/divider.interface';
@Component({
  selector: 'lib-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() divider!: IDivider;
  height: number = 0;
  constructor() { }
  ngOnInit(): void {
    this.height = this.divider?.height || 1;
  }
}
