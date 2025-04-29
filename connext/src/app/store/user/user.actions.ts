import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const setUserData = createAction(
  '[User] Set User Data',
  props<{ user: User }>()
);
