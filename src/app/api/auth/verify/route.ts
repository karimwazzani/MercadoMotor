import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.com.ar";

    if (!token) {
      return NextResponse.redirect(`${siteUrl}/auth/login?error=MissingToken`);
    }

    // 1. Buscar el token de verificación
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token }
    });

    if (!verificationToken) {
      return NextResponse.redirect(`${siteUrl}/auth/login?error=InvalidToken`);
    }

    // 2. Validar expiración
    if (verificationToken.expires < new Date()) {
      // Eliminar token expirado
      await prisma.verificationToken.delete({
        where: { token }
      });
      return NextResponse.redirect(`${siteUrl}/auth/login?error=ExpiredToken`);
    }

    // 3. Activar el usuario
    const userEmail = verificationToken.identifier;
    const user = await prisma.user.findUnique({
      where: { email: userEmail }
    });

    if (!user) {
      return NextResponse.redirect(`${siteUrl}/auth/login?error=UserNotFound`);
    }

    await prisma.user.update({
      where: { email: userEmail },
      data: {
        emailVerified: new Date(),
        status: "ACTIVE"
      }
    });

    // 4. Eliminar el token usado
    await prisma.verificationToken.delete({
      where: { token }
    });

    // 5. Redireccionar al login con éxito
    return NextResponse.redirect(`${siteUrl}/auth/login?verified=true`);

  } catch (error) {
    console.error("Error Verification Callback:", error);
    const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.com.ar";
    return NextResponse.redirect(`${siteUrl}/auth/login?error=TechnicalError`);
  }
}
