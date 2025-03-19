"use server";

import { IResponse } from "@/common/types/response.type";
import { usersService } from "../services/users.service";
import { IUsers } from "../types/users.type";
import { createAuthAction } from "@/lib/server-action";

export const getAllUsers = createAuthAction<IResponse<IUsers[]>>(async () => {
  const users = await usersService.findAll();
  return { data: users };
});

export const getUserById = async (
  id: string
): Promise<IResponse<IUsers | null>> => {
  try {
    const user = await usersService.findById(id);
    return { data: user };
  } catch (error) {
    console.error(error);
    return { data: null, error: { message: "Something went wrong" } };
  }
};
