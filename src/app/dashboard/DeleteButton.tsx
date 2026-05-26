"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

interface DeleteButtonProps {
  vehicleId: string;
  status: string;
}

export default function DeleteButton({ vehicleId, status }: DeleteButtonProps) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
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

  const handleFinish = async () => {
    if (!selectedReason) {
      alert("Por favor, selecciona un motivo.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/vehicles/${vehicleId}/finish`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: selectedReason }),
      });

      if (res.ok) {
        setShowModal(false);
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.message || "Error al finalizar la publicación");
      }
    } catch (error) {
      alert("Ocurrió un error de red.");
    } finally {
      setLoading(false);
    }
  };

  const isApproved = status === "APPROVED";

  if (isApproved) {
    return (
      <>
        <button
          onClick={() => {
            setSelectedReason("");
            setShowModal(true);
          }}
          className={styles.btnPoster}
          style={{
            backgroundColor: "transparent",
            color: "var(--color-text, #171717)",
            border: "1px solid var(--color-border, #EDE9E1)",
            borderRadius: "8px",
            padding: "0.5rem 1.1rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          Finalizar publicación
        </button>

        {showModal && (
          <div
            onClick={() => setShowModal(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(15, 15, 15, 0.4)",
              backdropFilter: "blur(6px)",
              zIndex: 99999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem"
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "var(--color-bg-base, #FDFCF9)",
                border: "1px solid var(--color-border, #EDE9E1)",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "400px",
                padding: "2rem",
                boxShadow: "var(--shadow-lg)",
                color: "var(--color-text, #171717)",
                fontFamily: "var(--font-sans), sans-serif"
              }}
            >
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--color-primary, #0F0F0F)", letterSpacing: "-0.01em" }}>
                Finalizar publicación
              </h3>
              
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted, #6B6560)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                Selecciona el motivo por el cual deseas finalizar esta publicación. La información se guardará de forma anónima:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", cursor: "pointer", color: "var(--color-text, #171717)" }}>
                  <input
                    type="radio"
                    name="finishReason"
                    value="SOLD_MERCADOMOTOR"
                    checked={selectedReason === "SOLD_MERCADOMOTOR"}
                    onChange={(e) => setSelectedReason(e.target.value)}
                    style={{ accentColor: "var(--color-accent, #B89759)", width: "16px", height: "16px" }}
                  />
                  <span>Lo vendí</span>
                </label>
                
                <label style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", cursor: "pointer", color: "var(--color-text, #171717)" }}>
                  <input
                    type="radio"
                    name="finishReason"
                    value="WITHDRAWN"
                    checked={selectedReason === "WITHDRAWN"}
                    onChange={(e) => setSelectedReason(e.target.value)}
                    style={{ accentColor: "var(--color-accent, #B89759)", width: "16px", height: "16px" }}
                  />
                  <span>Decidí no venderlo por ahora</span>
                </label>
                
                <label style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", cursor: "pointer", color: "var(--color-text, #171717)" }}>
                  <input
                    type="radio"
                    name="finishReason"
                    value="OTHER"
                    checked={selectedReason === "OTHER"}
                    onChange={(e) => setSelectedReason(e.target.value)}
                    style={{ accentColor: "var(--color-accent, #B89759)", width: "16px", height: "16px" }}
                  />
                  <span>Otro motivo</span>
                </label>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid var(--color-border, #EDE9E1)",
                    borderRadius: "8px",
                    padding: "0.5rem 1.1rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: "var(--color-text, #171717)",
                    transition: "all 0.2s"
                  }}
                  disabled={loading}
                >
                  Volver
                </button>
                <button
                  onClick={handleFinish}
                  style={{
                    backgroundColor: "var(--color-accent, #B89759)",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.5rem 1.3rem",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    color: "var(--color-white, #FFFFFF)",
                    transition: "all 0.2s"
                  }}
                  disabled={loading || !selectedReason}
                >
                  {loading ? "Guardando..." : "Confirmar"}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <button 
      onClick={handleDelete} 
      className={styles.btnDelete} 
      disabled={loading}
    >
      {loading ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
