import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')!).token : null;
    // Verifica se il token esiste e non è scaduto
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    // Redirect alla home
    window.location.href = '/';

  }
}
