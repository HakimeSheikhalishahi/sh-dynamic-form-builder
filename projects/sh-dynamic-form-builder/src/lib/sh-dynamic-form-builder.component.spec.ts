import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShDynamicFormBuilderComponent } from './sh-dynamic-form-builder.component';

describe('ShDynamicFormBuilderComponent', () => {
  let component: ShDynamicFormBuilderComponent;
  let fixture: ComponentFixture<ShDynamicFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShDynamicFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShDynamicFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
