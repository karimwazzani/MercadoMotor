"use client";

import { useEffect, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import styles from "./SplashScreen.module.css";

export default function SplashScreen() {
  useServerInsertedHTML(() => (
    <script
      id="splash-state-check"
      dangerouslySetInnerHTML={{
        __html: `
          try {
            if (sessionStorage.getItem("splashShown")) {
              document.documentElement.classList.add("splash-shown");
            }
          } catch (e) {}
        `
      }}
    />
  ));

  // Initialize state dynamically. On client-side soft page navigations, 
  // if already shown, we initialize directly to false. This prevents 
  // React from ever rendering or mounting the splash screen during route changes.
  const [isMounted, setIsMounted] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("splashShown");
    }
    return true; // Server-side rendering must include it in static HTML
  });

  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("splashShown");
    }
    return true;
  });

  useEffect(() => {
    // Check if the splash screen has already been shown in this browser session
    const hasBeenShown = sessionStorage.getItem("splashShown");

    if (hasBeenShown) {
      setIsMounted(false);
      setIsVisible(false);
      return;
    }

    // Save immediately so internal page navigations don't repeat the animation
    sessionStorage.setItem("splashShown", "true");
    try {
      // Ensure the global class is added so any subsequent layout mounts are instantly hidden by CSS
      document.documentElement.classList.add("splash-shown");
    } catch (e) {}

    // Start fade out at 3.5 seconds (gives a solid 2.75s of full visibility after entrance)
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    // Remove from the DOM completely after fade out transition (3.5s + 0.5s transition = 4s)
    const removeTimer = setTimeout(() => {
      setIsMounted(false);
    }, 4000);

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
          <img src="/logo.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
        </div>
        <div className={styles.loaderLine}></div>
      </div>
    </div>
  );
}
