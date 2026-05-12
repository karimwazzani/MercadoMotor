import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, accountType, tradeName, lastName, phone, city, location } = body;

    if (!name || !email || !password || !accountType) {
      return NextResponse.json({ message: "Faltan campos obligatorios" }, { status: 400 });
    }

    if (accountType === "ADMINISTRADOR") {
      return NextResponse.json({ message: "Rol no permitido en registro público" }, { status: 403 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Ya existe un usuario con este correo electrónico" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (accountType === "AGENCIA") {
      if (!tradeName || !phone || !location) {
        return NextResponse.json({ message: "Completá los datos comerciales obligatorios" }, { status: 400 });
      }

      const slug = tradeName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Math.random().toString(36).substring(2, 6);
      
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          accountType,
          phone,
          location,
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
      return NextResponse.json({ message: "Agencia registrada con éxito", user: newUser }, { status: 201 });
    }

    // Usuario Particular
    if (!lastName || !phone) {
        return NextResponse.json({ message: "Tu apellido y celular son necesarios" }, { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        lastName,
        phone,
        email,
        password: hashedPassword,
        accountType,
        location,
      },
    });

    return NextResponse.json({ message: "Usuario registrado con éxito", user: newUser }, { status: 201 });

  } catch (error: any) {
    console.error("Error Registration:", error);
    return NextResponse.json({ 
      message: "Error técnico: " + (error.message || "Error desconocido"),
      details: error
    }, { status: 500 });
  }
}
