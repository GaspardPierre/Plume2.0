const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const labelModel = {
  async findAll() {
    try {
      const labels = await prisma.label.findMany();
      return labels;
    } catch (error) {
      console.log(error);
    }
  },

  async insert(label) {
    try {
      const newLabel = await prisma.label.create({
        data: {
          tag: label.tag,
        },
      });
      return newLabel;
    } catch (error) {
      console.log(error);
    }
  },

  async findById(id) {
    try {
      const label = await prisma.label.findUnique({
        where: {
          id: id,
        },
      });
      return label;
    } catch (error) {
      console.log(error);
    }
  },

  async findByTag(tag) {
    try {
      const label = await prisma.label.findUnique({
        where: {
          tag: tag,
        },
      });
      return label;
    } catch (error) {
      console.log(error);
    }
  },

  async update(label) {
    try {
      const updatedLabel = await prisma.label.update({
        where: {
          id: label.id,
        },
        data: {
          tag: label.tag,
        },
      });
      return updatedLabel;
    } catch (error) {
      console.log(error);
    }
  },

  async delete(id) {
    try {
      await prisma.label.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = labelModel;
