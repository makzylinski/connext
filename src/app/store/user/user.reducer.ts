import { createReducer, on } from '@ngrx/store';
import { UserState } from './user-state.model';
import { setFirstLoginData, setUserData } from './user.actions';

export const initialState: UserState = {
  user: {
    id: -1,
    username: '',
    email: '',
    bio: '',
    profileImageUrl: '',
    dateOfBirth: new Date(),
    role: '',
    latestMessage: '',
  },
  firstLoginData: {
    photoUrl: '',
    bio: '',
    dateOfBirth: new Date(),
  },
};

export const userReducer = createReducer(
  initialState,
  on(setUserData, (state, { user }) => ({ ...state, user }))
);

export const firstLoginReducer = createReducer(
  initialState,
  on(setFirstLoginData, (state, { firstLoginData }) => ({
    ...state,
    firstLoginData,
  }))
);
