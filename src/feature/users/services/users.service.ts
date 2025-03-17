import { usersSchema } from "@/database/schema/users";
import { IUsers } from "../types/users.type";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";

const findAll = async (): Promise<IUsers[]> => {
  const users = await db.select().from(usersSchema);

  return users;
};

const findById = async (id: string): Promise<IUsers | null> => {
  const [user] = await db
    .select()
    .from(usersSchema)
    .where(eq(usersSchema.id, id))
    .limit(1);

  return user;
};


export const usersService = {
  findAll,
  findById,
};