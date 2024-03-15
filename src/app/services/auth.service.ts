import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

  getUserId(): string | null {
    // Retrieve the user ID from the JWT token or your authentication state
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.userId; // Assuming 'userId' is the key in the JWT payload containing the user ID
    }
    return null; // Return null if user ID cannot be retrieved
  }
}
