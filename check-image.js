const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const images = await prisma.image.findMany({
      orderBy: { createdAt: 'desc' },
      take: 1
    });
    console.log("Última imagen guardada en la base de datos:");
    console.log(images);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}
main();
