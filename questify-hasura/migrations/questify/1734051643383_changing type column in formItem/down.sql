
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP TYPE IF EXISTS "public"."FormType";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP TYPE "public"."FormType";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- ALTER TABLE "public"."FormItem"
-- RENAME COLUMN type_new TO type;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- ALTER TABLE "public"."FormItem"
-- DROP COLUMN type;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- UPDATE "public"."FormItem"
-- SET "type_new" = ft.type
-- FROM "public"."FormItemType" ft
-- WHERE "public"."FormItem"."type" = ft.type;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- ALTER TABLE "public"."FormItem"
-- ADD COLUMN type_new VARCHAR(255);
--
-- UPDATE "public"."FormItem"
-- SET type_new = et.type
-- FROM "public"."FormItemType" et
-- WHERE "public"."FormItem".type_new = et.type;
