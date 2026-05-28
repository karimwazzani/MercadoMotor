import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { ids, action } = body;

    if (!ids || !Array.isArray(ids) || ids.length === 0 || !action) {
      return NextResponse.json({ message: "Parámetros inválidos" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user?.email as string }
    });

    if (!user) {
      return NextResponse.json({ message: "Usuario no hallado" }, { status: 404 });
    }

    // Verify ownership of all requested vehicles (unless admin)
    const vehicles = await prisma.vehicle.findMany({
      where: {
        id: { in: ids },
        userId: user.id
      }
    });

    if (vehicles.length !== ids.length && (session.user as any).accountType !== "ADMINISTRADOR") {
      return NextResponse.json({ message: "Acceso denegado a algunas de las publicaciones." }, { status: 403 });
    }

    if (action === "pause") {
      await prisma.vehicle.updateMany({
        where: { id: { in: ids } },
        data: { status: "PAUSED" }
      });
    } else if (action === "finalize") {
      await prisma.vehicle.updateMany({
        where: { id: { in: ids } },
        data: {
          status: "SOLD",
          finishedAt: new Date(),
          endReason: "BULK_FINISH"
        }
      });
    } else if (action === "resume") {
      await prisma.vehicle.updateMany({
        where: { id: { in: ids } },
        data: { status: "APPROVED" }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Bulk status action failed:", error);
    return NextResponse.json({ message: "Error del servidor" }, { status: 500 });
  }
}
