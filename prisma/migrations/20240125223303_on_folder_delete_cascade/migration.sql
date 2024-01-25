-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "folderId" TEXT DEFAULT 'Default';

-- CreateTable
CREATE TABLE "Folder" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Folder_ownerId_name_idx" ON "Folder"("ownerId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Folder_ownerId_name_key" ON "Folder"("ownerId", "name");

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
