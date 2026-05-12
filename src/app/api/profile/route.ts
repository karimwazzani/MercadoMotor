import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ message: "No autorizado" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email as string },
    include: { agencies: true } // Traemos la data de agencia si la tiene
  });

  return NextResponse.json(user);
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ message: "No autorizado" }, { status: 401 });

  try {
    const formData = await req.formData();
    
    // Obtenemos el usuario autenticado
    const user = await prisma.user.findUnique({
      where: { email: session.user?.email as string },
      include: { agencies: true }
    });

    if (!user) return NextResponse.json({ message: "Usuario no hallado" }, { status: 404 });

    // Procesamiento de Imagen (Logo o Avatar)
    const file = formData.get("image") as File | null;
    let imageUrl = null;

    if (file && file.size > 0) {
      const uploadDir = path.join(process.cwd(), "public", "uploads", "profiles");
      await fs.mkdir(uploadDir, { recursive: true });

      const extension = path.extname(file.name);
      const uniqueId = crypto.randomUUID();
      const fileName = `${uniqueId}${extension}`;
      const filePath = path.join(uploadDir, fileName);

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await fs.writeFile(filePath, buffer);

      imageUrl = `/uploads/profiles/${fileName}`;
    }

    if (user.accountType === "AGENCIA") {
      const tradeName = formData.get("tradeName") as string;
      const phone = formData.get("phone") as string;
      const city = formData.get("city") as string;
      const address = formData.get("address") as string;
      const website = formData.get("website") as string;
      const description = formData.get("description") as string;
      
      const agencyId = user.agencies[0]?.id;
      if (!agencyId) return NextResponse.json({ message: "Agencia huérfana" }, { status: 400 });

      const agencyData: any = { tradeName, phone, city, address, website, description };
      if (imageUrl) agencyData.logo = imageUrl;

      await prisma.agency.update({
        where: { id: agencyId },
        data: agencyData
      });
      
      await prisma.user.update({
        where: { id: user.id },
        data: { phone, ...(imageUrl ? { image: imageUrl } : {}) }
      });

      return NextResponse.json({ message: "Perfil corporativo actualizado", logo: imageUrl });

    } else {
      // PARTICULAR
      const name = formData.get("name") as string;
      const lastName = formData.get("lastName") as string;
      const phone = formData.get("phone") as string;
      const location = formData.get("location") as string;

      const userData: any = { name, lastName, phone, location };
      if (imageUrl) userData.image = imageUrl;

      await prisma.user.update({
        where: { id: user.id },
        data: userData
      });

      return NextResponse.json({ message: "Perfil particular actualizado", avatar: imageUrl });
    }

  } catch (error: any) {
    console.error("Error guardando perfil:", error);
    return NextResponse.json({ message: "Error del servidor", error: error.message }, { status: 500 });
  }
}
