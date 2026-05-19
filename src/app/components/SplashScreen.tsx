"use client";

import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Check if the splash screen has already been shown in this browser session
    const hasBeenShown = sessionStorage.getItem("splashShown");

    if (!hasBeenShown) {
      setIsRendered(true);
      
      // Let the browser paint the initial state, then activate transition
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      
      // Save it immediately so transitions inside the site don't repeat the animation
      sessionStorage.setItem("splashShown", "true");

      // Start fade out at 1.5 seconds
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1500);

      // Remove from the DOM completely after fade out transition (1.5s + 0.5s transition = 2s)
      const removeTimer = setTimeout(() => {
        setIsRendered(false);
      }, 2000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (!isRendered) return null;

  return (
    <div className={`${styles.overlay} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          Mercado<span className={styles.logoAccent}>Motor</span>
        </div>
        <div className={styles.loaderLine}></div>
      </div>
    </div>
  );
}
