
import { COLORS } from "./enum";
import { dbSchema, text, uniqueID, uuid } from "./index";

export const User = dbSchema.table("users", {
	id   : uuid("id").primaryKey().default(uniqueID()),
	name : text("name"),
	color: COLORS("color").default("red"),
});
