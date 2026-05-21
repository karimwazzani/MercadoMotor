"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function ImageGallery({ images, title }: { images: any[], title: string }) {
  // Encontramos el index de la principal
  const initialIndex = images.findIndex(img => img.isMain);
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

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

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndEvent = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <>
      {/* Vista Normal */}
      <div 
        className={styles.mainImageContainer} 
        style={{cursor: 'zoom-in'}} 
        onClick={() => setIsZoomed(true)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEndEvent}
      >
        <Image 
          src={activeImage.url} 
          alt={title} 
          fill
          priority
          sizes="(max-width: 992px) 100vw, 60vw"
          style={{ objectFit: 'cover' }}
          className={styles.mainImage} 
        />
        
        {images.length > 1 && (
          <div className={styles.navArrowsDesktopOnly}>
            <button className={`${styles.navCircle} ${styles.navLeft}`} onClick={handlePrev}>
              &#10094;
            </button>
            <button className={`${styles.navCircle} ${styles.navRight}`} onClick={handleNext}>
              &#10095;
            </button>
          </div>
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
          
          <div className={styles.zoomMainArea}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEndEvent}
          >
            <Image 
              src={activeImage.url} 
              alt={title} 
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              className={styles.zoomImage} 
            />
            {images.length > 1 && (
              <div className={styles.navArrowsDesktopOnly}>
                <button className={`${styles.navCircle} ${styles.navLeft}`} onClick={handlePrev}>
                  &#10094;
                </button>
                <button className={`${styles.navCircle} ${styles.navRight}`} onClick={handleNext}>
                  &#10095;
                </button>
              </div>
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
