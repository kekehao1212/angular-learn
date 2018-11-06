import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponse {
  accessToken: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private http: HttpClient,
  private router: Router
) { }
  login({username, password}) {
    return this.http.post<AuthResponse>(`${environment.apiEndpoint}/auth/login`, { username, password }).pipe(
      map(response => response.accessToken),
      tap(token => this.storeToken(token)),
      map(() => this.isAuthenticated()),
      catchError(response => throwError(response.error.message))
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  private storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}
