"use client";

import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Check if the splash screen has already been shown in this browser session
    const hasBeenShown = sessionStorage.getItem("splashShown");

    if (hasBeenShown) {
      // If it was already shown in the session, immediately unmount to avoid layout overlay overhead
      setIsMounted(false);
      setIsVisible(false);
      return;
    }

    // Save immediately so internal page navigations don't repeat the animation
    sessionStorage.setItem("splashShown", "true");

    // Start fade out at 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    // Remove from the DOM completely after fade out transition (1.5s + 0.5s transition = 2s)
    const removeTimer = setTimeout(() => {
      setIsMounted(false);
      
      // Clean up the global class on first-load unmount so document tree stays pristine
      try {
        document.documentElement.classList.remove("splash-shown");
      } catch (e) {}
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div 
      id="MM_splash_screen"
      className={`${styles.overlay} ${isVisible ? styles.visible : styles.hidden}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        zIndex: 9999999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          Mercado<span className={styles.logoAccent}>Motor</span>
        </div>
        <div className={styles.loaderLine}></div>
      </div>
    </div>
  );
}
