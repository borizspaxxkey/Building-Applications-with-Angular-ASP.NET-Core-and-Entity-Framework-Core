import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient) {

  }

  intercept(req, next) {
    var token = localStorage.getItem('token');

    var authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
    console.log(authRequest);
    return next.handle(authRequest);
  }

}
