import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import crypto from "crypto";
import { sendPasswordChangedSuccessEmail } from "@/lib/mailer";
import { resetPasswordSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validar cuerpo de la petición mediante esquema Zod estricto
    const validationResult = resetPasswordSchema.safeParse(body);
    if (!validationResult.success) {
      const firstErrorMessage = validationResult.error.issues[0]?.message || "Datos de restablecimiento inválidos";
      return NextResponse.json({ message: firstErrorMessage }, { status: 400 });
    }

    const { token, password } = validationResult.data;

    // 1. Buscar el token en VerificationToken
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token }
    });

    if (!verificationToken || !verificationToken.identifier.endsWith(":reset")) {
      return NextResponse.json({ message: "El token es inválido o ha expirado" }, { status: 400 });
    }

    // 2. Validar expiración
    if (verificationToken.expires < new Date()) {
      await prisma.verificationToken.delete({
        where: { token }
      });
      return NextResponse.json({ message: "El token ha expirado" }, { status: 400 });
    }

    // 3. Extraer correo real
    const email = verificationToken.identifier.replace(":reset", "");

    // 4. Hashear la nueva contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Actualizar la contraseña del usuario
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword }
    });

    // 6. Eliminar el token de uso único
    await prisma.verificationToken.delete({
      where: { token }
    });

    // 7. Generar un token seguro para reporte de actividad sospechosa (Antihackeo)
    const reportToken = crypto.randomBytes(32).toString("hex");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7); // Válido por 7 días

    await prisma.verificationToken.create({
      data: {
        identifier: `${email}:report`,
        token: reportToken,
        expires
      }
    });

    // Enlace para reporte de hackeo
    const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.ar";
    const reportLink = `${siteUrl}/auth/report-suspicious?email=${encodeURIComponent(email)}&token=${reportToken}`;

    // Enviar correo de éxito con botón "No fui yo" de forma asíncrona (background)
    sendPasswordChangedSuccessEmail(email, reportLink).catch((err) => {
      console.error("❌ Falló el envío de correo de confirmación de cambio de contraseña:", err);
    });

    return NextResponse.json({ message: "Contraseña restablecida con éxito." }, { status: 200 });

  } catch (error: any) {
    console.error("Error Reset Password API:", error);
    return NextResponse.json({ 
      message: "Ocurrió un error técnico procesando tu solicitud.",
      details: error.message
    }, { status: 500 });
  }
}
