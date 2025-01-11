import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../environment';
import { setUserData } from '../store/user/user.actions';
import { selectUserId } from '../store/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = environment.baseUrl + '/api/users';

  constructor(
    private readonly store: Store,
    private readonly http: HttpClient
  ) {}

  getUsers = () => this.http.get(`${this.baseUrl}`);

  dispatchUser = (user: any) => this.store.dispatch(setUserData({ user }));

  getUserId = () => this.store.select(selectUserId);
}
