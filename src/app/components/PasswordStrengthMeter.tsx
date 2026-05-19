"use client";

import React, { useMemo } from "react";
import styles from "./PasswordStrengthMeter.module.css";
import { validatePassword } from "@/lib/passwordValidator";

interface PasswordStrengthMeterProps {
  password?: string;
}

export function PasswordStrengthMeter({ password = "" }: PasswordStrengthMeterProps) {
  const validation = useMemo(() => {
    return validatePassword(password);
  }, [password]);

  // Si la contraseña está vacía, no mostramos nada aún para mantener limpio el formulario
  if (!password) {
    return null;
  }

  // Comprobar los criterios individuales para mostrarlos en la lista visual en tiempo real
  const criteria = {
    length: password.length >= 8,
    casing: /[A-Z]/.test(password) && /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  // Determinar la clase de color y el texto basado en la puntuación del validador
  let scoreClass = styles.score1;
  let statusText = "Muy Débil 🔴";
  let statusColor = "#ff4d4d";

  if (validation.score === 1) {
    scoreClass = styles.score1;
    statusText = "Muy Débil 🔴";
    statusColor = "#ff4d4d";
  } else if (validation.score === 2) {
    scoreClass = styles.score2;
    statusText = "Débil 🟠";
    statusColor = "#ff9f43";
  } else if (validation.score === 3) {
    scoreClass = styles.score3;
    statusText = "Fuerza Media 🟡";
    statusColor = "#f1c40f";
  } else if (validation.score === 4 && validation.isValid) {
    scoreClass = styles.score4;
    statusText = "Excelente y Segura 🟢";
    statusColor = "#b89759"; // Dorado premium de MercadoMotor
  }

  // Si está en la lista negra, forzamos a mostrar un aviso de seguridad
  const isBlacklisted = password.length > 0 && validation.score === 0;
  if (isBlacklisted) {
    scoreClass = styles.score1;
    statusText = "Muy Común / Fácil ❌";
    statusColor = "#ff4d4d";
  }

  return (
    <div className={styles.container}>
      <div className={styles.labelRow}>
        <span className={styles.title}>Fuerza de la clave</span>
        <span className={styles.status} style={{ color: statusColor }}>
          {statusText}
        </span>
      </div>

      {/* 4 Segmentos que se iluminan progresivamente */}
      <div className={`${styles.meterTrack} ${scoreClass}`}>
        <div className={styles.segment} />
        <div className={styles.segment} />
        <div className={styles.segment} />
        <div className={styles.segment} />
      </div>

      {/* Mensaje de alerta por lista negra */}
      {isBlacklisted && (
        <p style={{ color: "#ff6b6b", fontSize: "0.78rem", margin: "0 0 10px 0", fontWeight: 500 }}>
          ⚠️ {validation.message}
        </p>
      )}

      {/* Lista de Requisitos Interactiva */}
      <ul className={styles.checklist}>
        <li className={`${styles.item} ${criteria.length ? styles.itemActive : ""}`}>
          <span className={`${styles.icon} ${criteria.length ? styles.iconMet : styles.iconUnmet}`}>
            {criteria.length ? "✓" : "○"}
          </span>
          <span>Mínimo 8 caracteres</span>
        </li>
        <li className={`${styles.item} ${criteria.casing ? styles.itemActive : ""}`}>
          <span className={`${styles.icon} ${criteria.casing ? styles.iconMet : styles.iconUnmet}`}>
            {criteria.casing ? "✓" : "○"}
          </span>
          <span>Mayúsculas y minúsculas</span>
        </li>
        <li className={`${styles.item} ${criteria.number ? styles.itemActive : ""}`}>
          <span className={`${styles.icon} ${criteria.number ? styles.iconMet : styles.iconUnmet}`}>
            {criteria.number ? "✓" : "○"}
          </span>
          <span>Al menos un número</span>
        </li>
        <li className={`${styles.item} ${criteria.special ? styles.itemActive : ""}`}>
          <span className={`${styles.icon} ${criteria.special ? styles.iconMet : styles.iconUnmet}`}>
            {criteria.special ? "✓" : "○"}
          </span>
          <span>Un carácter especial (ej: @, $, !, %)</span>
        </li>
      </ul>
    </div>
  );
}
