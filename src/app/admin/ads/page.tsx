import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "../page.module.css";
import AdManagerClient from "./AdManagerClient";

export default async function AdminAdsPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).accountType !== "ADMINISTRADOR") {
    redirect("/");
  }

  return (
    <div className={styles.adminPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            Mercado<span className={styles.logoAccent}>Motor</span> <span className={styles.badge}>ADS</span>
          </div>
          <nav className={styles.nav}>
            <Link href="/admin" className={styles.navLink}>Dashboard Principal</Link>
            <Link href="/admin/agencies" className={styles.navLink}>Gestión de Agencias</Link>
            <Link href="/" className={styles.navLink}>Ver Sitio</Link>
          </nav>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <div className={styles.sectionHeader} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <h1 className={styles.title}>Centro de Pautas Publicitarias</h1>
            <p className={styles.subtitle}>Gestiona tus espacios publicitarios, métricas y contenido multimedia.</p>
          </div>
        </div>

        <AdManagerClient />
      </main>
    </div>
  );
}
