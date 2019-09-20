//library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//router
import { PagesRoutingModule } from './pages-routing.module';
//component
import { GithubComponent } from './github/github.component';
import { RepoComponent } from './repo/repo.component';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { FooterComponent } from '../component/footer/footer.component';
import { TakeImgComponent } from './modal/take-img/take-img.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    // TakeImgComponent,
    NgbModule.forRoot(),
    SidebarModule.forRoot()
  ],
  declarations: [GithubComponent, RepoComponent,PagesComponent,FooterComponent,NavbarComponent,TakeImgComponent],
  entryComponents: [TakeImgComponent]
})
export class PagesModule { }
