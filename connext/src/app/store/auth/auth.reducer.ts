import { createReducer, on } from '@ngrx/store';
import { AuthState } from './auth-state.model';
import { logOut, setToken } from './auth.actions';

export const initialState: AuthState = {
  user: null,
  token: '',
};

export const authReducer = createReducer(
  initialState,
  on(setToken, (state, { token }) => ({ ...state, token })),
  on(logOut, (state) => ({ ...state, users: null, token: '' }))
);
