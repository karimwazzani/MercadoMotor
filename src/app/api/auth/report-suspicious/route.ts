import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendSuspiciousActivityAlertToAdmins } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const { email, token } = await req.json();

    if (!email || !token) {
      return NextResponse.json({ message: "Faltan campos obligatorios" }, { status: 400 });
    }

    // 1. Buscar el token en VerificationToken
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token }
    });

    if (!verificationToken || verificationToken.identifier !== `${email}:report`) {
      return NextResponse.json({ message: "El enlace de seguridad es inválido o no corresponde a este usuario" }, { status: 400 });
    }

    // 2. Validar expiración
    if (verificationToken.expires < new Date()) {
      await prisma.verificationToken.delete({
        where: { token }
      });
      return NextResponse.json({ message: "El enlace de seguridad ha expirado" }, { status: 400 });
    }

    // 3. Suspender la cuenta del usuario de forma preventiva
    await prisma.user.update({
      where: { email },
      data: { status: "SUSPENDED" }
    });

    // 4. Eliminar el token de reporte para evitar ejecuciones múltiples
    await prisma.verificationToken.delete({
      where: { token }
    });

    // 5. Enviar correo de alerta automática al administrador
    const adminEmail = process.env.ADMIN_EMAIL || "hola@mercadomotor.ar";
    
    // Disparar envío en segundo plano
    sendSuspiciousActivityAlertToAdmins(email, adminEmail).catch((err) => {
      console.error("❌ Falló el envío de alerta de seguridad al administrador:", err);
    });

    return NextResponse.json({ message: "Cuenta suspendida preventivamente con éxito." }, { status: 200 });

  } catch (error: any) {
    console.error("Error en Report Suspicious API:", error);
    return NextResponse.json({ 
      message: "Ocurrió un error técnico procesando tu reporte.",
      details: error.message
    }, { status: 500 });
  }
}
