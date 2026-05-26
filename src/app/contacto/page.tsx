"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { TurnstileCaptcha } from "@/app/components/TurnstileCaptcha";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  
  // Anti-Spam: Obfuscación de email en cliente
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerifyTurnstile = (token: string) => {
    setTurnstileToken(token);
  };

  const handleRevealEmail = () => {
    setIsEmailRevealed(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    if (!turnstileToken) {
      setStatus({
        type: "error",
        message: "Por favor, completa la verificación de seguridad antes de enviar.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "¡Tu mensaje ha sido enviado con éxito! Nos contactaremos contigo muy pronto.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Reset turnstile token trigger if window.turnstile exists
        if (typeof window !== "undefined" && window.turnstile) {
          try {
            window.turnstile.reset(".cf-turnstile");
          } catch (e) {}
        }
      } else {
        setStatus({
          type: "error",
          message: data.error || "Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Error de red. Por favor, comprueba tu conexión e inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* Background blurs */}
      <div className={styles.bgBlur1}></div>
      <div className={styles.bgBlur2}></div>

      {/* Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo}>
            <img src="/logo-dark.svg" alt="MercadoMotor" className={styles.logoImg} />
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Inicio</Link>
            <Link href="/catalogo" className={styles.navLink}>Catálogo</Link>
            <Link href="/contacto" className={styles.navLink} style={{ color: "var(--color-accent)", fontWeight: 700 }}>Contacto</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className={`container ${styles.main}`}>
        <div className={styles.sectionHeader}>
          <span className="eyebrow">[ Canal Oficial de Comunicación ]</span>
          <h1 className={styles.title}>Ponete en Contacto</h1>
          <p className={styles.subtitle}>
            ¿Tenés alguna consulta, sugerencia o querés saber más sobre nuestros planes para agencias? 
            Escribinos y nuestro equipo te responderá de forma personalizada.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Form Side */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>
              <svg className={styles.formTitleIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Envianos un Mensaje
            </h2>

            {status && (
              <div className={`${styles.statusMessage} ${status.type === "success" ? styles.statusSuccess : styles.statusError}`}>
                {status.type === "success" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Ej. Juan Pérez"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Ej. juan@correo.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Ej. Consulta sobre planes de Agencia"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  placeholder="Escribí los detalles de tu consulta acá..."
                  required
                />
              </div>

              {/* Integración con Cloudflare Turnstile para protección contra spam */}
              <div className="cf-turnstile-wrapper">
                <TurnstileCaptcha onVerify={handleVerifyTurnstile} action="contact_form" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !turnstileToken}
                className={styles.submitBtn}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '6px' }}>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25"></circle>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info & Socials Side */}
          <div className={styles.infoColumn}>
            {/* Direct contact card */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>Contacto Directo</h3>
              <p className={styles.infoText}>
                Para evitar bots automáticos y spam masivo, nuestro correo electrónico está protegido. 
                Hacé clic en el botón de revelar para verlo y ponerte en contacto.
              </p>
              
              <div className={styles.emailObfuscated}>
                {isEmailRevealed ? (
                  <a href="mailto:info@mercadomotor.ar" className={styles.emailLink}>
                    info@mercadomotor.ar
                  </a>
                ) : (
                  <>
                    <span className={styles.emailPlaceholder}>inf*@mercadomotor.ar</span>
                    <button onClick={handleRevealEmail} className={styles.revealBtn}>
                      Revelar
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Social media card */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>Nuestras Redes</h3>
              <p className={styles.infoText} style={{ marginBottom: "2rem" }}>
                Seguinos en nuestras plataformas para ver novedades, lanzamientos de vehículos premium y contenido exclusivo.
              </p>

              <div className={styles.socialGrid}>
                {/* Instagram */}
                <a href="https://instagram.com/mercadomotor.ar" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialInfo}>
                    <div className={styles.socialIconWrapper}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <div className={styles.socialName}>Instagram</div>
                      <div className={styles.socialHandle}>@mercadomotor.ar</div>
                    </div>
                  </div>
                  <svg className={styles.socialLinkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>

                {/* TikTok */}
                <a href="https://tiktok.com/@mercadomotor.ar" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialInfo}>
                    <div className={styles.socialIconWrapper}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                      </svg>
                    </div>
                    <div>
                      <div className={styles.socialName}>TikTok</div>
                      <div className={styles.socialHandle}>@mercadomotor.ar</div>
                    </div>
                  </div>
                  <svg className={styles.socialLinkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://facebook.com/mercadomotor.ar" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialInfo}>
                    <div className={styles.socialIconWrapper}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className={styles.socialName}>Facebook</div>
                      <div className={styles.socialHandle}>MercadoMotor</div>
                    </div>
                  </div>
                  <svg className={styles.socialLinkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerTop}>
            <Link href="/" className={styles.footerLogo}>
              <img src="/logo-dark.svg" alt="MercadoMotor" className={styles.footerLogoImg} />
            </Link>
            <div className={styles.footerLinks}>
              <Link href="/terminos">Términos</Link>
              <Link href="/privacidad">Privacidad</Link>
              <Link href="/contacto">Contacto</Link>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} MercadoMotor. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
