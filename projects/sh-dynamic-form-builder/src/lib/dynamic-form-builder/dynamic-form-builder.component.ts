import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ButtonType } from './shared/enum/button-type.enum';
import { IButton } from './shared/model/button.interface';
import { IConfig } from './shared/model/group-item.interface';
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
  @Input() config!: IConfig;
  @Input() formValue: any = {};
  @Input() isSubmit: boolean = false;
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
    this.setBtnAlighn();
    this.setupForm();
  }
  private setupForm(): void {
    this.formGroup = new FormGroup({});
    this.config?.fields.forEach((x: IMainFieldItem, index: number) => {
      if (x.type == 'form-array') {
        this.setArray(x);
      } else {
        this.formService.setField(x, this.formGroup);
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
      const form: FormGroup = this.formService.setArrayItem(formArrayField)
      formArray.push(form);
    } else {
      this.errorService.formArrayField(field.name);
    }
  }
  public click(btn: IButton): void {
    switch (btn.type) {
      case 'submit':
        this.submitClick();
        break;
      case 'reset':
        this.resetClick();
        break;
      case 'cancel':
        this.cancelClick();
        break;
      default:
        break;
    }
  }
  public submitClick(): void {
    if(!this.formGroup.valid){
      this.formGroup.markAllAsTouched();
      return;
    }
    this.submit.emit(this.formGroup);
  }
  public resetClick(): void {
    this.formGroup.reset();
    this.formGroup.patchValue(this.formValue);
  }
  public cancelClick(): void {
    this.cancel.emit(true);
  }
  ngDistroy() {
  }
  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
