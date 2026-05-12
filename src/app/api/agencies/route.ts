import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { uploadToCloud } from "@/lib/storage";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const formData = await req.formData();
    const tradeName = formData.get("tradeName") as string;
    const description = formData.get("description") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const province = formData.get("province") as string;
    const phone = formData.get("phone") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const instagram = formData.get("instagram") as string;
    const facebook = formData.get("facebook") as string;
    const openingHours = formData.get("openingHours") as string;
    const website = formData.get("website") as string;
    let slug = formData.get("slug") as string;

    if (!tradeName) {
      return NextResponse.json({ error: "El nombre comercial es obligatorio" }, { status: 400 });
    }

    // Generar slug si no existe
    if (!slug) {
      slug = tradeName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    // Verificar si el slug ya existe
    const existingSlug = await prisma.agency.findUnique({ where: { slug } });
    if (existingSlug) {
      slug = `${slug}-${crypto.randomBytes(2).toString('hex')}`;
    }

    // Procesar Logo y Cover
    const logoFile = formData.get("logo") as File | null;
    const coverFile = formData.get("cover") as File | null;
    
    let logoPath = null;
    let coverPath = null;

    if (logoFile && logoFile.size > 0) {
      logoPath = await uploadToCloud(logoFile, "agencies");
    }

    if (coverFile && coverFile.size > 0) {
      coverPath = await uploadToCloud(coverFile, "agencies");
    }

    // Crear la agencia
    const agency = await prisma.agency.create({
      data: {
        userId: (session.user as any).id,
        tradeName,
        slug,
        description,
        address,
        city,
        province,
        phone,
        whatsapp,
        instagram,
        facebook,
        openingHours,
        website,
        logo: logoPath,
        coverImage: coverPath,
        status: "PENDING"
      }
    });

    // Notificar a los administradores
    const admins = await prisma.user.findMany({
      where: { accountType: "ADMINISTRADOR" }
    });

    for (const admin of admins) {
      await prisma.notification.create({
        data: {
          userId: admin.id,
          title: "Nueva Agencia Registrada",
          message: `La agencia "${tradeName}" ha registrado su perfil y está pendiente de revisión.`,
          link: "/admin/agencies",
          type: "SYSTEM"
        }
      });
    }

    return NextResponse.json(agency);
  } catch (error) {
    console.error("Error creating agency:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const formData = await req.formData();
    const tradeName = formData.get("tradeName") as string;
    const description = formData.get("description") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const province = formData.get("province") as string;
    const phone = formData.get("phone") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const instagram = formData.get("instagram") as string;
    const facebook = formData.get("facebook") as string;
    const openingHours = formData.get("openingHours") as string;
    const website = formData.get("website") as string;
    const slug = formData.get("slug") as string;

    const existingAgency = await prisma.agency.findFirst({
      where: { userId: (session.user as any).id }
    });

    if (!existingAgency) {
      return NextResponse.json({ error: "Agencia no encontrada" }, { status: 404 });
    }

    // Procesar Logo y Cover (solo si se suben nuevos)
    const logoFile = formData.get("logo") as File | null;
    const coverFile = formData.get("cover") as File | null;
    
    let logoPath = existingAgency.logo;
    let coverPath = existingAgency.coverImage;

    if (logoFile && logoFile.size > 0) {
      logoPath = await uploadToCloud(logoFile, "agencies");
    }

    if (coverFile && coverFile.size > 0) {
      coverPath = await uploadToCloud(coverFile, "agencies");
    }

    const branchesData = formData.get("branches") ? JSON.parse(formData.get("branches") as string) : [];

    // Actualizar la agencia y sus sucursales
    const updatedAgency = await prisma.agency.update({
      where: { id: existingAgency.id },
      data: {
        tradeName,
        slug: slug || existingAgency.slug,
        description,
        address,
        city,
        province,
        phone,
        whatsapp,
        instagram,
        facebook,
        openingHours,
        website,
        logo: logoPath,
        coverImage: coverPath,
        status: "PENDING",
        branches: {
          deleteMany: {}, // Borrar sucursales anteriores
          create: branchesData.map((b: any) => ({
            name: b.name,
            city: b.city,
            province: b.province,
            phone: b.phone,
            manager: b.manager,
            address: b.address || ""
          }))
        }
      }
    });

    // Notificar a los administradores de la actualización
    const admins = await prisma.user.findMany({
      where: { accountType: "ADMINISTRADOR" }
    });

    for (const admin of admins) {
      await prisma.notification.create({
        data: {
          userId: admin.id,
          title: "Minisitio Actualizado",
          message: `La agencia "${tradeName}" ha actualizado su minisitio o información de sucursales.`,
          link: "/admin/agencies",
          type: "SYSTEM"
        }
      });
    }

    return NextResponse.json(updatedAgency);
  } catch (error) {
    console.error("Error updating agency:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const agency = await prisma.agency.findFirst({
    where: { userId: (session.user as any).id },
    include: { branches: true }
  });

  return NextResponse.json(agency);
}
