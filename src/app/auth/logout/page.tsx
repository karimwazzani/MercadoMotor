"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Cerrar Sesión | MercadoMotor";
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
        </div>
        <h1 className={styles.title}>¿Cerrar sesión?</h1>
        <p className={styles.subtitle}>
          ¿Estás seguro de que querés salir de tu cuenta de MercadoMotor? Tendrás que volver a ingresar tus credenciales para administrar tus publicaciones.
        </p>

        <div className={styles.buttonGroup}>
          <button 
            onClick={handleLogout} 
            className={styles.btnConfirm}
          >
            Sí, cerrar sesión
          </button>
          
          <button 
            onClick={() => router.back()} 
            className={styles.btnCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
