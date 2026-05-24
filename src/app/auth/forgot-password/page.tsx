"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../login/page.module.css";
import { TurnstileCaptcha } from "../../components/TurnstileCaptcha";

export default function ForgotPasswordPage() {
  useEffect(() => {
    document.title = "Recuperar Contraseña | MercadoMotor";
  }, []);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !captchaToken) {
      setError("Por favor, completa la verificación de captcha.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, captchaToken })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Ocurrió un inconveniente procesando tu solicitud.");
      } else {
        setSuccess(data.message || "Enlace de restablecimiento enviado correctamente.");
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      setError("No se pudo conectar con el servidor. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.logo}>
          <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
        </div>
        <h1 className={styles.title}>Recuperar contraseña</h1>
        <p className={styles.subtitle}>
          Ingresá tu correo electrónico para recibir un enlace seguro de restablecimiento.
        </p>

        {error && <div className={styles.errorMessage}>{error}</div>}
        
        {success ? (
          <div style={{ textAlign: "center" }}>
            <div style={{
              backgroundColor: "rgba(46, 204, 113, 0.15)",
              color: "#2ecc71",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "2rem",
              fontSize: "0.95rem",
              fontWeight: "500",
              border: "1px solid rgba(46, 204, 113, 0.3)"
            }}>
              {success}
            </div>
            <Link href="/auth/login" className={styles.btnSubmit} style={{
              display: "block",
              textDecoration: "none",
              textAlign: "center"
            }}>
              Volver al inicio de sesión
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Correo electrónico</label>
              <input 
                id="email"
                type="email" 
                placeholder="tu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <TurnstileCaptcha onVerify={setCaptchaToken} action="forgot-password" />

            <button type="submit" className={styles.btnSubmit} disabled={loading}>
              {loading ? "Enviando enlace..." : "Enviar enlace de recuperación"}
            </button>

            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <Link href="/auth/login" className={styles.forgotLink} style={{ fontSize: "0.9rem" }}>
                Volver al inicio de sesión
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
