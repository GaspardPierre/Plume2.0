const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const loginModel = {
  async findByPseudo(pseudo) {
    try {
      const member = await prisma.member.findUnique({
        where: {
          pseudo: pseudo,
        },
      });
      return member;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = loginModel;
