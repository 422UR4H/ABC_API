/*
  Warnings:

  - Added the required column `source` to the `news` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "news" ADD COLUMN     "source" TEXT NOT NULL;
