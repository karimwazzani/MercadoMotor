"use client";

import { useState } from "react";
import styles from "./FavoriteNotes.module.css";

interface FavoriteNotesProps {
  vehicleId: string;
  initialNotes: string;
}

export default function FavoriteNotes({ vehicleId, initialNotes }: FavoriteNotesProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notes, setNotes] = useState(initialNotes);
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setIsSaving(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/favorites/notes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vehicleId, notes }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Error al guardar la nota");
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Ocurrió un error.");
    } finally {
      setIsSaving(false);
    }
  };

  const characterLimit = 300;

  return (
    <div className={styles.notesContainer} onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${styles.notesToggleBtn} ${isExpanded ? styles.notesToggleBtnActive : ""}`}
      >
        <span>{notes.trim() ? "Ver mis notas" : "Añadir notas privadas"}</span>
      </button>

      <div className={`${styles.panel} ${isExpanded ? styles.panelExpanded : ""}`}>
        <div className={styles.notesCard}>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value.substring(0, characterLimit))}
            className={styles.textarea}
            placeholder="Escribí acá tus anotaciones personales (ej: estado, precio charlado, día de visita...). Solo vos podés ver esto."
            disabled={isSaving}
          />
          <div className={styles.footer}>
            <span className={styles.charCount}>
              {notes.length}/{characterLimit}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              {success && (
                <span className={styles.successText}>
                  Guardado
                </span>
              )}
              {error && <span style={{ color: "#ef4444", fontSize: "0.75rem" }}>{error}</span>}
              <button
                onClick={handleSave}
                disabled={isSaving || notes === initialNotes && !success}
                className={styles.saveBtn}
              >
                {isSaving ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
