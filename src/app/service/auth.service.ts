import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { UserService } from './user.service';

export interface AuthDto {
  accessToken: string;
  role: string
 
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private apiUrl = 'http://localhost:4231';
  private jwtHelper = new JwtHelperService()
 

  constructor(private router: Router,private http: HttpClient, private userService: UserService) { }

  // signIn(userData:any): Observable<any> {
  //   // const loginData = {
  //   //   email: email,
  //   //   password: password
  //   // };
  //   return this.http.post('http://localhost:4231/auth/signin',userData );
  // }

  signIn(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:4231/auth/signin', data).pipe(
      tap(({accessToken, role}:any)=>{
        this.setUserdataByToken({accessToken,role});
        this.router.navigate(['/movie'])
      }),
      catchError((error) =>{
        return throwError('sign in failed', error)
      })
    )
  }

  signUp(userData: any
  ): Observable<any> {
    

    return this.http.post('http://localhost:4231/auth/signup', userData);
  }

  update(userData: any): Observable<any>{
    const Token = localStorage.getItem('accessToken');
    console.log('User data:', userData, 'accessToken:', Token)
    return this.http.patch(`${this.apiUrl}/auth/userupdate`, userData).pipe(
      tap(({accessToken, role}:any)=>{
        this.setUserdataByToken({accessToken,role});
        this.router.navigate(['/movie'])
      })
    )

  }

  private setUserdataByToken = ({accessToken, role}: AuthDto) =>{
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('role',role)
    const { tmdb_key} =
     this.jwtHelper.decodeToken(accessToken);
     this.userService.tmdb_Key = tmdb_key
  }

 getUserData(accessToken:string):any{
  
  const userData =
   this.jwtHelper.decodeToken(accessToken);
   return userData

 }

  }



