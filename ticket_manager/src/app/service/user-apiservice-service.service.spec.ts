import { TestBed } from '@angular/core/testing';

import { UserAPIServiceServiceService } from './user-apiservice-service.service';

describe('UserAPIServiceServiceService', () => {
  let service: UserAPIServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAPIServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
