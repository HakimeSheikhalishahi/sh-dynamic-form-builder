import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { IMainFieldItem } from '../../shared/model/main-field-item.interface';
import { ErrorService } from '../../shared/service/error.service';
import { FormService } from '../../shared/service/form.service';
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  @Input() field!: IMainFieldItem;
  @Input() form!: FormGroup;
  formGroup: FormGroup = new FormGroup({});
  formArrayName: string = '';
  addButtonBgColor: string = 'btn-secondary';
  get formArray(): FormArray {
    return this.form.get(this.field?.name) as FormArray;
  }
  constructor(
    private formService: FormService,
    private errorService: ErrorService,
  ) { }
  ngOnInit(): void {
    this.setAddButtonBgColor();
    this.formArrayName = this.field?.name;
  }
  private setAddButtonBgColor(): void {
    const bgColor = this.field.formArray?.addButtonBGColor;
    if (bgColor) {
      this.addButtonBgColor = this.formService.btnColor[bgColor];
    }
  }
  public removeform(i: number) {
    this.formArray.removeAt(i);
  }
  public addform() {
    const formArrayField = this.field.formArray?.field;
    if (formArrayField?.length) {
      const form: FormGroup = this.formService.setArrayItem(formArrayField)
      this.formArray.push(form);
    } else {
      this.errorService.formArrayField(this.field.name);
    }
  }
}