"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import { CATEGORIES } from "@/lib/constants";

export default function HomeSearch() {
  const [searchType, setSearchType] = useState<"VEHICLES" | "AGENCIES">("VEHICLES");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("Todas");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchType === "VEHICLES") {
      let url = `/catalogo?query=${encodeURIComponent(query)}`;
      if (category !== "Todas") {
        url += `&categoria=${encodeURIComponent(category)}`;
      }
      router.push(url);
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
              
              <div className={styles.customSelectWrapper}>
                <div 
                  className={styles.customSelectTrigger} 
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>{category === "Todas" ? "Todas las categorías" : category}</span>
                  <svg 
                    className={`${styles.customSelectArrow} ${isOpen ? styles.arrowOpen : ""}`} 
                    width="10" 
                    height="6" 
                    viewBox="0 0 10 6" 
                    fill="none"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {isOpen && (
                  <>
                    <div className={styles.selectOverlay} onClick={() => setIsOpen(false)} />
                    <div className={styles.customSelectOptions}>
                      <div 
                        className={`${styles.customSelectOption} ${category === "Todas" ? styles.selectedOption : ""}`}
                        onClick={() => {
                          setCategory("Todas");
                          setIsOpen(false);
                        }}
                      >
                        Todas las categorías
                      </div>
                      {CATEGORIES.map((cat) => (
                        <div 
                          key={cat} 
                          className={`${styles.customSelectOption} ${category === cat ? styles.selectedOption : ""}`}
                          onClick={() => {
                            setCategory(cat);
                            setIsOpen(false);
                          }}
                        >
                          {cat}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
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
