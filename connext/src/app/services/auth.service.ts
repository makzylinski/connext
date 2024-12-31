import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  signUp = (user: User) =>
    this.http.post<User>(`${this.baseUrl}/register`, user);

  logIn = (userData: any) =>
    this.http.post<any>(`${this.baseUrl}/register`, userData);

  isLoggedIn = () => !!localStorage.getItem('token');
}
