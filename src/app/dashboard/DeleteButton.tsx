"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function DeleteButton({ vehicleId }: { vehicleId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("¿Estás seguro de que deseas eliminar esta publicación? Esta acción no se puede deshacer y se borrarán todas las fotos.")) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/vehicles/${vehicleId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.message || "Error al eliminar");
      }
    } catch (error) {
      alert("Ocurrió un error en la conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      className={styles.btnDelete} 
      disabled={loading}
    >
      {loading ? "Eliminando..." : "🗑️ Eliminar"}
    </button>
  );
}
