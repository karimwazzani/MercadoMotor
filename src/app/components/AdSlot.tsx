import prisma from "@/lib/prisma";
import styles from "./AdSlot.module.css";
import Image from "next/image";
import Link from "next/link";

interface AdSlotProps {
  areaKey: string;
  className?: string;
  isWrapped?: boolean;
}

export default async function AdSlot({ areaKey, className = "", isWrapped = false }: AdSlotProps) {
  const now = new Date();

  // Buscar una publicidad activa para este slot que esté dentro de la fecha
  const ad = await prisma.advertisement.findFirst({
    where: {
      areaKey: areaKey,
      isActive: true,
      startDate: { lte: now },
      OR: [
        { endDate: null },
        { endDate: { gte: now } }
      ]
    },
    orderBy: { createdAt: "desc" } // Traer la más reciente
  });

  if (!ad) return null;

  // Tracking: Incrementar vistas (simple increment in the background to not block HTML rendering)
  prisma.advertisement.update({
    where: { id: ad.id },
    data: { views: { increment: 1 } }
  }).catch((e) => {
    console.error("Error incrementing ad views in background:", e);
  });

  const Content = () => (
    <div className={`${styles.adContainer} ${styles[ad.areaKey] || ""} ${className}`}>
      {ad.type === "VIDEO" ? (
        <video 
          src={ad.mediaUrl} 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.adMedia}
        />
      ) : (
        <Image 
          src={ad.mediaUrl} 
          alt={ad.title} 
          fill 
          className={styles.adMedia}
        />
      )}
      {!isWrapped && <div className={styles.adBadge}>Patrocinado</div>}
    </div>
  );

  const AdBody = () => {
    if (ad.linkUrl) {
      return (
        <Link href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className={styles.adLink}>
          <Content />
        </Link>
      );
    }
    return <Content />;
  };

  if (isWrapped) {
    return (
      <div style={{ marginTop: '2.5rem', width: '100%' }}>
        <div style={{ fontSize: '0.65rem', color: '#999', marginBottom: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Espacio Patrocinado</div>
        <AdBody />
      </div>
    );
  }

  return <AdBody />;
}
