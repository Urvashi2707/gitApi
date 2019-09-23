import { Injectable } from '@angular/core';
import { Observable,Subject,BehaviorSubject } from 'rxjs/Rx';
import { Router,NavigationEnd } from '@angular/router';


@Injectable()
export class DataService {

  private contentFolder: Subject<any> = new BehaviorSubject<any>(null);
  public _contentFolder: Observable<any> = this.contentFolder.asObservable();

  private userInfo: Subject<any> = new BehaviorSubject<any>(null);
  public _userInfo: Observable<any> = this.userInfo.asObservable();

  private loginInfo: Subject<any> = new BehaviorSubject<any>(null);
  public _loginInfo: Observable<any> = this.loginInfo.asObservable();

  constructor(private router: Router) {}


  setFolder(contentFolder){
    this.contentFolder.next(contentFolder);
  }

  getSetFolder(){
    return this.contentFolder;
  }


  setuserInfo(userInfo){
    console.log(userInfo,'setuserInfo','ds');
    this.userInfo.next(userInfo);
  }

  getuserInfo(){
    console.log(this.userInfo,"getuserInfo");
    return this.userInfo;
  }

  setloginInfo(loginInfo){
    this.loginInfo.next(loginInfo);
  }

  getloginInfo(){
    return this.loginInfo;
  }

}
