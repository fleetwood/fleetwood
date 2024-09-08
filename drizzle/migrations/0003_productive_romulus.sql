CREATE TABLE IF NOT EXISTS "bb_lrt7vp8u4l0rncolilviohmja4_h0a1n7_drizzle"."users" (
	"id" uuid PRIMARY KEY DEFAULT '4a710582-3077-4ea6-94ce-50b6952f445f' NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"name" text NOT NULL,
	"email" text NOT NULL,
	"avatar" text,
	"color" "bb_lrt7vp8u4l0rncolilviohmja4_h0a1n7_drizzle"."colors" DEFAULT 'red'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bb_lrt7vp8u4l0rncolilviohmja4_h0a1n7_drizzle"."roles" (
	"id" uuid PRIMARY KEY DEFAULT '4022af6f-35c3-40b9-82a7-b550b0bb7c77' NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"name" text NOT NULL,
	"title" text NOT NULL,
	"startDate" timestamp NOT NULL,
	"endDate" timestamp,
	"icon" text,
	"summary" text DEFAULT 'I was here' NOT NULL
);
