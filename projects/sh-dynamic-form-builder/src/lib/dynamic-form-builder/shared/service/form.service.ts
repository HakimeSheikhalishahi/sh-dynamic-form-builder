import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFieldItem } from '../model/field-item.interface';
import { IFormArrayFieldItem } from '../model/form-array-field-item.interface';
import { IFormControlConfig } from '../model/form-control-config.interface';
import { IFormGroupFieldItem } from '../model/form-group-field-item.interface';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  formControlConfig: IFormControlConfig = {};
  btnColor = {
    gray: 'btn-secondary',
    green: 'btn-success',
    blue: 'btn-primary',
    red: 'btn-danger',
    orange: 'btn-warning',
    light: 'btn-light',
    dark: 'btn-dark'
  }
  size = {
    small: 'sm',
    medium: '',
    large: 'lg'
  }
  constructor() { }
  setField(field: IFieldItem, formGroup: FormGroup) {
    const validatorArr: any[] = [];
    field.validators?.forEach(val => {
      switch (val.rule) {
        case 'min':
          validatorArr.push(
            Validators.min(+val.value)
          );
          break;
        case 'max':
          validatorArr.push(
            Validators.max(+val.value)
          );
          break;
        case 'pattern':
          validatorArr.push(
            Validators.pattern(val.value)
          );
          break;
        case 'email':
          validatorArr.push(
            Validators.email
          );
          break;
        case 'required':
          validatorArr.push(
            Validators.required
          );
          break;
        case 'minlength':
          validatorArr.push(
            Validators.minLength(+val.value)
          );
          break;
        case 'maxlength':
          validatorArr.push(
            Validators.maxLength(+val.value)
          );
          break;
        case 'requiredTrue':
          validatorArr.push(
            Validators.requiredTrue
          );
          break;
        default:
          break;
      }
    });
    const ctrl: FormControl = new FormControl(field.defaultValue,
      Validators.compose(validatorArr));
    if (field.disable) {
      ctrl.disable();
    }
    formGroup.addControl(field.name, ctrl);
    formGroup.get(field.name)?.updateValueAndValidity();
  }
  setFormGroup(field: IFormArrayFieldItem[] | IFormGroupFieldItem[]): FormGroup {
    const formGroup: FormGroup = new FormGroup({});
    field?.forEach((val: IFieldItem) => {
      this.setField(val, formGroup);
    });
    return formGroup;
  }
  public elementSize(): string {
    return this.size?.[this.formControlConfig?.elementSize || 'medium'];
  }
  public hasSimpleValidationError(): boolean {
    return this.formControlConfig?.simpleValidationError || false;
  }
}
