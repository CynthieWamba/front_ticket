import { TestBed } from '@angular/core/testing';

import { TicketAPIServiceServiceService } from './ticket-apiservice-service.service';

describe('TicketAPIServiceServiceService', () => {
  let service: TicketAPIServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketAPIServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
