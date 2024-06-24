/*
  Warnings:

  - Added the required column `meal` to the `consumed_food` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `date` on the `consumed_food` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `date` on the `exercise_progress` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `date` on the `weight_progress` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "consumed_food" ADD COLUMN     "meal" TEXT NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "exercise_progress" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "weight_progress" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
