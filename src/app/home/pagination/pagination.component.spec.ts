import { By } from '@angular/platform-browser'; ``
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

fdescribe('PaginationComponent', () => {
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
  // const compiled = fixture.debugElement.nativeElement;
  // expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  it('Click of prev button should increase page count', () => {
    component.totalCount = 100;
    component.perPageCount = 20;
    component.ngOnChanges();
    component.prevOrNextClick(false);
    fixture.detectChanges();
    let nextButton = fixture.debugElement.nativeElement.querySelector('.page')
    nextButton.click();
    fixture.detectChanges();
    console.log(nextButton);
    expect(component.currentPage).toBe(1);
  });
});
