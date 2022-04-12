import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormGroupItemComponent } from './nested-form-group-item.component';

describe('NestedFormGroupItemComponent', () => {
  let component: NestedFormGroupItemComponent;
  let fixture: ComponentFixture<NestedFormGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFormGroupItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
