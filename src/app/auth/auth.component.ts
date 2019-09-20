//library
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//module
//services
import { GithubService } from '../services/github.service';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public usrObj:string;
  constructor(private _githubService:GithubService,
    private _dataService:DataService,
    private _router: Router,) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    this._githubService.getUser(f.value.login).subscribe(res => {
      if(res.hasOwnProperty('id')){
        sessionStorage.setItem('id',res['id']);
        this._dataService.setuserInfo(res)
      }
    },(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Http error 1")
      }
      else {
        console.log("Http error 2")
      }
    });;
    this._router.navigate(['/pages/githubProfile']);
  }
}
