import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMainFieldItem } from '../../../model/main-field-item.interface';
import { FormService } from '../../../service/form.service';

@Component({
  selector: 'lib-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  @Input() control!: FormControl;
  get nestedFormGroup(): FormGroup {
    return this.form?.controls[this.field?.name] as FormGroup;
  }
  get size(): string {
    return this.formService.elementSize();
  }
  constructor(private formService: FormService) {

  }
}
