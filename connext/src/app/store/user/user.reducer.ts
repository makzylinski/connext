import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../../models/auth-state.model';
import { setUserData } from './user.actions';

export const initialState: AuthState = {
  user: null,
  token: '',
};

export const authReducer = createReducer(
  initialState,
  on(setUserData, (state, { user }) => ({ ...state, user }))
);
