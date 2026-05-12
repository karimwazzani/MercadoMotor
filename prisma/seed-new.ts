import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const SOURCE_DIR = "C:\\Users\\karim\\OneDrive\\Documentos\\Imagenes AV";
const UPLOADS_DIR = path.join(process.cwd(), 'public/uploads');

// Asegurarse que el directorio exista
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

async function main() {
  console.log("Limpiando datos viejos...");
  // Vamos a dejar los usuarios que ya están, solo creamos los nuevos
  
  console.log("Copiando imágenes...");
  const files = fs.readdirSync(SOURCE_DIR);
  const imageFiles: string[] = [];
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      const targetName = `seed-${Date.now()}-${file.replace(/\s+/g, '-')}`;
      fs.copyFileSync(path.join(SOURCE_DIR, file), path.join(UPLOADS_DIR, targetName));
      imageFiles.push(`/uploads/${targetName}`);
    }
  }

  console.log(`Se copiaron ${imageFiles.length} imágenes.`);

  // 1. CREAR 5 USUARIOS (2 Agencias, 3 Particulares)
  console.log("Creando usuarios...");
  const users = [];
  
  // Agencias
  for (let i = 1; i <= 2; i++) {
    const user = await prisma.user.create({
      data: {
        name: `Titular Agencia ${i}`,
        lastName: `Apellido ${i}`,
        email: `agencia${i}@autovirtual.com`,
        phone: `+54911223344${i}`,
        accountType: "AGENCIA",
        status: "ACTIVE",
        location: `Capital Federal, Ciudad Autónoma de Buenos Aires, CABA`,
        password: "hashedpassword", // Not real login
      }
    });
    await prisma.agency.create({
      data: {
        userId: user.id,
        tradeName: `Automotores Premium ${i}`,
        address: `Av. Siempre Viva ${100 * i}`,
        city: `Capital Federal`,
        province: `CABA`,
        phone: `011-4444-555${i}`,
        status: "APPROVED"
      }
    });
    users.push(user);
  }

  // Particulares
  for (let i = 1; i <= 3; i++) {
    const user = await prisma.user.create({
      data: {
        name: `Particular ${i}`,
        lastName: `Vendedor ${i}`,
        email: `particular${i}@autovirtual.com`,
        phone: `+54911556677${i}`,
        accountType: "PARTICULAR",
        status: "ACTIVE",
        location: `Rosario, Rosario, Santa Fe`,
        password: "hashedpassword"
      }
    });
    users.push(user);
  }

  // 2. CREAR 30 VEHÍCULOS
  console.log("Creando vehículos...");
  
  const vehicleTemplates = [
    { category: "autos", brand: "Honda", model: "Prelude", version: "2.3 SI" },
    { category: "autos", brand: "Honda", model: "Prelude", version: "2.2 VTEC" },
    { category: "autos", brand: "Honda", model: "Prelude", version: "2.0" },
    { category: "de_coleccion", brand: "Volkswagen", model: "Karmann Ghia", version: "1.5" },
    { category: "de_coleccion", brand: "Volkswagen", model: "Escarabajo", version: "1.3" },
    { category: "de_coleccion", brand: "IKA", model: "Buggy", version: "Burro Buggy" },
    { category: "de_coleccion", brand: "IKA", model: "Buggy", version: "Puelche" },
    { category: "camionetas", brand: "Land Rover", model: "Defender", version: "TDI 110" },
    { category: "autos", brand: "Ferrari", model: "296 GTB", version: "Base" },
    { category: "motos", brand: "Yamaha", model: "Raptor", version: "700" },
    { category: "cuatriciclos", brand: "Can-Am", model: "Outlander", version: "XMR 800" },
    { category: "autos", brand: "Volkswagen", model: "Golf", version: "GTI" }
  ];

  for (let i = 0; i < 30; i++) {
    const template = vehicleTemplates[i % vehicleTemplates.length];
    const user = users[i % users.length];
    const agencyId = user.accountType === "AGENCIA" ? (await prisma.agency.findFirst({ where: { userId: user.id } }))?.id : null;
    
    // Pick 3-4 random images
    const numImages = Math.floor(Math.random() * 2) + 3; // 3 or 4
    const selectedImages = [];
    for (let j = 0; j < numImages; j++) {
      const randomImg = imageFiles[Math.floor(Math.random() * imageFiles.length)];
      selectedImages.push(randomImg);
    }

    // Expiration date
    const expDate = new Date();
    expDate.setDate(expDate.getDate() + 45);

    const vehicle = await prisma.vehicle.create({
      data: {
        userId: user.id,
        agencyId: agencyId,
        category: template.category,
        brand: template.brand,
        model: template.model,
        version: template.version,
        year: 1990 + Math.floor(Math.random() * 34), // 1990 to 2024
        mileage: Math.floor(Math.random() * 150000),
        fuel: "Nafta",
        transmission: Math.random() > 0.5 ? "Manual" : "Automática",
        location: user.location || "Buenos Aires",
        price: 5000 + Math.floor(Math.random() * 45000),
        currency: "USD",
        description: `Excelente estado. Unico dueño. Papeles al día. Service oficial recién realizado. Oportunidad única para los amantes de ${template.brand} ${template.model}.`,
        status: "APPROVED",
        approvedAt: new Date(),
        expiresAt: expDate,
        images: {
          create: selectedImages.map((url, index) => ({
            url,
            order: index,
            isMain: index === 0
          }))
        }
      }
    });
    
    console.log(`Creado vehículo ${i+1}: ${vehicle.brand} ${vehicle.model}`);
  }

  console.log("¡Seeding completado con éxito!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
