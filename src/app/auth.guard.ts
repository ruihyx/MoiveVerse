import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService:UserService , private router: Router){}
  
  canActivate(): boolean {
    if (!this.userService.isUserLoggedIn) {
      this.router.navigate(['/signin']);
      return false;
    }
    return true;
  }
}
