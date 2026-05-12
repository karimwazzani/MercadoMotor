"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./WelcomeScreen.module.css";

interface WelcomeScreenProps {
  name: string;
  onComplete?: () => void;
}

export default function WelcomeScreen({ name, onComplete }: WelcomeScreenProps) {
  const [phase, setPhase] = useState(0); // 0: Greeting, 1: Logo Animation, 2: Redirecting
  const router = useRouter();

  useEffect(() => {
    console.log("WelcomeScreen mounted for:", name);
    // Fase 1: Mostrar saludo por 2 segundos
    const timer1 = setTimeout(() => {
      setPhase(1);
    }, 2000);

    // Fase 2: Mostrar Logo por 2.5 segundos adicionales (total 4.5s)
    const timer2 = setTimeout(() => {
      setPhase(2);
      if (onComplete) {
        onComplete();
      } else {
        router.push("/dashboard");
      }
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [router, onComplete]);

  return (
    <div className={`${styles.overlay} ${phase === 2 ? styles.fadeOut : ""}`}>
      {phase === 0 && (
        <div className={styles.welcomeText}>
          Bienvenido, <span className={styles.userName}>{name}</span>
        </div>
      )}

      {phase >= 1 && (
        <div className={`${styles.logoContainer} ${styles.logoVisible} ${phase === 2 ? styles.zoomOut : ""}`}>
          <div className={styles.halfLeft}>Mercado</div>
          <div className={styles.halfRight}>Motor</div>
        </div>
      )}
    </div>
  );
}
