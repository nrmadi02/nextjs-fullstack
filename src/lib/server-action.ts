import { headers } from "next/headers";
import { auth } from "./auth";
import { Session } from "better-auth";

export const createPublicAction = <T>(action: () => Promise<T>) => {
  return async () => {
    const result = await action();
    return result;
  };
};

export const createAuthAction =
  <T>(action: (session: Session) => Promise<T>) =>
  async (): Promise<{ result?: T; error?: { message: string } }> => {
    const authData = await auth.api.getSession({
      headers: await headers(),
    });
    if (!authData?.session) return { error: { message: "Unauthorized" } };

    try {
      const result = await action(authData.session);
      return { result };
    } catch (error) {
      console.error(error);
      return { error: { message: "Something went wrong" } };
    }
  };
