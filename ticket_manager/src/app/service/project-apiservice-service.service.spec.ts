import { TestBed } from '@angular/core/testing';

import { ProjectAPIServiceServiceService } from './project-apiservice-service.service';

describe('ProjectAPIServiceServiceService', () => {
  let service: ProjectAPIServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectAPIServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
