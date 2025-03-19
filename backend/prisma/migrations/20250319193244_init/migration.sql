/*
  Warnings:

  - You are about to drop the `Tech` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TechToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TechToUser" DROP CONSTRAINT "_TechToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_TechToUser" DROP CONSTRAINT "_TechToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Tech" TEXT[];

-- DropTable
DROP TABLE "Tech";

-- DropTable
DROP TABLE "_TechToUser";
