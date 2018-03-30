import { Route, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuePageComponent } from './home/issue-page/issue-page.component';
import { HomeComponent } from './home/home.component';
import { IssueComponent } from './home/issue/issue.component';
import { CodeComponent } from './home/code/code.component';

const route: Array<Route> = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'issues', component: IssuePageComponent },
      { path: 'code', component: CodeComponent },
      { path: 'issues/:id', component: IssueComponent },
      { path: '', redirectTo: 'issues', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(route, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
