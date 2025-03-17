import { usersSchema } from "@/database/schema/users";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const usersSelectSchema = createSelectSchema(usersSchema);

export type IUsers = z.infer<typeof usersSelectSchema>;
