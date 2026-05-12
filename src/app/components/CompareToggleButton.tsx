"use client";

import React from 'react';
import { useCompare } from '@/app/context/CompareContext';
import styles from './CompareToggleButton.module.css';

interface CompareToggleButtonProps {
  vehicle: {
    id: string;
    brand: string;
    model: string;
    image: string;
    year: number;
    price: number;
    currency: string;
  };
  compact?: boolean;
}

export default function CompareToggleButton({ vehicle, compact = false }: CompareToggleButtonProps) {
  const { isComparing, addToCompare, removeFromCompare } = useCompare();
  
  const active = isComparing(vehicle.id);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (active) {
      removeFromCompare(vehicle.id);
    } else {
      addToCompare(vehicle);
    }
  };

  return (
    <button 
      onClick={toggle}
      className={`${styles.btn} ${active ? styles.active : ''} ${compact ? styles.compact : ''}`}
      title={active ? "Quitar de la comparación" : "Agregar para comparar"}
    >
      <span className={styles.icon}>⚖️</span>
      {!compact && (active ? "En comparación" : "Comparar")}
    </button>
  );
}
