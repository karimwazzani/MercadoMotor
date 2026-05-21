import { ImageResponse } from 'next/og';
import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new ImageResponse(
        (
          <div
            style={{
              fontSize: 60,
              color: 'white',
              background: '#0f0f11',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            MercadoMotor
          </div>
        ),
        { width: 1080, height: 1080 }
      );
    }

    const vehicle = await prisma.vehicle.findUnique({
      where: { id },
      include: { images: { where: { isMain: true }, take: 1 } }
    });

    if (!vehicle) {
      return new Response('Not found', { status: 404 });
    }

    const title = `${vehicle.brand} ${vehicle.model} ${vehicle.version || ""}`.trim();
    const priceText = `${vehicle.currency === "ARS" ? "$" : "US$"} ${vehicle.price.toLocaleString()}`;
    const imageUrl = vehicle.images[0]?.url || "";
    // If it's a relative URL, we need to make it absolute for ImageResponse
    const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.ar";
    const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `${siteUrl}${imageUrl}`;

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#111',
            position: 'relative',
          }}
        >
          {absoluteImageUrl && (
            <img
              src={absoluteImageUrl}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}

          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontSize: 45,
                fontWeight: 'bold',
                color: '#b89759',
                marginBottom: 20,
                letterSpacing: '-0.04em',
                display: 'flex',
              }}
            >
              Mercado<span style={{ color: 'white' }}>Motor</span>
            </div>

            <div
              style={{
                fontSize: 75,
                fontWeight: 800,
                color: 'white',
                textAlign: 'center',
                maxWidth: 1000,
                marginBottom: 40,
                lineHeight: 1.1,
              }}
            >
              {title}
            </div>

            <div
              style={{
                display: 'flex',
                background: '#b89759',
                padding: '15px 40px',
                borderRadius: 12,
                fontSize: 45,
                fontWeight: 'bold',
                color: 'black',
              }}
            >
              {priceText}
            </div>
          </div>
        </div>
      ),
      {
        width: 1080,
        height: 1080,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
