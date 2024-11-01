import { TestBed } from '@angular/core/testing';

import { VehiclePermitsService } from './vehicle-permits.service';

describe('VehiclePermitsService', () => {
  let service: VehiclePermitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclePermitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
