"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function FilterToggle({ children, count }: { children: React.ReactNode, count: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.filterToggleWrapper}>
      <div className={styles.filterBarActions}>
        <span className={styles.resultsCount}>{count} vehículos encontrados</span>
        <button 
          className={`${styles.btnFilterToggle} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕ Ocultar Filtros" : "🔍 Filtrar Búsqueda"}
        </button>
      </div>
      
      <div className={`${styles.collapsibleSidebar} ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </div>
  );
}
