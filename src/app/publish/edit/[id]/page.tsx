import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import EditForm from "./EditForm";
import prisma from "@/lib/prisma";

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/login");
  }

  const userId = (session.user as any).id;
  
  // Next 15 Params Async Promise wrapper pattern
  const awaitedParams = await params;
  const vehicleId = awaitedParams.id;

  const vehicle = await prisma.vehicle.findUnique({
    where: { id: vehicleId },
    include: { images: true }
  });

  const accountType = (session.user as any).accountType;

  if (!vehicle || (vehicle.userId !== userId && accountType !== "ADMINISTRADOR")) {
    redirect("/dashboard");
  }

  return <EditForm vehicle={vehicle} />;
}
