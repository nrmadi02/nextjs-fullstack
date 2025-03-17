import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { usersSchema } from "./users";
import { relations } from "drizzle-orm";

export const sessionsSchema = pgTable("sessions", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => usersSchema.id, { onDelete: "cascade" }),
});

export const sessionsRelations = relations(sessionsSchema, ({ one }) => ({
  user: one(usersSchema, {
    fields: [sessionsSchema.userId],
    references: [usersSchema.id],
  }),
}));