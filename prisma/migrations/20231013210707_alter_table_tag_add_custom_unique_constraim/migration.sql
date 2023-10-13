/*
  Warnings:

  - A unique constraint covering the columns `[postId,productId]` on the table `tags` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tags_postId_productId_key" ON "tags"("postId", "productId");
