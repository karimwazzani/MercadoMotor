import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendPasswordResetEmail } from "@/lib/mailer";
import { verifyTurnstileToken } from "@/lib/captcha";
import { forgotPasswordSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validar el cuerpo de la petición mediante esquema Zod
    const validationResult = forgotPasswordSchema.safeParse(body);
    if (!validationResult.success) {
      const firstErrorMessage = validationResult.error.issues[0]?.message || "Datos inválidos";
      return NextResponse.json({ message: firstErrorMessage }, { status: 400 });
    }

    const { email, captchaToken } = validationResult.data;

    // Validar captcha de Turnstile primero para evitar spam masivo de correos
    const isCaptchaValid = await verifyTurnstileToken(captchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json({ message: "La verificación de seguridad (Captcha) falló. Reintentalo." }, { status: 400 });
    }

    // 1. Verificar si el usuario existe
    const user = await prisma.user.findUnique({
      where: { email }
    });

    // Por seguridad (prevención de enumeración de emails), respondemos con éxito
    // incluso si el correo no está registrado en el sistema.
    if (!user) {
      return NextResponse.json({ 
        message: "Si el correo está registrado, recibirás un enlace para restablecer tu contraseña." 
      }, { status: 200 });
    }

    // 2. Limpiar tokens antiguos de restablecimiento para este email
    await prisma.verificationToken.deleteMany({
      where: { identifier: email + ":reset" }
    });

    // 3. Generar nuevo token seguro y con expiración de 1 hora
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const expires = new Date(Date.now() + 1 * 60 * 60 * 1000); // 1 hora

    // 4. Guardar token en VerificationToken
    await prisma.verificationToken.create({
      data: {
        identifier: email + ":reset",
        token,
        expires
      }
    });

    // 5. Enviar el correo electrónico
    const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.ar";
    const resetLink = `${siteUrl}/auth/reset-password?token=${token}`;
    await sendPasswordResetEmail(email, resetLink);

    return NextResponse.json({ 
      message: "Si el correo está registrado, recibirás un enlace para restablecer tu contraseña." 
    }, { status: 200 });

  } catch (error: any) {
    console.error("Error Forgot Password:", error);
    return NextResponse.json({ 
      message: "Ocurrió un error técnico procesando tu solicitud.",
      details: error.message
    }, { status: 500 });
  }
}
