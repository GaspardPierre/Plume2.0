const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const noteModel = {
  async findAll() {
    try {
      const notes = await prisma.note.findMany();
      return notes;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async insert(note) {
    try {
      const newNote = await prisma.note.create({
        data: {
          average: note.average,
          member: {
            connect: {
              id: note.member_id,
            },
          },
          work: {
            connect: {
              id: note.work_id,
            },
          },
        },
      });
      return newNote;
    } catch (error) {
      console.log(error);
    }
  },

  async findById(id) {
    try {
      const note = await prisma.note.findUnique({
        where: {
          id: id,
        },
        include: {
          member: true,
          work: true,
        },
      });
      return note;
    } catch (error) {
      console.log(error);
    }
  },

  async update(note) {
    try {
      const updatedNote = await prisma.note.update({
        where: {
          id: note.id,
        },
        data: {
          average: note.average,
          member: {
            connect: {
              id: note.member_id,
            },
          },
          work: {
            connect: {
              id: note.work_id,
            },
          },
        },
      });
      return updatedNote;
    } catch (error) {
      console.log(error);
    }
  },

  async delete(id) {
    try {
      await prisma.note.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = noteModel;
