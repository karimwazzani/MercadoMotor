import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { id, status } = await req.json(); // "APPROVED" | "REJECTED"

    const updatedAgency = await prisma.agency.update({
      where: { id },
      data: { status }
    });

    return NextResponse.json(updatedAgency);
  } catch (error) {
    console.error("Error approving agency:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
