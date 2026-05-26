import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { path, referrer } = body;

    if (!path) {
      return NextResponse.json({ error: "Falta el path" }, { status: 400 });
    }

    // Obtener IP para el hashing único y respetuoso de la privacidad (Ley 25.326)
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    
    // Hashear IP
    const ipHash = crypto
      .createHash("sha256")
      .update(ip + "mercadomotor_telemetry_salt_2026")
      .digest("hex");

    // Obtener User Agent y detectar dispositivo (Móvil vs Escritorio)
    const userAgent = req.headers.get("user-agent") || "";
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent);
    const deviceType = isMobile ? "Móvil" : "Escritorio";

    // Normalizar origen de tráfico (Referrer)
    let normalizedReferrer = "Directo";
    if (referrer && referrer !== "") {
      try {
        const url = new URL(referrer);
        let host = url.hostname.replace("www.", "");
        
        if (host.includes("google")) {
          normalizedReferrer = "Google";
        } else if (host.includes("instagram")) {
          normalizedReferrer = "Instagram";
        } else if (host.includes("facebook") || host.includes("fb.me") || host.includes("m.facebook")) {
          normalizedReferrer = "Facebook";
        } else if (host.includes("t.co") || host.includes("twitter") || host.includes("x.com")) {
          normalizedReferrer = "X / Twitter";
        } else if (host.includes("tiktok")) {
          normalizedReferrer = "TikTok";
        } else {
          normalizedReferrer = host; // Guardar el host genérico
        }
      } catch (e) {
        // En caso de que no sea una URL válida
        normalizedReferrer = "Directo";
      }
    }

    // Registrar la visita en la base de datos de forma asíncrona
    const visit = await prisma.pageVisit.create({
      data: {
        path,
        referrer: normalizedReferrer,
        userAgent: deviceType,
        ipHash,
      },
    });

    return NextResponse.json({ success: true, visitId: visit.id });
  } catch (error) {
    console.error("Error logging visit:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
