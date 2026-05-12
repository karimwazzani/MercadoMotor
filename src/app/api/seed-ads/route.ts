import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    console.log('Iniciando seed de publicidades...');
    
    const ads = [
      {
        title: 'Seguros Premium AutoVirtual',
        type: 'IMAGE',
        mediaUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200&h=250',
        linkUrl: 'https://www.autovirtual.com',
        page: 'HOME',
        areaKey: 'HOME_INTERSTITIAL',
        isActive: true,
        startDate: new Date(),
      },
      {
        title: 'Financiación Tasa 0%',
        type: 'IMAGE',
        mediaUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200&h=250',
        linkUrl: 'https://www.autovirtual.com',
        page: 'HOME',
        areaKey: 'HOME_PRE_NEW',
        isActive: true,
        startDate: new Date(),
      },
      {
        title: 'Hanza Neumáticos',
        type: 'IMAGE',
        mediaUrl: 'https://images.unsplash.com/photo-1549411425-63238b725b73?auto=format&fit=crop&q=80&w=600&h=600',
        linkUrl: 'https://www.autovirtual.com',
        page: 'CATALOGO',
        areaKey: 'CAT_SIDEBAR',
        isActive: true,
        startDate: new Date(),
      },
      {
        title: 'Detailing Profesional',
        type: 'IMAGE',
        mediaUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=320&h=450',
        linkUrl: 'https://www.autovirtual.com',
        page: 'CATALOGO',
        areaKey: 'CAT_GRID_NATIVE',
        isActive: true,
        startDate: new Date(),
      },
      {
        title: 'Mantenimiento Oficial AutoVirtual',
        type: 'IMAGE',
        mediaUrl: 'https://images.unsplash.com/photo-1632823471410-afe7358f3830?auto=format&fit=crop&q=80&w=1200&h=150',
        linkUrl: 'https://www.autovirtual.com',
        page: 'DETALLE',
        areaKey: 'DETAIL_SIDEBAR',
        isActive: true,
        startDate: new Date(),
      },
      {
        title: 'Plan Canje AutoVirtual',
        type: 'IMAGE',
        mediaUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200&h=250',
        linkUrl: 'https://www.autovirtual.com',
        page: 'DETALLE',
        areaKey: 'DETAIL_BOTTOM',
        isActive: true,
        startDate: new Date(),
      }
    ];

    // Limpiar previas para no duplicar si se refresca
    await prisma.advertisement.deleteMany({
      where: { title: { in: ads.map(a => a.title) } }
    });

    for (const ad of ads) {
      await prisma.advertisement.create({ data: ad });
    }

    return NextResponse.json({ message: "Publicidades de prueba cargadas con éxito" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
