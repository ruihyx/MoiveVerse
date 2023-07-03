import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
  constructor(private userService:UserService , private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    if (this.userService.isUserLoggedIn) {
      return this.router.parseUrl('/movie'); // Redirect to the movie page
    }
    return true; // Allow access to the home page
  }
  // canActivate(): boolean {
  //   if (this.userService.isUserLoggedIn) {
  //     this.router.navigate(['/movie']);
  //     return false;
  //   }
  //   return true;
  // }
}
