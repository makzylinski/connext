import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { setUserData } from '../store/user/user.actions';
import { selectUser, selectUserId } from '../store/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = environment.baseUrl + '/api/users';

  constructor(
    private readonly store: Store,
    private readonly http: HttpClient
  ) {}

  selectLoggedUser = (): Observable<User> => this.store.select(selectUser);

  getUsers = (): Observable<User[]> => this.http.get<User[]>(`${this.baseUrl}`);

  dispatchUser = (user: User) => this.store.dispatch(setUserData({ user }));

  getUserId = (): Observable<number> => this.store.select(selectUserId);

  getLoggedUserFromLocalStorage = (): User => {
    const user = localStorage.getItem('user');
    if (!user) {
      throw new Error('No logged user found in localStorage');
    }
    return JSON.parse(user);
  };
}
