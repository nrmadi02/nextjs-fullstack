import { usersSchema } from "@/database/schema/users";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { z } from "zod";

export const usersInsertSchema = createInsertSchema(usersSchema, {
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email({ message: "Email is invalid" })
    .min(1, "Email is required"),
  emailVerified: z.optional(z.boolean()),
  createdAt: z.optional(z.date()),
  updatedAt: z.optional(z.date()),
});

export const usersUpdateSchema = createUpdateSchema(usersSchema, {
  id: z.string().min(1, "Id is required"),
  email: z.optional(z.string().email()),
});

export type UsersInsertRequest = z.infer<typeof usersInsertSchema>;
export type UsersUpdateRequest = z.infer<typeof usersUpdateSchema>;
