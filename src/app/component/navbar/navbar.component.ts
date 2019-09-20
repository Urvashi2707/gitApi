import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private previousUrl: string;
  private currentUrl: string;

  constructor(private _router: Router) { 
    this.currentUrl = this._router.url;
    _router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  ngOnInit() {
  }

  backBtn(){
    this.getPreviousUrl();
    this.getCurrentUrl();
  }

  public getPreviousUrl() {
    console.log(this.previousUrl,"previousUrl");
    return this.previousUrl;
  } 
  
  public getCurrentUrl(){
    console.log(this.currentUrl,"currentUrl");
    return this.currentUrl;
  }

  logout(){
    sessionStorage.removeItem('id');
    this._router.navigate(['/auth']);
  }

}
