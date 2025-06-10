import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import {
  setFirstLoginBio,
  setFirstLoginBirthDate,
  setFirstLoginPhotoUrl,
  setUserData,
} from '../store/user/user.actions';
import {
  selectFirstLoginBio,
  selectFirstLoginDateOfBirth,
  selectFirstLoginPhotoUrl,
  selectUser,
  selectUserId,
} from '../store/user/user.selectors';

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
  getUserId = (): Observable<number> => this.store.select(selectUserId);
  getFirstLoginPhotoUrl = (): Observable<string> =>
    this.store.select(selectFirstLoginPhotoUrl).pipe(
      take(1),
      map((photoUrl) => photoUrl || '')
    );
  getFirstLoginBio = (): Observable<string> =>
    this.store.select(selectFirstLoginBio).pipe(
      take(1),
      map((bio) => bio || '')
    );
  getFirstLoginDateOfBirth = (): Observable<Date> =>
    this.store.select(selectFirstLoginDateOfBirth).pipe(
      take(1),
      map((dateOfBirth) => dateOfBirth || new Date())
    );

  dispatchUser = (user: User) => this.store.dispatch(setUserData({ user }));
  dispatchFirstLoginPhotoUrl = (photoUrl: string) =>
    this.store.dispatch(setFirstLoginPhotoUrl({ photoUrl }));
  dispatchFirstLoginBio = (bio: string) =>
    this.store.dispatch(setFirstLoginBio({ bio }));
  dispatchFirstLoginDateOfBirth = (dateOfBirth: Date) =>
    this.store.dispatch(setFirstLoginBirthDate({ dateOfBirth }));

  getUsers = (): Observable<User[]> => this.http.get<User[]>(`${this.baseUrl}`);

  getLoggedUserFromLocalStorage = (): User => {
    const user = localStorage.getItem('user');
    if (!user) {
      throw new Error('No logged user found in localStorage');
    }
    return JSON.parse(user);
  };

  getCurrentUsersProfilePicture = (): Observable<string> =>
    this.selectLoggedUser().pipe(
      map((user) => user.profileImageUrl || 'assets/images/default-profile.png')
    );
}
