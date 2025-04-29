import { User } from '../../models/user.model';

export interface AuthState {
  user: User | null;
  token: string | null;
}
