import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string | null = null;
  
  password: string | null = null;
  email: string | null = null;
  role: string | null = null;
  tmdb_Key: string | null = null;
  
  constructor(private router: Router) { }

  get isUserLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }
  
  get currentUser(): string | null {
    return localStorage.getItem('username');
  }
  
  logout(): void {
    localStorage.removeItem('accessToken');
    // localStorage.removeItem('username');
    // localStorage.removeItem('tmdb_Key');
    this.router.navigate(['/signin']);
  }


}
