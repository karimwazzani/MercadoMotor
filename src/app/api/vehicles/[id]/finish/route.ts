import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    const body = await req.json();
    const { reason } = body;

    if (!reason) {
      return NextResponse.json({ message: "Motivo de finalización requerido" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user?.email as string }
    });

    if (!user) {
      return NextResponse.json({ message: "Usuario no hallado" }, { status: 404 });
    }

    // Buscar el vehículo y verificar propiedad
    const vehicle = await prisma.vehicle.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!vehicle) {
      return NextResponse.json({ message: "Vehículo no hallado" }, { status: 404 });
    }

    if (vehicle.userId !== user.id && (session.user as any).accountType !== "ADMINISTRADOR") {
      return NextResponse.json({ message: "Acceso denegado. No eres el propietario." }, { status: 403 });
    }

    // Definir estado final según el motivo
    // Si lo vendió (por MercadoMotor o fuera), el estado es "SOLD" para poder mostrar el cartel "Vendido" por 24 horas.
    // Si desistió de venderlo o es otro motivo particular, se pone en "PAUSED" para que desaparezca de inmediato sin cartel.
    let finalStatus = "SOLD";
    if (reason === "WITHDRAWN" || reason === "OTHER") {
      finalStatus = "PAUSED";
    }

    const updatedVehicle = await prisma.vehicle.update({
      where: { id: resolvedParams.id },
      data: {
        status: finalStatus,
        finishedAt: new Date(),
        endReason: reason
      }
    });

    // Revalidar rutas para propagar los cambios
    revalidatePath("/catalogo");
    revalidatePath(`/catalogo/${resolvedParams.id}`);
    revalidatePath("/dashboard");
    revalidatePath("/admin");

    return NextResponse.json({ success: true, status: updatedVehicle.status });
  } catch (error: any) {
    console.error("❌ Error finalizando publicación:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}
