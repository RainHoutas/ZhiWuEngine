/*
  Warnings:

  - A unique constraint covering the columns `[joinCode]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `joinCode` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `class` ADD COLUMN `joinCode` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Class_joinCode_key` ON `Class`(`joinCode`);
