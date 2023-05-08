import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  email: string | null = null;
  password: string | null = null;
  username: string | null = null;
  tmdbApiKey: string | null = null;
  plan: string | null = null;

  constructor() { }

  setUserInfo(email: string, password: string, username: string, tmdbApiKey: string, plan: string) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.tmdbApiKey = tmdbApiKey;
    this.plan = plan;
  }
}
