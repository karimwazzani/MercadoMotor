"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const originalReferrer = useRef<string | null>(null);

  useEffect(() => {
    // Capturar el referrer original al ingresar a la web
    if (typeof document !== "undefined" && originalReferrer.current === null) {
      originalReferrer.current = document.referrer || "";
    }
  }, []);

  useEffect(() => {
    if (!pathname) return;

    // Retrasar levemente para asegurar la carga completa de la página
    const timer = setTimeout(() => {
      fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: pathname,
          referrer: originalReferrer.current || "",
        }),
      }).catch((err) => {
        // Silenciar errores en producción para no molestar la consola
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
