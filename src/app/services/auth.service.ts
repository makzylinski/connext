import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserCredentials } from '../models/user-credentials.type';
import { User } from '../models/user.model';
import { setToken } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly store: Store
  ) {}

  signUp = (user: User) =>
    this.http.post<User>(`${this.baseUrl}/register`, user);

  logIn = (userData: UserCredentials) =>
    this.http.post<{
      userDetails(userDetails: any): unknown;
      token: string;
    }>(`${this.baseUrl}/login`, userData);

  isLoggedIn = () => !!localStorage.getItem('token');

  dispatchToken = (token: string) => this.store.dispatch(setToken({ token }));
}
