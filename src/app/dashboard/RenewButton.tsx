"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RenewButton({ vehicleId, isExpired }: { vehicleId: string, isExpired: boolean }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRenew = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/vehicles/${vehicleId}/renew`, {
        method: "POST"
      });
      if (res.ok) {
        router.refresh();
      } else {
        alert("Hubo un error al renovar");
      }
    } catch(e) {
      alert("Error de conexión");
    }
    setLoading(false);
  };

  return (
    <button 
      onClick={handleRenew} 
      disabled={loading}
      style={{
        backgroundColor: isExpired ? "#EF4444" : "#F59E0B",
        color: "white",
        border: "none",
        padding: "0.75rem",
        borderRadius: "4px",
        fontWeight: "bold",
        cursor: loading ? "not-allowed" : "pointer",
        marginTop: "1rem"
      }}
    >
      {loading ? "Renovando..." : "🔄 Renovar (45 días)"}
    </button>
  );
}
