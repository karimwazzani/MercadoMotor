import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import AdminAgenciesClient from "./AdminAgenciesClient";
import Link from "next/link";

export default async function AdminAgenciesPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
    redirect("/");
  }

  const agencies = await prisma.agency.findMany({
    include: {
      user: true,
      _count: {
        select: { vehicles: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className={styles.adminPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} /> <span className={styles.badge}>ADMIN</span>
          </div>
          <nav className={styles.nav}>
            <Link href="/admin" className={styles.navLink}>Dashboard Principal</Link>
            <Link href="/" className={styles.navLink} style={{ marginLeft: "1rem" }}>Sitio Público</Link>
          </nav>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Gestión de Agencias</h1>
          <div className={styles.counter}>{agencies.length} Registradas</div>
        </div>
        
        <p className={styles.subtitle}>
          Aprobá o rechazá las solicitudes de minisitios comerciales.
        </p>

        <AdminAgenciesClient agencies={JSON.parse(JSON.stringify(agencies))} />
      </main>
    </div>
  );
}
