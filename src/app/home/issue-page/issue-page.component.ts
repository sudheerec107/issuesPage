import { IssueApiService } from './issue-api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

interface Issue {
  title: string,
  number: number,
  user: {
    login: string
  },
  milestone: {
    title: string
  },
  labels: Array<{
    name: string,
    color: string
  }>
}

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.css']
})
export class IssuePageComponent implements OnInit {
  public issues: Array<any> = [];
  public pageNumber: number = 1;
  public isOpenIssue: boolean = true;
  public openIssueCount: number;
  public sortDirection: 'desc' | 'asc' = 'desc';
  public sortType: 'created' | 'updated' | 'comments' = 'created';
  public subscription: Subscription;
  constructor(private issueApiService: IssueApiService) { }

  ngOnInit() {
    this.issueApiService.getIssues(true, 1).then(data => {
      this.issues = data;
    });
    this.issueApiService.getOpenIssueCount().then(data => {
      this.openIssueCount = data;
    });
  }

  getIssues(isOpen: boolean) {
    if (this.isOpenIssue !== isOpen) {
      this.isOpenIssue = isOpen;
      this.issues = [];
      this.issueApiService.getIssues(this.isOpenIssue, this.pageNumber).then(data => {
        this.issues = data;
      });
    }
  }

  sortOnCreated(val: 'desc' | 'asc') {
    if (this.sortType !== 'created' || this.sortDirection !== val) {
      this.sortType = 'created';
      this.sortDirection = val;
      this.issues = [];
      this.issueApiService.getIssues(this.isOpenIssue, this.pageNumber, this.sortDirection, 'created')
        .then(data => {
          this.issues = data;
        });
    }
  }

  sortOnComments(val: 'desc' | 'asc') {
    if (this.sortType !== 'comments' || this.sortDirection !== val) {
      this.sortType = 'comments';
      this.sortDirection = val;
      this.issues = [];
      this.issueApiService.getIssues(this.isOpenIssue, this.pageNumber, this.sortDirection, this.sortType)
        .then(data => {
          this.issues = data;
        });
    }
  }

  ngOnDestroy() {
  }

  pageChanged(count) {
    this.pageNumber = count;
    this.issueApiService.getIssues(this.isOpenIssue, this.pageNumber, this.sortDirection, this.sortType)
      .then(data => {
        this.issues = data;
      });
  }
}
