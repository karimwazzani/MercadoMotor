"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CompareVehicle {
  id: string;
  brand: string;
  model: string;
  image: string;
  year: number;
  price: number;
  currency: string;
}

interface CompareContextType {
  compareItems: CompareVehicle[];
  addToCompare: (vehicle: CompareVehicle) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  isComparing: (id: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareItems, setCompareItems] = useState<CompareVehicle[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('compare_vehicles');
    if (saved) {
      try {
        setCompareItems(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing compare items", e);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('compare_vehicles', JSON.stringify(compareItems));
  }, [compareItems]);

  const addToCompare = (vehicle: CompareVehicle) => {
    setCompareItems(prev => {
      if (prev.find(item => item.id === vehicle.id)) return prev;
      if (prev.length >= 3) {
        alert("Podés comparar hasta 3 vehículos a la vez.");
        return prev;
      }
      return [...prev, vehicle];
    });
  };

  const removeFromCompare = (id: string) => {
    setCompareItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCompare = () => {
    setCompareItems([]);
  };

  const isComparing = (id: string) => {
    return compareItems.some(item => item.id === id);
  };

  return (
    <CompareContext.Provider value={{ compareItems, addToCompare, removeFromCompare, clearCompare, isComparing }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}
