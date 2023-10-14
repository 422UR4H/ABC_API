-- CreateTable
CREATE TABLE "userToValidatePractices" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "practiceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userToValidatePractices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userValidatedPractices" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "practiceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userValidatedPractices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userToValidatePractices_userId_practiceId_key" ON "userToValidatePractices"("userId", "practiceId");

-- CreateIndex
CREATE UNIQUE INDEX "userValidatedPractices_userId_practiceId_key" ON "userValidatedPractices"("userId", "practiceId");

-- AddForeignKey
ALTER TABLE "userToValidatePractices" ADD CONSTRAINT "userToValidatePractices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userToValidatePractices" ADD CONSTRAINT "userToValidatePractices_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userValidatedPractices" ADD CONSTRAINT "userValidatedPractices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userValidatedPractices" ADD CONSTRAINT "userValidatedPractices_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
