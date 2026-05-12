import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Cargando publicidades de prueba...');

  const ads = [
    {
      title: 'Seguros Premium AutoVirtual',
      type: 'IMAGE',
      mediaUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200&h=250',
      linkUrl: 'https://google.com',
      page: 'HOME',
      areaKey: 'HOME_INTERSTITIAL',
      isActive: true,
      startDate: new Date(),
    },
    {
      title: 'Financiación Tasa 0%',
      type: 'IMAGE',
      mediaUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200&h=250',
      linkUrl: 'https://google.com',
      page: 'HOME',
      areaKey: 'HOME_PRE_NEW',
      isActive: true,
      startDate: new Date(),
    },
    {
      title: 'Hanza Neumáticos - Oferta Mes',
      type: 'IMAGE',
      mediaUrl: 'https://images.unsplash.com/photo-1549411425-63238b725b73?auto=format&fit=crop&q=80&w=600&h=600',
      linkUrl: 'https://google.com',
      page: 'CATALOGO',
      areaKey: 'CAT_SIDEBAR',
      isActive: true,
      startDate: new Date(),
    },
    {
      title: 'Detailing Profesional',
      type: 'IMAGE',
      mediaUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=320&h=450',
      linkUrl: 'https://google.com',
      page: 'CATALOGO',
      areaKey: 'CAT_GRID_NATIVE',
      isActive: true,
      startDate: new Date(),
    },
    {
      title: 'Accesorios M-Performance',
      type: 'IMAGE',
      mediaUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600&h=600',
      linkUrl: 'https://google.com',
      page: 'DETALLE',
      areaKey: 'DETAIL_SIDEBAR',
      isActive: true,
      startDate: new Date(),
    },
    {
      title: 'Plan Canje AutoVirtual',
      type: 'IMAGE',
      mediaUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200&h=250',
      linkUrl: 'https://google.com',
      page: 'DETALLE',
      areaKey: 'DETAIL_BOTTOM',
      isActive: true,
      startDate: new Date(),
    }
  ];

  for (const ad of ads) {
    await prisma.advertisement.create({ data: ad });
  }

  console.log('¡Publicidades cargadas con éxito!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
