"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import CustomSelect from "./CustomSelect";
import { 
  CATEGORIES, 
  YEARS, 
  VEHICLE_DATA_MAP 
} from "@/lib/constants";

interface CatalogFilterFormProps {
  initialParams: {
    query?: string;
    categoria?: string;
    marca?: string;
    modelo?: string;
    minPrice?: string;
    maxPrice?: string;
    minYear?: string;
    maxYear?: string;
    minKm?: string;
    maxKm?: string;
    orden?: string;
  };
}

export default function CatalogFilterForm({ initialParams }: CatalogFilterFormProps) {
  const [category, setCategory] = useState(initialParams.categoria || "Todas");
  const [brand, setBrand] = useState(initialParams.marca || "");
  const [model, setModel] = useState(initialParams.modelo || "");
  const [minPrice, setMinPrice] = useState(initialParams.minPrice || "");
  const [maxPrice, setMaxPrice] = useState(initialParams.maxPrice || "");
  const [minYear, setMinYear] = useState(initialParams.minYear || "");
  const [maxYear, setMaxYear] = useState(initialParams.maxYear || "");
  const [minKm, setMinKm] = useState(initialParams.minKm || "");
  const [maxKm, setMaxKm] = useState(initialParams.maxKm || "");
  const [order, setOrder] = useState(initialParams.orden || "relevantes");

  // Sync state if initialParams change (e.g. when filters are cleared)
  useEffect(() => {
    setCategory(initialParams.categoria || "Todas");
    setBrand(initialParams.marca || "");
    setModel(initialParams.modelo || "");
    setMinPrice(initialParams.minPrice || "");
    setMaxPrice(initialParams.maxPrice || "");
    setMinYear(initialParams.minYear || "");
    setMaxYear(initialParams.maxYear || "");
    setMinKm(initialParams.minKm || "");
    setMaxKm(initialParams.maxKm || "");
    setOrder(initialParams.orden || "relevantes");
  }, [initialParams]);

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

  const hasActiveFilters = 
    initialParams.query || 
    initialParams.categoria || 
    initialParams.marca || 
    initialParams.modelo || 
    initialParams.minPrice || 
    initialParams.maxPrice || 
    initialParams.minYear || 
    initialParams.maxYear || 
    initialParams.minKm || 
    initialParams.maxKm || 
    (initialParams.orden && initialParams.orden !== "relevantes");

  return (
    <div className={styles.filterCardShell}>
      <div className={styles.filterCardCore}>
        <h3 className={styles.filterTitle}>Refinar Búsqueda</h3>
        
        <form action="/catalogo" method="GET" className={styles.filterForm}>
        {initialParams.query && <input type="hidden" name="query" value={initialParams.query} />}

        {/* 1. CATEGORÍA */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Categoría</label>
          <input type="hidden" name="categoria" value={category} />
          <CustomSelect
            options={[
              { value: "Todas", label: "Todas las categorías" },
              ...CATEGORIES.map(cat => ({ value: cat, label: cat }))
            ]}
            value={category}
            onChange={handleCategoryChange}
          />
        </div>

        {/* 2. MARCA */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Marca</label>
          <input type="hidden" name="marca" value={brand} />
          <CustomSelect
            options={[
              { value: "", label: "Todas las marcas" },
              ...availableBrands.map(b => ({ value: b, label: b }))
            ]}
            value={brand}
            onChange={handleBrandChange}
            placeholder="Selecciona una marca..."
          />
        </div>

        {/* 3. MODELO */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Modelo</label>
          <input type="hidden" name="modelo" value={model} />
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

        {/* 4. PRECIO */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Precio</label>
          <div className={styles.rangeInputs}>
            <input 
              type="number" 
              name="minPrice" 
              placeholder="Mínimo" 
              className={styles.filterInput}
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
            />
            <span>-</span>
            <input 
              type="number" 
              name="maxPrice" 
              placeholder="Máximo" 
              className={styles.filterInput} 
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        {/* 5. AÑO */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Año</label>
          <div className={styles.rangeInputs}>
            <input type="hidden" name="minYear" value={minYear} />
            <CustomSelect
              options={[
                { value: "", label: "Desde" },
                ...YEARS.map(y => ({ value: y, label: y }))
              ]}
              value={minYear}
              onChange={setMinYear}
              placeholder="Desde"
            />
            <span>-</span>
            <input type="hidden" name="maxYear" value={maxYear} />
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

        {/* 6. KILOMETRAJE */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Kilometraje</label>
          <div className={styles.rangeInputs}>
            <input 
              type="number" 
              name="minKm" 
              placeholder="Mín" 
              className={styles.filterInput}
              value={minKm}
              onChange={e => setMinKm(e.target.value)}
            />
            <span>-</span>
            <input 
              type="number" 
              name="maxKm" 
              placeholder="Máx" 
              className={styles.filterInput} 
              value={maxKm}
              onChange={e => setMaxKm(e.target.value)}
            />
          </div>
        </div>

        {/* 7. ORDENAR POR */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Ordenar por</label>
          <input type="hidden" name="orden" value={order} />
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

        <button type="submit" className={styles.btnFilterSubmit}>Aplicar Filtros</button>
        
        {hasActiveFilters && (
           <Link href="/catalogo" className={styles.btnClearFilters}>Borrar Filtros</Link>
        )}
      </form>
      </div>
    </div>
  );
}
