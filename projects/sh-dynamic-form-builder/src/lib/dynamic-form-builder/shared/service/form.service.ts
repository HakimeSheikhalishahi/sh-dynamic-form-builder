import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormArrayFieldItem } from '../model/form-array-field-item.interface';
import { IMainFieldItem } from '../model/main-field-item.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  btnColor = {
    gray: 'btn-secondary',
    green: 'btn-success',
    blue: 'btn-primary',
    orange: 'btn-warning',
    light: 'btn-light',
    dark: 'btn-dark'
  }
  constructor() { }
  setField(field: IMainFieldItem, formGroup: FormGroup) {
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
  setArrayItem(field: IFormArrayFieldItem[]): FormGroup {
    const formGroup: FormGroup = new FormGroup({});
    field?.forEach((val: IFormArrayFieldItem) => {
      this.setField(val, formGroup);
    });
    return formGroup;
  }
}
