/*
  Warnings:

  - Added the required column `author` to the `news` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "news" ADD COLUMN     "author" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_author_fkey" FOREIGN KEY ("author") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
