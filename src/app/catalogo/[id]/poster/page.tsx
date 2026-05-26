import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import PosterClient from "./PosterClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprimir Cartel | MercadoMotor",
  robots: "noindex, nofollow"
};

export default async function PosterPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: resolvedParams.id },
    select: {
      id: true,
      brand: true,
      model: true,
      year: true,
      version: true,
      status: true
    }
  });

  if (!vehicle) {
    notFound();
  }

  if (vehicle.status !== "APPROVED") {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#0c0a09', color: '#f5f5f4', fontFamily: 'system-ui, sans-serif', padding: '2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '400px', padding: '2.5rem 2rem', backgroundColor: '#1c1917', borderRadius: '16px', border: '1px solid #292524', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>⚠️</div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.85rem', color: '#b89759', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Cartel No Disponible</h2>
          <p style={{ fontSize: '0.9rem', color: '#a8a29e', lineHeight: 1.6, marginBottom: '2rem' }}>
            La generación del cartel imprimible para el auto solo estará disponible una vez que la publicación sea aprobada y se encuentre activa en el catálogo de MercadoMotor.
          </p>
          <a href="/dashboard" style={{ display: 'inline-block', backgroundColor: '#b89759', color: '#0c0a09', padding: '0.75rem 1.75rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 4px 12px rgba(184, 151, 89, 0.2)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-1px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
            Volver al Panel
          </a>
        </div>
      </div>
    );
  }

  const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.ar";

  return <PosterClient vehicle={vehicle} siteUrl={siteUrl} />;
}
