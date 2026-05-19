import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import NotificationCenter from "./components/NotificationCenter";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import FeaturedCarousel from "./FeaturedCarousel";

import HomeSearch from "./components/HomeSearch";
import AdSlot from "./components/AdSlot";

export default async function Home() {
  // Execute the session check and database queries in parallel to drastically improve page speed
  const [session, featuredVehicles, newArrivals] = await Promise.all([
    getServerSession(authOptions),
    prisma.vehicle.findMany({
      where: { 
        isHighlighted: true,
        status: "APPROVED"
      },
      include: {
        images: {
          where: { isMain: true },
          take: 1
        }
      },
      orderBy: { createdAt: "desc" },
      take: 25
    }),
    prisma.vehicle.findMany({
      where: { status: "APPROVED" },
      include: {
        images: {
          where: { isMain: true },
          take: 1
        }
      },
      orderBy: { createdAt: "desc" },
      take: 8
    })
  ]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            Mercado<span className={styles.logoAccent}>Motor</span>
          </div>
          <nav className={styles.nav}>
            {session ? (
              <>
                <NotificationCenter />
                <span className={styles.navLink}>Hola, {session.user?.name}</span>
                {(session.user as any)?.accountType === "ADMINISTRADOR" && (
                  <Link href="/admin" className={styles.navLink} style={{ color: "var(--color-accent)", fontWeight: "bold" }}>⚡ Centro Admin</Link>
                )}
                <Link href="/dashboard" className={styles.navLink}>Mi Panel</Link>
                <Link href="/api/auth/signout" className={styles.navLink} style={{ opacity: 0.7 }}>Cerrar sesión</Link>
              </>
            ) : (
              <Link href="/auth/login" className={styles.navLink}>Ingresar</Link>
            )}
            <Link href="/publish" className="btnPublish">PUBLICAR GRATIS</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            <Image 
              src="/hero-utopia4.jpeg" 
              alt="Utopia 4 Hero" 
              fill 
              priority
              className={styles.heroBgImage} 
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={`container ${styles.heroContent}`}>
            <HomeSearch />
          </div>
        </section>

        <section className={`container ${styles.categorySection}`}>
          <div className={styles.categoryGrid}>
            <Link href="/catalogo?categoria=auto" className={styles.categoryItem}>
              <span>Autos</span>
            </Link>
            <Link href="/catalogo?categoria=camioneta" className={styles.categoryItem}>
              <span>Camionetas</span>
            </Link>
            <Link href="/catalogo?categoria=coleccion" className={styles.categoryItem}>
              <span>Colección</span>
            </Link>
            <Link href="/catalogo?categoria=nautica" className={styles.categoryItem}>
              <span>Náutica</span>
            </Link>
            <Link href="/catalogo?categoria=moto" className={styles.categoryItem}>
              <span>Motos</span>
            </Link>
            <Link href="/catalogo?categoria=chocado" className={styles.categoryItem}>
              <span>Chocados</span>
            </Link>
          </div>
        </section>

        <section className={`container ${styles.categories}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Vehículos Destacados</h2>
            <Link href="/catalogo" className={styles.linkAccent}>Ver catálogo completo</Link>
          </div>
          
          {featuredVehicles.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "#666" }}>
              El administrador no ha marcado ningún vehículo como destacado.
            </div>
          ) : (
            <FeaturedCarousel featuredVehicles={featuredVehicles} />
          )}
        </section>

        <section className={`container ${styles.adSection}`}>
          <AdSlot areaKey="HOME_INTERSTITIAL" />
        </section>

        <section className={styles.agencyPremiumSection}>
          <div className={`container ${styles.agencyPremiumContainer}`}>
            <div className={styles.agencyPremiumContent}>
              {session && (session.user as any)?.accountType === "AGENCIA" ? (
                <>
                  <h2 className={styles.sellTitle}>Potenciá tu Agencia</h2>
                  <p className={styles.sellText}>
                    Personalizá tu minisitio, subí tu logo y mostrá tu stock de forma profesional.
                  </p>
                  <Link href="/dashboard/agency/setup" className={styles.btnSellNow}>
                    CONFIGURAR MI MINISITIO
                  </Link>
                </>
              ) : (
                <>
                  <h2 className={styles.sellTitle}>¿Sos una agencia?</h2>
                  <p className={styles.sellText}>
                    Sumá tu inventario a nuestra plataforma y llegá a miles de compradores.
                  </p>
                  <Link href="/auth/register-agency" className={styles.btnSellNow}>
                    REGISTRAR MI CONCESIONARIA
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        <section className={`container ${styles.adSection}`}>
          <AdSlot areaKey="HOME_PRE_NEW" />
        </section>

        <section className={`container ${styles.newArrivals}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recién Ingresados</h2>
            <Link href="/catalogo" className={styles.linkAccent}>Ver novedades</Link>
          </div>
          <FeaturedCarousel featuredVehicles={newArrivals} small={true} />
        </section>

        <section className={styles.sellSection}>
          <div className={`container ${styles.sellContainer}`}>
            <div className={styles.sellContent}>
              <h2 className={styles.sellTitle}>Vendé tu auto</h2>
              <p className={styles.sellText}>
                Publicá gratis y conectá con compradores interesados. Sin vueltas, sin comisiones ocultas.
              </p>
              <Link href="/publish" className={styles.btnSellNow}>
                PUBLICAR MI AUTO GRATIS
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerTop}>
            <div className={styles.footerLogo}>Mercado<span className={styles.logoAccent}>Motor</span></div>
            <div className={styles.footerLinks}>
              <Link href="#">Términos</Link>
              <Link href="#">Privacidad</Link>
              <Link href="#">Contacto</Link>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} MercadoMotor. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
