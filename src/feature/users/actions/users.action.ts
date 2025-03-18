import { IResponse } from "@/common/types/response.type";
import { usersService } from "../services/users.service";
import { IUsers } from "../types/users.type";

const getAllUsers = async (): Promise<IResponse<IUsers[]>> => {
  try {
    const users = await usersService.findAll();
    return { data: users };
  } catch (error) {
    console.error(error);
    return { data: [], error: { message: "Something went wrong" } };
  }
};

const getUserById = async (
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

export const usersAction = {
  getAllUsers,
  getUserById,
};