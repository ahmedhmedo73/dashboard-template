import { TestBed } from '@angular/core/testing';

import { PermitsAppointmentsService } from './permits-appointments.service';

describe('PermitsAppointmentsService', () => {
  let service: PermitsAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermitsAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
