import { User } from './user.model';

export interface AuthState {
  user: User | null;
  token: string;
}
