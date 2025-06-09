import { createAction, props } from '@ngrx/store';
import { firstLoginData } from '../../models/first-login-data.model';
import { User } from '../../models/user.model';

export const setUserData = createAction(
  '[User] Set User Data',
  props<{ user: User }>()
);

export const setFirstLoginData = createAction(
  '[User] Set First Login Data',
  props<{ firstLoginData: firstLoginData }>()
);
