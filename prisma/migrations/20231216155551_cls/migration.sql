/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "FormType" AS ENUM ('SHORT', 'LONG', 'SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'DROPDOWN', 'CHECKBOX', 'ATTACHMENT', 'SLIDER', 'DATE');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "order" SERIAL NOT NULL,
    "style" JSONB,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FormType" NOT NULL,
    "order" SERIAL NOT NULL,
    "style" JSONB,
    "section" INTEGER NOT NULL DEFAULT 0,
    "formId" TEXT NOT NULL,

    CONSTRAINT "FormItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Form_name_key" ON "Form"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FormItem_name_key" ON "FormItem"("name");

-- AddForeignKey
ALTER TABLE "FormItem" ADD CONSTRAINT "FormItem_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
