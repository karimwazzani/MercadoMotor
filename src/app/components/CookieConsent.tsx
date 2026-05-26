"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Retrasar sutilmente la aparición para lograr un efecto premium y orgánico
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("mercadomotor_cookie_consent");
      if (!consent) {
        setVisible(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("mercadomotor_cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Utilizamos cookies esenciales para asegurar el correcto funcionamiento y mejorar tu experiencia en la plataforma. Al continuar navegando, aceptas nuestra
        <Link href="/privacidad" className={styles.link}>
          política de privacidad
        </Link>.
      </p>
      <div className={styles.actions}>
        <button onClick={handleAccept} className={styles.btn}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
