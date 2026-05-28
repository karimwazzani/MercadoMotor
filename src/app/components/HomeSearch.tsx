"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import { CATEGORIES, YEARS, VEHICLE_DATA_MAP } from "@/lib/constants";
import CustomSelect from "../catalogo/CustomSelect";

export default function HomeSearch() {
  const [searchType, setSearchType] = useState<"VEHICLES" | "AGENCIES">("VEHICLES");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("Todas");
  const router = useRouter();

  // Advanced filters states
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [minKm, setMinKm] = useState("");
  const [maxKm, setMaxKm] = useState("");
  const [order, setOrder] = useState("relevantes");

  // Toggle global class on documentElement to hide category bar smoothly
  useEffect(() => {
    if (showAdvanced && searchType === "VEHICLES") {
      document.documentElement.classList.add("advanced-search-open");
    } else {
      document.documentElement.classList.remove("advanced-search-open");
    }
    return () => {
      document.documentElement.classList.remove("advanced-search-open");
    };
  }, [showAdvanced, searchType]);

  // Extract all unique brands based on the active category
  const availableBrands = useMemo(() => {
    const brandSet = new Set<string>();
    
    if (category && category !== "Todas") {
      const catData = VEHICLE_DATA_MAP[category];
      if (catData) {
        Object.keys(catData).forEach(b => brandSet.add(b));
      }
    } else {
      // Collect brands across all categories
      Object.keys(VEHICLE_DATA_MAP).forEach(cat => {
        const catData = VEHICLE_DATA_MAP[cat];
        if (catData) {
          Object.keys(catData).forEach(b => brandSet.add(b));
        }
      });
    }

    return Array.from(brandSet).sort((a, b) => 
      a === "Otro" ? 1 : b === "Otro" ? -1 : a.localeCompare(b)
    );
  }, [category]);

  // Extract all unique models based on selected brand & category
  const availableModels = useMemo(() => {
    if (!brand) return [];
    const modelSet = new Set<string>();

    if (category && category !== "Todas") {
      const catData = VEHICLE_DATA_MAP[category];
      if (catData && catData[brand]) {
        Object.keys(catData[brand]).forEach(m => modelSet.add(m));
      }
    } else {
      // Collect models for this brand across all categories
      Object.keys(VEHICLE_DATA_MAP).forEach(cat => {
        const catData = VEHICLE_DATA_MAP[cat];
        if (catData && catData[brand]) {
          Object.keys(catData[brand]).forEach(m => modelSet.add(m));
        }
      });
    }

    return Array.from(modelSet).sort((a, b) => 
      a === "Otro" ? 1 : b === "Otro" ? -1 : a.localeCompare(b)
    );
  }, [category, brand]);

  // Reset dependent states when category changes
  const handleCategoryChange = (val: string) => {
    setCategory(val);
    setBrand("");
    setModel("");
  };

  // Reset model when brand changes
  const handleBrandChange = (val: string) => {
    setBrand(val);
    setModel("");
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (searchType === "VEHICLES") {
      let url = `/catalogo?`;
      const params = [];
      if (query) params.push(`query=${encodeURIComponent(query)}`);
      if (category && category !== "Todas") params.push(`categoria=${encodeURIComponent(category)}`);
      
      // If advanced search is open and selected, include all other parameters
      if (showAdvanced) {
        if (brand) params.push(`marca=${encodeURIComponent(brand)}`);
        if (model) params.push(`modelo=${encodeURIComponent(model)}`);
        if (minPrice) params.push(`minPrice=${encodeURIComponent(minPrice)}`);
        if (maxPrice) params.push(`maxPrice=${encodeURIComponent(maxPrice)}`);
        if (minYear) params.push(`minYear=${encodeURIComponent(minYear)}`);
        if (maxYear) params.push(`maxYear=${encodeURIComponent(maxYear)}`);
        if (minKm) params.push(`minKm=${encodeURIComponent(minKm)}`);
        if (maxKm) params.push(`maxKm=${encodeURIComponent(maxKm)}`);
        if (order && order !== "relevantes") params.push(`orden=${encodeURIComponent(order)}`);
      }
      
      url += params.join("&");
      router.push(url);
    } else {
      router.push(`/agencias?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBarWrapper}>
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

        <form onSubmit={handleSearch} className={`${styles.searchBar} ${searchType === "AGENCIES" ? styles.searchBarAgencies : ""}`}>
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
                    <span className={styles.categoryText}>{category === "Todas" ? "Todas las categorías" : category}</span>
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
                            handleCategoryChange("Todas");
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
                              handleCategoryChange(cat);
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
            <span className={styles.searchButtonText}>BUSCAR</span>
            <svg className={styles.searchButtonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>

        {searchType === "VEHICLES" && (
          <div className={styles.advancedToggleContainer}>
            <button 
              type="button" 
              className={styles.advancedToggleBtn}
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              <span>{showAdvanced ? "Ocultar Búsqueda Avanzada" : "Búsqueda Avanzada"}</span>
              <svg 
                className={`${styles.advancedToggleChevron} ${showAdvanced ? styles.chevronOpen : ""}`} 
                width="14" 
                height="8" 
                viewBox="0 0 12 8" 
                fill="none"
              >
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {searchType === "VEHICLES" && showAdvanced && (
        <div className={styles.advancedFilterPanelShell}>
          <div className={styles.advancedFilterPanelCore}>
            {/* Fila 1 */}
            <div className={styles.advancedGridRow}>
              {/* 1. Categoría */}
              <div className={styles.advancedFilterGroup}>
                <label className={styles.advancedFilterLabel}>Categoría</label>
                <CustomSelect
                  options={[
                    { value: "Todas", label: "Todas las categorías" },
                    ...CATEGORIES.map(cat => ({ value: cat, label: cat }))
                  ]}
                  value={category}
                  onChange={handleCategoryChange}
                />
              </div>

              {/* 2. Marca */}
              <div className={styles.advancedFilterGroup}>
                <label className={styles.advancedFilterLabel}>Marca</label>
                <CustomSelect
                  options={[
                    { value: "", label: "Todas las marcas" },
                    ...availableBrands.map(b => ({ value: b, label: b }))
                  ]}
                  value={brand}
                  onChange={handleBrandChange}
                  placeholder="Todas las marcas"
                />
              </div>

              {/* 3. Modelo */}
              <div className={styles.advancedFilterGroup}>
                <label className={styles.advancedFilterLabel}>Modelo</label>
                <CustomSelect
                  options={[
                    { value: "", label: "Todos los modelos" },
                    ...availableModels.map(m => ({ value: m, label: m }))
                  ]}
                  value={model}
                  onChange={setModel}
                  disabled={!brand}
                  placeholder={brand ? "Todos los modelos" : "Selecciona marca..."}
                />
              </div>

              {/* 4. Precio */}
              <div className={styles.advancedFilterGroup}>
                <label className={styles.advancedFilterLabel}>Precio</label>
                <div className={styles.advancedRangeInputs}>
                  <input 
                    type="number" 
                    placeholder="Mín" 
                    className={styles.advancedFilterInput}
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                  />
                  <span className={styles.rangeSeparator}>-</span>
                  <input 
                    type="number" 
                    placeholder="Máx" 
                    className={styles.advancedFilterInput} 
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>

              {/* 5. Año */}
              <div className={styles.advancedFilterGroup}>
                <label className={styles.advancedFilterLabel}>Año</label>
                <div className={styles.advancedRangeInputs}>
                  <CustomSelect
                    options={[
                      { value: "", label: "Desde" },
                      ...YEARS.map(y => ({ value: y, label: y }))
                    ]}
                    value={minYear}
                    onChange={setMinYear}
                    placeholder="Desde"
                  />
                  <span className={styles.rangeSeparator}>-</span>
                  <CustomSelect
                    options={[
                      { value: "", label: "Hasta" },
                      ...YEARS.map(y => ({ value: y, label: y }))
                    ]}
                    value={maxYear}
                    onChange={setMaxYear}
                    placeholder="Hasta"
                  />
                </div>
              </div>
            </div>

            {/* Fila 2 */}
            <div className={styles.advancedGridRowSecond}>
              {/* 6. Kilometraje */}
              <div className={styles.advancedFilterGroup}>
                <label className={styles.advancedFilterLabel}>Kilometraje</label>
                <div className={styles.advancedRangeInputs}>
                  <input 
                    type="number" 
                    placeholder="Mín" 
                    className={styles.advancedFilterInput}
                    value={minKm}
                    onChange={e => setMinKm(e.target.value)}
                  />
                  <span className={styles.rangeSeparator}>-</span>
                  <input 
                    type="number" 
                    placeholder="Máx" 
                    className={styles.advancedFilterInput} 
                    value={maxKm}
                    onChange={e => setMaxKm(e.target.value)}
                  />
                </div>
              </div>

              {/* 7. Ordenar por */}
              <div className={styles.advancedFilterGroup}>
                <label className={styles.advancedFilterLabel}>Ordenar por</label>
                <CustomSelect
                  options={[
                    { value: "relevantes", label: "Destacados y Relevantes" },
                    { value: "fecha_desc", label: "Más recientes" },
                    { value: "fecha_asc", label: "Más antiguos" },
                    { value: "precio_asc", label: "Menor precio" },
                    { value: "precio_desc", label: "Mayor precio" },
                    { value: "ano_desc", label: "Año: más nuevos" },
                    { value: "ano_asc", label: "Año: más antiguos" }
                  ]}
                  value={order}
                  onChange={setOrder}
                />
              </div>

              {/* Botón Aplicar Filtros */}
              <div className={styles.advancedSubmitGroup}>
                <button 
                  type="button" 
                  onClick={() => handleSearch()} 
                  className={styles.advancedSubmitBtn}
                >
                  Aplicar Filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


