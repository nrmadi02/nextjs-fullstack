import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { usersSchema } from "./users";
import { relations } from "drizzle-orm";

export const accountsSchema = pgTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => usersSchema.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const accountsRelations = relations(accountsSchema, ({ one }) => ({
  user: one(usersSchema, {
    fields: [accountsSchema.userId],
    references: [usersSchema.id],
  }),
}));