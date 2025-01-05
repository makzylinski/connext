import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUserData } from '../store/user/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly store: Store) {}

  dispatchUser = (user: any) => this.store.dispatch(setUserData({ user }));
}
