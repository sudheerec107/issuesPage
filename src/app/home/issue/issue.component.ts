import { IssueApiService } from './../issue-page/issue-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  public issue: any;
  constructor(private route: ActivatedRoute, private apiService: IssueApiService) {
    if (!isNaN(this.route.snapshot.params['id'])) {
      this.apiService.getIssue(this.route.snapshot.params['id'])
        .then(data => {
          this.issue = data;
        });
    }
  }

  ngOnInit() {
  }

}
