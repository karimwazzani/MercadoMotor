import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendRenewalNotificationEmail } from "@/lib/mailer";

// Este GET puede gatillarse diariamente a la madrugada mediante Vercel Cron
export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    
    // Si estuviésemos en producción con Vercel, validaríamos el header protector de CRON
    // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    //   return new Response("No Autorizado", { status: 401 });
    // }

    const today = new Date();
    
    const fiveDaysFromNow = new Date();
    fiveDaysFromNow.setDate(today.getDate() + 5);

    // Definimos el rango del 5to día (00:00 a 23:59)
    const startOfTargetDay = new Date(fiveDaysFromNow.setHours(0,0,0,0));
    const endOfTargetDay = new Date(fiveDaysFromNow.setHours(23,59,59,999));

    // Buscar todos los vehículos Aprobados que expiran exactamente en 5 dias
    const expiringVehicles = await prisma.vehicle.findMany({
      where: {
        status: "APPROVED",
        expiresAt: {
          gte: startOfTargetDay,
          lte: endOfTargetDay
        }
      },
      include: {
        user: true
      }
    });

    let emailsEnviados = 0;

    for (const vehicle of expiringVehicles) {
      if (vehicle.user && vehicle.user.email) {
        await sendRenewalNotificationEmail(
            vehicle.user.email, 
            `${vehicle.brand} ${vehicle.model} ${vehicle.year}`
        );
        emailsEnviados++;
      }
    }

    return NextResponse.json({ message: "Cron Ejecutado con Éxito", emailsEnviados });

  } catch (error) {
    console.error("CronJob Failed:", error);
    return NextResponse.json({ message: "Falla Cron" }, { status: 500 });
  }
}
