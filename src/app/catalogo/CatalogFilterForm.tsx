"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import styles from "./page.module.css";
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
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setBrand("");
    setModel("");
  };

  // Reset model when brand changes
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
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
    <div className={styles.filterCard}>
      <h3 className={styles.filterTitle}>Refinar Búsqueda</h3>
      
      <form action="/catalogo" method="GET" className={styles.filterForm}>
        {initialParams.query && <input type="hidden" name="query" value={initialParams.query} />}

        {/* 1. CATEGORÍA */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Categoría</label>
          <select 
            name="categoria" 
            className={styles.filterSelect} 
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="Todas">Todas las categorías</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* 2. MARCA */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Marca</label>
          <select 
            name="marca" 
            className={styles.filterSelect}
            value={brand}
            onChange={handleBrandChange}
          >
            <option value="">Todas las marcas</option>
            {availableBrands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* 3. MODELO */}
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Modelo</label>
          <select 
            name="modelo" 
            className={styles.filterSelect}
            value={model}
            onChange={e => setModel(e.target.value)}
            disabled={!brand}
          >
            <option value="">Todos los modelos</option>
            {availableModels.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
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
            <select 
              name="minYear" 
              className={styles.filterSelect}
              value={minYear}
              onChange={e => setMinYear(e.target.value)}
            >
              <option value="">Desde</option>
              {YEARS.map(y => (
                <option key={`min-yr-${y}`} value={y}>{y}</option>
              ))}
            </select>
            <span>-</span>
            <select 
              name="maxYear" 
              className={styles.filterSelect}
              value={maxYear}
              onChange={e => setMaxYear(e.target.value)}
            >
              <option value="">Hasta</option>
              {YEARS.map(y => (
                <option key={`max-yr-${y}`} value={y}>{y}</option>
              ))}
            </select>
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
          <select 
            name="orden" 
            className={styles.filterSelect} 
            value={order}
            onChange={e => setOrder(e.target.value)}
          >
            <option value="relevantes">Destacados y Relevantes</option>
            <option value="fecha_desc">Más recientes</option>
            <option value="fecha_asc">Más antiguos</option>
            <option value="precio_asc">Menor precio</option>
            <option value="precio_desc">Mayor precio</option>
            <option value="ano_desc">Año: más nuevos</option>
            <option value="ano_asc">Año: más antiguos</option>
          </select>
        </div>

        <button type="submit" className={styles.btnFilterSubmit}>Aplicar Filtros</button>
        
        {hasActiveFilters && (
           <Link href="/catalogo" className={styles.btnClearFilters}>Borrar Filtros</Link>
        )}
      </form>
    </div>
  );
}
