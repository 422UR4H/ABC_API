-- DropForeignKey
ALTER TABLE "savedNews" DROP CONSTRAINT "savedNews_newsId_fkey";

-- DropForeignKey
ALTER TABLE "savedNews" DROP CONSTRAINT "savedNews_userId_fkey";

-- DropForeignKey
ALTER TABLE "savedPosts" DROP CONSTRAINT "savedPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "savedPosts" DROP CONSTRAINT "savedPosts_userId_fkey";

-- AddForeignKey
ALTER TABLE "savedPosts" ADD CONSTRAINT "savedPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedPosts" ADD CONSTRAINT "savedPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedNews" ADD CONSTRAINT "savedNews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedNews" ADD CONSTRAINT "savedNews_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "news"("id") ON DELETE CASCADE ON UPDATE CASCADE;
