import { firstLoginData } from '../../models/first-login-data.model';
import { User } from '../../models/user.model';

export interface UserState {
  user: User;
  firstLoginData: firstLoginData;
}
