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

  public usrObj:any;
  constructor(private _githubService:GithubService,
    private _dataService:DataService,
    private _router: Router,) { 
      this.usrObj = {};
    }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    var obj = {
      "name" : this.usrObj.username,
      "pass" : this.usrObj.password
    }
    this._githubService.getUser(f.value.login,f.value.password).subscribe(res => {
      console.log("response is coming..................................",res)
      if(res.hasOwnProperty('id')){
        console.log("coming here");
        sessionStorage.setItem('id',res['id']);
        console.log(res,"user auth click");
        this._dataService.setuserInfo(res);
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

  //TODO
  // onSubmit(f: NgForm){
  //   var tt:any = {
  //     "login": "Urvashi2707",
  //     "id": 29358439,
  //     "node_id": "MDQ6VXNlcjI5MzU4NDM5",
  //     "avatar_url": "https://avatars3.githubusercontent.com/u/29358439?v=4",
  //     "gravatar_id": "",
  //     "url": "https://api.github.com/users/Urvashi2707",
  //     "html_url": "https://github.com/Urvashi2707",
  //     "followers_url": "https://api.github.com/users/Urvashi2707/followers",
  //     "following_url": "https://api.github.com/users/Urvashi2707/following{/other_user}",
  //     "gists_url": "https://api.github.com/users/Urvashi2707/gists{/gist_id}",
  //     "starred_url": "https://api.github.com/users/Urvashi2707/starred{/owner}{/repo}",
  //     "subscriptions_url": "https://api.github.com/users/Urvashi2707/subscriptions",
  //     "organizations_url": "https://api.github.com/users/Urvashi2707/orgs",
  //     "repos_url": "https://api.github.com/users/Urvashi2707/repos",
  //     "events_url": "https://api.github.com/users/Urvashi2707/events{/privacy}",
  //     "received_events_url": "https://api.github.com/users/Urvashi2707/received_events",
  //     "type": "User",
  //     "site_admin": false,
  //     "name": null,
  //     "company": null,
  //     "blog": "",
  //     "location": null,
  //     "email": null,
  //     "hireable": null,
  //     "bio": null,
  //     "public_repos": 12,
  //     "public_gists": 0,
  //     "followers": 1,
  //     "following": 1,
  //     "created_at": "2017-06-11T19:06:38Z",
  //     "updated_at": "2019-09-16T18:11:41Z",
  //     "private_gists": 0,
  //     "total_private_repos": 0,
  //     "owned_private_repos": 0,
  //     "disk_usage": 8628,
  //     "collaborators": 0,
  //     "two_factor_authentication": false,
  //     "plan": {
  //       "name": "free",
  //       "space": 976562499,
  //       "collaborators": 0,
  //       "private_repos": 10000
  //     }
  //   }
    
  //   sessionStorage.setItem('id',tt.id);
  //   this._dataService.setuserInfo(tt)
  //   console.log(tt,"user auth click");
  //   this._router.navigate(['/pages/githubProfile']);
  // }

}
