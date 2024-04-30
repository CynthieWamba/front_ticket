import { TestBed } from '@angular/core/testing';

import { TagsAPIServiceServiceService } from './tags-apiservice-service.service';

describe('TagsAPIServiceServiceService', () => {
  let service: TagsAPIServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsAPIServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
