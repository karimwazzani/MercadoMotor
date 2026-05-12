import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CARS = [
  { brand: "Porsche", model: "Macan", version: "2.0 T", category: "Autos", price: 125000, year: 2023, mileage: 12000, img: "/suv.png" },
  { brand: "Mercedes Benz", model: "GLC 300", version: "4Matic AMG Line", category: "Autos", price: 95000, year: 2022, mileage: 28000, img: "/suv.png" },
  { brand: "BMW", model: "Serie 3", version: "330i M Sport", category: "Autos", price: 85000, year: 2021, mileage: 45000, img: "/hero_car.png" },
  { brand: "Volkswagen", model: "Amarok", version: "V6 Extreme 3.0 TDI", category: "Camionetas", price: 48000, year: 2024, mileage: 5000, img: "/pickup.png" },
  { brand: "Toyota", model: "Hilux", version: "2.8 SRX 4x4", category: "Camionetas", price: 45000, year: 2022, mileage: 36000, img: "/pickup.png" },
  { brand: "Audi", model: "A5", version: "Sportback 2.0 TFSI", category: "Autos", price: 78000, year: 2020, mileage: 60000, img: "/hero_car.png" },
  { brand: "Land Rover", model: "Range Rover Evoque", version: "R-Dynamic S", category: "Autos", price: 110000, year: 2023, mileage: 15000, img: "/suv.png" },
  { brand: "Jeep", model: "Grand Cherokee", version: "Limited 3.6 V6", category: "Autos", price: 82000, year: 2021, mileage: 41000, img: "/suv.png" },
  { brand: "Ford", model: "Ranger", version: "Raptor 3.0L V6 EcoBoost", category: "Camionetas", price: 95000, year: 2024, mileage: 8000, img: "/pickup.png" },
  { brand: "RAM", model: "1500", version: "Rebel 5.7L V8 HEMI", category: "Camionetas", price: 105000, year: 2023, mileage: 22000, img: "/pickup.png" },
  { brand: "Chevrolet", model: "Camaro", version: "SS 6.2 V8", category: "Autos", price: 90000, year: 2019, mileage: 18000, img: "/hero_car.png" },
  { brand: "Ford", model: "Mustang", version: "GT 5.0 V8", category: "Autos", price: 92000, year: 2020, mileage: 25000, img: "/hero_car.png" },
  { brand: "Volvo", model: "XC90", version: "T8 Recharge Inscription", category: "Autos", price: 135000, year: 2023, mileage: 10000, img: "/suv.png" },
  { brand: "Lexus", model: "RX", version: "450h F-Sport", category: "Autos", price: 118000, year: 2022, mileage: 14000, img: "/suv.png" },
  { brand: "Mercedes Benz", model: "Clase A", version: "A250 AMG Line", category: "Autos", price: 65000, year: 2021, mileage: 39000, img: "/hero_car.png" },
];

async function main() {
  // Buscamos a Karim (o el primer usuario disponible) para adjudicarle los autos
  let user = await prisma.user.findFirst();
  if (!user) {
    console.log("No hay usuarios en la base. Creando uno falso.");
    user = await prisma.user.create({
      data: {
        name: "TestUser",
        email: "test@autovirtual.com",
        accountType: "PARTICULAR",
      }
    });
  }

  console.log(`Inyectando 15 publicaciones PENDING a nombre de ${user.email}...`);

  for (const car of CARS) {
    const vehicle = await prisma.vehicle.create({
      data: {
        userId: user.id,
        brand: car.brand,
        model: car.model,
        version: car.version,
        category: car.category,
        year: car.year,
        mileage: car.mileage,
        price: car.price,
        description: `Espectacular unidad de ${car.brand} ${car.model} en estado prístino. Servicios oficiales en concesionaria documentados. Titular al día, lista para transferir sin detalles ni rayones. Cubiertas Michelin nuevas y tratamiento acrílico cerámico reciente. Una oportunidad única para exigentes.`,
        fuel: "Nafta",
        transmission: "Automática",
        engine: "Motor Turbo Premium",
        doors: 5,
        color: "Gris Plata Metálico",
        location: "Capital Federal",
        acceptsFinancing: true,
        acceptsTradeIn: true,
        status: "PENDING", // CLAVE: Va a la cola de moderación
        images: {
          create: [
            {
              url: car.img,
              isMain: true,
              order: 0,
            },
            {
              url: car.img === "/suv.png" ? "/pickup.png" : "/suv.png",
              isMain: false,
              order: 1,
            }
          ]
        }
      }
    });
    console.log(`- Generado [PENDING]: ${vehicle.brand} ${vehicle.model} ($${vehicle.price})`);
  }

  console.log("✅ Proceso completado. Ve al panel de ADMIN para ver los 15 vehículos.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
