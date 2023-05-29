import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');
    if(token){
      const headers = request.headers.set('Authorization', `Bearer ${token}`)
      request = request.clone({headers})
      console.log('Request headers after interceptor:', request.headers);
    }
    return next.handle(request);
  }
}
