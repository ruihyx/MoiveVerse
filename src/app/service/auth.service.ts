import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4231';

  constructor(private http: HttpClient) { }

  // signIn(userData:any): Observable<any> {
  //   // const loginData = {
  //   //   email: email,
  //   //   password: password
  //   // };
  //   return this.http.post('http://localhost:4231/auth/signin',userData );
  // }

  signIn(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:4231/auth/signin', data);
  }

  signUp(userData: any
  ): Observable<any> {

    return this.http.post('http://localhost:4231/auth/signup', userData);
  }
}
