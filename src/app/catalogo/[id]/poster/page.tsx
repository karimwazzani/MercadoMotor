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
      version: true
    }
  });

  if (!vehicle) {
    notFound();
  }

  const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.ar";

  return <PosterClient vehicle={vehicle} siteUrl={siteUrl} />;
}
