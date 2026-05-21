import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma"; // Importar la instancia global
import { uploadToCloud } from "@/lib/storage";
import { sendVehiclePendingEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const accountType = (session.user as any).accountType;

    const formData = await req.formData();
    
    // Extraer campos
    const category = formData.get("category") as string;
    const condition = formData.get("condition") as string;
    const brand = formData.get("brand") as string;
    const model = formData.get("model") as string;
    const version = formData.get("version") as string;
    const year = formData.get("year") as string;
    const location = formData.get("location") as string;
    const mileage = formData.get("mileage") as string;
    const fuel = formData.get("fuel") as string;
    const transmission = formData.get("transmission") as string;
    const color = formData.get("color") as string;
    const doors = formData.get("doors") as string;
    const traction = formData.get("traction") as string;
    const price = formData.get("price") as string;
    const currency = formData.get("currency") as string;
    const description = formData.get("description") as string;
    const acceptsTradeIn = formData.get("acceptsTradeIn") === "true";
    const acceptsFinancing = formData.get("acceptsFinancing") === "true";
    const equipment = formData.get("equipment") as string;

    // Validación básica
    if (!category || !brand || !model || !year || !location || !price) {
      return NextResponse.json({ message: "Faltan campos obligatorios" }, { status: 400 });
    }

    // Procesar las imágenes
    const files = formData.getAll("images") as File[];
    const uploadedImagesPaths: { url: string; order: number; isMain: boolean }[] = [];

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file && file.name) {
          const publicUrl = await uploadToCloud(file, "vehicles");
          uploadedImagesPaths.push({
            url: publicUrl,
            order: i,
            isMain: i === 0,
          });
        }
      }
    } else {
      uploadedImagesPaths.push({ 
        url: category === "auto" ? "/auto.png" : category === "pickup" ? "/pickup.png" : "/suv.png", 
        isMain: true, 
        order: 0 
      });
    }

    let agencyId = null;
    if (accountType === "AGENCIA") {
      const agency = await prisma.agency.findFirst({ where: { userId } });
      if (agency) agencyId = agency.id;
    }

    // Crear el vehículo
    const newVehicle = await prisma.vehicle.create({
      data: {
        userId,
        agencyId,
        category,
        condition: condition || "USADO",
        brand,
        model,
        version: version || null,
        year: parseInt(year) || 0,
        mileage: parseInt(mileage) || 0,
        fuel: fuel || null,
        transmission: transmission || null,
        color: color || null,
        doors: doors ? (parseInt(doors) || null) : null,
        traction: traction || null,
        location,
        price: parseFloat(price) || 0,
        currency: currency || "USD",
        description: description || null,
        equipment: equipment || "[]",
        acceptsTradeIn,
        acceptsFinancing,
        status: "PENDING", 
        images: {
          create: uploadedImagesPaths
        }
      }
    });

    // Enviar correo de publicación en proceso de revisión en segundo plano (no bloqueante)
    if (session.user.email) {
      sendVehiclePendingEmail(session.user.email, brand, model).catch((err) => {
        console.error("❌ Falló el envío de correo de confirmación de publicación:", err);
      });
    }

    // Procesar programa de referidos
    const referralCode = formData.get("referralCode") as string;
    if (referralCode && referralCode !== userId) {
      try {
        // Buscar el último vehículo aprobado del usuario que invitó
        const referrerLastVehicle = await prisma.vehicle.findFirst({
          where: { userId: referralCode, status: "APPROVED" },
          orderBy: { createdAt: "desc" }
        });

        if (referrerLastVehicle) {
          const expiresAt = new Date();
          expiresAt.setDate(expiresAt.getDate() + 7);
          
          await prisma.vehicle.update({
            where: { id: referrerLastVehicle.id },
            data: { 
              isHighlighted: true,
              highlightExpiresAt: expiresAt
            }
          });
          console.log(`[Referral] Bono de destacado otorgado a ${referralCode} por el auto de ${userId}`);
        }
      } catch (err) {
        console.error("Error processing referral bonus:", err);
      }
    }

    return NextResponse.json({ message: "Vehículo publicado con éxito", vehicleId: newVehicle.id }, { status: 201 });

  } catch (error: any) {
    console.error("Publishing API failed:", error);
    return NextResponse.json({ 
      message: "Error al guardar: " + (error.message || "Error desconocido")
    }, { status: 500 });
  }
}
