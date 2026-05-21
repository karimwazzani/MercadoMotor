"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import styles from "./page.module.css";

function ReportSuspiciousContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!email || !token) {
      setErrorMsg("Faltan parámetros de seguridad obligatorios en el enlace.");
      setLoading(false);
      return;
    }

    const processReport = async () => {
      try {
        const response = await fetch("/api/auth/report-suspicious", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, token }),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccess(true);
          // Destruir la sesión activa local de forma inmediata
          try {
            await signOut({ redirect: false });
          } catch (signOutErr) {
            console.error("Error al invalidar sesión activa:", signOutErr);
          }
        } else {
          setErrorMsg(data.message || "Ocurrió un error al procesar el reporte.");
        }
      } catch (err) {
        setErrorMsg("Error de conexión al procesar el reporte de seguridad.");
      } finally {
        setLoading(false);
      }
    };

    processReport();
  }, [email, token]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
          </Link>
        </div>

        {loading ? (
          <div style={{ padding: "2rem 0" }}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Procesando reporte de seguridad...</p>
          </div>
        ) : success ? (
          <div>
            <div className={styles.iconWrapper}>
              <span>🔐</span>
            </div>
            
            <h1 className={styles.title}>
              Cuenta Suspendida Preventivamente
            </h1>
            
            <p className={styles.description}>
              Hemos bloqueado tu cuenta para el correo <strong className={styles.emailHighlight}>{email}</strong> de forma inmediata tras recibir tu reporte. 
              El atacante ya no podrá iniciar sesión, publicar vehículos ni cambiar tu información personal.
            </p>

            <div className={styles.stepsBlock}>
              <p className={styles.stepsTitle}>🛡️ Próximos pasos de seguridad:</p>
              <ul className={styles.stepsList}>
                <li>Acabamos de notificar al equipo de administración sobre este reporte de hackeo.</li>
                <li>Por favor, ponete en contacto con nuestro equipo de soporte para validar tu identidad.</li>
                <li>Una vez verificado tu acceso, te ayudaremos a restablecer la cuenta de forma segura.</li>
              </ul>
            </div>

            <Link href="/" className={styles.btnPrimary}>
              Volver al Inicio
            </Link>
          </div>
        ) : (
          <div>
            <div className={styles.iconWrapperWarning}>
              <span>⚠️</span>
            </div>
            
            <h1 className={styles.title}>
              Enlace Expirado o Inválido
            </h1>
            
            <p className={styles.description}>
              {errorMsg}
            </p>

            <Link href="/" className={styles.btnSecondary}>
              Ir al Inicio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ReportSuspiciousPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0f0f11] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#b89759]"></div>
        </div>
      }
    >
      <ReportSuspiciousContent />
    </Suspense>
  );
}

