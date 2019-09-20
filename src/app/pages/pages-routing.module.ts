//library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { GithubComponent } from './github/github.component';
import { RepoComponent } from './repo/repo.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path:'',
  component: PagesComponent,
  children: [
  {
    path: 'githubProfile',
    component: GithubComponent,
  },
  {
    path: 'repo',
    component: RepoComponent,
  },
  {
    path: '',
    redirectTo: 'githubProfile',
    pathMatch: 'full',
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
