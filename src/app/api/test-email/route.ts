import { NextResponse } from "next/server";
import { sendPriceDropEmail } from "@/lib/mailer";

export async function GET() {
  try {
    const success = await sendPriceDropEmail(
      "mercadomotor.ar@gmail.com",
      "Honda Prelude (Prueba)",
      "US$ 16.000",
      "US$ 15.000",
      "https://mercadomotor.com.ar/catalogo/123"
    );

    if (success) {
      return NextResponse.json({ message: "¡Correo de prueba enviado a mercadomotor.ar@gmail.com!" });
    } else {
      return NextResponse.json({ message: "No se pudo enviar el correo. Revisa los logs en Vercel." }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Error sending test email:", error);
    return NextResponse.json({ message: "Error interno del servidor", error: error.message }, { status: 500 });
  }
}
