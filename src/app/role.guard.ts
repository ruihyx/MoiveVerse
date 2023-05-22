import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
 
  canActivate(): boolean{
    const role =  localStorage.getItem('role')
    if(role === 'USER'){
      this.router.navigate(['/signup3'])
      return false
    }else{
      return true
    }
  
  }

}
