import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IFormGroupFieldItem } from '../../../model/form-group-field-item.interface';
import { FormService } from '../../../service/form.service';

@Component({
  selector: 'lib-nested-form-group-item',
  templateUrl: './nested-form-group-item.component.html',
  styleUrls: ['./nested-form-group-item.component.css']
})
export class NestedFormGroupItemComponent {
  @Input() field!: IFormGroupFieldItem;
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
