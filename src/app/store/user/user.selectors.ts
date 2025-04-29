import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user-state.model';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectUserId = createSelector(
  selectUserState,
  (state: UserState) => state.user?.id
);
