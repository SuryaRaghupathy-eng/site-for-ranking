import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  isVerified: boolean("is_verified").notNull().default(false),
  verificationToken: text("verification_token"),
  verifiedAt: timestamp("verified_at"),
});

export const rankTrackingRequests = pgTable("rank_tracking_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  rankingType: text("ranking_type").notNull(),
  keyword: text("keyword").notNull(),
  brandName: text("brand_name").notNull(),
  branch: text("branch").notNull(),
  location: text("location").notNull(),
  locationCode: text("location_code").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  contactNumber: text("contact_number"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  password: true,
  firstName: true,
  lastName: true,
});

export const insertRankTrackingRequestSchema = createInsertSchema(rankTrackingRequests).omit({
  id: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertRankTrackingRequest = z.infer<typeof insertRankTrackingRequestSchema>;
export type RankTrackingRequest = typeof rankTrackingRequests.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
