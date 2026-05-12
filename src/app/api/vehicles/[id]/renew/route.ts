import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const awaitedParams = await params;
    const vehicleId = awaitedParams.id;

    // Verificar propiedad
    const existingVehicle = await prisma.vehicle.findUnique({
      where: { id: vehicleId }
    });

    if (!existingVehicle || existingVehicle.userId !== userId) {
      return NextResponse.json({ message: "Vehículo no encontrado o protegido." }, { status: 403 });
    }

    if (existingVehicle.status !== "APPROVED") {
        return NextResponse.json({ message: "Solo podés renovar vehículos previamente aprobados." }, { status: 400 });
    }

    const newExpirationDate = new Date();
    newExpirationDate.setDate(newExpirationDate.getDate() + 45);

    // Renovar inyectando 45 días
    await prisma.vehicle.update({
      where: { id: vehicleId },
      data: {
        expiresAt: newExpirationDate
      }
    });

    return NextResponse.json({ message: "Vehículo renovado exitosamente por 45 días" }, { status: 200 });

  } catch (error) {
    console.error("Renewal API failed:", error);
    return NextResponse.json({ message: "Ocurrió un error al renovar" }, { status: 500 });
  }
}
