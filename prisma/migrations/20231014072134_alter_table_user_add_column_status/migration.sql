-- CreateEnum
CREATE TYPE "UserValidationStatus" AS ENUM ('NIVEL1', 'NIVEL2', 'NIVEL3', 'NIVEL4', 'NIVEL5');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "status" "UserValidationStatus" NOT NULL DEFAULT 'NIVEL1';
