import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { vehicleId, notes } = body;

    if (!vehicleId) {
      return NextResponse.json({ message: "ID de vehículo requerido" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user?.email as string }
    });

    if (!user) {
      return NextResponse.json({ message: "Usuario no hallado" }, { status: 404 });
    }

    // Buscar si ya lo tiene marcado como favorito
    const existingFav = await prisma.favorite.findUnique({
      where: {
        userId_vehicleId: {
          userId: user.id,
          vehicleId
        }
      }
    });

    if (!existingFav) {
      return NextResponse.json({ message: "La publicación no está en tus favoritos" }, { status: 404 });
    }

    // Actualizar las anotaciones en la tabla de Favoritos
    const updatedFav = await prisma.favorite.update({
      where: { id: existingFav.id },
      data: { notes }
    });

    return NextResponse.json({ success: true, notes: updatedFav.notes });
  } catch (error: any) {
    console.error("❌ Error actualizando notas de favorito:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}
