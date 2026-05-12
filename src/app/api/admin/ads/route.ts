import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const type = formData.get("type") as string;
    const page = formData.get("page") as string;
    const areaKey = formData.get("areaKey") as string;
    const linkUrl = formData.get("linkUrl") as string;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;
    const file = formData.get("file") as File;

    if (!title || !page || !areaKey || !file) {
      return NextResponse.json({ message: "Faltan campos obligatorios" }, { status: 400 });
    }

    // Procesar archivo
    let mediaUrl = "";
    if (file) {
      const uploadDir = path.join(process.cwd(), "public", "uploads", "ads");
      await fs.mkdir(uploadDir, { recursive: true });

      const extension = path.extname(file.name);
      const uniqueId = crypto.randomUUID();
      const fileName = `${uniqueId}${extension}`;
      const filePath = path.join(uploadDir, fileName);
      
      const bytes = await file.arrayBuffer();
      await fs.writeFile(filePath, Buffer.from(bytes));
      mediaUrl = `/uploads/ads/${fileName}`;
    }

    // Crear anuncio
    const ad = await prisma.advertisement.create({
      data: {
        title,
        type: type === "video" ? "VIDEO" : "IMAGE",
        mediaUrl,
        linkUrl: linkUrl || null,
        page,
        areaKey,
        isActive: true,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null
      }
    });

    return NextResponse.json({ message: "Publicidad creada con éxito", ad }, { status: 201 });

  } catch (error: any) {
    console.error("Ad API failed:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const formData = await req.formData();
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const linkUrl = formData.get("linkUrl") as string;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;
    const isActive = formData.get("isActive") === "on";
    const file = formData.get("file") as File;

    const dataToUpdate: any = {
      title,
      linkUrl: linkUrl || null,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      isActive
    };

    // Si hay un archivo nuevo, procesarlo
    if (file && typeof file !== "string") {
      const uploadDir = path.join(process.cwd(), "public", "uploads", "ads");
      await fs.mkdir(uploadDir, { recursive: true });

      const extension = path.extname(file.name);
      const uniqueId = crypto.randomUUID();
      const fileName = `${uniqueId}${extension}`;
      const filePath = path.join(uploadDir, fileName);
      
      const bytes = await file.arrayBuffer();
      await fs.writeFile(filePath, Buffer.from(bytes));
      dataToUpdate.mediaUrl = `/uploads/ads/${fileName}`;
      // Actualizar tipo basado en archivo
      dataToUpdate.type = file.type.includes("video") ? "VIDEO" : "IMAGE";
    }

    const updatedAd = await prisma.advertisement.update({
      where: { id },
      data: dataToUpdate
    });

    return NextResponse.json(updatedAd);
  } catch (error: any) {
    console.error("Ad API PATCH failed:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const ads = await prisma.advertisement.findMany({
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json(ads);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
