import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { IssueApiService } from './issue-api.service';

describe('IssueApiService', () => {
  let service:IssueApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueApiService],
      imports: [HttpModule]
    });
    service = TestBed.get(IssueApiService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getIssue should call API', () => {
    service.getIssue(12354).then(data => {
    expect(data).toBeTruthy()
    });
  });
    it('getIssues should call API', () => {
    service.getIssues(true, 1).then(data => {
    expect(data).toBeTruthy()
    });
  });
});
