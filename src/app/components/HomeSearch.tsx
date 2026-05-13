"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function HomeSearch() {
  const [searchType, setSearchType] = useState<"VEHICLES" | "AGENCIES">("VEHICLES");
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchType === "VEHICLES") {
      router.push(`/catalogo?query=${encodeURIComponent(query)}`);
    } else {
      router.push(`/agencias?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchTabs}>
        <button 
          className={`${styles.searchTab} ${searchType === "VEHICLES" ? styles.activeTab : ""}`}
          onClick={() => setSearchType("VEHICLES")}
        >
          Vehículos
        </button>
        <button 
          className={`${styles.searchTab} ${searchType === "AGENCIES" ? styles.activeTab : ""}`}
          onClick={() => setSearchType("AGENCIES")}
        >
          Agencias
        </button>
      </div>

      <form onSubmit={handleSearch} className={styles.searchBar}>
        <div className={styles.searchFields}>
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchType === "VEHICLES" ? "Marca, modelo o versión..." : "Nombre de la agencia..."} 
            className={styles.searchInput}
          />
          {searchType === "VEHICLES" && (
            <>
              <div className={styles.searchDivider}></div>
              <select name="categoria" className={styles.searchSelect}>
                <option value="Todas">Todas las categorías</option>
                <option value="Autos">Autos y Camionetas</option>
                <option value="Utilitarios">Utilitarios</option>
                <option value="Motos">Motos</option>
                <option value="Náutica">Náutica</option>
              </select>
            </>
          )}
        </div>
        <button type="submit" className={styles.searchButton}>
          BUSCAR
        </button>
      </form>
    </div>
  );
}
