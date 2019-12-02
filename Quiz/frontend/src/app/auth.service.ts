import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {

  }

  get isAuthenticated() {
    // Returns true if token exists
    return !!localStorage.getItem('token');
  }

  register(credentials) {
    return this.http.post<any>('https://localhost:44334/api/account', credentials).subscribe(response => {
      this.authenticate(response)
    });
  }

  login(credentials) {
    return this.http.post<any>('https://localhost:44334/api/account/login', credentials).subscribe(response => {
      this.authenticate(response)
    });
  }

  authenticate(response) {
    localStorage.setItem('token', response);

    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
