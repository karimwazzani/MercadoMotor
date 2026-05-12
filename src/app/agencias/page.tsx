import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const capitalize = (str: string | null | undefined) => {
  if (!str) return "";
  return str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
};

export default async function AgenciasPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query } = await searchParams;

  const agencies = await prisma.agency.findMany({
    where: {
      status: "APPROVED",
      tradeName: {
        contains: query || "",
        // mode: "insensitive" // Prisma SQLite doesn't support insensitive easily without raw, but for now we search
      }
    },
    include: {
      _count: {
        select: { vehicles: true }
      }
    },
    orderBy: { featured: "desc" }
  });

  return (
    <div className={styles.agenciasPage}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>
            {query ? `Agencias que coinciden con "${query}"` : "Directorio de Agencias"}
          </h1>
          <p className={styles.subtitle}>{agencies.length} agencias encontradas</p>
        </div>
      </header>

      <main className="container">
        <div className={styles.agencyGrid}>
          {agencies.length === 0 ? (
            <div className={styles.noResults}>
              <h2>No encontramos agencias con ese nombre.</h2>
              <p>Probá con otra búsqueda o volvé al catálogo general.</p>
              <Link href="/catalogo" className="btnPrimary">Ver Vehículos</Link>
            </div>
          ) : (
            agencies.map((agency) => (
              <div key={agency.id} className={styles.agencyCard}>
                <div className={styles.logoWrapper}>
                  {agency.logo ? (
                    <Image src={agency.logo} alt={agency.tradeName} fill className={styles.logo} />
                  ) : (
                    <div className={styles.logoPlaceholder}>
                      {agency.tradeName.substring(0, 1).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className={styles.info}>
                  <h3 className={styles.agencyName}>{agency.tradeName}</h3>
                  <p className={styles.location}>{capitalize(agency.city)}, {capitalize(agency.province)}</p>
                  <div className={styles.stats}>
                    <span className={styles.statItem}>
                      <strong>{agency._count.vehicles}</strong> vehículos
                    </span>
                  </div>
                  <Link 
                    href={agency.slug ? `/agencia/${agency.slug}` : `/catalogo?vendedor=${agency.userId}`} 
                    className={styles.viewBtn}
                  >
                    Ver agencia
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
