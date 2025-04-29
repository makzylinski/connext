import { createAction, props } from '@ngrx/store';

export const setToken = createAction(
  '[Auth] Log In Data',
  props<{ token: string }>()
);

export const logOut = createAction('[Auth] Log Out');
