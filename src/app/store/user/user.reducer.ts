import { createReducer, on } from '@ngrx/store';
import { UserState } from './user-state.model';
import {
  setFirstLoginBio,
  setFirstLoginBirthDate,
  setFirstLoginData,
  setFirstLoginPhotoUrl,
  setUserData,
} from './user.actions';

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
  on(setUserData, (state, { user }) => ({ ...state, user })),
  on(setFirstLoginData, (state, { firstLoginData }) => ({
    ...state,
    firstLoginData,
  })),
  on(setFirstLoginPhotoUrl, (state, { photoUrl }) => ({
    ...state,
    firstLoginData: {
      ...state.firstLoginData,
      photoUrl,
    },
  })),
  on(setFirstLoginBio, (state, { bio }) => ({
    ...state,
    firstLoginData: {
      ...state.firstLoginData,
      bio,
    },
  })),
  on(setFirstLoginBirthDate, (state, { dateOfBirth }) => ({
    ...state,
    firstLoginData: {
      ...state.firstLoginData,
      dateOfBirth,
    },
  }))
);
