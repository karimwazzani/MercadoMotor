"use client";

import React from 'react';
import { useCompare } from '@/app/context/CompareContext';
import styles from './CompareBar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function CompareBar() {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();

  if (compareItems.length === 0) return null;

  return (
    <div className={styles.compareBar}>
      <div className={`container ${styles.barContent}`}>
        <div className={styles.itemsList}>
          {compareItems.map((item) => (
            <div key={item.id} className={styles.compareItem}>
              <div className={styles.thumbnail}>
                <Image src={item.image} alt={item.model} fill style={{ objectFit: 'cover' }} />
                <button 
                  className={styles.removeBtn} 
                  onClick={() => removeFromCompare(item.id)}
                  title="Quitar"
                >
                  ✕
                </button>
              </div>
              <div className={styles.itemMeta}>
                <span className={styles.itemName}>{item.brand} {item.model}</span>
                <span className={styles.itemPrice}>
                  {item.currency === "ARS" ? "$" : "US$"} {item.price.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
          {/* Fill empty slots */}
          {Array.from({ length: 3 - compareItems.length }).map((_, i) => (
            <div key={`empty-${i}`} className={styles.emptySlot}>
              <span>+ Agregar</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.btnClear} onClick={clearCompare}>Limpiar</button>
          <Link href={`/comparar?ids=${compareItems.map(i => i.id).join(',')}`} className={styles.btnCompare}>
            COMPARAR ({compareItems.length})
          </Link>
        </div>
      </div>
    </div>
  );
}
