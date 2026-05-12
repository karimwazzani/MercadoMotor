"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function FavoriteButton({ 
  vehicleId, 
  initialIsFavorite = false,
  className = "",
  style = {},
  size = 18
}: { 
  vehicleId: string, 
  initialIsFavorite?: boolean,
  className?: string,
  style?: React.CSSProperties,
  size?: number
}) {
  const { status } = useSession();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [loading, setLoading] = useState(false);

  const toggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (status !== "authenticated") {
      router.push("/auth/login?callbackUrl=" + window.location.pathname);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vehicleId })
      });
      
      if (res.ok) {
        const data = await res.json();
        setIsFavorite(data.isFavorite);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Color de fondo sutil para cuando no es favorito, y oro vibrante cuando lo es
  const iconColor = isFavorite ? "var(--color-accent)" : "#D1D1D1";

  return (
    <button 
      onClick={toggleFavorite} 
      className={className}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        transform: loading ? "scale(0.8)" : "scale(1)",
        opacity: loading ? 0.6 : 1,
        padding: "0",
        ...style
      }}
      title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill={iconColor}
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          transition: "fill 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transform: isFavorite ? "scale(1.1)" : "scale(1)"
        }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
}
