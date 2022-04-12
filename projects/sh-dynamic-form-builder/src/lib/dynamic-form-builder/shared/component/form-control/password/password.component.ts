import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IMainFieldItem } from '../../../model/main-field-item.interface';
import { FormService } from '../../../service/form.service';
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
  get size(): string {
    return this.formService.elementSize();
  }
  constructor(private formService: FormService) { }
  public toggle(): void {
    this.show = !this.show;
  }
}
