import { IssueApiService } from './home/issue-page/issue-api.service';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IssuePageComponent } from './home/issue-page/issue-page.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { IssueComponent } from './home/issue/issue.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { CodeComponent } from './home/code/code.component';
import { PaginationComponent } from './home/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssuePageComponent,
    NavBarComponent,
    IssueComponent,
    TimeAgoPipe,
    CodeComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [IssueApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
