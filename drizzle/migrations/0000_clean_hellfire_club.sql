DO $$ BEGIN
 CREATE TYPE "bb_lrt7vp8u4l0rncolilviohmja4_h0a1n7_drizzle"."colors" AS ENUM('red', 'green', 'blue');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bb_lrt7vp8u4l0rncolilviohmja4_h0a1n7_drizzle"."users" (
	"id" uuid PRIMARY KEY DEFAULT 'dfcbf491-89b8-46c2-a827-f0a396b1a780' NOT NULL,
	"name" text,
	"color" "bb_lrt7vp8u4l0rncolilviohmja4_h0a1n7_drizzle"."colors" DEFAULT 'red'
);
