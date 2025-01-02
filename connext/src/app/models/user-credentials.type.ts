import { User } from './user.model';

export type UserCredentials = Pick<User, 'username' | 'password'>;
