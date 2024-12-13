
ALTER TABLE "public"."FormItem"
ADD COLUMN type_new VARCHAR(255);
UPDATE "public"."FormItem"
SET "type_new" = ft.type
FROM "public"."FormItemType" ft
WHERE "public"."FormItem"."type"::text = ft.type;

ALTER TABLE "public"."FormItem"
DROP COLUMN type;

ALTER TABLE "public"."FormItem"
RENAME COLUMN type_new TO type;

DROP TYPE IF EXISTS "public"."FormType";
