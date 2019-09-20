import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { DataService } from './dataService';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GithubService {

  private username :string;
  private password :string;
  private repoName:string;
  public repoContent:any;
  private millisecond:any;

  constructor(private _http: HttpClient,private _dataService:DataService) { 

  }


  getUser(user,pass){
    var d = new Date();
    var n = d.getTime();
    this.millisecond = Number(n)
    this.username = user;
   const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + new Buffer(user+ ':' + pass).toString('base64')
       })
  };
    return this._http.get('https://api.github.com/users/'+user,httpOptions);
  }

  getRepo(){
  return this._http.get('https://api.github.com/users/'+this.username +'/repos');

  }

  // GET /repos/:owner/:repo/contents/:path
  getContent(repoObj){
    var repoName = repoObj.name;
    this.repoName = repoObj.name;
    return this._http.get('https://api.github.com/repos/'+this.username +'/'+repoName+'/contents/')
  }

  getfolderContent(fileObj){
    var fileName = fileObj.name;
    return this._http.get('https://api.github.com/repos/'+this.username +'/'+this.repoName+'/contents/'+fileName)
  }

}
