/*
  Warnings:

  - A unique constraint covering the columns `[ownerId,name]` on the table `Form` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[formId,name]` on the table `FormItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Form_name_key";

-- DropIndex
DROP INDEX "FormItem_name_key";

-- CreateIndex
CREATE INDEX "Form_ownerId_name_idx" ON "Form"("ownerId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Form_ownerId_name_key" ON "Form"("ownerId", "name");

-- CreateIndex
CREATE INDEX "FormItem_formId_name_idx" ON "FormItem"("formId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "FormItem_formId_name_key" ON "FormItem"("formId", "name");
