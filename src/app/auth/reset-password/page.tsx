"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../login/page.module.css";

export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Restablecer Contraseña | MercadoMotor";
    
    // Leer token de forma segura sin romper pre-renderización
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get("token");
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      setError("Falta el token de restablecimiento. Por favor solicita uno nuevo.");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas ingresadas no coinciden.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "No se pudo actualizar tu contraseña.");
      } else {
        setSuccess("¡Tu contraseña ha sido restablecida con éxito! Ya podés iniciar sesión.");
        setPassword("");
        setConfirmPassword("");
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
          Mercado<span className={styles.logoAccent}>Motor</span>
        </div>
        <h1 className={styles.title}>Restablecer contraseña</h1>
        <p className={styles.subtitle}>
          Ingresá y confirmá tu nueva contraseña para recuperar el acceso a tu cuenta.
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
              Ir a Iniciar Sesión
            </Link>
          </div>
        ) : (
          token && (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Nueva contraseña</label>
                <input 
                  id="password"
                  type="password" 
                  placeholder="Mínimo 8 caracteres" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input 
                  id="confirmPassword"
                  type="password" 
                  placeholder="Repetí la contraseña" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required 
                />
              </div>

              <button type="submit" className={styles.btnSubmit} disabled={loading}>
                {loading ? "Actualizando contraseña..." : "Actualizar contraseña"}
              </button>
            </form>
          )
        )}
      </div>
    </div>
  );
}
