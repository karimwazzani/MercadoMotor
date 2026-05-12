"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

interface AdminAgenciesClientProps {
  agencies: any[];
}

export default function AdminAgenciesClient({ agencies: initialAgencies }: AdminAgenciesClientProps) {
  const [agencies, setAgencies] = useState(initialAgencies);
  const [processing, setProcessing] = useState<string | null>(null);

  const handleStatusUpdate = async (agencyId: string, newStatus: string) => {
    setProcessing(agencyId);
    try {
      const res = await fetch(`/api/admin/agencies/${agencyId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });

      if (res.ok) {
        setAgencies(prev => prev.map(a => a.id === agencyId ? { ...a, status: newStatus } : a));
      } else {
        alert("Error al actualizar el estado");
      }
    } catch (error) {
      alert("Error de conexión");
    }
    setProcessing(null);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Agencia</th>
            <th>Usuario Responsable</th>
            <th>Ubicación</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {agencies.map((agency) => (
            <tr key={agency.id}>
              <td>
                <div className={styles.agencyCell}>
                  {agency.logo ? (
                    <div className={styles.miniLogo}>
                      <Image src={agency.logo} alt="Logo" fill />
                    </div>
                  ) : (
                    <div className={styles.noLogo}>A</div>
                  )}
                  <Link 
                    href={agency.slug ? `/agencia/${agency.slug}` : `/catalogo?vendedor=${agency.userId}`} 
                    target="_blank" 
                    className={styles.agencyLink}
                  >
                    <div className={styles.agencyName}>{agency.tradeName}</div>
                    {agency.slug ? (
                      <div className={styles.slug}>/agencia/{agency.slug}</div>
                    ) : (
                      <div className={styles.noSlug}>Sin minisitio (Catálogo)</div>
                    )}
                  </Link>
                </div>
              </td>
              <td>
                <div className={styles.userName}>{agency.user.name} {agency.user.lastName}</div>
                <div className={styles.userEmail}>{agency.user.email}</div>
              </td>
              <td>{toTitleCase(agency.city)}, {toTitleCase(agency.province || "")}</td>
              <td>{agency._count.vehicles} autos</td>
              <td>
                <span className={`${styles.statusBadge} ${styles[`status${agency.status}`]}`}>
                  {agency.status === "PENDING" ? "Pendiente" : agency.status === "APPROVED" ? "Aprobado" : "Rechazado"}
                </span>
              </td>
              <td>
                <div className={styles.actions}>
                  {agency.status === "PENDING" && (
                    <>
                      <button 
                        onClick={() => handleStatusUpdate(agency.id, "APPROVED")}
                        disabled={processing === agency.id}
                        className={styles.btnApprove}
                      >
                        Aprobar
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(agency.id, "REJECTED")}
                        disabled={processing === agency.id}
                        className={styles.btnReject}
                      >
                        Rechazar
                      </button>
                    </>
                  )}
                  {agency.status !== "PENDING" && (
                    <button 
                      onClick={() => handleStatusUpdate(agency.id, "PENDING")}
                      disabled={processing === agency.id}
                      className={styles.btnReset}
                    >
                      Resetear a Pendiente
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const toTitleCase = (str: string) => {
  if (!str) return "";
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
};
