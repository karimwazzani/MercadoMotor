"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { formatLocation } from "@/lib/utils";

export default function FeaturedCarousel({ featuredVehicles, small = false }: { featuredVehicles: any[], small?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Solo duplicamos si hay suficientes elementos (4 o más) para que el slider infinito tenga sentido visualmente.
  const shouldLoop = featuredVehicles.length >= 4;
  const displayVehicles = shouldLoop ? [...featuredVehicles, ...featuredVehicles, ...featuredVehicles] : featuredVehicles;

  useEffect(() => {
    let animationId: number;

    const play = () => {
      const el = containerRef.current;
      if (el && !isPaused && !isDragging && shouldLoop) {
        el.scrollLeft += 1;
        
        // Si el usuario scrolleó manualmente más allá del primer tercio
        // lo reseteamos silenciosamente al inicio (pero sumándole su posición relativa para que sea invisible)
        const targetWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= targetWidth) {
          el.scrollLeft -= targetWidth;
        }
      }
      if (shouldLoop) {
        animationId = requestAnimationFrame(play);
      }
    };

    if (shouldLoop) {
      animationId = requestAnimationFrame(play);
    }
    return () => { if (animationId) cancelAnimationFrame(animationId); };
  }, [isPaused, isDragging, shouldLoop]);

  // Manejo de arrastre (Mouse Dragging) simulando touch
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    // No activamos isDragging acá, esperamos al movimiento
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    // Pequeño timeout para que el click del Link se procese antes de apagar el bloqueo si hubo arrastre
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;

    // Si el mouse se movió más de 5px, entonces sí es un arrastre
    if (Math.abs(x - startX) > 5 && !isDragging && e.buttons === 1) {
      setIsDragging(true);
    }

    if (!isDragging) return;
    
    e.preventDefault();
    if (containerRef.current) {
        containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className={`${styles.interactiveCarouselWrapper} ${!shouldLoop ? styles.noMask : ''}`}>
      <div 
        className={styles.interactiveCarouselTrack} 
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {displayVehicles.map((vehicle, idx) => {
          const mainImage = vehicle.images.length > 0 ? vehicle.images[0].url : null;
          return (
            <Link 
              href={`/catalogo/${vehicle.id}`} 
              key={`${vehicle.id}-${idx}`} 
              style={{textDecoration: "none", pointerEvents: isDragging ? "none" : "auto"}} 
              draggable="false"
            >
              <div className={`${styles.vehicleCard} ${small ? styles.vehicleCardSmall : ""}`}>
                <div className={`${styles.vehicleImageContainer} ${small ? styles.vehicleImageContainerSmall : ""}`}>
                  {mainImage ? (
                    <Image 
                      src={mainImage} 
                      alt={`${vehicle.brand} ${vehicle.model}`} 
                      fill 
                      className={styles.vehicleImage} 
                      draggable="false"
                    />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#eee' }}>
                      Sin Foto
                    </div>
                  )}
                </div>
                <div className={styles.vehicleInfo}>
                  <h3 className={`${styles.vehicleName} ${small ? styles.vehicleNameSmall : ""}`}>{vehicle.brand} {vehicle.model}</h3>
                  <p className={styles.vehicleDetails}>{vehicle.version || '\u00A0'}</p>
                  <div className={styles.cardMetaRow}>
                    <span className={styles.cardMetaBadge}>{vehicle.year}</span>
                    <span className={styles.cardMetaBadge}>{vehicle.mileage.toLocaleString()} km</span>
                  </div>
                  
                  <div className={styles.vehiclePriceRow}>
                    <span className={`${styles.vehiclePrice} ${small ? styles.vehiclePriceSmall : ""}`}>{vehicle.currency === "ARS" ? "$" : "US$"} {vehicle.price.toLocaleString()}</span>
                    <span className={styles.vehicleLocation}>{formatLocation(vehicle.location)}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
