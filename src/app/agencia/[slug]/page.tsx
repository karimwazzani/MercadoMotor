import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AgencyMinisitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await getServerSession(authOptions);
  const isAdmin = session && (session.user as any).accountType === "ADMINISTRADOR";

  const agency = await prisma.agency.findUnique({
    where: { slug },
    include: {
      user: true,
      branches: true,
      vehicles: {
        where: { status: "APPROVED" },
        include: { images: true }
      }
    }
  });

  if (!agency) {
    notFound();
  }

  const isOwner = session && (session.user as any).id === agency.userId;
  if (agency.status !== "APPROVED" && !isAdmin && !isOwner) {
    return (
      <div style={{ padding: "10rem 2rem", textAlign: "center" }}>
        <h1>Esta agencia aún está en proceso de validación.</h1>
        <p>Vuelve pronto para ver su stock.</p>
        <Link href="/catalogo" style={{ color: "var(--color-accent)", marginTop: "2rem", display: "inline-block" }}>Volver al catálogo general</Link>
      </div>
    );
  }

  const capitalize = (s: string) => s ? s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()) : "";

  return (
    <div className={styles.minisite}>
      {/* HERO / COVER */}
      <section className={styles.hero}>
        {agency.coverImage ? (
          <Image src={agency.coverImage} alt={agency.tradeName} fill className={styles.coverImage} priority />
        ) : (
          <div style={{ backgroundColor: "#1a1a1a", height: "100%" }} />
        )}
        <div className={styles.heroOverlay} />
      </section>

      <div className="container">
        <header className={styles.agencyHeader}>
          <div className={styles.headerContent}>
            <div className={styles.logoContainer}>
              {agency.logo ? (
                <Image src={agency.logo} alt="Logo" fill className={styles.logo} />
              ) : (
                <div style={{ fontSize: "3rem", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>🏢</div>
              )}
            </div>
            <div className={styles.titleSection}>
              <h1 className={styles.name}>{agency.tradeName}</h1>
              <div className={styles.headerBadges}>
                <div className={styles.locationBadge}>
                  {capitalize(agency.city || "")}, {capitalize(agency.province || "")}
                </div>
                
                <div className={styles.headerActions}>
                  {agency.whatsapp && (
                    <a href={`https://wa.me/${agency.whatsapp.replace(/\D/g, '')}`} target="_blank" className={`${styles.actionIcon} ${styles.whatsapp}`} title="WhatsApp">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </a>
                  )}
                  {agency.phone && (
                    <a href={`tel:${agency.phone}`} className={`${styles.actionIcon} ${styles.phone}`} title="Llamar">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    </a>
                  )}
                  {agency.instagram && (
                    <a href={`https://instagram.com/${agency.instagram.replace('@', '')}`} target="_blank" className={`${styles.actionIcon} ${styles.instagram}`} title="Instagram">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.336 1.079 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.079-1.336 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.336-1.079-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.infoStrip}>
          {agency.description && (
            <div className={styles.stripCard}>
              <h3 className={styles.cardTitle}>Sobre Nosotros</h3>
              <p className={styles.description}>{agency.description}</p>
            </div>
          )}

          {agency.openingHours && (
            <div className={styles.stripCard}>
              <h3 className={styles.cardTitle}>Horarios</h3>
              <div className={styles.hoursList}>{agency.openingHours}</div>
            </div>
          )}

          {agency.province && (
            <div className={styles.stripCard}>
              <h3 className={styles.cardTitle}>Casa Central</h3>
              <p className={styles.description}>
                {agency.city ? capitalize(agency.city) : ""}<br />
                {capitalize(agency.province)}<br />
                <span style={{ opacity: 0.8, fontSize: '0.9em' }}>{agency.address}</span>
              </p>
            </div>
          )}

          {/* CUADRO DE SUCURSALES (Clickable) */}
          {agency.branches && agency.branches.length > 0 && (
            <Link href={`/agencia/${slug}/sucursales`} className={`${styles.stripCard} ${styles.clickableCard}`}>
              <h3 className={styles.cardTitle}>Sucursales</h3>
              <ul className={styles.branchItems}>
                {agency.branches.slice(0, 4).map((branch: any) => (
                  <li key={branch.id} className={styles.branchItem}>
                    {capitalize(branch.city?.split(", ")[0] || branch.name)}
                  </li>
                ))}
                {agency.branches.length > 4 && (
                  <li className={`${styles.branchItem} ${styles.moreLink}`}>
                    + {agency.branches.length - 4} más...
                  </li>
                )}
                {agency.branches.length <= 4 && (
                  <li className={`${styles.branchItem} ${styles.moreLink}`} style={{ border: 0 }}>
                    Ver detalle →
                  </li>
                )}
              </ul>
            </Link>
          )}
        </div>

        <section className={styles.inventory}>
          <div className={styles.stockTitle}>
            Stock de Vehículos
            <span className={styles.stockCounter}>{agency.vehicles.length} vehículos disponibles</span>
          </div>

          {agency.vehicles.length === 0 ? (
            <div style={{ padding: "4rem", textAlign: "center", background: "white", borderRadius: "12px", border: "1px solid #eee" }}>
              Esta agencia no tiene vehículos publicados actualmente.
            </div>
          ) : (
            <div className={styles.grid}>
              {agency.vehicles.map((vehicle) => {
                const mainImage = vehicle.images.length > 0 ? vehicle.images[0].url : null;
                return (
                  <div key={vehicle.id} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <Link href={`/catalogo/${vehicle.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ position: 'relative', height: '180px' }}>
                        {mainImage ? (
                          <Image src={mainImage} alt={vehicle.model} fill style={{ objectFit: 'cover' }} />
                        ) : (
                          <div style={{ background: '#f5f5f5', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sin foto</div>
                        )}
                      </div>
                      <div style={{ padding: '1rem' }}>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-primary)' }}>{vehicle.brand} {vehicle.model}</h4>
                        <p style={{ margin: '0.25rem 0', fontSize: '0.85rem', color: '#666' }}>{vehicle.year} • {vehicle.mileage.toLocaleString()} km</p>
                        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-accent)' }}>
                            {vehicle.currency === "ARS" ? "$" : "US$"} {vehicle.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

const capitalize = (str: string) => {
  if (!str) return "";
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
};
