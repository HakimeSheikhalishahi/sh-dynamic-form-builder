import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FormArrayComponent } from './form-array.component';
import { ErrorService } from '../../../service/error.service';

describe('FormArrayComponent', () => {
  let component: FormArrayComponent;
  let fixture: ComponentFixture<FormArrayComponent>;

  beforeEach(() => {
    const errorServiceStub = () => ({ radioOption: (name:string) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormArrayComponent],
      providers: [
        { provide: ErrorService, useFactory: errorServiceStub }
      ]
    });
    fixture = TestBed.createComponent(FormArrayComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
