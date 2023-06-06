-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_work_id_fkey";

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_work_id_fkey";

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
