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
    this.password = pass;
   const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "Basic " + new Buffer(user+ ':' + pass).toString('base64')
       })
  };
    return this._http.get('https://api.github.com/user',httpOptions);
  }

  getRepo(){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username+ ':' + this.password).toString('base64')
       })
  };
  return this._http.get('https://api.github.com/user/repos',httpOptions);

  }

  // GET /repos/:owner/:repo/contents/:path
  getContent(repoObj){
    this.repoName = repoObj.name;
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username+ ':' + this.password).toString('base64')
       })
  };
    return this._http.get('https://api.github.com/repos/'+this.username +'/'+this.repoName+'/contents/',httpOptions)
  }

  getfolderContent(fileObj){
    var fileName = fileObj.name;
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username+ ':' + this.password).toString('base64')
       })
  };
    return this._http.get('https://api.github.com/repos/'+this.username +'/'+this.repoName+'/contents/'+fileName,httpOptions)
  }

}
