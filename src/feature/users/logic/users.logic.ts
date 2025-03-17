import { IUsers } from "../types/users.type";

const isVerifiedUser = (user: IUsers) => {
  return user.emailVerified;
};

export const usersLogic = {
  isVerifiedUser,
};
