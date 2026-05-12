import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import ImageGallery from "./ImageGallery";
import { EQUIPMENT_CATEGORIES } from "@/lib/equipment";
import FeaturedCarousel from "@/app/FeaturedCarousel";
import FavoriteButton from "@/app/components/FavoriteButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import NotificationCenter from "@/app/components/NotificationCenter";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import ContactActions from "./ContactActions";
import { formatLocation } from "@/lib/utils";
import AdSlot from "@/app/components/AdSlot";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: resolvedParams.id },
    include: { images: true }
  });

  if (!vehicle) return { title: "Vehículo no encontrado | MercadoMotor" };

  const mainImage = vehicle.images.find(img => img.isMain) || vehicle.images[0];
  const siteUrl = process.env.NEXTAUTH_URL || "https://mercadomotor.com.ar";
  const imageUrl = mainImage ? (mainImage.url.startsWith('http') ? mainImage.url : `${siteUrl}${mainImage.url}`) : "";
  
  const title = `${vehicle.brand} ${vehicle.model} ${vehicle.version || ""} | MercadoMotor`;
  const description = `Mirá este ${vehicle.brand} ${vehicle.model} en MercadoMotor. ${vehicle.year} • ${vehicle.mileage.toLocaleString()} km • ${vehicle.currency === "ARS" ? "$" : "US$"} ${vehicle.price.toLocaleString()}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
      type: "website",
      url: `${siteUrl}/catalogo/${resolvedParams.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    }
  };
}

export default async function VehicleDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const session = await getServerSession(authOptions);
  
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: resolvedParams.id },
    include: {
      images: {
        orderBy: { order: 'asc' }
      },
      user: true,
      agency: true,
    },
  });

  if (!vehicle) {
    notFound();
  }

  // Tracking: Increment views (usando raw query para evitar errores de validación de Prisma)
  try {
    await prisma.$executeRawUnsafe(`UPDATE "Vehicle" SET "views" = "views" + 1 WHERE "id" = '${resolvedParams.id}'`);
  } catch (e) {
    console.error("Error incrementing views:", e);
  }

  const mainImage = vehicle.images.find(img => img.isMain) || vehicle.images[0];
  const sellerName = vehicle.agencyId 
    ? vehicle.agency?.tradeName 
    : `${vehicle.user.name} ${vehicle.user.lastName || ''}`;

  let parsedEquipment: string[] = [];
  try {
    parsedEquipment = vehicle.equipment ? JSON.parse(vehicle.equipment) : [];
  } catch(e) {}

  let isFavorite = false;
  if (session?.user?.email) {
    const userFav = await prisma.favorite.findFirst({
      where: {
        user: { email: session.user.email },
        vehicleId: resolvedParams.id
      }
    });
    isFavorite = !!userFav;
  }

  const relatedVehicles = await prisma.vehicle.findMany({
    where: {
      userId: vehicle.userId,
      id: { not: vehicle.id },
    },
    include: {
      images: {
        orderBy: { order: 'asc' }
      }
    },
    take: 8
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo}>
            Mercado<span className={styles.logoAccent}>Motor</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/catalogo" className={styles.navLink}>Catálogo</Link>
            {session ? (
              <>
                <NotificationCenter />
                <Link href="/dashboard" className={styles.navLink}>Mi Panel</Link>
              </>
            ) : (
              <Link href="/auth/login" className={styles.navLink}>Ingresar</Link>
            )}
            <Link href="/publish" className={styles.btnPrimary}>PUBLICAR GRATIS</Link>
          </nav>
        </div>
      </header>

      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbsContainer}>
          <Link href="/catalogo">Catálogo</Link>
          <span className={styles.separator}>/</span>
          <Link href={`/catalogo?categoria=${vehicle.category}`}>{vehicle.category}</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{vehicle.brand} {vehicle.model}</span>
        </div>
      </div>

      <main className={`container ${styles.main}`}>
        <div className={styles.detailLayout}>
          {/* LEFT: IMAGES */}
          <div className={styles.gallerySection}>
            <ImageGallery images={vehicle.images} title={`${vehicle.brand} ${vehicle.model}`} />
            
            <div className={styles.descriptionSection}>
              <h2 className={styles.sectionTitle}>Descripción del vendedor</h2>
              <div className={styles.descriptionText}>
                {vehicle.description ? (
                  <p>{vehicle.description}</p>
                ) : (
                  <p className={styles.noDescription}>Aún no se ha proporcionado una descripción detallada de este vehículo.</p>
                )}
              </div>
            </div>
            
            <AdSlot areaKey="DETAIL_SIDEBAR" isWrapped={true} className={styles.descriptionAd} />

            {parsedEquipment.length > 0 && (
              <div className={styles.equipmentSection}>
                <h2 className={styles.sectionTitle}>Equipamiento y Prestaciones</h2>
                
                {EQUIPMENT_CATEGORIES.map(category => {
                  const categoryItems = parsedEquipment.filter(item => category.items.includes(item));
                  if (categoryItems.length === 0) return null;
                  return (
                    <details key={category.category} className={styles.equipmentAccordion}>
                      <summary className={styles.equipmentSummary}>{category.category}</summary>
                      <ul className={styles.equipmentList}>
                        {categoryItems.map((item, i) => (
                          <li key={i} className={styles.equipmentItem}>✓ {item}</li>
                        ))}
                      </ul>
                    </details>
                  )
                })}

                {/* Extra safety para ítems que no estén en la lista constante */}
                {parsedEquipment.filter(item => !EQUIPMENT_CATEGORIES.some(cat => cat.items.includes(item))).length > 0 && (
                  <details className={styles.equipmentAccordion}>
                    <summary className={styles.equipmentSummary}>Otros Equipamientos</summary>
                    <ul className={styles.equipmentList}>
                      {parsedEquipment.filter(item => !EQUIPMENT_CATEGORIES.some(cat => cat.items.includes(item))).map((item, i) => (
                        <li key={i} className={styles.equipmentItem}>✓ {item}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: DETAILS & SELLER */}
          <div className={styles.infoSection}>
            <div className={styles.priceCard}>
              <h1 className={styles.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span>{vehicle.brand} {vehicle.model} <span className={styles.version}>{vehicle.version}</span></span>
                <FavoriteButton vehicleId={vehicle.id} initialIsFavorite={isFavorite} size={24} style={{ marginTop: '4px' }} />
              </h1>
              <p className={styles.basicSpecs}>{vehicle.year} • {vehicle.mileage.toLocaleString()} km</p>
              
              <div className={styles.priceRow}>
                {vehicle.previousPrice && (
                  <span className={styles.previousPrice}>
                    {vehicle.currency === "ARS" ? "$" : "US$"} {vehicle.previousPrice.toLocaleString()}
                  </span>
                )}
                <span className={styles.price}>{vehicle.currency === "ARS" ? "$" : "US$"} {vehicle.price.toLocaleString()}</span>
              </div>
              
              <ContactActions 
                vehicleId={vehicle.id} 
                phone={vehicle.agencyId ? vehicle.agency?.phone || "" : vehicle.user.phone || ""} 
                brand={vehicle.brand}
                model={vehicle.model}
              />
              
              <div className={styles.tags}>
                {vehicle.acceptsTradeIn && <span className={styles.tag}>Acepta Permuta</span>}
                {vehicle.acceptsFinancing && <span className={styles.tag}>Financiación Disponible</span>}
              </div>

              <ShareButtons 
                title={`${vehicle.brand} ${vehicle.model} ${vehicle.version || ""}`} 
                url={`https://mercadomotor.com.ar/catalogo/${vehicle.id}`} 
              />
            </div>

            <div className={styles.specsCard}>
              <h3 className={styles.cardTitle}>Características Principales</h3>
              <ul className={styles.specsList}>
                <li><span className={styles.specLabel}>Combustible</span> <span className={styles.specValue}>{vehicle.fuel || '-'}</span></li>
                <li><span className={styles.specLabel}>Transmisión</span> <span className={styles.specValue}>{vehicle.transmission || '-'}</span></li>
                <li><span className={styles.specLabel}>Color</span> <span className={styles.specValue}>{vehicle.color || '-'}</span></li>
                <li><span className={styles.specLabel}>Ubicación</span> <span className={styles.specValue}>{formatLocation(vehicle.location)}</span></li>
              </ul>
            </div>

            <div className={styles.sellerCard}>
              <h3 className={styles.cardTitle}>Sobre el Vendedor</h3>
              
              {vehicle.agencyId && vehicle.agency?.slug ? (
                <Link href={`/agencia/${vehicle.agency.slug}`} className={styles.sellerLinkWrapper}>
                  <div className={styles.sellerProfile}>
                    <div className={styles.sellerAvatar}>
                      {vehicle.agency?.logo ? (
                        <Image src={vehicle.agency.logo} alt="Logo" fill />
                      ) : (
                        <span>{sellerName.charAt(0)}</span>
                      )}
                    </div>
                    <div className={styles.sellerMeta}>
                      <div className={styles.sellerName}>{sellerName}</div>
                      <div className={styles.sellerType}>Agencia Automotor</div>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href={`/catalogo?vendedor=${vehicle.userId}`} className={styles.sellerLinkWrapper}>
                  <div className={styles.sellerProfile}>
                    <div className={styles.sellerAvatar}>
                      <span>{sellerName.charAt(0)}</span>
                    </div>
                    <div className={styles.sellerMeta}>
                      <div className={styles.sellerName}>{sellerName}</div>
                      <div className={styles.sellerType}>
                        {vehicle.agencyId ? "Agencia Automotor" : "Vendedor Particular"}
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Nuevos datos de contacto segmentados */}
              <div className={styles.sellerContactInfo}>
                {vehicle.agencyId && <p><strong>Ubicación:</strong> {formatLocation(vehicle.agency?.city)}</p>}
                {vehicle.agencyId && vehicle.agency?.address && <p><strong>Dirección:</strong> {formatLocation(vehicle.agency.address)}</p>}
              </div>
              <Link 
                href={vehicle.agencyId && vehicle.agency?.slug ? `/agencia/${vehicle.agency.slug}` : `/catalogo?vendedor=${vehicle.userId}`} 
                className={styles.btnOutline}
              >
                {vehicle.agencyId && vehicle.agency?.tradeName 
                  ? `Ver más publicaciones de ${vehicle.agency.tradeName}` 
                  : (!vehicle.agencyId && vehicle.user?.name) 
                    ? `Ver más publicaciones de ${vehicle.user.name.split(' ')[0]}` 
                    : `Ver más publicaciones de ${vehicle.agencyId ? "esta agencia" : "este usuario"}`
                }
              </Link>
            </div>
          </div>
        </div>

        {relatedVehicles.length > 0 && (
          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Más vehículos de {sellerName.split(' ')[0]}</h2>
            <FeaturedCarousel featuredVehicles={relatedVehicles} small={true} />
          </div>
        )}

        {/* Full width Ad Break moved to bottom */}
        <AdSlot areaKey="DETAIL_BOTTOM" isWrapped={true} />
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MercadoMotor. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
