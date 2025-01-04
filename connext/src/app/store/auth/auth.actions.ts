import { createAction, props } from '@ngrx/store';

export const logIn = createAction(
  '[Auth] Log In',
  props<{ username: string; password: string }>()
);

export const logOut = createAction('[Auth] Log Out');
