import { By } from '@angular/platform-browser'; ``
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initial page count should be one', () => {
    component.totalCount = 100;
    component.perPageCount = 20;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.currentPage).toBe(1);
  });

  it('should expect 5 pages for 100 items with 20 items per page', () => {
    component.totalCount = 100;
    component.perPageCount = 20;
    component.ngOnChanges();
    fixture.detectChanges();
    let pageCount = fixture.debugElement.queryAll(By.css('.page')).length;
    expect(pageCount).toBe(7);
  });

  it('On click of next button should increase page count', () => {
    component.totalCount = 100;
    component.perPageCount = 20;
    component.ngOnChanges();
    fixture.detectChanges();
    let nextButton = fixture.debugElement.nativeElement.querySelectorAll('.page')
    nextButton = nextButton[nextButton.length -1];
    nextButton.click();
    fixture.detectChanges();
    console.log(nextButton);
    expect(component.currentPage).toBe(2);
  });
  
  it('On click of next, prev prevOrNextClick to be called', () => {
    component.totalCount = 100;
    component.perPageCount = 20;
    component.ngOnChanges();
    fixture.detectChanges();
    spyOn(component, 'prevOrNextClick');
    let prevButton = fixture.debugElement.nativeElement.querySelector('.page')
    prevButton.click();
    expect(component.prevOrNextClick).toHaveBeenCalledWith(true);
    let nextButton = fixture.debugElement.nativeElement.querySelectorAll('.page')
    nextButton = nextButton[nextButton.length - 1];
    nextButton.click();
    expect(component.prevOrNextClick).toHaveBeenCalledWith(false);
  });

});
