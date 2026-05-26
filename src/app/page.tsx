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
        status: "APPROVED",
        OR: [
          { highlightExpiresAt: null },
          { highlightExpiresAt: { gt: new Date() } }
        ]
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
      take: 16
    })
  ]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo}>
            <img src="/logo-dark.svg" alt="MercadoMotor" className={styles.logoImg} />
          </Link>
          <nav className={styles.nav}>
            {session ? (
              <>
                <NotificationCenter />
                <span className={styles.navLink}>Hola, {session.user?.name}</span>
                {(session.user as any)?.accountType === "ADMINISTRADOR" && (
                  <Link href="/admin" className={styles.adminLink}>
                    <svg className={styles.adminIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    Centro Admin
                  </Link>
                )}
                <Link href="/dashboard" className={styles.navLink}>Mi Panel</Link>
                <Link href="/api/auth/signout" className={styles.navLink} style={{ opacity: 0.7 }}>Cerrar sesión</Link>
              </>
            ) : (
              <Link href="/auth/login" className={styles.navLink}>Ingresar</Link>
            )}
            <Link href="/publish" className="btnPublish">
              <span className="btnTextDesktop">Publicar Gratis</span>
              <span className="btnTextMobile">Publicar</span>
              <span className="btnArrowWrapper">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
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
            <div>
              <span className="eyebrow">[ Colección Privada ]</span>
              <h2 className={styles.sectionTitle}>Vehículos Destacados</h2>
            </div>
            <Link href="/catalogo" className={styles.linkAccent}>Ver catálogo completo</Link>
          </div>
          
          {featuredVehicles.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "#666" }}>
              El administrador no ha marcado ningún vehículo como destacado.
            </div>
          ) : (
            <FeaturedCarousel featuredVehicles={featuredVehicles} small={true} />
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
                  <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>[ Beneficios de Agencia ]</span>
                  <h2 className={styles.sellTitle}>Potenciá tu Agencia</h2>
                  <p className={styles.sellText}>
                    Personalizá tu minisitio, subí tu logo y mostrá tu stock de forma profesional.
                  </p>
                  <Link href="/dashboard/agency/setup" className={styles.btnSellNow}>
                    <span>Configurar mi minisitio</span>
                    <span className="btnArrowWrapper">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>[ Sumate a la red ]</span>
                  <h2 className={styles.sellTitle}>¿Sos una agencia?</h2>
                  <p className={styles.sellText}>
                    Sumá tu inventario a nuestra plataforma y llegá a miles de compradores.
                  </p>
                  <Link href="/auth/register-agency" className={styles.btnSellNow}>
                    <span>Registrar mi concesionaria</span>
                    <span className="btnArrowWrapper">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
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
            <div>
              <span className="eyebrow">[ Novedades de la Semana ]</span>
              <h2 className={styles.sectionTitle}>Recién Ingresados</h2>
            </div>
            <Link href="/catalogo?novedades=true" className={styles.linkAccent}>Ver novedades</Link>
          </div>
          <FeaturedCarousel featuredVehicles={newArrivals} small={true} />
        </section>

        <section className={styles.sellSection}>
          <div className={`container ${styles.sellContainer}`}>
            <div className={styles.sellContent}>
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>[ Transacciones sin intermediarios ]</span>
              <h2 className={styles.sellTitle}>Vendé tu auto</h2>
              <p className={styles.sellText}>
                Publicá gratis y conectá con compradores interesados. Sin vueltas, sin comisiones ocultas.
              </p>
              <Link href="/publish" className={styles.btnSellNow}>
                <span>Publicar mi auto gratis</span>
                <span className="btnArrowWrapper">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerTop}>
            <Link href="/" className={styles.footerLogo}>
              <img src="/logo-dark.svg" alt="MercadoMotor" className={styles.footerLogoImg} />
            </Link>
            <div className={styles.footerLinks}>
              <Link href="/terminos">Términos</Link>
              <Link href="/privacidad">Privacidad</Link>
              <Link href="/contacto">Contacto</Link>
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
