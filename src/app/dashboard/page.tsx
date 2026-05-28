import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import ReferralBanner from "./ReferralBanner";
import NotificationCenter from "@/app/components/NotificationCenter";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Mi Panel | MercadoMotor",
  description: "Gestioná tus publicaciones y vehículos a la venta en MercadoMotor.",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/login");
  }

  const userId = (session.user as any).id;
  
  const myVehicles = await prisma.vehicle.findMany({
    where: { userId },
    include: { images: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className={styles.dashboardPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
          </div>
          <nav className={styles.nav}>
            <NotificationCenter />
            {(session.user as any)?.accountType === "ADMINISTRADOR" && (
              <Link href="/admin" className={styles.navLink} style={{ color: "var(--color-accent)", fontWeight: "bold" }}>Centro Admin</Link>
            )}
            <Link href="/dashboard/favorites" className={styles.navLink} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Favoritos
            </Link>
            <Link href="/dashboard/profile" className={styles.navLink}>Mi Perfil</Link>
            <Link href="/" className={styles.navLink}>Cerrar Panel</Link>
            <Link href="/api/auth/signout" className={styles.navLink} style={{ opacity: 0.7 }}>Cerrar sesión</Link>
            <Link href="/publish" className="btnPublish">PUBLICAR GRATIS</Link>
          </nav>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem'}}>
          <div>
            <h1 className={styles.title} style={{marginBottom: '0.5rem'}}>Mis Publicaciones</h1>
            <p className={styles.subtitle}>Supervisá el estado de los vehículos que tenés a la venta en MercadoMotor.</p>
          </div>
          <div style={{backgroundColor: 'var(--color-bg-secondary)', padding: '0.8rem 1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center'}}>
            <div style={{fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem'}}>Tu Código de Usuario</div>
            <div style={{fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)'}}>
              MM{userId.replace(/-/g, '').substring(0, 8).toUpperCase()}
            </div>
          </div>
        </div>

        <ReferralBanner userId={userId} />

        <DashboardClient initialVehicles={myVehicles} userId={userId} styles={styles} />
      </main>
    </div>
  );
}
