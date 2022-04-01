import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { IFormArrayFieldItem } from './shared/model/form-array-field-item.interface';
import { IMainFieldItem } from './shared/model/main-field-item.interface';
import { ErrorService } from './shared/service/error.service';
import { FormService } from './shared/service/form.service';

describe('DynamicFormBuilderComponent', () => {
  let component: DynamicFormBuilderComponent;
  let fixture: ComponentFixture<DynamicFormBuilderComponent>;

  beforeEach(() => {
    const changeDetectorRefStub = () => ({ detectChanges: () => ({}) });
    const formBuilderStub = () => ({ array: (array: any) => ({}) });
    const formServiceStub = () => ({
      setField: (x: IMainFieldItem, form: FormGroup) => ({}),
      setArrayItem: (formArrayField: IFormArrayFieldItem[]) => ({})
    });
    const errorServiceStub = () => ({ formArrayField: (name: string) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DynamicFormBuilderComponent],
      providers: [
        { provide: ChangeDetectorRef, useFactory: changeDetectorRefStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: FormService, useFactory: formServiceStub },
        { provide: ErrorService, useFactory: errorServiceStub }
      ]
    });
    fixture = TestBed.createComponent(DynamicFormBuilderComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`componentName has default value`, () => {
    expect(component.componentName).toEqual(`formBuilder`);
  });
});
