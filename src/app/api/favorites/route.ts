import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";


// Obtener los favoritos del usuario actual
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ message: "No autorizado" }, { status: 401 });

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user?.email as string }
    });

    if (!user) return NextResponse.json({ message: "Usuario no hallado" }, { status: 404 });

    const favorites = await prisma.favorite.findMany({
      where: { userId: user.id },
      include: {
        vehicle: {
          include: {
            images: { orderBy: { order: 'asc' } },
            agency: true,
            user: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json(favorites.map(f => f.vehicle));
  } catch (error: any) {
    console.error("Error fetching favorites:", error);
    return NextResponse.json({ message: "Error interno" }, { status: 500 });
  }
}

// Alternar favorito (Toggle)
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ message: "No autorizado" }, { status: 401 });

  try {
    const body = await req.json();
    const { vehicleId } = body;

    if (!vehicleId) return NextResponse.json({ message: "ID de vehículo requerido" }, { status: 400 });

    const user = await prisma.user.findUnique({
      where: { email: session.user?.email as string }
    });

    if (!user) return NextResponse.json({ message: "Usuario no hallado" }, { status: 404 });

    // Verificar si ya es favorito
    const existingFav = await prisma.favorite.findUnique({
      where: {
        userId_vehicleId: {
          userId: user.id,
          vehicleId
        }
      }
    });

    if (existingFav) {
      // Eliminar de favoritos
      await prisma.favorite.delete({
        where: { id: existingFav.id }
      });
      return NextResponse.json({ isFavorite: false, message: "Eliminado de favoritos" });
    } else {
      // Agregar a favoritos
      await prisma.favorite.create({
        data: {
          userId: user.id,
          vehicleId
        }
      });
      return NextResponse.json({ isFavorite: true, message: "Agregado a favoritos" });
    }
  } catch (error: any) {
    console.error("Error toggling favorite:", error);
    return NextResponse.json({ message: "Error interno" }, { status: 500 });
  }
}
