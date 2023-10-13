-- CreateEnum
CREATE TYPE "UserCategory" AS ENUM ('ADMIN', 'GUEST');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "UserCategory" NOT NULL DEFAULT 'GUEST';
