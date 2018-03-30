import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

export class PaginationComponent implements OnInit {
  @Input() totalCount: number = 0;
  @Input() perPageCount: number = 30;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  public numberOfPages: Array<any> = [];
  public disableNext: boolean = true;
  public disablePrev: boolean = true;
  public currentPage: number = 1;
  constructor() { }

  ngOnInit() {
    this.fillPaginationDetails(Math.ceil(this.totalCount / this.perPageCount));
  }


  ngOnChanges() {
    this.fillPaginationDetails(Math.ceil(this.totalCount / this.perPageCount));
  }

  fillPaginationDetails(count: number) {
    this.numberOfPages = Array(count);
    this.disablePrev = this.currentPage === 1;
    this.disableNext = this.currentPage >= this.numberOfPages.length;
  }

  changePage(count) {
    if (this.currentPage !== count) {
      this.currentPage = count;
      this.disablePrev = this.currentPage === 1;
      this.disableNext = this.currentPage >= this.numberOfPages.length;
    }
  }

  prevOrNextClick(prevClick: boolean) {
    if (prevClick && this.currentPage !== 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
      this.disablePrev = this.currentPage === 1;
      this.disableNext = this.currentPage === this.numberOfPages.length;
    } else if (!prevClick && !(this.currentPage >= this.numberOfPages.length)) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
      this.disablePrev = this.currentPage === 1;
      this.disableNext = this.currentPage === this.numberOfPages.length;
    }

  }
}