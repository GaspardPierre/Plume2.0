const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const workModel = {
  async findByTitle(title) {
    try {
      const foundTitles = await prisma.work.findMany({
        where: {
          title: {
            contains: title,
            mode: 'insensitive'
          },
        },
      });
      return foundTitles;
    } catch (error) {
      console.log(error);
    }
  },
  async findTitle(title) {
    try {
      const foundWork = await prisma.work.findFirst({
        where: {
          title: title,
        },
      });
      return foundWork;
    } catch (error) {
      console.log(error);
    }
  }
  
  ,
  async findByLabelId(labelId) {
    try {
      const works = await prisma.work.findMany({
        where: {
          labels: {
            some: {
              id: parseInt(labelId, 10),
            },
          },
        },
      });
      return works;
    } catch (error) {
      console.log(error);
    }
  },
  async findAll() {
    try {
      const works = await prisma.work.findMany();
      return works;
    } catch (error) {
      console.log(error);
    }
    return null;
  },

  async insert(work) {
    try {
      const newWork = await prisma.work.create({
        data: {
          content: work.content,
          author: work.author,
          urlImage: work.urlImage || null,
          title: work.title,
          member_id: work.member_id,
         
        },
       
      });
     
      return newWork;
    } catch (error) {
      console.log(error);
    }
  },

  async findById(id) {
    console.log("*******************************ID DANS MODEL FINDBYID !", id);
    try {
      const work = await prisma.work.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      return work;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async update(id, updatedWork) {
    const { labelIds, urlImage, ...restOfUpdatedWork } = updatedWork; // Extract labelIds and the rest of updatedWork

    if (!id || Object.keys(restOfUpdatedWork).length === 0) {
      throw new Error("Invalid parameters");
    }

    try {
      const updatedWorkDb = await prisma.work.update({
        where: { id: parseInt(id) },
        data: {
          ...restOfUpdatedWork,
          urlImage: urlImage || null,
          labels: {
            set: labelIds ? labelIds.map((id) => ({ id })) : [],
          },
        },
      });
      return updatedWorkDb;
    } catch (error) {
      console.log(error);

      throw error;
    }
  },

  async delete(id) {
    try {
       const deletedWork = await prisma.work.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedWork;
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = workModel;
