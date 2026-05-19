import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/mailer";
import { verifyTurnstileToken } from "@/lib/captcha";
import { registerSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validar cuerpo de la petición con esquema Zod estricto
    const validationResult = registerSchema.safeParse(body);
    if (!validationResult.success) {
      const firstErrorMessage = validationResult.error.issues[0]?.message || "Datos de registro inválidos";
      return NextResponse.json({ message: firstErrorMessage }, { status: 400 });
    }

    const { 
      name, 
      email, 
      password, 
      accountType, 
      tradeName, 
      lastName, 
      phone, 
      location, 
      captchaToken 
    } = validationResult.data;

    // 2. Validar Turnstile Captcha
    const isCaptchaValid = await verifyTurnstileToken(captchaToken);
    if (!isCaptchaValid) {
      return NextResponse.json({ message: "La verificación de seguridad (Captcha) falló. Reintentalo." }, { status: 400 });
    }

    if (accountType as string === "ADMINISTRADOR") {
      return NextResponse.json({ message: "Rol no permitido en registro público" }, { status: 403 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      if (existingUser.status === "PENDING_VERIFICATION") {
        // --- RE-ENVIAR EL CORREO DE VERIFICACIÓN SI YA EXISTE PERO ESTÁ PENDIENTE ---
        // 1. Eliminar tokens antiguos
        await prisma.verificationToken.deleteMany({
          where: { identifier: email }
        });

        // 2. Generar nuevo token seguro y expiración
        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 horas

        await prisma.verificationToken.create({
          data: {
            identifier: email,
            token,
            expires
          }
        });

        // 3. Enviar el correo de verificación
        const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.com.ar";
        const verificationLink = `${siteUrl}/api/auth/verify?token=${token}`;
        await sendVerificationEmail(email, verificationLink);

        return NextResponse.json({ 
          message: "Se ha reenviado el correo de activación. Por favor, revisa tu bandeja de entrada." 
        }, { status: 201 });
      }

      return NextResponse.json(
        { message: "Ya existe un usuario con este correo electrónico" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser;

    if (accountType === "AGENCIA") {
      if (!tradeName || !phone || !location) {
        return NextResponse.json({ message: "Completá los datos comerciales obligatorios" }, { status: 400 });
      }

      const slug = tradeName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.random().toString(36).substring(2, 6);
      
      newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          accountType,
          phone,
          location,
          status: "PENDING_VERIFICATION", // Inactivo hasta que verifique
          agencies: {
            create: {
              tradeName,
              slug,
              phone,
              city: location,
            }
          }
        },
      });
    } else {
      // Usuario Particular
      if (!lastName || !phone) {
        return NextResponse.json({ message: "Tu apellido y celular son necesarios" }, { status: 400 });
      }

      newUser = await prisma.user.create({
        data: {
          name,
          lastName,
          phone,
          email,
          password: hashedPassword,
          accountType,
          location,
          status: "PENDING_VERIFICATION", // Inactivo hasta que verifique
        },
      });
    }

    // --- GENERAR Y GUARDAR EL TOKEN DE VERIFICACIÓN ---
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 horas

    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token,
        expires
      }
    });

    // --- ENVIAR EL CORREO DE VERIFICACIÓN ---
    const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.com.ar";
    const verificationLink = `${siteUrl}/api/auth/verify?token=${token}`;
    await sendVerificationEmail(email, verificationLink);

    return NextResponse.json({ 
      message: "Registro exitoso. Por favor, revisa tu correo electrónico para activar tu cuenta.", 
      user: { id: newUser.id, email: newUser.email } 
    }, { status: 201 });

  } catch (error: any) {
    console.error("Error Registration:", error);
    return NextResponse.json({ 
      message: "Error técnico: " + (error.message || "Error desconocido"),
      details: error
    }, { status: 500 });
  }
}
