-- DropForeignKey
ALTER TABLE "Form" DROP CONSTRAINT "Form_folderId_fkey";

-- AlterTable
ALTER TABLE "Form" ALTER COLUMN "folderId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
