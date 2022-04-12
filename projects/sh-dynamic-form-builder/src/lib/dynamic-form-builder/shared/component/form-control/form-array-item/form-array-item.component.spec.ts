import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormArrayItemComponent } from './form-array-item.component';

describe('FormArrayItemComponent', () => {
  let component: FormArrayItemComponent;
  let fixture: ComponentFixture<FormArrayItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormArrayItemComponent]
    });
    fixture = TestBed.createComponent(FormArrayItemComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
