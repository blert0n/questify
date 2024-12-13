
CREATE TABLE "public"."FormItemType" ("type" text NOT NULL, PRIMARY KEY ("type") );COMMENT ON TABLE "public"."FormItemType" IS E'enum for form item types';

INSERT INTO "public"."FormItemType"("type") VALUES (E'TEXT');

INSERT INTO "public"."FormItemType"("type") VALUES (E'DATE');

INSERT INTO "public"."FormItemType"("type") VALUES (E'DROPDOWN');

INSERT INTO "public"."FormItemType"("type") VALUES (E'LINEAR_SCALE');

INSERT INTO "public"."FormItemType"("type") VALUES (E'LONG');

INSERT INTO "public"."FormItemType"("type") VALUES (E'MULTIPLE_CHOICE');

INSERT INTO "public"."FormItemType"("type") VALUES (E'SHORT');

INSERT INTO "public"."FormItemType"("type") VALUES (E'SINGLE_CHOICE');
