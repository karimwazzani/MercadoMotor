import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { toggleHighlight } from "./actions";
import FilterToggle from "./FilterToggle";
import FavoriteButton from "@/app/components/FavoriteButton";
import CompareToggleButton from "@/app/components/CompareToggleButton";
import prisma from "@/lib/prisma";
import { formatLocation } from "@/lib/utils";
import AdSlot from "@/app/components/AdSlot";
import { Metadata } from "next";
import { CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Catálogo de Vehículos | MercadoMotor",
  description: "Buscá y encontrá tu próximo auto, camioneta o moto en la plataforma premium de Argentina.",
};


export default async function Catalogo({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const sessionPromise = getServerSession(authOptions);
  
  // Extraer parametros de URL
  const queryParam = typeof resolvedParams.query === 'string' ? resolvedParams.query : undefined;
  const categoryParam = typeof resolvedParams.categoria === 'string' ? resolvedParams.categoria : undefined;
  const minPriceParam = typeof resolvedParams.minPrice === 'string' ? parseInt(resolvedParams.minPrice) : undefined;
  const maxPriceParam = typeof resolvedParams.maxPrice === 'string' ? parseInt(resolvedParams.maxPrice) : undefined;
  const brandParam = typeof resolvedParams.marca === 'string' ? resolvedParams.marca : undefined;
  const vendedorParam = typeof resolvedParams.vendedor === 'string' ? resolvedParams.vendedor : undefined;
  const minYearParam = typeof resolvedParams.minYear === 'string' ? parseInt(resolvedParams.minYear) : undefined;
  const maxYearParam = typeof resolvedParams.maxYear === 'string' ? parseInt(resolvedParams.maxYear) : undefined;
  const minKmParam = typeof resolvedParams.minKm === 'string' ? parseInt(resolvedParams.minKm) : undefined;
  const maxKmParam = typeof resolvedParams.maxKm === 'string' ? parseInt(resolvedParams.maxKm) : undefined;
  const isNovedades = resolvedParams.novedades === 'true';
  
  // Construir clausula WHERE dinamica
  const whereClause: any = {
    status: "APPROVED",
    OR: [
      { expiresAt: null },
      { expiresAt: { gt: new Date() } }
    ]
  };

  if (vendedorParam) {
    whereClause.userId = vendedorParam;
  }

  // 1. Busqueda global rapida multipalabra (Afecta Marca, Modelo, Version, Descripcion, etc.)
  if (queryParam && queryParam.trim() !== '') {
    const searchTerms = queryParam.trim().split(/\s+/);
    whereClause.AND = searchTerms.map(term => {
      const termOrs: any[] = [
        { brand: { contains: term, mode: 'insensitive' } },
        { model: { contains: term, mode: 'insensitive' } },
        { version: { contains: term, mode: 'insensitive' } },
        { fuel: { contains: term, mode: 'insensitive' } },
        { transmission: { contains: term, mode: 'insensitive' } },
        { color: { contains: term, mode: 'insensitive' } },
        { description: { contains: term, mode: 'insensitive' } },
        { equipment: { contains: term, mode: 'insensitive' } }
      ];
      
      const termAsInt = parseInt(term, 10);
      if (!isNaN(termAsInt) && termAsInt > 1900 && termAsInt <= new Date().getFullYear() + 1) {
        termOrs.push({ year: termAsInt });
      }
      
      return { OR: termOrs };
    });
  }

  // 2. Filtros Laterales Especializados
  let activeCategory = "Todas";
  if (categoryParam && categoryParam !== "Todas") {
    // Map URL slug categories to database category strings
    const categoryMapping: { [key: string]: string } = {
      "auto": "Autos",
      "autos": "Autos",
      "camioneta": "Camionetas / SUV",
      "camionetas": "Camionetas / SUV",
      "coleccion": "De colección",
      "nautica": "Lanchas / Yate / Barco",
      "moto": "Moto / UTV / Cuatriciclo",
      "motos": "Moto / UTV / Cuatriciclo",
      "chocado": "Chocado",
      "chocados": "Chocado"
    };

    const dbCategory = categoryMapping[categoryParam.toLowerCase()] || categoryParam;
    whereClause.category = dbCategory;
    activeCategory = dbCategory;
  }
  
  if (brandParam && brandParam !== "") {
    whereClause.brand = { contains: brandParam };
  }

  if (minPriceParam || maxPriceParam) {
    whereClause.price = {};
    if (minPriceParam) whereClause.price.gte = minPriceParam;
    if (maxPriceParam) whereClause.price.lte = maxPriceParam;
  }

  if (minYearParam || maxYearParam) {
    whereClause.year = {};
    if (minYearParam) whereClause.year.gte = minYearParam;
    if (maxYearParam) whereClause.year.lte = maxYearParam;
  }

  if (minKmParam || maxKmParam) {
    whereClause.mileage = {};
    if (minKmParam) whereClause.mileage.gte = minKmParam;
    if (maxKmParam) whereClause.mileage.lte = maxKmParam;
  }

  // Execute session verification and vehicles search in parallel to optimize TTFB
  let [session, vehicles] = await Promise.all([
    sessionPromise,
    prisma.vehicle.findMany({
      where: whereClause,
      include: {
        images: {
          where: { isMain: true },
          take: 1
        },
        agency: true,
        user: true,
      },
      orderBy: { createdAt: "desc" },
      take: isNovedades ? 16 : undefined,
    })
  ]);

  let isFuzzyMatch = false;

  if (vehicles.length === 0 && queryParam && queryParam.trim() !== '') {
    const searchTerms = queryParam.trim().split(/\s+/).map(t => t.toLowerCase());
    
    const fuzzyTermsOrs = searchTerms.map(term => {
      const termOrs: any[] = [
        { brand: { contains: term, mode: 'insensitive' } },
        { model: { contains: term, mode: 'insensitive' } },
        { version: { contains: term, mode: 'insensitive' } },
        { fuel: { contains: term, mode: 'insensitive' } },
        { transmission: { contains: term, mode: 'insensitive' } },
        { color: { contains: term, mode: 'insensitive' } },
        { description: { contains: term, mode: 'insensitive' } },
        { equipment: { contains: term, mode: 'insensitive' } }
      ];
      
      const termAsInt = parseInt(term, 10);
      if (!isNaN(termAsInt) && termAsInt > 1900 && termAsInt <= new Date().getFullYear() + 1) {
        termOrs.push({ year: termAsInt });
      }
      return termOrs;
    }).flat();

    const fuzzyWhereClause = { ...whereClause };
    delete fuzzyWhereClause.AND;
    
    fuzzyWhereClause.AND = [
      {
        OR: fuzzyTermsOrs
      }
    ];

    let fuzzyVehicles = await prisma.vehicle.findMany({
      where: fuzzyWhereClause,
      include: {
        images: {
          where: { isMain: true },
          take: 1
        },
        agency: true,
        user: true,
      },
      orderBy: { createdAt: "desc" },
      take: 200, // Fetch more to rank them in memory
    });

    if (fuzzyVehicles.length > 0) {
      // Rank them based on user priority
      fuzzyVehicles.forEach((v: any) => {
        let score = 0;
        const brandStr = (v.brand || '').toLowerCase();
        const modelStr = (v.model || '').toLowerCase();
        const versionStr = (v.version || '').toLowerCase();
        const colorStr = (v.color || '').toLowerCase();
        const transStr = (v.transmission || '').toLowerCase();
        const descStr = (v.description || '').toLowerCase();
        
        searchTerms.forEach(term => {
          if (brandStr.includes(term)) score += 100;
          if (modelStr.includes(term)) score += 80;
          if (versionStr.includes(term)) score += 50;
          
          const termAsInt = parseInt(term, 10);
          if (!isNaN(termAsInt) && v.year === termAsInt) score += 40;
          
          if (colorStr.includes(term)) score += 10;
          if (transStr.includes(term)) score += 10;
          if (descStr.includes(term)) score += 1;
        });
        v._searchScore = score;
      });
      
      // Sort by score DESC, then createdAt DESC
      fuzzyVehicles.sort((a: any, b: any) => {
        if (b._searchScore !== a._searchScore) {
          return b._searchScore - a._searchScore;
        }
        return b.createdAt.getTime() - a.createdAt.getTime();
      });
      
      vehicles = fuzzyVehicles.slice(0, 16);
      isFuzzyMatch = true;
    }
    
    // Fallback: If absolutely nothing matches, find random cars or similar years
    if (vehicles.length === 0) {
      const numericTerms = searchTerms.map(t => parseInt(t, 10)).filter(n => !isNaN(n) && n > 1900 && n <= new Date().getFullYear() + 1);
      
      let randomWhere: any = {
        status: "APPROVED",
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } }
        ]
      };
      
      if (numericTerms.length > 0) {
        const year = numericTerms[0];
        randomWhere.year = { gte: year - 2, lte: year + 2 };
      }
      
      vehicles = await prisma.vehicle.findMany({
        where: randomWhere,
        include: {
          images: { where: { isMain: true }, take: 1 },
          agency: true,
          user: true,
        },
        orderBy: { createdAt: "desc" },
        take: 16,
      });
      
      isFuzzyMatch = true;
    }
  }

  const isAdmin = session && (session.user as any).accountType === "ADMINISTRADOR";
  
  let favoriteIds: Set<string> = new Set();
  if (session?.user?.email) {
    const favs = await prisma.favorite.findMany({
      where: { user: { email: session.user.email } },
      select: { vehicleId: true }
    });
    favoriteIds = new Set(favs.map(f => f.vehicleId));
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo}>
            Mercado<span className={styles.logoAccent}>Motor</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Inicio</Link>
            {isAdmin && (
              <Link href="/admin" className={styles.navLink} style={{ color: "var(--color-accent)", fontWeight: "bold" }}>⚡ Centro Admin</Link>
            )}
            {session ? (
              <Link href="/dashboard" className={styles.navLink}>Mi Panel</Link>
            ) : (
              <Link href="/auth/login" className={styles.navLink}>Ingresar</Link>
            )}
            <Link href="/publish" className="btnPublish">PUBLICAR GRATIS</Link>
          </nav>
        </div>
      </header>


      <main className={`container ${styles.main}`}>
        <FilterToggle count={vehicles.length}>
          <aside className={styles.sidebar}>
            <div className={styles.filterCard}>
              <h3 className={styles.filterTitle}>Refinar Búsqueda</h3>
              
              <form action="/catalogo" method="GET" className={styles.filterForm}>
                {queryParam && <input type="hidden" name="query" value={queryParam} />}

                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Categoría</label>
                  <select name="categoria" className={styles.filterSelect} defaultValue={activeCategory}>
                    <option value="Todas">Todas las categorías</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Marca</label>
                  <input 
                    type="text" 
                    name="marca" 
                    placeholder="Ej: BMW, Audi..." 
                    className={styles.filterInput} 
                    defaultValue={brandParam}
                  />
                </div>

                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Precio</label>
                  <div className={styles.rangeInputs}>
                    <input 
                      type="number" 
                      name="minPrice" 
                      placeholder="Mínimo" 
                      className={styles.filterInput}
                      defaultValue={minPriceParam} 
                    />
                    <span>-</span>
                    <input 
                      type="number" 
                      name="maxPrice" 
                      placeholder="Máximo" 
                      className={styles.filterInput} 
                      defaultValue={maxPriceParam}
                    />
                  </div>
                </div>

                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Año</label>
                  <div className={styles.rangeInputs}>
                    <input 
                      type="number" 
                      name="minYear" 
                      placeholder="Desde" 
                      className={styles.filterInput}
                      defaultValue={minYearParam} 
                    />
                    <span>-</span>
                    <input 
                      type="number" 
                      name="maxYear" 
                      placeholder="Hasta" 
                      className={styles.filterInput} 
                      defaultValue={maxYearParam}
                    />
                  </div>
                </div>

                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Kilometraje</label>
                  <div className={styles.rangeInputs}>
                    <input 
                      type="number" 
                      name="minKm" 
                      placeholder="Mín" 
                      className={styles.filterInput}
                      defaultValue={minKmParam} 
                    />
                    <span>-</span>
                    <input 
                      type="number" 
                      name="maxKm" 
                      placeholder="Máx" 
                      className={styles.filterInput} 
                      defaultValue={maxKmParam}
                    />
                  </div>
                </div>

                <button type="submit" className={styles.btnFilterSubmit}>Aplicar Filtros</button>
                
                {(queryParam || categoryParam || minPriceParam || maxPriceParam || brandParam || minYearParam || maxYearParam || minKmParam || maxKmParam) && (
                   <Link href="/catalogo" className={styles.btnClearFilters}>Borrar Filtros</Link>
                )}
              </form>
            </div>
            
            <AdSlot areaKey="CAT_SIDEBAR" />
          </aside>
        </FilterToggle>

        <section className={styles.resultsSection}>

          {isFuzzyMatch && (
            <div style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--color-accent)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <p style={{ margin: 0, color: 'var(--color-primary)', fontSize: '0.95rem' }}>No encontramos resultados exactos para "<strong>{queryParam}</strong>", pero te mostramos opciones similares que podrían interesarte.</p>
            </div>
          )}

          {vehicles.length === 0 ? (
            <div className={styles.emptyState}>
              No encontramos vehículos que coincidan con tus filtros.
            </div>
          ) : (
            <div className={styles.grid}>
              {vehicles.map((vehicle, index) => {
                const mainImage = vehicle.images.length > 0 ? vehicle.images[0].url : null;
                
                return (
                  <div key={vehicle.id} style={{ display: 'contents' }}>
                    <div className={styles.card}>
                      <Link href={`/catalogo/${vehicle.id}`} className={styles.cardInternalLink}>
                        <div className={styles.imageContainer} style={{ position: 'relative' }}>
                          <FavoriteButton 
                            vehicleId={vehicle.id} 
                            initialIsFavorite={favoriteIds.has(vehicle.id)} 
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
                          {mainImage ? (
                              <Image 
                                src={mainImage} 
                                alt={`${vehicle.brand} ${vehicle.model}`} 
                                fill 
                                className={styles.image} 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                              />
                            ) : (
                              <div className={styles.placeholderImage}>Sin foto</div>
                            )}
                          </div>
                          <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{vehicle.brand} {vehicle.model}</h3>
                            <p className={styles.cardVersion}>{vehicle.version || '\u00A0'}</p>
                            
                            <div className={styles.cardMetaRow}>
                              <span className={styles.cardMetaBadge}>{vehicle.year}</span>
                              <span className={styles.cardMetaBadge}>{vehicle.mileage.toLocaleString()} km</span>
                            </div>
                            
                            <div className={styles.compareWrapper} style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                              <CompareToggleButton vehicle={{
                                id: vehicle.id,
                                brand: vehicle.brand,
                                model: vehicle.model,
                                image: mainImage || '/placeholder-car.jpg',
                                year: vehicle.year,
                                price: vehicle.price,
                                currency: vehicle.currency
                              }} />
                            </div>
                            
                            <div className={styles.cardFooter}>
                              <div className={styles.priceContainer}>
                                {vehicle.previousPrice && (
                                  <span className={styles.previousPrice}>
                                    {vehicle.currency === "ARS" ? "$" : "US$"} {vehicle.previousPrice.toLocaleString()}
                                  </span>
                                )}
                                <span className={styles.price}>{vehicle.currency === "ARS" ? "$" : "US$"} {vehicle.price.toLocaleString()}</span>
                              </div>
                              <span className={styles.location}>{formatLocation(vehicle.location)}</span>
                            </div>
                          </div>
                      </Link>

                      {isAdmin && (
                        <div className={styles.adminActionBar}>
                          <form action={toggleHighlight.bind(null, vehicle.id)}>
                            <button 
                              type="submit" 
                              className={styles.btnHighlight} 
                              style={{ 
                                opacity: vehicle.isHighlighted ? 1 : 0.5,
                                color: vehicle.isHighlighted ? "#F59E0B" : "#A0A0A0" 
                              }}
                            >
                               {vehicle.isHighlighted ? "🌟 RETIRAR" : "⭐ DESTACAR"}
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                    {/* Inyectar publicidad cada 8 items */}
                    {(index + 1) % 8 === 0 && (
                      <AdSlot areaKey="CAT_GRID_NATIVE" className={styles.card} />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} MercadoMotor. Todos los derechos reservados.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/terminos" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Términos</Link>
              <Link href="/privacidad" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Privacidad</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
