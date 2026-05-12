"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function toggleHighlight(vehicleId: string) {
  const session = await getServerSession(authOptions);
  
  if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
    throw new Error("No Autorizado");
  }

  const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
  
  if (vehicle) {
    await prisma.vehicle.update({
      where: { id: vehicleId },
      data: { isHighlighted: !vehicle.isHighlighted }
    });
  }

  // Refrescar vistas publicas pertinentes
  revalidatePath("/catalogo");
  revalidatePath("/");
}
