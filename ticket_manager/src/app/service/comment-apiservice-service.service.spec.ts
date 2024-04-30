import { TestBed } from '@angular/core/testing';

import { CommentAPIServiceServiceService } from './comment-apiservice-service.service';

describe('CommentAPIServiceServiceService', () => {
  let service: CommentAPIServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentAPIServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
