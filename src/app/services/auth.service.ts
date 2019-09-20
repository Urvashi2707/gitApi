import {Injectable} from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    console.log("sdjfhkjashfjkh",sessionStorage.getItem('id'))
    if(sessionStorage.getItem('id')) {
      console.log("success ful login")
        return true;
    }
    //not logged in so redirect to login page with the return url
    this.router.navigate(['/auth']);
    return false;
    }
}