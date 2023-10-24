
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  prisma, // Exportez l'instance de Prisma pour l'utiliser dans votre application

  async query(...params) {

    debug(...params)
    return prisma.$queryRaw(...params); // Utilisez $queryRaw pour exécuter des requêtes brutes avec Prisma
  }
};
