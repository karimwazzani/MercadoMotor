const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

// List of target emails to keep script idempotent
const MOCK_EMAILS = [
  "agencia.lider@gmail.com",
  "patagonia.motors@gmail.com",
  "norte.autos@gmail.com",
  "deluxe.cars@gmail.com",
  "vip.agencia@gmail.com",
  "juan.perez@gmail.com",
  "maria.gomez@gmail.com",
  "carlos.rodriguez@gmail.com",
  "lucia.fernandez@gmail.com",
  "diego.sanchez@gmail.com"
];

async function main() {
  console.log("🚀 Iniciando el proceso de seed personalizado...");

  // --- PASO 1: Copiar fotos del sistema local al proyecto ---
  const sourceDir = "C:\\Users\\karim\\OneDrive\\Documentos\\AutoVirtual";
  const targetDir = path.join(__dirname, "..", "public", "seed-images");

  if (!fs.existsSync(sourceDir)) {
    console.error(`❌ La carpeta origen no existe en ${sourceDir}. Abortando...`);
    process.exit(1);
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`📁 Creada la carpeta destino: ${targetDir}`);
  }

  const files = fs.readdirSync(sourceDir);
  console.log(`📸 Encontrados ${files.length} archivos en la carpeta de fotos.`);

  // Copiar archivos
  files.forEach((file) => {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(targetDir, file);
    fs.copyFileSync(srcPath, destPath);
  });
  console.log("✅ Todas las fotos fueron copiadas con éxito a public/seed-images/");

  // --- PASO 2: Limpieza de base de datos previa ---
  console.log("🧹 Limpiando base de datos previa...");
  await prisma.user.deleteMany({
    where: {
      email: { in: MOCK_EMAILS }
    }
  });
  console.log("✅ Base de datos limpia de usuarios mock anteriores.");

  // Hashing password
  const hashedPassword = await bcrypt.hash("auto123", 10);

  // --- PASO 3: Crear los 10 Usuarios ---
  console.log("👥 Registrando 10 nuevos usuarios (5 Particulares, 5 Agencias)...");

  // Particulares
  const particularesData = [
    { name: "Juan", lastName: "Pérez", email: "juan.perez@gmail.com", phone: "+54 11 5566-7788", location: "CARLOS INGENIERI, TRES DE FEBRERO, BUENOS AIRES" },
    { name: "María", lastName: "Gómez", email: "maria.gomez@gmail.com", phone: "+54 261 4455-667", location: "9 DE JULIO, 9 DE JULIO, BUENOS AIRES" },
    { name: "Carlos", lastName: "Rodríguez", email: "carlos.rodriguez@gmail.com", phone: "+54 351 9988-776", location: "ADROGUE, ALMIRANTE BROWN, BUENOS AIRES" },
    { name: "Lucía", lastName: "Fernández", email: "lucia.fernandez@gmail.com", phone: "+54 11 3322-1100", location: "BALCARCE, BALCARCE, BUENOS AIRES" },
    { name: "Diego", lastName: "Sánchez", email: "diego.sanchez@gmail.com", phone: "+54 341 6677-889", location: "BARADERO, BARADERO, BUENOS AIRES" }
  ];

  const particulars = [];
  for (const u of particularesData) {
    const user = await prisma.user.create({
      data: {
        name: u.name,
        lastName: u.lastName,
        email: u.email,
        phone: u.phone,
        location: u.location,
        password: hashedPassword,
        accountType: "PARTICULAR",
        status: "ACTIVE"
      }
    });
    particulars.push(user);
  }

  // Agencias
  const agenciasData = [
    {
      name: "Agencia Líder",
      email: "agencia.lider@gmail.com",
      phone: "+54 11 4433-2211",
      tradeName: "Líder Motors",
      slug: "lider-motors",
      description: "Concesionaria líder en vehículos premium y usados seleccionados. Más de 15 años de trayectoria.",
      address: "Av. Del Libertador 2200",
      city: "ADROGUE",
      province: "BUENOS AIRES",
      coverImage: "/seed-images/Ferrari-296-GTB-Viola-Hong-Kong-Steinschlagschutzfolierung-in-XPEL-Ultimate-Plus-PPF-Lackschutz-Folie-MD-exclusive-cardesign-Autofolierung-NRW-2.jpg",
      logo: "/seed-images/hero-image-xs.jpg"
    },
    {
      name: "Patagonia Motors",
      email: "patagonia.motors@gmail.com",
      phone: "+54 294 4556-9900",
      tradeName: "Patagonia Motors",
      slug: "patagonia-motors",
      description: "Especialistas en camionetas 4x4, SUVs y vehículos listos para la aventura patagónica.",
      address: "Av. Bustillo Km 4",
      city: "BALCARCE",
      province: "BUENOS AIRES",
      coverImage: "/seed-images/Land-Rover-Defender-130-V8.jpg",
      logo: "/seed-images/land-rover-defender-td5-3.jpg"
    },
    {
      name: "Norte Autos",
      email: "norte.autos@gmail.com",
      phone: "+54 387 5544-3322",
      tradeName: "Norte Autos",
      slug: "norte-autos",
      description: "La mayor variedad de vehículos urbanos, familiares y utilitarios del norte argentino.",
      address: "Av. Belgrano 1450",
      city: "9 DE JULIO",
      province: "BUENOS AIRES",
      coverImage: "/seed-images/images_original_15164-volkswagengolfgtiperformance.jpg",
      logo: "/seed-images/383.jpg"
    },
    {
      name: "Deluxe Cars",
      email: "deluxe.cars@gmail.com",
      phone: "+54 11 9988-0099",
      tradeName: "Deluxe Cars Premium",
      slug: "deluxe-cars",
      description: "Importadores de vehículos exóticos, alta gama, clásicos de colección y deportivos de raza.",
      address: "Av. Figueroa Alcorta 3300",
      city: "BARADERO",
      province: "BUENOS AIRES",
      coverImage: "/seed-images/Ferrari-296-GTB-Viola-Hong-Kong-Steinschlagschutzfolierung-in-XPEL-Ultimate-Plus-PPF-Lackschutz-Folie-MD-exclusive-cardesign-Autofolierung-NRW-2.jpg",
      logo: "/seed-images/68f924b57a1641226a24b499_Volkswagen-Karmann-Ghia.jpg"
    },
    {
      name: "VIP Agencia",
      email: "vip.agencia@gmail.com",
      phone: "+54 11 7766-5544",
      tradeName: "VIP Auto Sport",
      slug: "vip-auto-sport",
      description: "Atención personalizada, consignaciones y gestoría integral para la compra y venta de tu auto.",
      address: "Av. Santa Fe 4500",
      city: "BOLIVAR",
      province: "BUENOS AIRES",
      coverImage: "/seed-images/552998_Honda_s_all-new_Prelude_e_HEV_sports_coupe.jpg",
      logo: "/seed-images/Honda-Prelude-1991.jpg"
    }
  ];

  const agencies = [];
  for (const a of agenciasData) {
    const user = await prisma.user.create({
      data: {
        name: a.name,
        email: a.email,
        phone: a.phone,
        password: hashedPassword,
        accountType: "AGENCIA",
        status: "ACTIVE"
      }
    });

    const agency = await prisma.agency.create({
      data: {
        userId: user.id,
        tradeName: a.tradeName,
        slug: a.slug,
        description: a.description,
        address: a.address,
        city: a.city,
        province: a.province,
        phone: a.phone,
        whatsapp: a.phone,
        status: "APPROVED",
        featured: true,
        logo: a.logo,
        coverImage: a.coverImage
      }
    });

    // Crear sucursal
    await prisma.branch.create({
      data: {
        agencyId: agency.id,
        name: "Casa Central",
        address: a.address,
        city: a.city,
        province: a.province,
        phone: a.phone,
        manager: "Gerente Comercial"
      }
    });

    agencies.push({ user, agency });
  }

  console.log("✅ Todos los usuarios y minisitios de agencias creados con éxito.");

  // --- PASO 4: Definición de vehículos a publicar ---
  console.log("🚗 Generando 40 publicaciones únicas de vehículos...");

  // Estructuras de datos para armar variedad
  const fuelOptions = ["Nafta", "Diesel", "Híbrido", "Eléctrico"];
  const transmissionOptions = ["Manual", "Automática"];
  const colorsList = ["Rojo", "Negro", "Plata", "Gris", "Azul", "Blanco", "Otro"];
  const locationsList = [
    "ADROGUE, ALMIRANTE BROWN, BUENOS AIRES",
    "BALCARCE, BALCARCE, BUENOS AIRES",
    "9 DE JULIO, 9 DE JULIO, BUENOS AIRES",
    "BARADERO, BARADERO, BUENOS AIRES",
    "BOLIVAR, BOLIVAR, BUENOS AIRES",
    "BRAGADO, BRAGADO, BUENOS AIRES",
    "CAMPANA, CAMPANA, BUENOS AIRES"
  ];

  const baseVehicles = [
    // 1. Karmann Ghia 1959
    {
      category: "De colección",
      brand: "Volkswagen",
      model: "Karmann Ghia",
      version: "Coupe 1200",
      year: 1959,
      mileage: 152000,
      price: 34500,
      currency: "USD",
      description: "Volkswagen Karmann Ghia Coupe modelo 1959 en impecable estado de conservación histórica. Motor boxer refrigerado por aire de 1200cc funcionando a la perfección. Carrocería e interior 100% original. Una verdadera pieza de colección única en el país.",
      imageFiles: ["1959-volkswagen-karmann-ghia-coupe-img-4766-08359-scaled-6741196835bf3.jpg", "68f924b57a1641226a24b499_Volkswagen-Karmann-Ghia.jpg"],
      equipment: ["Llantas de aleación clásicas", "Radio de época funcional", "Tapizados de cuero originales", "Auxilio original"],
      fuel: "Nafta",
      transmission: "Manual"
    },
    // 2. Honda Prelude 2024
    {
      category: "Autos",
      brand: "Honda",
      model: "Prelude",
      version: "e:HEV Sports Coupe",
      year: 2024,
      mileage: 0,
      price: 64900,
      currency: "USD",
      description: "El regreso de una leyenda. Nuevo Honda Prelude e:HEV Sports Coupe Híbrido 2024. Diseño aerodinámico vanguardista, motorización híbrida autorrecargable de última generación que eroga 184 CV. Máximo confort, seguridad activa Honda Sensing y exclusividad total. Unidad 0km para entrega inmediata.",
      imageFiles: ["552998_Honda_s_all-new_Prelude_e_HEV_sports_coupe.jpg", "Honda Prelude.jpg"],
      equipment: ["Cámara de visión 360", "Frenos ABS con EBD", "Alarma antirrobo", "Control de tracción", "Climatizador automático bizona", "Pantalla táctil de 12 pulgadas", "Apple CarPlay y Android Auto sin cable", "Faros Full LED direccionales"],
      fuel: "Híbrido",
      transmission: "Automática"
    },
    // 3. Land Rover Defender 130 V8
    {
      category: "Camionetas / SUV",
      brand: "Land Rover",
      model: "Defender",
      version: "130 V8 Premium",
      year: 2023,
      mileage: 8200,
      price: 195000,
      currency: "USD",
      description: "Land Rover Defender 130 V8 de 8 plazas. Motor naftero V8 sobrealimentado de 5.0 litros con 525 CV. Capacidad off-road insuperable, suspensión neumática adaptativa, terminaciones ultra-premium en cuero Windsor, techo solar panorámico doble y tecnología todoterreno Terrain Response 2 Configurable. Estado igual a nuevo.",
      imageFiles: ["Land-Rover-Defender-130-V8.jpg", "land-rover-defender-td5-3.jpg"],
      equipment: ["Techo solar corredizo", "Tracción 4x4 integral permanente", "Airbags frontales y laterales", "Climatizador trizona", "Cámara 360 virtual 3D", "Llantas de 22 pulgadas", "Sonido Meridian Signature de 700W"],
      fuel: "Nafta",
      transmission: "Automática"
    },
    // 4. Ferrari 296 GTB Viola
    {
      category: "Autos",
      brand: "Ferrari",
      model: "296 GTB",
      version: "Assetto Fiorano Hybrid",
      year: 2022,
      mileage: 1850,
      price: 435000,
      currency: "USD",
      description: "Espectacular Ferrari 296 GTB terminada en exclusivo color Viola. Motorización híbrida enchufable V6 biturbo acoplada a un motor eléctrico, desarrollando una potencia combinada de 830 CV. Equipamiento Assetto Fiorano de fibra de carbono. PPF protector XPEL Ultimate Plus aplicado en el 100% de la unidad. Documentación al día, lista para transferir.",
      imageFiles: ["Ferrari-296-GTB-Viola-Hong-Kong-Steinschlagschutzfolierung-in-XPEL-Ultimate-Plus-PPF-Lackschutz-Folie-MD-exclusive-cardesign-Autofolierung-NRW-2.jpg", "z9KcpnwQA_2000x1500__1.jpg"],
      equipment: ["Frenos carbono cerámicos", "Llantas de carbono ultra-livianas", "Suspensión de competición Fiorano", "Butacas deportivas Daytona", "Paquete aerodinámico activo"],
      fuel: "Híbrido",
      transmission: "Automática"
    },
    // 5. Land Rover Defender Spectre
    {
      category: "Camionetas / SUV",
      brand: "Land Rover",
      model: "Defender",
      version: "Spectre Edition 110 TD5",
      year: 2018,
      mileage: 26000,
      price: 125000,
      currency: "USD",
      description: "Edición especial Himalaya Land Rover Defender Spectre Edition. Homenaje a la mítica unidad de la película de James Bond. Malacate delantero Warn, jaula antivuelco externa completa, neumáticos off-road de 37 pulgadas Maxxis Trepador, suspensión sobreelevada Fox y motorización TD5 potenciada. Una bestia única diseñada para superar cualquier obstáculo.",
      imageFiles: ["himalaya-land-rover-defender-spectre.jpg", "land-rover-defender-td5-3.jpg"],
      equipment: ["Malacate eléctrico frontal", "Neumáticos mud-terrain 37'", "AmortiguadoresFox regulables", "Snorkel safari de vadeo", "Jaula antivuelco perimetral", "Faros auxiliares de alta potencia"],
      fuel: "Diesel",
      transmission: "Manual"
    },
    // 6. Yamaha Raptor 700R
    {
      category: "Moto / UTV / Cuatriciclo",
      brand: "Yamaha",
      model: "Raptor",
      version: "700R Special Edition",
      year: 2021,
      mileage: 2500,
      price: 13900,
      currency: "USD",
      description: "Cuatriciclo Yamaha Raptor 700R Special Edition. En perfectas condiciones de mecánica y estética. Motor monocilíndrico de 686cc con inyección electrónica de combustible. Amortiguadores de gas regulables Piggyback. Cuenta con accesorios instalados: escape FMF Powercore, pisaderas DCS de aluminio y ensanchadores traseros.",
      imageFiles: ["YAMAHA-RAPTOR-700CC.jpg", "98.jpg"],
      equipment: ["Escape de competición FMF", "Pisaderas de aluminio DCS", "Amortiguadores regulables a gas", "Arranque eléctrico", "Defensa delantera de aluminio"],
      fuel: "Nafta",
      transmission: "Manual"
    },
    // 7. Can-Am Outlander 800R Xmr
    {
      category: "Moto / UTV / Cuatriciclo",
      brand: "Can-Am",
      model: "Outlander",
      version: "800R Xmr Mud Racer",
      year: 2016,
      mileage: 4800,
      price: 17200,
      currency: "USD",
      description: "Can-Am Outlander 800R Xmr diseñado de fábrica para el barro. Motor Rotax V-Twin de 800cc de alto desempeño. Radiador reubicado en el tope frontal, llantas con traba de talón (Beadlock), neumáticos de barro de 28 pulgadas, dirección asistida dinámica de 3 modos (DPS) y suspensión neumática controlada electrónicamente Fox ACS. Listo para barro extremo.",
      imageFiles: ["CAN-AM-BRPOutlander800RXmr-3690_1.jpg", "the-can-am-xmr-based-on-the-long-wheelbase-outlander-max-represents-can-am-s.jpg"],
      equipment: ["Radiador elevado Xmr", "Suspensión Fox regulable por aire", "Llantas con Beadlock", "Dirección asistida DPS", "Neumáticos especiales de barro"],
      fuel: "Nafta",
      transmission: "Automática"
    },
    // 8. Volkswagen Golf GTI Performance
    {
      category: "Autos",
      brand: "Volkswagen",
      model: "Golf",
      version: "GTI 2.0 TSI Performance",
      year: 2019,
      mileage: 58000,
      price: 36800,
      currency: "USD",
      description: "Volkswagen Golf GTI Performance 2.0 TSI de 230 CV con caja automática DSG de 6 marchas. Service oficiales al día en concesionario de la marca. Llantas de 18 pulgadas, tablero digital Active Info Display, faros Full LED traseros con giros dinámicos y audio premium Fender. Estado completamente original sin ningún tipo de chipeo ni reformas.",
      imageFiles: ["images_original_15164-volkswagengolfgtiperformance.jpg", "383.jpg"],
      equipment: ["Climatizador automático bizona", "Pantalla táctil de 8 pulgadas con GPS", "Tablero digital Active Info Display", "Audio premium Fender", "Faros Full LED direccionales", "Butacas deportivas tela escocesa GTI"],
      fuel: "Nafta",
      transmission: "Automática"
    },
    // 9. Honda Prelude 1991 Clásico
    {
      category: "Autos",
      brand: "Honda",
      model: "Prelude",
      version: "2.0i 16V 4WS",
      year: 1991,
      mileage: 189000,
      price: 11500,
      currency: "USD",
      description: "Honda Prelude 2.0i 16v año 1991 equipado con el innovador sistema de dirección en las 4 ruedas (4WS - Four Wheel Steering) completamente mecánico y funcional. Pintura original de fábrica, techo solar eléctrico, tapizados e interior sin ningún faltante ni desgaste anormal. Service completo recién realizado (correas y fluidos). Excelente oportunidad.",
      imageFiles: ["Honda-Prelude-1991.jpg", "Honda-Prelude.jpg.webp", "honda-prelude-69026c9d26a84.jpg"],
      equipment: ["Techo solar eléctrico corredizo", "Sistema de dirección 4WS", "Alzacristales eléctricos", "Llantas de aleación originales", "Faros rebatibles automáticos (pop-up)"],
      fuel: "Nafta",
      transmission: "Manual"
    }
  ];

  // Proceduralmente generaremos 40 anuncios únicos combinando y alternando datos
  for (let i = 0; i < 40; i++) {
    // Tomar una base y variarla
    const base = baseVehicles[i % baseVehicles.length];
    
    // Seleccionar usuario mock al azar
    const isAgency = i % 2 === 0; // Alternamos Agencia y Particular
    let userCreator, agencyCreator;
    
    if (isAgency) {
      const idx = (i / 2) % agencies.length;
      userCreator = agencies[idx].user;
      agencyCreator = agencies[idx].agency;
    } else {
      const idx = Math.floor(i / 2) % particulars.length;
      userCreator = particulars[idx];
    }

    // Variaciones
    const variantYear = base.year + (i % 3 === 0 ? 1 : i % 3 === 1 ? -1 : 0);
    const variantMileage = base.mileage === 0 ? 0 : Math.max(1000, base.mileage + (i * 2500) - 15000);
    const variantPrice = Math.round(base.price * (0.9 + (i % 5) * 0.05));
    const variantColor = colorsList[i % colorsList.length];
    const variantFuel = base.fuel || fuelOptions[i % fuelOptions.length];
    const variantTransmission = base.transmission || transmissionOptions[i % transmissionOptions.length];
    const variantLocation = locationsList[i % locationsList.length];
    
    // Si la versión existe, le agregamos una variante
    let variantVersion = base.version;
    if (i % 2 === 0 && variantVersion) {
      variantVersion = `${variantVersion} S-Line`;
    } else if (i % 3 === 0 && variantVersion) {
      variantVersion = `${variantVersion} Exclusive`;
    }

    // Nombre de modelo único o alternativo
    let finalModel = base.model;
    if (i >= baseVehicles.length) {
      finalModel = `${base.model} ${i % 3 === 0 ? "Evo" : i % 3 === 1 ? "Plus" : ""}`.trim();
    }

    // Equipamiento en JSON
    const equipmentStr = JSON.stringify(base.equipment);

    // Crear Vehículo
    const vehicle = await prisma.vehicle.create({
      data: {
        userId: userCreator.id,
        agencyId: agencyCreator ? agencyCreator.id : null,
        category: base.category,
        condition: variantMileage === 0 ? "0KM" : "USADO",
        brand: base.brand,
        model: finalModel,
        version: variantVersion,
        year: variantYear,
        mileage: variantMileage,
        fuel: variantFuel,
        transmission: variantTransmission,
        color: variantColor,
        doors: base.category === "Moto / UTV / Cuatriciclo" ? null : (i % 3 === 0 ? 3 : 5),
        traction: base.category === "Camionetas / SUV" ? "4x4" : "Frenos traseros/delanteros",
        location: variantLocation,
        price: variantPrice,
        currency: base.currency,
        description: `${base.description}\n\nUnidad exclusiva ofrecida por ${agencyCreator ? agencyCreator.tradeName : userCreator.name + " " + userCreator.lastName}. Ubicación: ${variantLocation}. Excelente oportunidad de financiación y permutas.`,
        equipment: equipmentStr,
        acceptsTradeIn: i % 2 === 0,
        acceptsFinancing: i % 3 === 0,
        status: "APPROVED",
        isHighlighted: i % 3 === 0, // 30% destacados
        views: Math.floor(Math.random() * 250) + 10,
        whatsappClicks: Math.floor(Math.random() * 40) + 1,
        phoneClicks: Math.floor(Math.random() * 20)
      }
    });

    // Crear Galería de Imágenes
    const imageFilesToUse = base.imageFiles;
    for (let imgIdx = 0; imgIdx < imageFilesToUse.length; imgIdx++) {
      await prisma.image.create({
        data: {
          vehicleId: vehicle.id,
          url: `/seed-images/${imageFilesToUse[imgIdx]}`,
          order: imgIdx,
          isMain: imgIdx === 0
        }
      });
    }
  }

  console.log("✅ Se crearon exitosamente 40 anuncios únicos de vehículos!");
  console.log("🌟 El seed personalizado finalizó de forma correcta y espectacular!");
}

main()
  .catch((e) => {
    console.error("❌ Error ejecutando el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
