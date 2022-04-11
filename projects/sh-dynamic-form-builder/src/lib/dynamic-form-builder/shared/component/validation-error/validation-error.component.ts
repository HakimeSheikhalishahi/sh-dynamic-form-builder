import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IMainFieldItem } from '../../model/main-field-item.interface';
import { FormService } from '../../service/form.service';

@Component({
  selector: 'lib-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent {
  @Input() field!: IMainFieldItem;
  @Input() control!: FormControl;
  get simple(): boolean {
    return this.formService.hasSimpleValidationError();
  }
  constructor(private formService: FormService) { }

}
