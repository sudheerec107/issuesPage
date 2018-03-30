import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Injectable } from '@angular/core';
import { IssuePageComponent } from './issue-page.component';
import { PaginationComponent } from './../pagination/pagination.component';
import { IssueApiService } from './issue-api.service';
import { TimeAgoPipe } from 'time-ago-pipe';

@Component({
  template: ''
})
class DummyComponent {
}
@Injectable()
class IssueApiServiceStub {
 getIssues(isOpen: boolean, pageNumber: number = 1, sortDirection: 'desc' | 'asc' = 'desc', sortType: 'created' | 'updated' | 'comments' = 'created'): Promise<any> {
    
    return new Promise(resoleve => {
      resoleve([{state: 'open',
      labels: [
        {
          name: 'xyz',
          color: '000'
        }
      ],
      number: '123456',
      title: 'Issue title'
    }])
    })
  }

  getOpenIssueCount(): Promise<number> {
    return new Promise(resoleve => {
          resoleve(100);
        })
  }
}
describe('IssuePageComponent', () => {
  let component: IssuePageComponent;
  let fixture: ComponentFixture<IssuePageComponent>;
  let service: IssueApiServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssuePageComponent, DummyComponent, PaginationComponent, TimeAgoPipe],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'issue', component: DummyComponent },
        ])],
      providers: [{provide: IssueApiService, useClass: IssueApiServiceStub}]
    })
      .compileComponents();
      service = TestBed.get(IssueApiServiceStub);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on click of open method to be called',  () => {
    spyOn(component, 'getIssues');
    let open = fixture.nativeElement.querySelector('#open');
    open.click();
    expect(component.getIssues).toHaveBeenCalled();
  });

  it('on click of closed method to be called',  () => {
    spyOn(component, 'getIssues');
    let open = fixture.nativeElement.querySelector('#closed');
    open.click();
    expect(component.getIssues).toHaveBeenCalled();
  });

});
