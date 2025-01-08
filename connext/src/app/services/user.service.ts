import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../environment';
import { setUserData } from '../store/user/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private readonly store: Store,
    private readonly http: HttpClient
  ) {}

  getUsers = () => this.http.get(`${this.baseUrl}/api/users`);

  dispatchUser = (user: any) => this.store.dispatch(setUserData({ user }));
}
