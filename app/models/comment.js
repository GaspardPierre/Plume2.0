const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const commentModel = {

    async findAllByPoemId(poemId) {
        try {
            const comments = await prisma.comment.findMany({
                where: {
                    work_id: parseInt(poemId),
                },
            });
            console.log("comments:", comments)
            return comments;
        } catch (error) {
            console.log(error);
            return null;
        }
    },


    async findAll() {
        try {
            const comments = await prisma.comment.findMany();
            return comments;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    async insert(comment) {
        console.log(comment);
        try {
          const newComment = await prisma.comment.create({
            data: {
              content: comment.content,
              member_id: comment.member_id,
              work_id: comment.work_id,
              
            },
          });
          return newComment;
        } catch (error) {
          console.error("Error while inserting comment:", error);
          throw error;
        }
      },
    async findById(id) {
        try {
            const comment = await prisma.comment.findUnique({
                where: {
                    id: id,
                },
                include: {
                    member: true,
                    work: true,
                },
            });
            return comment;
        } catch (error) {
            console.log(error);
        }
    },
        
    async update(comment) {
        try {
            const updatedComment = await prisma.comment.update({
                where: {
                    id: comment.id,
                },
                data: {
                    content: comment.content,
                    member : {
                        connect: {
                            id: comment.member_id,
                        },
                    },
                    work: {
                        connect: {
                            id: comment.work_id,
                        },
                    },
                },
            });
            return updatedComment;
        } catch (error) {
            console.log(error);
        }
    },
    async delete(id) {
        console.log(id);
await prisma.comment.delete({
    where: {
        id: parseInt(id),
    },
});
    },
};

module.exports = commentModel;


