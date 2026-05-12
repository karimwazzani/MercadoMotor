import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('Seeding local database...')

  // Clean
  await prisma.vehicle.deleteMany()
  await prisma.user.deleteMany()

  // Create standard user
  const user = await prisma.user.create({
    data: {
      accountType: 'PARTICULAR',
      name: 'Juan',
      lastName: 'Pérez',
      email: 'juan@autovirtual.com',
      password: 'hashed_password_placeholder', // Dummy
      location: 'Buenos Aires',
    }
  })

  // Create agencies
  const agencyUser = await prisma.user.create({
    data: {
      accountType: 'AGENCIA',
      name: 'Admin',
      lastName: 'Agencia',
      email: 'contacto@agenciapremium.com',
      password: 'hashed_password_placeholder',
    }
  })
  
  const agency = await prisma.agency.create({
    data: {
      userId: agencyUser.id,
      tradeName: 'Premium Motors',
      status: 'APPROVED',
      city: 'Capital Federal',
    }
  })

  // Insert dummy vehicles matching our visuals
  await prisma.vehicle.create({
    data: {
      userId: agencyUser.id,
      agencyId: agency.id,
      category: 'suv',
      brand: 'Audi',
      model: 'Q8',
      version: '3.0 TFSI',
      year: 2023,
      mileage: 15000,
      price: 115000,
      currency: 'USD',
      location: 'Capital Federal',
      status: 'APPROVED',
      isHighlighted: true,
      images: {
        create: [{ url: '/suv.png', isMain: true }]
      }
    }
  })

  await prisma.vehicle.create({
    data: {
      userId: user.id,
      category: 'camioneta',
      brand: 'Ford',
      model: 'F-150',
      version: 'Lariat Luxury',
      year: 2022,
      mileage: 42000,
      price: 89500,
      currency: 'USD',
      location: 'Buenos Aires',
      status: 'APPROVED',
      isHighlighted: true,
      images: {
        create: [{ url: '/pickup.png', isMain: true }]
      }
    }
  })

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
