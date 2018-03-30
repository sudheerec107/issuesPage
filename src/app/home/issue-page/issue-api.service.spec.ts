import { TestBed, inject } from '@angular/core/testing';

import { IssueApiService } from './issue-api.service';

describe('IssueApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueApiService]
    });
  });

  it('should be created', inject([IssueApiService], (service: IssueApiService) => {
    expect(service).toBeTruthy();
  }));
});
