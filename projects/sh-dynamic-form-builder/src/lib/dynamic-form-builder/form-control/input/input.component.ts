import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFormControlConfig } from '../../shared/model/form-control-config.interface';
import { IMainFieldItem } from '../../shared/model/main-field-item.interface';
import { FormService } from '../../shared/service/form.service';
@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  get size(): string {
    return this.formService.elementSize();
  }
  constructor(private formService: FormService) { }
}
