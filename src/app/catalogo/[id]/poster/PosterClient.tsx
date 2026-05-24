"use client";

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './page.module.css';

interface PosterClientProps {
  vehicle: {
    id: string;
    brand: string;
    model: string;
    year: number;
    version: string | null;
  };
  siteUrl: string;
}

export default function PosterClient({ vehicle, siteUrl }: PosterClientProps) {
  const vehicleUrl = `${siteUrl}/catalogo/${vehicle.id}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.posterPage}>
      <div className={styles.posterContainer}>
        <header className={styles.header}>
          <h1 className={styles.sellTitle}>¡SE VENDE!</h1>
        </header>

        <main className={styles.content}>
          <div className={styles.vehicleInfo}>
            <div className={styles.brandModelRow}>
              <span className={styles.brand}>{vehicle.brand}</span>
              <span className={styles.model}>{vehicle.model}</span>
            </div>
            <div className={styles.year}>{vehicle.year}</div>
          </div>

          <div className={styles.qrWrapper}>
            <QRCodeSVG 
              value={vehicleUrl} 
              size={200}
              level="H"
              includeMargin={false}
            />
          </div>
          <div className={styles.qrLabel}>
            Escaneá para ver precio y fotos
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.logo}>
            <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "32px", width: "auto", display: "block" }} />
          </div>
          <div className={styles.web}>mercadomotor.ar</div>
        </footer>
      </div>

      <button onClick={handlePrint} className={styles.printButton}>
        🖨️ Imprimir Cartel (A5)
      </button>
    </div>
  );
}
