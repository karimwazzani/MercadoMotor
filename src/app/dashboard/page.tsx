import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Mi Panel | MercadoMotor",
  description: "Gestioná tus publicaciones y vehículos a la venta en MercadoMotor.",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/login");
  }

  const userId = (session.user as any).id;
  const accountType = (session.user as any).accountType || "PARTICULAR";
  
  const myVehicles = await prisma.vehicle.findMany({
    where: { userId },
    include: { images: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <DashboardClient 
      initialVehicles={myVehicles} 
      userId={userId} 
      accountType={accountType} 
    />
  );
}
