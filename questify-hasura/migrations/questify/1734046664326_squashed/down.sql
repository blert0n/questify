
DELETE FROM "public"."FormItemType" WHERE "type" = 'SINGLE_CHOICE';

DELETE FROM "public"."FormItemType" WHERE "type" = 'SHORT';

DELETE FROM "public"."FormItemType" WHERE "type" = 'MULTIPLE_CHOICE';

DELETE FROM "public"."FormItemType" WHERE "type" = 'LONG';

DELETE FROM "public"."FormItemType" WHERE "type" = 'LINEAR_SCALE';

DELETE FROM "public"."FormItemType" WHERE "type" = 'DROPDOWN';

DELETE FROM "public"."FormItemType" WHERE "type" = 'DATE';

DELETE FROM "public"."FormItemType" WHERE "type" = 'TEXT';

DROP TABLE "public"."FormItemType";
