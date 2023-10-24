const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const memberModel = {
  async findByEmail(email) {
    try {
      const foundEmail = await prisma.member.findUnique({
        where: {
          email: email,
        },
        select: {
          id: true,
          pseudo: true,
          email: true,
          password: true,
          role: true, // Ajoute cette ligne pour récupérer le rôle
        },
      });
      return foundEmail;
    } catch (error) {
      console.log(error);
      return { error: "Member not found"}
    }
  },

  async findAll() {
    try {
      const members = await prisma.member.findMany({
        select: {
          id: true,
          pseudo: true,
          email: true,
          role: true,

      },
      });
      return members;
    } catch (error) {
      console.log(error);
      return { error: "Members not found"}
    }
    return null;
  },

  async insert(member) {
    try {
      const newMember = await prisma.member.create({
        data: {
          pseudo: member.pseudo,
          email: member.email,
          password: member.password,
          role: member.role,
        },
      });
      return newMember;
    } catch (error) {
      console.log(error);
      return { error: "Member not created"}
    }
  },
  async findById(id) {
    try {
      const memberId = parseInt(id);
      const member = await prisma.member.findUnique({
        where: {
          id: memberId,
        },
      });
      return member;
    } catch (error) {
      console.log(error);
      return { error: "Member not found"}
    }
  },
  async update(member) {
    try {
      const updatedMember = await prisma.member.update({
        where: {
          id: member.id,
        },
        data: {
          pseudo: member.pseudo,
          email: member.email,
          password: member.password,
          role: member.role,
        },
      });
      return updatedMember;
    } catch (error) {
      console.log(error);
      return { error: "Member not updated"}
    }

    return null;
  },
  async delete(id) {
    try {
      await prisma.member.delete({
        where: {
          id: parseInt(id),
        },
      });
    } catch (err) {
      console.log(err);
      return { error: "Member not deleted"}
    }
  },
};

module.exports = memberModel;
