import { NextRequest, NextResponse } from "next/server";
import { verifyTurnstileToken } from "@/lib/captcha";
import { sendContactMessageEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, turnstileToken } = await req.json();

    // 1. Validar campos requeridos
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // 2. Obtener IP del cliente para Turnstile (opcional pero recomendado)
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || undefined;

    // 3. Verificar captcha de Cloudflare Turnstile
    const isHuman = await verifyTurnstileToken(turnstileToken, ip);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Verificación de seguridad fallida. Por favor, intenta de nuevo." },
        { status: 400 }
      );
    }

    // 4. Enviar correo electrónico
    await sendContactMessageEmail(name, email, subject, message);

    return NextResponse.json({ success: true, message: "Mensaje enviado con éxito." });
  } catch (error: any) {
    console.error("Error en API de contacto:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al procesar tu solicitud. Por favor, intenta más tarde." },
      { status: 500 }
    );
  }
}
