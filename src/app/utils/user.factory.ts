export const userFactory = (userDetails: any) => {
  return {
    id: userDetails?.id || -1,
    username: userDetails?.username || '',
    email: userDetails?.email || '',
    bio: userDetails?.bio || '',
    profileImageUrl: userDetails?.profileImageUrl || '',
    dateOfBirth: userDetails?.dateOfBirth || new Date(),
    role: userDetails?.role || '',
    latestMessage: userDetails?.latestMessage || '',
  };
};
