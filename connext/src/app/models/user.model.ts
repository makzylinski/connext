export interface User {
  id: number | string;
  username: string;
  email: string;
  bio: string;
  profileImageUrl: string;
  dateOfBirth: Date;
  role: string;
}
