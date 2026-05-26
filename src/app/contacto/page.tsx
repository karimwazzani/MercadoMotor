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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerifyTurnstile = (token: string) => {
    setTurnstileToken(token);
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
            ¿Tenés alguna consulta o sugerencia? 
            Escribinos a través del formulario y nuestro equipo te responderá a la brevedad.
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
                  placeholder="Ej. Consulta sobre publicación"
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
            {/* Social media card */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>Nuestras Redes</h3>
              <p className={styles.infoText} style={{ marginBottom: "2rem" }}>
                Seguinos en nuestras plataformas oficiales para enterarte de todas las novedades y ver contenido exclusivo de MercadoMotor.
              </p>

              <div className={styles.socialGrid}>
                {/* WhatsApp Support */}
                <a href="https://wa.me/5491156182284" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialInfo}>
                    <div className={styles.socialIconWrapper}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <div className={styles.socialName}>WhatsApp Soporte</div>
                      <div className={styles.socialHandle}>+54 9 11 5618-2284</div>
                    </div>
                  </div>
                  <svg className={styles.socialLinkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>

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
              <img src="/logo.svg" alt="MercadoMotor" className={styles.footerLogoImg} />
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
