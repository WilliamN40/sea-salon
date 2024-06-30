/*
  Warnings:

  - You are about to drop the column `service` on the `Reservations` table. All the data in the column will be lost.
  - Added the required column `branchId` to the `Reservations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `Reservations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_branchId_fkey";

-- AlterTable
ALTER TABLE "Reservations" DROP COLUMN "service",
ADD COLUMN     "branchId" INTEGER NOT NULL,
ADD COLUMN     "serviceId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;
