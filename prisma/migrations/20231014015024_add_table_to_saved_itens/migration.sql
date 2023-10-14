-- CreateTable
CREATE TABLE "savedPosts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "savedPosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "savedNews" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "newsId" INTEGER NOT NULL,

    CONSTRAINT "savedNews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "savedPosts_userId_postId_key" ON "savedPosts"("userId", "postId");

-- CreateIndex
CREATE UNIQUE INDEX "savedNews_userId_newsId_key" ON "savedNews"("userId", "newsId");

-- AddForeignKey
ALTER TABLE "savedPosts" ADD CONSTRAINT "savedPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedPosts" ADD CONSTRAINT "savedPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedNews" ADD CONSTRAINT "savedNews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedNews" ADD CONSTRAINT "savedNews_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
