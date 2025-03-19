import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { accountsSchema } from "@/database/schema/accounts";
import { usersSchema } from "@/database/schema/users";
import { sessionsSchema } from "@/database/schema/sessions";
import { verificationsSchema } from "@/database/schema/verifications";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema: {
      accounts: accountsSchema,
      users: usersSchema,
      sessions: sessionsSchema,
      verifications: verificationsSchema,
    }
  }),
  emailAndPassword: {
    enabled: true,
  },
});
