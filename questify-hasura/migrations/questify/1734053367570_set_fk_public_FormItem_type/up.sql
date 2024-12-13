alter table "public"."FormItem"
  add constraint "FormItem_type_fkey"
  foreign key ("type")
  references "public"."FormItemType"
  ("type") on update restrict on delete restrict;
