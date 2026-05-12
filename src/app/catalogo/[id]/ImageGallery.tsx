"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function ImageGallery({ images, title }: { images: any[], title: string }) {
  // Encontramos el index de la principal
  const initialIndex = images.findIndex(img => img.isMain);
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

  if (!images || images.length === 0) {
    return (
      <div className={styles.mainImageContainer}>
        <div className={styles.placeholderImage}>Sin imágenes disponibles</div>
      </div>
    );
  }

  const activeImage = images[currentIndex];

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      {/* Vista Normal */}
      <div 
        className={styles.mainImageContainer} 
        style={{cursor: 'zoom-in'}} 
        onClick={() => setIsZoomed(true)}
      >
        <img 
          src={activeImage.url} 
          alt={title} 
          className={styles.mainImage} 
        />
        
        {images.length > 1 && (
          <>
            <button className={`${styles.navCircle} ${styles.navLeft}`} onClick={handlePrev}>
              &#10094;
            </button>
            <button className={`${styles.navCircle} ${styles.navRight}`} onClick={handleNext}>
              &#10095;
            </button>
          </>
        )}
      </div>
      
      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((img, idx) => (
            <div 
              key={img.id} 
              className={`${styles.thumbnail} ${currentIndex === idx ? styles.activeThumbnail : ''}`}
              onClick={() => setCurrentIndex(idx)}
              style={{ cursor: "pointer" }}
            >
              <Image src={img.url} alt="thumbnail" fill className={styles.thumbnailImage} />
            </div>
          ))}
        </div>
      )}

      {/* Modal de Zoom */}
      {isZoomed && (
        <div className={styles.zoomModal}>
          <button className={styles.zoomCloseBtn} onClick={() => setIsZoomed(false)}>&times;</button>
          
          <div className={styles.zoomMainArea}>
            <img 
              src={activeImage.url} 
              alt={title} 
              className={styles.zoomImage} 
            />
            {images.length > 1 && (
              <>
                <button className={`${styles.navCircle} ${styles.navLeft}`} onClick={handlePrev}>
                  &#10094;
                </button>
                <button className={`${styles.navCircle} ${styles.navRight}`} onClick={handleNext}>
                  &#10095;
                </button>
              </>
            )}
          </div>
          
          {images.length > 1 && (
            <div className={styles.zoomThumbnails}>
              {images.map((img, idx) => (
                <div 
                  key={img.id} 
                  className={`${styles.zoomThumbnail} ${currentIndex === idx ? styles.zoomThumbnailActive : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <Image src={img.url} alt="thumbnail" fill className={styles.thumbnailImage} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
