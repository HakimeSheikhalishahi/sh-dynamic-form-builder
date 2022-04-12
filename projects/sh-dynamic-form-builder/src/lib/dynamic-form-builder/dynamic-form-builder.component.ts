import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ButtonType } from './shared/enum/button-type.enum';
import { FullWidth } from './shared/enum/full-width.enum';
import { IButton } from './shared/model/button.interface';
import { IFormConfig } from './shared/model/form-config.interface';
import { IMainFieldItem } from './shared/model/main-field-item.interface';
import { ErrorService } from './shared/service/error.service';
import { FormService } from './shared/service/form.service';
@Component({
  selector: 'sh-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss']
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() submit: EventEmitter<FormGroup> = new EventEmitter();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();
  @Input() config!: IFormConfig;
  @Input() formValue: any = {};
  @Input() isSubmit: boolean = false;
  fullWidthBtn: string = 'none';
  get fullWidth(){
    return FullWidth;
  }
  get btnColor() {
    return this.formService.btnColor;
  }
  get buttonType() {
    return ButtonType;
  }
  componentName = 'formBuilder'
  public formGroup!: FormGroup;
  url: string | ArrayBuffer | null = null;
  buttonsAlign: string = '';
  size: string = '';
  constructor(private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private formService: FormService,
    private errorService: ErrorService
  ) {
  }
  ngOnInit() {
    this.init();
  }
  private init(): void {
    this.formService.formControlConfig = this.config.formControlConfig || {};
    this.size = this.formService.elementSize() ? 'btn-' + this.formService.elementSize() : '';
    if (this.config?.buttonSetting?.fullWidthButtons) {
      this.fullWidthBtn = (this.config.buttonSetting.fullWidthButtons) || 'none';
    }
    this.setBtnAlighn();
    this.setupForm();
  }
  private setupForm(): void {
    this.formGroup = new FormGroup({});
    this.config?.fields.forEach((x: IMainFieldItem, index: number) => {
      switch (x.type) {
        case 'form-array':
          this.setArray(x);
          break;
        case 'form-group':
          this.setNestedFormGroup(x);
          break;
        default:
          this.formService.setField(x, this.formGroup);
          break;
      }
    })
    this.formGroup.patchValue(this.formValue);
  }
  private setBtnAlighn(): void {
    switch (this.config?.buttonSetting?.buttonsAlign) {
      case 'center':
        this.buttonsAlign = 'justify-content-center';
        break;
      case 'right':
        this.buttonsAlign = 'justify-content-end';
        break;
      default:
        break;
    }
  }
  private setNestedFormGroup(field: IMainFieldItem) {
    if (!field.formGroup?.fields) {
      this.errorService.formGroupField(field.name);
      return
    }
    const formGroup = this.formService.setFormGroup(field.formGroup?.fields);
    this.formGroup.addControl(field.name, formGroup);
  }
  setArray(field: IMainFieldItem) {
    this.formGroup.addControl(field.name, this.formBuilder.array([]));
    const fieldArray: any[] = this.formValue[field.name.toString()];
    if (fieldArray?.length) {
      fieldArray.forEach(val => {
        this.addform(field);
      })
    }
  }
  public addform(field: IMainFieldItem) {
    const formArray = this.formGroup?.get(field?.name) as FormArray;
    const formArrayField = field.formArray?.fields;
    if (formArrayField?.length) {
      const form: FormGroup = this.formService.setFormGroup(formArrayField)
      formArray.push(form);
    } else {
      this.errorService.formArrayField(field.name);
    }
  }
  public action(btn: IButton): void {
    switch (btn.type) {
      case 'submit':
        this.submitAction();
        break;
      case 'reset':
        this.resetAction();
        break;
      case 'cancel':
        this.cancelAction();
        break;
      default:
        break;
    }
  }
  public submitAction(): void {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.submit.emit(this.formGroup);
  }
  public resetAction(): void {
    this.formGroup.reset();
    this.formGroup.patchValue(this.formValue);
  }
  public cancelAction(): void {
    this.cancel.emit(true);
  }
  ngDistroy() {
  }
  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
