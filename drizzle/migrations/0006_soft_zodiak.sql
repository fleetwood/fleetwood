ALTER TABLE "bb_lrt7vp8u4l0rncolilviohmja4_h0a1n7_drizzle"."roles" ALTER COLUMN "id" SET DEFAULT 'a195e6f7-4206-48c7-8a05-09eeeedf4593';--> statement-breakpoint
ALTER TABLE "bb_lrt7vp8u4l0rncolilviohmja4_h0a1n7_drizzle"."roles" ALTER COLUMN "highlight" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "bb_lrt7vp8u4l0rncolilviohmja4_h0a1n7_drizzle"."roles" ALTER COLUMN "highlight" DROP NOT NULL;