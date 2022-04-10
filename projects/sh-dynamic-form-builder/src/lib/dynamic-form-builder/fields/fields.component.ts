import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IMainFieldItem } from '../shared/model/main-field-item.interface';
import { FormService } from '../shared/service/form.service';
@Component({
  selector: 'lib-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  get control(): FormControl {
    return this.form?.controls[this.field?.name] as FormControl;
  }
  get required() { return this.field?.validators?.some(x => x.rule == 'required') };
  get size(): string {
    return this.formService.elementSize();
  }
  constructor(private formService: FormService) { }
}
