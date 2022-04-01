import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IMainFieldItem } from '../../shared/model/main-field-item.interface';

@Component({
  selector: 'lib-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  show: boolean = false;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  constructor() { }

  public toggle(): void {
    this.show = !this.show;
  }
}
