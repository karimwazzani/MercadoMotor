import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    const body = await req.json();
    const { status, reason } = body;

    if (!status) {
      return NextResponse.json({ message: "Status requerido" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user?.email as string }
    });

    if (!user) {
      return NextResponse.json({ message: "Usuario no hallado" }, { status: 404 });
    }

    const vehicle = await prisma.vehicle.findUnique({
      where: { id: resolvedParams.id }
    });

    if (!vehicle) {
      return NextResponse.json({ message: "Vehículo no hallado" }, { status: 404 });
    }

    if (vehicle.userId !== user.id && (session.user as any).accountType !== "ADMINISTRADOR") {
      return NextResponse.json({ message: "Acceso denegado" }, { status: 403 });
    }

    const updated = await prisma.vehicle.update({
      where: { id: resolvedParams.id },
      data: {
        status: status,
        ...(status === "SOLD" || status === "PAUSED" ? { finishedAt: new Date() } : { finishedAt: null }),
        ...(reason ? { endReason: reason } : {})
      }
    });

    return NextResponse.json({ success: true, vehicle: updated });
  } catch (error: any) {
    console.error("Status update failed:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}
