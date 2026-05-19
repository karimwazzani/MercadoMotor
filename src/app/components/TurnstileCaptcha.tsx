"use client";

import React, { useEffect, useRef, useState } from "react";

interface TurnstileCaptchaProps {
  onVerify: (token: string) => void;
  action?: string;
}

declare global {
  interface Window {
    onloadTurnstileCallback?: () => void;
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          action?: string;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function TurnstileCaptcha({ onVerify, action }: TurnstileCaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    // Si no hay SITE_KEY provista, actuamos en modo desarrollo/simulación (mock)
    if (!siteKey) {
      console.warn("⚠️ [TurnstileCaptcha] NEXT_PUBLIC_TURNSTILE_SITE_KEY no configurado. Bypass de seguridad simulado (mock).");
      onVerify("mock-dev-token");
      return;
    }

    // Callback global cuando se cargue la API de Cloudflare
    window.onloadTurnstileCallback = () => {
      setIsLoaded(true);
    };

    // Comprobar si ya está cargado previamente en el objeto window
    if (window.turnstile) {
      setIsLoaded(true);
    } else {
      // Si no, inyectamos la etiqueta script asincrónicamente
      const scriptId = "cloudflare-turnstile-script";
      let script = document.getElementById(scriptId) as HTMLScriptElement;

      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    }

    return () => {
      // Limpieza al desmontar
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Evitar errores silenciosos de desmonte
        }
      }
    };
  }, [siteKey, onVerify]);

  useEffect(() => {
    if (isLoaded && containerRef.current && window.turnstile && siteKey) {
      // Evitar doble renderizado si ya existe
      if (widgetIdRef.current) return;

      try {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: "dark",
          action: action,
          callback: (token: string) => {
            onVerify(token);
          },
          "expired-callback": () => {
            onVerify("");
          },
          "error-callback": () => {
            onVerify("");
          },
        });
        widgetIdRef.current = id;
      } catch (err) {
        console.error("Error al renderizar Cloudflare Turnstile:", err);
      }
    }
  }, [isLoaded, siteKey, action, onVerify]);

  // Si no hay SITE_KEY, no renderizamos nada en pantalla (bypass invisible)
  if (!siteKey) {
    return null;
  }

  return (
    <div style={{ margin: "16px 0", display: "flex", justifyContent: "center" }}>
      <div ref={containerRef} />
    </div>
  );
}
