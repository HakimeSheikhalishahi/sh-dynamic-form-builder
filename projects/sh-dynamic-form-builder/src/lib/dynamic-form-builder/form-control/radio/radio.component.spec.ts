import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RadioComponent } from './radio.component';
import { ErrorService } from '../../shared/service/error.service';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(() => {
    const errorServiceStub = () => ({ radioOption: (name:string) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RadioComponent],
      providers: [
        { provide: ErrorService, useFactory: errorServiceStub }
      ]
    });
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const errorServiceStub: ErrorService = fixture.debugElement.injector.get(
        ErrorService
      );
      spyOn(errorServiceStub, 'radioOption').and.callThrough();
      component.ngOnInit();
      expect(errorServiceStub.radioOption).toHaveBeenCalled();
    });
  });
});
