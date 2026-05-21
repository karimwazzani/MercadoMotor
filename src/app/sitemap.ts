import { MetadataRoute } from 'next'
import prisma from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXTAUTH_URL || 'https://mercadomotor.ar'

  // Fetch all vehicles
  const vehicles = await prisma.vehicle.findMany({
    where: { 
      status: 'APPROVED',
      OR: [
        { expiresAt: null },
        { expiresAt: { gt: new Date() } }
      ]
    },
    select: { id: true, updatedAt: true }
  })

  // Fetch all agencies
  const agencies = await prisma.agency.findMany({
    where: { status: 'APPROVED' },
    select: { slug: true, updatedAt: true }
  })

  const vehicleUrls = vehicles.map((v) => ({
    url: `${siteUrl}/catalogo/${v.id}`,
    lastModified: v.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const agencyUrls = agencies.filter(a => a.slug).map((a) => ({
    url: `${siteUrl}/agencia/${a.slug}`,
    lastModified: a.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/catalogo`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/agencias`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...vehicleUrls,
    ...agencyUrls,
  ]
}
