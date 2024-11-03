export { text, uuid, timestamp } from "drizzle-orm/pg-core/columns";
export { v4 as uniqueID } from 'uuid'; 
import { pgSchema } from "drizzle-orm/pg-core";

export const dbSchema = pgSchema(process.env.DATABASE_SCHEMA || "public");
