import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "../dashboard.module.css";
import FavoriteButton from "@/app/components/FavoriteButton";
import prisma from "@/lib/prisma";
import FavoriteNotes from "@/app/components/FavoriteNotes";


export default async function FavoritesPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/login");
  }

  const userId = (session.user as any).id;
  
  const myFavorites = await prisma.favorite.findMany({
    where: { userId },
    include: {
      vehicle: {
        include: {
          images: { orderBy: { order: 'asc' } },
          agency: true,
          user: true
        }
      }
    },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className={styles.dashboardPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo} style={{ textDecoration: 'none' }}>
            <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
          </Link>
          <nav className={styles.nav}>
            <Link href="/dashboard" className={styles.navLink}>Mis Publicaciones</Link>
            <Link href="/dashboard/favorites" className={styles.navLink} style={{ color: 'var(--color-accent)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Favoritos
            </Link>
            <Link href="/dashboard/profile" className={styles.navLink}>⚙️ Mi Perfil</Link>
            <Link href="/publish" className="btnPublish">PUBLICAR GRATIS</Link>
            <Link href="/" className={styles.navLink}>Cerrar Panel</Link>
          </nav>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem'}}>
          <div>
            <h1 className={styles.title}>Mis Favoritos</h1>
            <p className={styles.subtitle} style={{marginBottom: 0}}>Vehículos que guardaste para ver más tarde.</p>
          </div>
          <div style={{backgroundColor: 'var(--color-bg-secondary)', padding: '0.8rem 1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center'}}>
            <div style={{fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem'}}>Tu Código de Usuario</div>
            <div style={{fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)'}}>
              MM{userId.replace(/-/g, '').substring(0, 8).toUpperCase()}
            </div>
          </div>
        </div>

        {myFavorites.length === 0 ? (
          <div className={styles.emptyState}>
            No tienes vehículos guardados como favoritos aún.<br/><br/>
            <Link href="/catalogo" className={styles.btnPrimary}>Explorar Catálogo</Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {myFavorites.map(fav => {
              const vehicle = fav.vehicle;
              const mainImg = vehicle.images.find(i => i.isMain) || (vehicle.images.length > 0 ? vehicle.images[0] : null);
              
              return (
                <div key={vehicle.id} className={styles.card} style={{ position: 'relative' }}>
                    <FavoriteButton 
                     vehicleId={vehicle.id} 
                     initialIsFavorite={true} 
                     size={18}
                     style={{ 
                       position: 'absolute', 
                       top: '10px', 
                       right: '10px', 
                       zIndex: 10,
                       background: 'rgba(255, 255, 255, 0.9)',
                       borderRadius: '50%',
                       width: '32px',
                       height: '32px',
                       boxShadow: '0 2px 10px rgba(0,0,0,0.15)'
                     }} 
                   />
                  <Link href={`/catalogo/${vehicle.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.imageOverlayContainer}>
                      {mainImg ? (
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                          <Image src={mainImg.url} alt="vehiculo" fill style={{objectFit: 'cover'}} />
                        </div>
                      ) : (
                        <div className={styles.noImage}>Sin Foto</div>
                      )}
                    </div>
                    <div className={styles.cardContent} style={{ padding: '1rem' }}>
                      <h3 className={styles.cardTitle}>{vehicle.brand} {vehicle.model}</h3>
                      <p className={styles.cardPrice} style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '0.5rem 0' }}>
                        {vehicle.currency === "ARS" ? "$" : "US$"} {vehicle.price.toLocaleString()}
                      </p>
                      <div className={styles.cardMeta} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        {vehicle.year} • {vehicle.mileage.toLocaleString()} km
                      </div>
                      <div className={styles.cardLocation} style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>{vehicle.location}</div>
                    </div>
                  </Link>
                  <div style={{ padding: '0 1rem 1rem 1rem' }}>
                    <FavoriteNotes vehicleId={vehicle.id} initialNotes={fav.notes || ""} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
