import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GithubService {

  private username = 'urvashi2707';
  private repoName:string;
  public repoContent:any;
  private millisecond:any;

  constructor(private _http: HttpClient) { 

  }



  public httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': ''
     })
};

  getUser(user){
    var d = new Date();
    var n = d.getTime();
    this.millisecond = Number(n)
    const opt1 = {
      headers: new HttpHeaders({
        'X-RateLimit-Limit': '5000',
        // 'X-RateLimit-Remaining':'4999',
        'X-RateLimit-Reset': this.millisecond })
    }
    this.username = user;
    return this._http.get('https://api.github.com/users/'+user);
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
