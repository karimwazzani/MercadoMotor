import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { action } = await req.json();

    let field = "";
    if (action === "whatsapp") field = "whatsappClicks";
    else if (action === "phone") field = "phoneClicks";
    else if (action === "view") field = "views";

    if (field) {
      await prisma.$executeRawUnsafe(`UPDATE "Vehicle" SET "${field}" = "${field}" + 1 WHERE "id" = '${id}'`);
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Tracking error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
