const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Conectando a Supabase para aplicar políticas RLS...");
  try {
    console.log("Creando política de subida (INSERT)...");
    await prisma.$executeRawUnsafe(`CREATE POLICY "Permitir subidas" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'uploads');`);
    
    console.log("Creando política de borrado (DELETE)...");
    await prisma.$executeRawUnsafe(`CREATE POLICY "Permitir borrado" ON storage.objects FOR DELETE TO public USING (bucket_id = 'uploads');`);
    
    console.log("Creando política de actualización (UPDATE)...");
    await prisma.$executeRawUnsafe(`CREATE POLICY "Permitir actualizaciones" ON storage.objects FOR UPDATE TO public USING (bucket_id = 'uploads');`);

    console.log("✅ ¡Todas las políticas aplicadas con éxito!");
  } catch (e) {
    console.error("Error al aplicar (es normal si las políticas ya existían previamente):", e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
