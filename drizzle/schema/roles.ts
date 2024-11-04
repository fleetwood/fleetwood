
import { dbSchema, text, timestamp, uniqueID, uuid } from "./index";

export const roles = dbSchema.table("roles", {
	id       : uuid("id").primaryKey().default(uniqueID()),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
	name     : text("name").notNull(),
	title    : text("title").notNull(),
	startDate: timestamp("startDate").notNull(),
	endDate  : timestamp("endDate"),
	icon     : text("icon"),
	summary  : text("summary").notNull().default('I was here'),
	highlight: text("highlight"),
});
