import { createReducer, on } from '@ngrx/store';
import { UserState } from './user-state.model';
import { setUserData } from './user.actions';

export const initialState: UserState = {
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(setUserData, (state, { user }) => ({ ...state, user }))
);
