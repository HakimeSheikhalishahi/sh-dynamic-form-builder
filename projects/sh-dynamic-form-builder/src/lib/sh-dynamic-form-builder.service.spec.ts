import { TestBed } from '@angular/core/testing';

import { ShDynamicFormBuilderService } from './sh-dynamic-form-builder.service';

describe('ShDynamicFormBuilderService', () => {
  let service: ShDynamicFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShDynamicFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
