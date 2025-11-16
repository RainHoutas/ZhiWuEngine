/*
  Warnings:

  - You are about to alter the column `actionsLog` on the `studentexperimentlog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `studentexperimentlog` MODIFY `actionsLog` JSON NULL;
