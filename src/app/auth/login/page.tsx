"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { TurnstileCaptcha } from "../../components/TurnstileCaptcha";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  useEffect(() => {
    document.title = "Iniciar Sesión | MercadoMotor";

    // Leer parámetros de URL de forma segura sin romper pre-renderización de Next.js
    const params = new URLSearchParams(window.location.search);
    const verified = params.get("verified");
    const errorParam = params.get("error");

    if (verified === "true") {
      setSuccessMessage("¡Tu cuenta ha sido verificada con éxito! Ya podés ingresar.");
    }

    if (errorParam) {
      if (errorParam === "InvalidToken") {
        setError("El enlace de activación es inválido o ya fue utilizado.");
      } else if (errorParam === "ExpiredToken") {
        setError("El enlace de activación ha expirado. Por favor registrate nuevamente.");
      } else if (errorParam === "UserNotFound") {
        setError("No se encontró el usuario asociado a esta activación.");
      } else {
        setError("Ocurrió un inconveniente al verificar tu cuenta.");
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !captchaToken) {
      setError("Por favor, completa la verificación de captcha.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      captchaToken,
    });

    if (res?.error) {
      if (res.error.includes("suspendida") || res.error.includes("SUSPENDED")) {
        setError("Esta cuenta ha sido suspendida preventivamente por razones de seguridad. Ponete en contacto con soporte.");
      } else if (res.error.includes("correo") || res.error.includes("verifica")) {
        setError("Por favor, verifica tu correo antes de ingresar.");
      } else if (res.error.includes("captcha") || res.error.includes("Captcha")) {
        setError("Fallo en la validación del Captcha. Por favor, reintentalo.");
      } else {
        setError("Credenciales incorrectas o cuenta no verificada por email.");
      }
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
        </div>
        <h1 className={styles.title}>Iniciar sesión</h1>
        <p className={styles.subtitle}>Accedé a tu panel para publicar y gestionar vehículos.</p>

        {error && <div className={styles.errorMessage}>{error}</div>}
        {successMessage && <div style={{
          backgroundColor: "rgba(46, 204, 113, 0.15)",
          color: "#2ecc71",
          padding: "0.75rem 1rem",
          borderRadius: "8px",
          marginBottom: "1.5rem",
          fontSize: "0.9rem",
          textAlign: "center",
          fontWeight: "500",
          border: "1px solid rgba(46, 204, 113, 0.3)"
        }}>{successMessage}</div>}

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
          
          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña</label>
            <input 
              id="password"
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className={styles.optionsRow}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Recordarme
            </label>
            <Link href="/auth/forgot-password" className={styles.forgotLink}>¿Olvidaste tu contraseña?</Link>
          </div>

          <TurnstileCaptcha onVerify={setCaptchaToken} action="login" />

          <button type="submit" className={styles.btnSubmit} disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar a mi cuenta"}
          </button>
        </form>

        <div className={styles.divider}>
          <span>o ingresá con</span>
        </div>

        <button 
          className={styles.btnGoogle} 
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </button>

        <div className={styles.registerPrompt}>
          ¿No tenés cuenta aún? <br/>
          <Link href="/auth/register" className={styles.registerLink}>Registrarme como Particular</Link> <br/><br/>
          <Link href="/auth/register-agency" className={styles.registerAgencyLink}>Registrar una Agencia o Concesionaria</Link>
        </div>
      </div>
    </div>
  );
}
