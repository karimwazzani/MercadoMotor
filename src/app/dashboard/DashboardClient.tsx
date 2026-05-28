"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./dashboard.module.css";
import ReferralBanner from "./ReferralBanner";
import NotificationCenter from "@/app/components/NotificationCenter";

interface VehicleImage {
  id: string;
  vehicleId: string;
  url: string;
  order: number;
  isMain: boolean;
}

interface Vehicle {
  id: string;
  userId: string;
  agencyId: string | null;
  category: string;
  condition: string;
  brand: string;
  model: string;
  version: string | null;
  year: number;
  mileage: number;
  fuel: string | null;
  transmission: string | null;
  color: string | null;
  doors: number | null;
  traction: string | null;
  location: string;
  price: number;
  previousPrice: number | null;
  currency: string;
  description: string | null;
  equipment: string | null;
  status: string;
  rejectionComment: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  approvedAt: Date | string | null;
  expiresAt: Date | string | null;
  finishedAt: Date | string | null;
  endReason: string | null;
  isHighlighted: boolean;
  highlightExpiresAt: Date | string | null;
  views: number;
  whatsappClicks: number;
  phoneClicks: number;
}

interface VehicleWithImages extends Vehicle {
  images: VehicleImage[];
}

interface DashboardClientProps {
  initialVehicles: VehicleWithImages[];
  userId: string;
  accountType: string;
}

export default function DashboardClient({ initialVehicles, userId, accountType }: DashboardClientProps) {
  const [vehicles, setVehicles] = useState<VehicleWithImages[]>(initialVehicles);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);
  const [bulkLoading, setBulkLoading] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    type: "finalize_individual" | "finalize_bulk" | "pause_bulk" | null;
    vehicleId?: string;
    selectedReason?: string;
  }>({ type: null });

  const router = useRouter();

  // Actualizar vehículos cuando cambien los iniciales desde el servidor
  useEffect(() => {
    setVehicles(initialVehicles);
  }, [initialVehicles]);

  // Manejar el cierre de dropdowns haciendo clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeDropdownId) {
        const target = event.target as HTMLElement;
        if (!target.closest(`.${styles.dropdownContainer}`)) {
          setActiveDropdownId(null);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdownId]);

  // Selección múltiple
  const handleToggleSelect = (id: string) => {
    setActiveDropdownId(null);
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleClearSelection = () => {
    setSelectedIds(new Set());
  };

  // Acciones individuales
  const handleTogglePauseIndividual = async (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === "PAUSED" ? "APPROVED" : "PAUSED";
    
    // Optimistic UI Update
    setVehicles((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: nextStatus } : v))
    );
    setActiveDropdownId(null);

    try {
      const res = await fetch(`/api/vehicles/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      if (!res.ok) {
        // Rollback
        setVehicles((prev) =>
          prev.map((v) => (v.id === id ? { ...v, status: currentStatus } : v))
        );
        alert("Error al actualizar el estado de la publicación.");
      } else {
        router.refresh();
      }
    } catch (e) {
      // Rollback
      setVehicles((prev) =>
        prev.map((v) => (v.id === id ? { ...v, status: currentStatus } : v))
      );
      alert("Error de conexión.");
    }
  };

  const handleRenewIndividual = async (id: string) => {
    setActiveDropdownId(null);
    try {
      const res = await fetch(`/api/vehicles/${id}/renew`, {
        method: "POST",
      });
      if (res.ok) {
        setVehicles((prev) =>
          prev.map((v) => {
            if (v.id === id) {
              const nextExp = new Date();
              nextExp.setDate(nextExp.getDate() + 45);
              return { ...v, status: "APPROVED", expiresAt: nextExp };
            }
            return v;
          })
        );
        router.refresh();
      } else {
        alert("Error al renovar la publicación.");
      }
    } catch (e) {
      alert("Error de conexión.");
    }
  };

  const handleDeleteIndividual = async (id: string) => {
    setActiveDropdownId(null);
    if (!confirm("¿Estás seguro de que deseas eliminar esta publicación? Esta acción no se puede deshacer y se borrarán todas las fotos.")) {
      return;
    }

    const previousVehicles = [...vehicles];
    setVehicles((prev) => prev.filter((v) => v.id !== id));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });

    try {
      const res = await fetch(`/api/vehicles/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        setVehicles(previousVehicles);
        alert("Error al eliminar la publicación.");
      } else {
        router.refresh();
      }
    } catch (e) {
      setVehicles(previousVehicles);
      alert("Error de conexión.");
    }
  };

  const handleOpenFinalizeIndividual = (id: string) => {
    setActiveDropdownId(null);
    setModalConfig({
      type: "finalize_individual",
      vehicleId: id,
      selectedReason: "",
    });
  };

  const handleConfirmFinalizeIndividual = async () => {
    const { vehicleId, selectedReason } = modalConfig;
    if (!vehicleId || !selectedReason) {
      alert("Por favor, selecciona un motivo.");
      return;
    }

    setBulkLoading(true);
    try {
      const res = await fetch(`/api/vehicles/${vehicleId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "SOLD", reason: selectedReason }),
      });

      if (res.ok) {
        setVehicles((prev) =>
          prev.map((v) =>
            v.id === vehicleId ? { ...v, status: "SOLD", finishedAt: new Date() } : v
          )
        );
        setModalConfig({ type: null });
        router.refresh();
      } else {
        alert("Error al finalizar la publicación.");
      }
    } catch (error) {
      alert("Ocurrió un error de red.");
    } finally {
      setBulkLoading(false);
    }
  };

  // Acciones masivas
  const handleBulkAction = async (action: "pause" | "finalize") => {
    const ids = Array.from(selectedIds);
    setBulkLoading(true);

    try {
      const res = await fetch("/api/vehicles/bulk-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids, action }),
      });

      if (res.ok) {
        setVehicles((prev) =>
          prev.map((v) => {
            if (ids.includes(v.id)) {
              if (action === "pause") {
                return { ...v, status: "PAUSED" };
              } else if (action === "finalize") {
                return { ...v, status: "SOLD", finishedAt: new Date() };
              }
            }
            return v;
          })
        );
        setSelectedIds(new Set());
        setModalConfig({ type: null });
        router.refresh();
      } else {
        alert("Hubo un error al procesar la acción en lote.");
      }
    } catch (e) {
      alert("Error de conexión.");
    } finally {
      setBulkLoading(false);
    }
  };

  return (
    <div className={styles.dashboardPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
          </div>
          <nav className={styles.nav}>
            <NotificationCenter />
            {accountType === "ADMINISTRADOR" && (
              <Link href="/admin" className={styles.navLink} style={{ color: "var(--color-accent)", fontWeight: "bold" }}>Centro Admin</Link>
            )}
            <Link href="/dashboard/favorites" className={styles.navLink} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Favoritos
            </Link>
            <Link href="/dashboard/profile" className={styles.navLink}>Mi Perfil</Link>
            <Link href="/" className={styles.navLink}>Cerrar Panel</Link>
            <Link href="/api/auth/signout" className={styles.navLink} style={{ opacity: 0.7 }}>Cerrar sesión</Link>
            <Link href="/publish" className="btnPublish">PUBLICAR GRATIS</Link>
          </nav>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem'}}>
          <div>
            <h1 className={styles.title} style={{marginBottom: '0.5rem'}}>Mis Publicaciones</h1>
            <p className={styles.subtitle}>Supervisá el estado de los vehículos que tenés a la venta en MercadoMotor.</p>
          </div>
          <div style={{backgroundColor: 'var(--color-bg-secondary)', padding: '0.8rem 1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center'}}>
            <div style={{fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem'}}>Tu Código de Usuario</div>
            <div style={{fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)'}}>
              MM{userId.replace(/-/g, '').substring(0, 8).toUpperCase()}
            </div>
          </div>
        </div>

        <ReferralBanner userId={userId} />

        {vehicles.length === 0 ? (
          <div className={styles.emptyState}>
            Aún no has cargado ningún vehículo al catálogo. <br /><br />
            <Link href="/publish" className={styles.btnPrimary}>Comenzar a vender</Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {vehicles.map((vehicle) => {
              const mainImg = vehicle.images.find((i) => i.isMain) || vehicle.images[0];
              const isRejected = vehicle.status === "REJECTED";
              const isPending = vehicle.status === "PENDING";
              const isApproved = vehicle.status === "APPROVED";
              const isPaused = vehicle.status === "PAUSED";
              const isSold = vehicle.status === "SOLD";

              // Lógica de expiración temporal
              let isExpired = false;
              let isExpiringSoon = false;
              let daysLeft = 0;

              if (isApproved && vehicle.expiresAt) {
                const now = new Date();
                const exp = new Date(vehicle.expiresAt);
                const diffTime = exp.getTime() - now.getTime();
                daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (daysLeft < 0) {
                  isExpired = true;
                } else if (daysLeft <= 5) {
                  isExpiringSoon = true;
                }
              }

              const isSelected = selectedIds.has(vehicle.id);

              return (
                <div
                  key={vehicle.id}
                  className={`${styles.card} ${isRejected ? styles.cardRejected : ""} ${
                    isExpired ? styles.cardExpired : ""
                  } ${isSelected ? styles.cardSelected : ""}`}
                >
                  <div className={styles.imageOverlayContainer}>
                    {/* Checkbox de selección múltiple */}
                    <label className={styles.checkboxContainer} onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleToggleSelect(vehicle.id)}
                        className={styles.checkboxInput}
                      />
                    </label>

                    {mainImg ? (
                      <Image
                        src={mainImg.url}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <div className={styles.noImage}>Sin Foto</div>
                    )}

                    <div
                      className={`${styles.statusBadge} ${
                        styles[
                          isExpired
                            ? "expired"
                            : isSold
                            ? "sold"
                            : isPaused
                            ? "paused"
                            : vehicle.status.toLowerCase()
                        ]
                      }`}
                    >
                      {isPending && "En Revisión"}
                      {isApproved && !isExpired && !isExpiringSoon && "Público Activo"}
                      {isApproved && isExpiringSoon && `Vence en ${daysLeft} días`}
                      {isExpired && "Vencido - No Público"}
                      {isRejected && "Rechazado - Corregir"}
                      {isPaused && "Pausado"}
                      {isSold && "Finalizado"}
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3>
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <div className={styles.cardRefCode}>
                      Ref: MM{vehicle.id.replace(/-/g, "").substring(0, 8).toUpperCase()}
                    </div>

                    {isRejected && vehicle.rejectionComment && (
                      <div className={styles.rejectionBox}>
                        <strong className={styles.rejectionTitle}>Motivo del rechazo:</strong>
                        <span className={styles.rejectionText}>"{vehicle.rejectionComment}"</span>
                      </div>
                    )}

                    <p className={styles.details}>
                      {vehicle.year} • {vehicle.mileage.toLocaleString()} km
                    </p>
                    <p className={styles.price}>
                      {vehicle.currency === "ARS" ? "$" : "US$"}{" "}
                      {vehicle.price.toLocaleString()}
                    </p>

                    {isPending && (
                      <div className={styles.pendingNotice}>
                        En revisión por moderadores.
                      </div>
                    )}

                    {/* Botón de opciones colapsable */}
                    {selectedIds.size === 0 && (
                      <div className={styles.dropdownContainer}>
                        <button
                          type="button"
                          className={styles.btnDropdownToggle}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdownId(
                              activeDropdownId === vehicle.id ? null : vehicle.id
                            );
                          }}
                        >
                          Opciones
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transform:
                                activeDropdownId === vehicle.id
                                  ? "rotate(180deg)"
                                  : "rotate(0)",
                              transition: "transform 0.2s ease",
                            }}
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        {activeDropdownId === vehicle.id && (
                          <div className={styles.dropdownMenu}>
                            <Link
                              href={`/publish/edit/${vehicle.id}`}
                              className={styles.dropdownItem}
                            >
                              Editar publicación
                            </Link>

                            {isApproved && !isExpired && (
                              <>
                                <Link
                                  href={`/catalogo/${vehicle.id}`}
                                  className={styles.dropdownItem}
                                >
                                  Ver en catálogo
                                </Link>
                                <Link
                                  href={`/catalogo/${vehicle.id}/poster`}
                                  className={styles.dropdownItem}
                                  target="_blank"
                                >
                                  Cartel para el auto
                                </Link>
                              </>
                            )}

                            {(isApproved || isPaused) && !isExpired && (
                              <button
                                type="button"
                                className={styles.dropdownItem}
                                onClick={() =>
                                  handleTogglePauseIndividual(vehicle.id, vehicle.status)
                                }
                              >
                                {isPaused ? "Reanudar publicación" : "Pausar publicación"}
                              </button>
                            )}

                            {(isApproved || isPaused || isExpired) && (
                              <button
                                type="button"
                                className={styles.dropdownItem}
                                onClick={() => handleOpenFinalizeIndividual(vehicle.id)}
                              >
                                Finalizar publicación
                              </button>
                            )}

                            {(isExpiringSoon || isExpired) && (
                              <button
                                type="button"
                                className={styles.dropdownItem}
                                onClick={() => handleRenewIndividual(vehicle.id)}
                              >
                                Renovar (45 días)
                              </button>
                            )}

                            <button
                              type="button"
                              className={`${styles.dropdownItem} ${styles.dropdownItemDanger}`}
                              onClick={() => handleDeleteIndividual(vehicle.id)}
                            >
                              Eliminar publicación
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Barra de acciones masivas flotante sticky */}
      {selectedIds.size > 0 && (
        <div className={styles.bulkBar}>
          <div className={styles.bulkInfo}>
            {selectedIds.size} {selectedIds.size === 1 ? "publicación seleccionada" : "publicaciones seleccionadas"}
          </div>
          <div className={styles.bulkActions}>
            <button
              type="button"
              className={styles.btnBulkPause}
              disabled={bulkLoading}
              onClick={() => setModalConfig({ type: "pause_bulk" })}
            >
              Pausar seleccionadas
            </button>
            <button
              type="button"
              className={styles.btnBulkFinish}
              disabled={bulkLoading}
              onClick={() => setModalConfig({ type: "finalize_bulk" })}
            >
              Finalizar seleccionadas
            </button>
            <button
              type="button"
              className={styles.btnBulkCancel}
              disabled={bulkLoading}
              onClick={handleClearSelection}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Modales de Confirmación y Motivo de Finalización */}
      {modalConfig.type !== null && (
        <div
          className={styles.modalBackdrop}
          onClick={() => !bulkLoading && setModalConfig({ type: null })}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {modalConfig.type === "finalize_individual" && (
              <>
                <h3 className={styles.modalTitle}>Finalizar publicación</h3>
                <p className={styles.modalSubtitle}>
                  Selecciona el motivo por el cual deseas finalizar esta publicación. La información se guardará de forma anónima:
                </p>

                <div className={styles.modalReasonsList}>
                  <label className={styles.modalReasonItem}>
                    <input
                      type="radio"
                      name="finishReason"
                      value="SOLD_MERCADOMOTOR"
                      checked={modalConfig.selectedReason === "SOLD_MERCADOMOTOR"}
                      onChange={(e) =>
                        setModalConfig((prev) => ({
                          ...prev,
                          selectedReason: e.target.value,
                        }))
                      }
                      className={styles.modalRadio}
                    />
                    <span>Lo vendí</span>
                  </label>

                  <label className={styles.modalReasonItem}>
                    <input
                      type="radio"
                      name="finishReason"
                      value="WITHDRAWN"
                      checked={modalConfig.selectedReason === "WITHDRAWN"}
                      onChange={(e) =>
                        setModalConfig((prev) => ({
                          ...prev,
                          selectedReason: e.target.value,
                        }))
                      }
                      className={styles.modalRadio}
                    />
                    <span>Decidí no venderlo por ahora</span>
                  </label>

                  <label className={styles.modalReasonItem}>
                    <input
                      type="radio"
                      name="finishReason"
                      value="OTHER"
                      checked={modalConfig.selectedReason === "OTHER"}
                      onChange={(e) =>
                        setModalConfig((prev) => ({
                          ...prev,
                          selectedReason: e.target.value,
                        }))
                      }
                      className={styles.modalRadio}
                    />
                    <span>Otro motivo</span>
                  </label>
                </div>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.btnModalCancel}
                    onClick={() => setModalConfig({ type: null })}
                    disabled={bulkLoading}
                  >
                    Volver
                  </button>
                  <button
                    type="button"
                    className={styles.btnModalConfirm}
                    onClick={handleConfirmFinalizeIndividual}
                    disabled={bulkLoading || !modalConfig.selectedReason}
                  >
                    {bulkLoading ? "Guardando..." : "Confirmar"}
                  </button>
                </div>
              </>
            )}

            {modalConfig.type === "finalize_bulk" && (
              <>
                <h3 className={styles.modalTitle}>Finalizar publicaciones</h3>
                <p className={styles.modalSubtitle}>
                  ¿Estás seguro de que deseas finalizar las {selectedIds.size} publicaciones seleccionadas? Esta acción es irreversible.
                </p>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.btnModalCancel}
                    onClick={() => setModalConfig({ type: null })}
                    disabled={bulkLoading}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className={styles.btnModalConfirm}
                    onClick={() => handleBulkAction("finalize")}
                    disabled={bulkLoading}
                  >
                    {bulkLoading ? "Procesando..." : "Finalizar todo"}
                  </button>
                </div>
              </>
            )}

            {modalConfig.type === "pause_bulk" && (
              <>
                <h3 className={styles.modalTitle}>Pausar publicaciones</h3>
                <p className={styles.modalSubtitle}>
                  ¿Estás seguro de que deseas pausar las {selectedIds.size} publicaciones seleccionadas? Podrás reanudarlas en cualquier momento desde sus respectivos menús de opciones.
                </p>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.btnModalCancel}
                    onClick={() => setModalConfig({ type: null })}
                    disabled={bulkLoading}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className={styles.btnModalConfirm}
                    onClick={() => handleBulkAction("pause")}
                    disabled={bulkLoading}
                  >
                    {bulkLoading ? "Procesando..." : "Pausar todo"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
