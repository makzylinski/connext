import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { UserCredentials } from '../models/user-credentials.type';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  signUp = (user: User) =>
    this.http.post<User>(`${this.baseUrl}/register`, user);

  logIn = (userData: UserCredentials) =>
    this.http.post<UserCredentials>(`${this.baseUrl}/login`, userData);

  isLoggedIn = () => !!localStorage.getItem('token');
}
