/*
  Warnings:

  - The primary key for the `forum` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `forum` table. All the data in the column will be lost.
  - You are about to drop the `_ForumToPost` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `forumCategory` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ForumToPost" DROP CONSTRAINT "_ForumToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_ForumToPost" DROP CONSTRAINT "_ForumToPost_B_fkey";

-- AlterTable
ALTER TABLE "forum" DROP CONSTRAINT "forum_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "forum_pkey" PRIMARY KEY ("category");

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "forumCategory" "ForumCategory" NOT NULL;

-- DropTable
DROP TABLE "_ForumToPost";

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_forumCategory_fkey" FOREIGN KEY ("forumCategory") REFERENCES "forum"("category") ON DELETE RESTRICT ON UPDATE CASCADE;
