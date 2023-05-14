import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string | null = null;
  
  password: string | null = null;
  email: string | null = null;
  role: string | null = null;
  tmdb_Key: string | null = null;
  
  constructor() { }

claerUserData(){
 
}
  // setUserInfo(email: string, password: string, username: string, tmdbApiKey: string, plan: string) {
  //   this.email = email;
  //   this.password = password;
  //   this.username = username;
  //   this.tmdbApiKey = tmdbApiKey;
  //   this.plan = plan;
  // }
}
