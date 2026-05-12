const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const AGENCY_ID = "d1ff7df1-ef80-4806-8f56-2f125995c48f";
const USER_ID = "106e8fd7-8bac-44bf-a3ab-3f8fff36b92b";
const SOURCE_DIR = "C:\\Users\\karim\\OneDrive\\Documentos\\Imagenes AV";
const DEST_DIR = path.join(__dirname, '..', 'public', 'uploads', 'vehicles');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

const VEHICLE_TEMPLATES = [
  { brand: "Honda", model: "Prelude", year: 1991, price: 15500, currency: "USD", mileage: 125000, color: "Rojo", fuel: "NAFTA", transmission: "MANUAL", img: "Honda-Prelude-1991.jpg", category: "auto" },
  { brand: "Ferrari", model: "296 GTB", year: 2024, price: 450000, currency: "USD", mileage: 500, color: "Violeta", fuel: "HIBRIDO", transmission: "AUTOMATICO", img: "Ferrari-296-GTB-Viola-Hong-Kong-Steinschlagschutzfolierung-in-XPEL-Ultimate-Plus-PPF-Lackschutz-Folie-MD-exclusive-cardesign-Autofolierung-NRW-2.jpg", category: "auto" },
  { brand: "Land Rover", model: "Defender 130 V8", year: 2024, price: 185000, currency: "USD", mileage: 0, color: "Gris", fuel: "NAFTA", transmission: "AUTOMATICO", img: "Land-Rover-Defender-130-V8.jpg", category: "suv" },
  { brand: "Yamaha", model: "Raptor 700R", year: 2023, price: 18900, currency: "USD", mileage: 1200, color: "Azul", fuel: "NAFTA", transmission: "MANUAL", img: "YAMAHA-RAPTOR-700CC.jpg", category: "moto" },
  { brand: "Volkswagen", model: "Golf GTI Performance", year: 2019, price: 38000, currency: "USD", mileage: 45000, color: "Blanco", fuel: "NAFTA", transmission: "AUTOMATICO", img: "images_original_15164-volkswagengolfgtiperformance.jpg", category: "auto" },
  { brand: "Volkswagen", model: "Karmann Ghia", year: 1959, price: 28000, currency: "USD", mileage: 88000, color: "Crema", fuel: "NAFTA", transmission: "MANUAL", img: "1959-volkswagen-karmann-ghia-coupe-img-4766-08359-scaled-6741196835bf3.jpg", category: "auto" },
  { brand: "Can-Am", model: "Outlander 800R Xmr", year: 2022, price: 22500, currency: "USD", mileage: 2500, color: "Amarillo", fuel: "NAFTA", transmission: "AUTOMATICO", img: "CAN-AM-BRPOutlander800RXmr-3690_1.jpg", category: "moto" },
  { brand: "Honda", model: "Prelude e:HEV", year: 2025, price: 42000, currency: "USD", mileage: 0, color: "Blanco", fuel: "HIBRIDO", transmission: "AUTOMATICO", img: "552998_Honda_s_all-new_Prelude_e_HEV_sports_coupe.jpg", category: "auto" },
  { brand: "Land Rover", model: "Defender Td5", year: 2004, price: 35000, currency: "USD", mileage: 185000, color: "Verde", fuel: "DIESEL", transmission: "MANUAL", img: "land-rover-defender-td5-3.jpg", category: "suv" },
  { brand: "Volkswagen", model: "Karmann Ghia Classic", year: 1965, price: 32000, currency: "USD", mileage: 92000, color: "Rojo", fuel: "NAFTA", transmission: "MANUAL", img: "68f924b57a1641226a24b499_Volkswagen-Karmann-Ghia.jpg", category: "auto" },
];

async function seed() {
  console.log("Iniciando carga definitiva de 15 vehiculos...");
  
  for (let i = 0; i < 15; i++) {
    const template = VEHICLE_TEMPLATES[i % VEHICLE_TEMPLATES.length];
    const sourcePath = path.join(SOURCE_DIR, template.img);
    
    if (!fs.existsSync(sourcePath)) {
      console.warn(`Imagen no hallada: ${template.img}, saltando...`);
      continue;
    }

    const uniqueId = crypto.randomUUID();
    const ext = path.extname(template.img);
    const fileName = `${uniqueId}${ext}`;
    const destPath = path.join(DEST_DIR, fileName);
    
    fs.copyFileSync(sourcePath, destPath);
    const publicUrl = `/uploads/vehicles/${fileName}`;

    const variantPrice = template.price + (Math.floor(Math.random() * 2000) - 1000);
    
    const vehicle = await prisma.vehicle.create({
      data: {
        brand: template.brand,
        model: template.model + (i >= 10 ? " (Limited)" : ""),
        year: template.year,
        price: variantPrice,
        currency: template.currency,
        mileage: template.mileage + (Math.floor(Math.random() * 1000)),
        color: template.color,
        fuel: template.fuel,
        transmission: template.transmission,
        location: "Banfield, Lomas de Zamora",
        description: `Unidad seleccionada en impecable estado. ${template.brand} ${template.model}. Documentación al día, lista para transferir.`,
        status: "APPROVED",
        category: template.category,
        userId: USER_ID,
        agencyId: AGENCY_ID,
        images: {
          create: {
            url: publicUrl,
            isMain: true
          }
        }
      }
    });
    
    console.log(`OK: ${vehicle.brand} ${vehicle.model} - $${vehicle.price}`);
  }
  
  console.log("¡Hecho! 15 vehiculos cargados en tu agencia.");
}

seed().catch(e => {
  console.error(e);
  process.exit(1);
});
