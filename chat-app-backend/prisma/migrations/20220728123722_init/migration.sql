/*
  Warnings:

  - You are about to drop the column `massage` on the `Chat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "massage",
ADD COLUMN     "message" TEXT;
