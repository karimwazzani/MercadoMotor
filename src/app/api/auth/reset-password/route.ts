import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json({ message: "Faltan campos obligatorios" }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ message: "La contraseña debe tener al menos 8 caracteres" }, { status: 400 });
    }

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

    return NextResponse.json({ message: "Contraseña restablecida con éxito." }, { status: 200 });

  } catch (error: any) {
    console.error("Error Reset Password API:", error);
    return NextResponse.json({ 
      message: "Ocurrió un error técnico procesando tu solicitud.",
      details: error.message
    }, { status: 500 });
  }
}
