-- DropForeignKey
ALTER TABLE "FormItem" DROP CONSTRAINT "FormItem_formId_fkey";

-- AddForeignKey
ALTER TABLE "FormItem" ADD CONSTRAINT "FormItem_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE;
