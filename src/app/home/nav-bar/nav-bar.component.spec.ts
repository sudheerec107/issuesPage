import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavBarComponent } from './nav-bar.component';
import { Router } from '@angular/router';
import { BrowserModule, By } from '@angular/platform-browser';
import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  template: ''
})
class DummyComponent {
}

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent, DummyComponent],
      imports: [CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'issues', component: DummyComponent },
          { path: 'code', component: DummyComponent }
        ])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to url /code on click of Code element',
    async(inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(NavBarComponent);
      fixture.detectChanges();
      fixture.debugElement.query(By.css('span')).nativeElement.click();
      fixture.whenStable().then(() => {
        console.log(location.path());
      });
    })));

  it('should navigate to url /issues on click of Issues element',
    async(inject([Router, Location], (router: Router, location: Location) => {
      fixture.debugElement.queryAll(By.css('span'))[1].nativeElement.click();
      fixture.whenStable().then(() => {
        console.log(location.path());
        expect(location.path()).toEqual('/issues');
      });
    })));
});
