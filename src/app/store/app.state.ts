import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './auth/auth-state.model';
import { authReducer } from './auth/auth.reducer';
import { UserState } from './user/user-state.model';
import { userReducer } from './user/user.reducer';

export interface AppState {
  auth: AuthState;
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  user: userReducer,
};
