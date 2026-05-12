import React from 'react';
import prisma from '@/lib/prisma';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { formatLocation } from '@/lib/utils';

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const ids = resolvedSearchParams.ids ? resolvedSearchParams.ids.split(',') : [];

  if (ids.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <div className="container">
          <h1>No seleccionaste vehículos para comparar</h1>
          <Link href="/catalogo" className="btnPublish">Ir al catálogo</Link>
        </div>
      </div>
    );
  }

  const vehicles = await prisma.vehicle.findMany({
    where: {
      id: { in: ids }
    },
    include: {
      images: { where: { isMain: true }, take: 1 }
    }
  });

  // Helper to find the "best" value (lowest)
  const getBest = (field: 'price' | 'mileage') => {
    const values = vehicles.map(v => v[field]);
    return Math.min(...values);
  };

  const bestPrice = getBest('price');
  const bestMileage = getBest('mileage');

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <Link href="/catalogo" className={styles.backBtn}>← Volver al catálogo</Link>
          <h1 className={styles.title}>Comparativa de Vehículos</h1>
        </div>
      </header>

      <main className="container">
        <div className={styles.comparisonGrid}>
          {/* Attributes labels column */}
          <div className={styles.labelsColumn}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.labelRow}>Precio</div>
            <div className={styles.labelRow}>Año</div>
            <div className={styles.labelRow}>Kilometraje</div>
            <div className={styles.labelRow}>Combustible</div>
            <div className={styles.labelRow}>Transmisión</div>
            <div className={styles.labelRow}>Ubicación</div>
          </div>

          {/* Vehicles columns */}
          {vehicles.map((v) => (
            <div key={v.id} className={styles.vehicleColumn}>
              <div className={styles.vehicleHeader}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={v.images[0]?.url || '/placeholder-car.jpg'} 
                    alt={`${v.brand} ${v.model}`} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className={styles.vehicleName}>{v.brand} {v.model}</h3>
                <span className={styles.vehicleVersion}>{v.version}</span>
              </div>

              <div className={`${styles.valueRow} ${v.price === bestPrice ? styles.highlight : ''}`}>
                {v.currency === "ARS" ? "$" : "US$"} {v.price.toLocaleString()}
              </div>
              <div className={styles.valueRow}>{v.year}</div>
              <div className={`${styles.valueRow} ${v.mileage === bestMileage ? styles.highlight : ''}`}>
                {v.mileage.toLocaleString()} km
              </div>
              <div className={styles.valueRow}>{v.fuel}</div>
              <div className={styles.valueRow}>{v.transmission}</div>
              <div className={styles.valueRow}>{formatLocation(v.location)}</div>

              <div className={styles.footerAction}>
                <Link href={`/catalogo/${v.id}`} className={styles.viewBtn}>Ver Ficha</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
