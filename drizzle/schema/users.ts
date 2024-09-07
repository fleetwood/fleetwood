
import { dbSchema, text, timestamp, uniqueID, uuid } from "./index";
import { COLORS } from './schema';

export const users = dbSchema.table("users", {
	id       : uuid("id").primaryKey().default(uniqueID()),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
	name     : text("name").notNull(),
	email    : text("email").notNull(),
	avatar   : text("avatar"),
	color    : COLORS("color").default("red"),
});
