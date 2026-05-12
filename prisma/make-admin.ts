const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];

  if (!email) {
    console.error("❌ Por favor, proveé el email del usuario. Ejemplo:");
    console.error("npx tsx prisma/make-admin.ts juan@autovirtual.com");
    process.exit(1);
  }

  try {
    const user = await prisma.user.update({
      where: { email },
      data: { accountType: "ADMINISTRADOR" }
    });

    console.log(`✅ ¡Éxito! El usuario ${user.name} (${user.email}) ahora es ADMINISTRADOR.`);
  } catch (error) {
    console.error("❌ Ocurrió un error. ¿Estás seguro de que existe ese email en la base de datos?");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
