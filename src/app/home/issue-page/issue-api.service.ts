import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class IssueApiService {

  constructor(private http: Http) { }

  getIssues(isOpen: boolean, pageNumber: number = 1, sortDirection: 'desc' | 'asc' = 'desc', sortType: 'created' | 'updated' | 'comments' = 'created'): Promise<any> {
    let queryParam = `?page=${pageNumber}&state=${isOpen ? 'open' : 'closed'}&direction=${sortDirection}&sort=${sortType}`;
    return this.http.get('https://api.github.com/repos/angular/angular.js/issues' + queryParam)
      .map(data => data.json()).toPromise();
  }

  getOpenIssueCount(): Promise<number> {
    return this.http.get('https://api.github.com/repos/angular/angular.js')
      .map(data => {
        data = data.json();
        return (data as any).open_issues_count as number;
      }).toPromise();
  }

  getIssue(id: number) {
    return this.http.get('https://api.github.com/repos/angular/angular.js/issues/' + id)
      .map(data => data.json()).toPromise();
  }
}
