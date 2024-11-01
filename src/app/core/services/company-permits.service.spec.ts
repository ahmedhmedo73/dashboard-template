import { TestBed } from '@angular/core/testing';

import { CompanyPermitsService } from './company-permits.service';

describe('CompanyPermitsService', () => {
  let service: CompanyPermitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyPermitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
