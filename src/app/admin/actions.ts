"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { sendVehicleApprovedEmail, sendVehicleRejectedEmail } from "@/lib/mailer";

// Verica que la sesión actual sea Administrator antes de cualquier mutación
async function verifyAdmin() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
    throw new Error("Acceso no autorizado.");
  }
}

export async function approveVehicle(vehicleId: string) {
  try {
    await verifyAdmin();

    // Al aprobar, le damos 45 dias de vida a la publicacion
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 45);

    const vehicle = await prisma.vehicle.update({
      where: { id: vehicleId },
      data: { 
        status: "APPROVED",
        approvedAt: new Date(),
        expiresAt: expirationDate
      },
      include: {
        user: true
      }
    });

    // Enviar correo de aprobación de forma asíncrona (background)
    if (vehicle?.user?.email) {
      sendVehicleApprovedEmail(vehicle.user.email, vehicle.brand, vehicle.model, vehicle.id).catch((err) => {
        console.error("❌ Falló el envío de correo de aprobación de publicación:", err);
      });
    }

    revalidatePath("/admin");
    revalidatePath("/catalogo");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Approval failed:", error);
    return { success: false, message: error.message };
  }
}

export async function rejectVehicle(vehicleId: string, rejectionComment?: string) {
  try {
    await verifyAdmin();

    const vehicle = await prisma.vehicle.update({
      where: { id: vehicleId },
      data: { 
        status: "REJECTED",
        rejectionComment: rejectionComment || null
      },
      include: {
        user: true
      }
    });

    // Enviar correo de rechazo de forma asíncrona (background)
    if (vehicle?.user?.email) {
      sendVehicleRejectedEmail(vehicle.user.email, vehicle.brand, vehicle.model, rejectionComment).catch((err) => {
        console.error("❌ Falló el envío de correo de rechazo de publicación:", err);
      });
    }

    revalidatePath("/admin");
    revalidatePath("/catalogo");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function deleteVehicle(vehicleId: string) {
  try {
    await verifyAdmin();
    await prisma.vehicle.delete({
      where: { id: vehicleId }
    });
    revalidatePath("/admin");
    revalidatePath("/catalogo");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function deleteUser(userId: string) {
  try {
    await verifyAdmin();
    
    await prisma.vehicle.deleteMany({
      where: { userId }
    });
    
    await prisma.agency.deleteMany({
      where: { userId }
    });

    await prisma.user.delete({
      where: { id: userId }
    });
    
    revalidatePath("/admin");
    revalidatePath("/catalogo");
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function updateUser(userId: string, data: any) {
  try {
    await verifyAdmin();
    await prisma.user.update({
      where: { id: userId },
      data
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

// ADVERTISEMENT ACTIONS
export async function createAd(data: any) {
  try {
    await verifyAdmin();
    await prisma.advertisement.create({
      data: {
        title: data.title,
        type: data.type,
        mediaUrl: data.mediaUrl,
        linkUrl: data.linkUrl,
        page: data.page,
        areaKey: data.areaKey,
        isActive: true,
        startDate: new Date(data.startDate),
        endDate: data.endDate ? new Date(data.endDate) : null
      }
    });
    revalidatePath("/");
    revalidatePath("/catalogo");
    revalidatePath("/admin");
    return { success: true };
  } catch (error: any) {
    console.error("Ad creation failed:", error);
    return { success: false, message: error.message };
  }
}

export async function deleteAd(adId: string) {
  try {
    await verifyAdmin();
    await prisma.advertisement.delete({
      where: { id: adId }
    });
    revalidatePath("/");
    revalidatePath("/catalogo");
    revalidatePath("/admin");
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

