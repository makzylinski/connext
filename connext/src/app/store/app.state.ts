import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from '../models/auth-state.model';
import { authReducer } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};
