import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { uploadToCloud, supabase } from "@/lib/storage";
import prisma from "@/lib/prisma";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const awaitedParams = await params;
    const vehicleId = awaitedParams.id;

    // Verificar propiedad
    const existingVehicle = await prisma.vehicle.findUnique({
      where: { id: vehicleId },
      include: { images: true }
    });

    if (!existingVehicle || existingVehicle.userId !== userId) {
      return NextResponse.json({ message: "Vehículo no encontrado o protegido." }, { status: 403 });
    }

    const formData = await req.formData();
    
    // Extracción de datos base
    const category = formData.get("category") as string;
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

    // Manejar imagenes a eliminar
    const imagesToDeleteJson = formData.get("imagesToDelete") as string;
    let imagesToDelete: string[] = [];
    if (imagesToDeleteJson) {
      try {
        imagesToDelete = JSON.parse(imagesToDeleteJson);
      } catch (e) {
        console.error("No se pudo parsear imagesToDelete");
      }
    }

    const imageOrderJson = formData.get("imageOrder") as string;
    let imageOrder: { type: "existing" | "new"; id?: string; index?: number }[] = [];
    if (imageOrderJson) {
      try {
        imageOrder = JSON.parse(imageOrderJson);
      } catch (e) {
        console.error("No se pudo parsear imageOrder");
      }
    }

    // Proceso 1: Destrucción local y en DB de imagenes seleccionadas
    if (imagesToDelete.length > 0) {
      const imagesToNuke = await prisma.image.findMany({
        where: { id: { in: imagesToDelete }, vehicleId }
      });

      for (const img of imagesToNuke) {
        if (img.url.includes("/uploads/")) {
           try {
              const fileName = img.url.split("/uploads/")[1];
              if (fileName) {
                await supabase.storage.from("uploads").remove([fileName]);
              }
           } catch (err) {
              console.error(`No se pudo eliminar el archivo de la nube ${img.url}`, err);
           }
        }
      }

      await prisma.image.deleteMany({
        where: { id: { in: imagesToDelete } }
      });
    }

    // Proceso 2: Agregar nuevas fotos
    const newFiles = (formData.getAll("newImages") as File[]).filter(f => f.name && f.size > 0);
    const uploadedUrls: string[] = [];

    if (newFiles.length > 0) {
      for (let i = 0; i < newFiles.length; i++) {
        const file = newFiles[i];
        const publicUrl = await uploadToCloud(file, "vehicles");
        uploadedUrls.push(publicUrl);
      }
    }

    const hasImageOrder = imageOrder.length > 0;
    const uploadedImagesPaths: { url: string; order: number; isMain: boolean }[] = [];

    if (!hasImageOrder) {
      // Legacy fallback
      const remainingImagesCount = existingVehicle.images.length - imagesToDelete.length;
      let startingOrder = Math.max(0, remainingImagesCount);

      if (uploadedUrls.length > 0) {
        for (let i = 0; i < uploadedUrls.length; i++) {
          uploadedImagesPaths.push({
            url: uploadedUrls[i],
            order: startingOrder + i,
            isMain: startingOrder === 0 && i === 0, 
          });
        }
      }

      // Asegurar si borramos la main image obligar a la primera remanente a ser isMain=true
      if (imagesToDelete.length > 0) {
        const dbImages = await prisma.image.findMany({
          where: { 
            vehicleId,
            NOT: { id: { in: imagesToDelete } }
          },
          orderBy: { order: 'asc' }
        });
        
        if (dbImages.length > 0 && !dbImages.some(img => img.isMain) && uploadedImagesPaths.length === 0) {
          await prisma.image.update({
            where: { id: dbImages[0].id },
            data: { isMain: true }
          });
        }
      }
    }

    // LÓGICA DE ALERTA DE PRECIO Y PRECIO ANTERIOR
    const newPrice = parseFloat(price);
    let previousPriceToStore = existingVehicle.previousPrice;

    if (newPrice < existingVehicle.price) {
      previousPriceToStore = existingVehicle.price;
      // ... trigger notifications logic will follow ...
    } else if (newPrice > existingVehicle.price) {
      previousPriceToStore = null; // Si subió el precio, reseteamos el anterior
    }

    const updatedVehicle = await prisma.vehicle.update({
      where: { id: vehicleId },
      data: {
        category,
        brand,
        model,
        version,
        year: parseInt(year),
        mileage: parseInt(mileage) || 0,
        fuel,
        transmission,
        color,
        doors: doors ? parseInt(doors) : null,
        traction,
        location,
        price: newPrice,
        previousPrice: previousPriceToStore,
        currency,
        description,
        equipment,
        acceptsTradeIn,
        acceptsFinancing,
        status: "PENDING", // Devuelto a revision
        ...(!hasImageOrder ? {
          images: {
            create: uploadedImagesPaths
          }
        } : {})
      }
    });

    if (hasImageOrder) {
      for (let i = 0; i < imageOrder.length; i++) {
        const item = imageOrder[i];
        if (item.type === "existing") {
          await prisma.image.update({
            where: { id: item.id },
            data: {
              order: i,
              isMain: i === 0
            }
          });
        } else if (item.type === "new") {
          const newUrl = uploadedUrls[item.index!];
          if (newUrl) {
            await prisma.image.create({
              data: {
                url: newUrl,
                order: i,
                isMain: i === 0,
                vehicleId: vehicleId
              }
            });
          }
        }
      }
    }

    if (newPrice < existingVehicle.price) {
      console.log(`[DEBUG] Price Drop Detected! Searching for interested users...`);
      // 1. Buscar a todos los que tienen este auto en favoritos
      const interestedUsers = await prisma.favorite.findMany({
        where: { vehicleId },
        include: { user: true }
      });

      console.log(`[DEBUG] Found ${interestedUsers.length} interested users.`);

      const oldPriceStr = `${existingVehicle.currency === 'ARS' ? '$' : 'US$'} ${existingVehicle.price.toLocaleString()}`;
      const newPriceStr = `${currency === 'ARS' ? '$' : 'US$'} ${newPrice.toLocaleString()}`;

      for (const favorite of interestedUsers) {
        if (favorite.user.email) {
          console.log(`[DEBUG] Notifying user: ${favorite.user.email}`);
          // 2. Crear notificación en DB (la campanita)
          await prisma.notification.create({
            data: {
              userId: favorite.user.id,
              title: "🔥 ¡Baja de precio!",
              message: `El ${updatedVehicle.brand} ${updatedVehicle.model} que te interesa bajó a ${newPriceStr}`,
              link: `/catalogo/${vehicleId}`,
              type: "PRICE_DROP"
            }
          });

          // 3. Enviar Mail (Simulado)
          const { sendPriceDropEmail } = await import("@/lib/mailer");
          await sendPriceDropEmail(
            favorite.user.email,
            `${updatedVehicle.brand} ${updatedVehicle.model}`,
            oldPriceStr,
            newPriceStr,
            `${process.env.NEXTAUTH_URL}/catalogo/${vehicleId}`
          );
        }
      }
    }

    return NextResponse.json({ message: "Corregido exitosamente" }, { status: 200 });

  } catch (error) {
    console.error("Editing API failed:", error);
    return NextResponse.json({ message: "Ocurrió un error al actualizar" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const awaitedParams = await params;
    const vehicleId = awaitedParams.id;

    // Verificar propiedad
    const vehicle = await prisma.vehicle.findUnique({
      where: { id: vehicleId },
      include: { images: true }
    });

    if (!vehicle || vehicle.userId !== userId) {
      return NextResponse.json({ message: "No tienes permiso para borrar este vehículo." }, { status: 403 });
    }

    // Borrar archivos de imagen de Supabase
    for (const img of vehicle.images) {
      if (img.url.includes("/uploads/")) {
        try {
          const fileName = img.url.split("/uploads/")[1];
          if (fileName) {
            await supabase.storage.from("uploads").remove([fileName]);
          }
        } catch (e) {
          console.error("Error al borrar archivo en la nube:", e);
        }
      }
    }

    // El borrado en DB de images ocurre por Cascade onDelete en el schema.prisma
    await prisma.vehicle.delete({
      where: { id: vehicleId }
    });

    return NextResponse.json({ message: "Publicación eliminada correctamente" });

  } catch (error) {
    console.error("Delete API failed:", error);
    return NextResponse.json({ message: "Error al eliminar la publicación" }, { status: 500 });
  }
}
