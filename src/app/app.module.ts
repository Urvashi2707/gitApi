//library
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//component
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { TakeImgComponent } from './pages/modal/take-img/take-img.component';
import { AuthComponent } from './auth/auth.component';
//services
import { GithubService } from './services/github.service';
import { DataService } from './services/dataService';
//router
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [GithubService,DataService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
