import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const logIn = createAction(
  '[Auth] Log In',
  props<{ user: User; token: string }>()
);

export const logOut = createAction('[Auth] Log Out');
