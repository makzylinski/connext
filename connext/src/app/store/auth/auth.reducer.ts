import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../../models/auth-state.model';
import { logIn, logOut } from './auth.actions';

export const initialState: AuthState = {
  user: null,
  token: '',
};

export const authReducer = createReducer(
  initialState,
  on(logIn, (state, { user, token }) => ({ ...state, user, token })),
  on(logOut, (state) => ({ ...state, users: null, token: '' }))
);
