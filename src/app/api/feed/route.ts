import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.ar";

    // Fetch all approved vehicles that are not expired
    const vehicles = await prisma.vehicle.findMany({
      where: {
        status: "APPROVED",
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } }
        ]
      },
      include: {
        images: {
          where: { isMain: true },
          take: 1
        }
      },
      orderBy: { createdAt: "desc" }
    });

    // Build XML RSS 2.0 Feed
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>MercadoMotor Catalog</title>
    <link>${siteUrl}</link>
    <description>Catálogo dinámico de vehículos de MercadoMotor</description>
`;

    for (const vehicle of vehicles) {
      const mainImage = vehicle.images[0]?.url || "";
      const imageUrl = mainImage.startsWith('http') ? mainImage : `${siteUrl}${mainImage}`;
      
      const title = `${vehicle.brand} ${vehicle.model} ${vehicle.version || ""} ${vehicle.year}`.trim();
      const description = vehicle.description ? vehicle.description.replace(/[<>]/g, '') : title;
      
      const priceString = `${vehicle.price} ${vehicle.currency === "ARS" ? "ARS" : "USD"}`;
      
      xml += `
    <item>
      <g:id>${vehicle.id}</g:id>
      <g:title><![CDATA[${title}]]></g:title>
      <g:description><![CDATA[${description}]]></g:description>
      <g:link>${siteUrl}/catalogo/${vehicle.id}</g:link>
      <g:image_link><![CDATA[${imageUrl}]]></g:image_link>
      <g:brand><![CDATA[${vehicle.brand}]]></g:brand>
      <g:condition>${vehicle.condition === "0KM" ? "new" : "used"}</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>${priceString}</g:price>
      <g:google_product_category>Vehicles &amp; Parts &gt; Vehicles</g:google_product_category>
    </item>`;
    }

    xml += `
  </channel>
</rss>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate'
      }
    });
  } catch (error) {
    console.error("Error generating XML feed:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
