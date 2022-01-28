import { TestBed } from '@angular/core/testing';

import { FormPersonService } from './form-person.service';

describe('FormPersonService', () => {
  let service: FormPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
