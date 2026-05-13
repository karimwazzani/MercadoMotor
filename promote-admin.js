const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Conectando a Supabase para buscar tu usuario...");
  try {
    // Buscamos al primer (y seguramente único) usuario registrado en la base de datos
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'asc' },
      take: 1
    });

    if (users.length > 0) {
      const user = users[0];
      
      // Actualizamos su rol a ADMINISTRADOR
      await prisma.user.update({
        where: { id: user.id },
        data: { accountType: "ADMINISTRADOR" }
      });
      
      console.log(`✅ ¡Éxito! La cuenta asociada al correo "${user.email}" ahora es ADMINISTRADOR.`);
    } else {
      console.log("⚠️ No encontré ninguna cuenta registrada. ¿Estás seguro de que ya creaste tu cuenta?");
    }
  } catch (e) {
    console.error("Error al actualizar la cuenta:", e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
