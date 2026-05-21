import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import AdminDashboardClient from "./components/AdminDashboardClient";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
    redirect("/");
  }

  // DATA FETCHING FOR KPIs
  const [
    totalVehicles, 
    pendingCount, 
    totalUsers, 
    agenciesCount,
    inventoryStats
  ] = await Promise.all([
    prisma.vehicle.count(),
    prisma.vehicle.count({ where: { status: "PENDING" } }),
    prisma.user.count(),
    prisma.user.count({ where: { accountType: "AGENCIA" } }),
    prisma.vehicle.aggregate({
      where: { status: "APPROVED" },
      _sum: { price: true }
    })
  ]);

  const allVehicles = await prisma.vehicle.findMany({
    include: {
      images: true,
      user: true,
      agency: true
    },
    orderBy: { createdAt: "desc" }
  });

  const allUsers = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    include: { agencies: true }
  });

  const allAds = await prisma.advertisement.findMany({
    orderBy: { createdAt: "desc" }
  });

  const totalInventoryValue = inventoryStats._sum.price || 0;

  return (
    <div className={styles.adminPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} /> <span className={styles.badge}>ADMIN</span>
          </div>
          <nav className={styles.nav}>
            <Link href="/admin/agencies" className={styles.navLink} style={{ marginRight: "1rem" }}>Gestión de Agencias</Link>
            <Link href="/admin/ads" className={styles.navLink} style={{ marginRight: "1rem", color: "var(--color-accent)" }}>Gestión de Publicidad</Link>
            <Link href="/" className={styles.navLink}>Ir al Sitio Público</Link>
            <Link href="/api/auth/signout" className={styles.navLink} style={{ marginLeft: "1rem", opacity: 0.7 }}>Cerrar sesión</Link>
          </nav>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <h1 className={styles.title}>Dashboard Administrativo</h1>
        <p className={styles.subtitle}>
          Visión global de la plataforma, gestión de inventario y control de usuarios.
        </p>

        {/* KPI CARDS SECTION */}
        <section className={styles.kpiGrid}>
          <div className={styles.kpiCard}>
            <span className={styles.kpiLabel}>Valor Inventario Público</span>
            <div className={styles.kpiValue}>US$ {totalInventoryValue.toLocaleString()}</div>
            <div className={styles.kpiTrend}>Público Activo</div>
          </div>
          <div className={styles.kpiCard}>
            <span className={styles.kpiLabel}>Usuarios Registrados</span>
            <div className={styles.kpiValue}>{totalUsers}</div>
            <div className={styles.kpiTrend}>{agenciesCount} Agencias / {totalUsers - agenciesCount} Particulares</div>
          </div>
          <div className={styles.kpiCard}>
            <span className={styles.kpiLabel}>Publicaciones Totales</span>
            <div className={styles.kpiValue}>{totalVehicles}</div>
            <div className={styles.kpiTrend}>{pendingCount} Pendientes de aprobación</div>
          </div>
        </section>

        {/* CLIENT DASHBOARD */}
        <AdminDashboardClient 
          allVehicles={JSON.parse(JSON.stringify(allVehicles))} 
          allUsers={JSON.parse(JSON.stringify(allUsers))} 
          pendingCount={pendingCount} 
          totalUsers={totalUsers} 
        />
      </main>
    </div>
  );
}
