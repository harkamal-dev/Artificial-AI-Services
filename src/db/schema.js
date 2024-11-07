import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

const MockInterview = pgTable("mockInterview", {
	id: varchar("id").primaryKey(),
	jsonMockResp: text("jsonMockResp").notNull(),
	jobPosition: varchar("jobPosition").notNull(),
	jobDesc: varchar("jobDesc").notNull(),
	jobExperience: varchar("jobExperience").notNull(),
	createdBy: varchar("createdBy").notNull(),
	createdAt: varchar("createdAt").notNull(),
	mockId: varchar("mockId").notNull(),
});

export { MockInterview };
