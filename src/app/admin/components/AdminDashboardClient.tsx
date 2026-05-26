"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { approveVehicle, rejectVehicle, deleteVehicle, deleteUser, updateUser, createAd, deleteAd } from "../actions";

export default function AdminDashboardClient({ allVehicles, allUsers, pendingCount, totalUsers }: any) {
  const [activeTab, setActiveTab] = useState<"PENDING" | "ALL">("PENDING");
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const [vehicleSearch, setVehicleSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");

  // Rejection states
  const [showRejectionForm, setShowRejectionForm] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const closeModal = () => {
    setSelectedVehicle(null);
    setShowRejectionForm(false);
    setRejectionReason("");
  };

  const handleAction = (actionFn: any, id: string) => {
    if (confirm("¿Estás seguro de realizar esta acción?")) {
      startTransition(() => {
        actionFn(id);
        if (selectedVehicle && selectedVehicle.id === id) {
          closeModal();
        }
        if (editingUser && editingUser.id === id) {
          setEditingUser(null);
        }
      });
    }
  };

  const handleUpdateUser = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      accountType: formData.get('accountType'),
    };
    
    startTransition(() => {
      updateUser(editingUser.id, data);
      setEditingUser(null);
    });
  };

  const getAvCode = (id: string) => `MM${id.replace(/-/g, '').substring(0, 8).toUpperCase()}`;

  const displayedVehicles = allVehicles.filter((v: any) => {
    if (activeTab === "PENDING" && v.status !== "PENDING") return false;
    if (vehicleSearch) {
      const code = getAvCode(v.id);
      const searchLower = vehicleSearch.toLowerCase();
      if (!code.toLowerCase().includes(searchLower) && 
          !v.brand.toLowerCase().includes(searchLower) && 
          !v.model.toLowerCase().includes(searchLower)) {
        return false;
      }
    }
    return true;
  });

  const displayedUsers = allUsers.filter((u: any) => {
    if (userSearch) {
      const code = getAvCode(u.id);
      const searchLower = userSearch.toLowerCase();
      if (!code.toLowerCase().includes(searchLower) && 
          !u.name?.toLowerCase().includes(searchLower) && 
          !u.email?.toLowerCase().includes(searchLower)) {
        return false;
      }
    }
    return true;
  });

  return (
    <>
      {/* VEHICLES SECTION */}
      <div className={styles.sectionHeader} style={{marginTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem"}}>
        <h2 className={styles.sectionTitle} style={{marginBottom: 0}}>Gestión de Vehículos</h2>
        <div style={{display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center"}}>
          <input 
            type="text" 
            placeholder="Buscar por código AV o modelo..." 
            value={vehicleSearch}
            onChange={(e) => setVehicleSearch(e.target.value)}
            style={{padding: "0.5rem 1rem", borderRadius: "4px", border: "1px solid #ccc", minWidth: "250px"}}
          />
          <div style={{display: "flex", gap: "0.5rem"}}>
            <button 
              className={activeTab === "PENDING" ? styles.btnPrimary : styles.btnSecondary}
              onClick={() => setActiveTab("PENDING")}
              style={{padding: "0.5rem 1rem"}}
            >
              Pendientes ({pendingCount})
            </button>
            <button 
              className={activeTab === "ALL" ? styles.btnPrimary : styles.btnSecondary}
              onClick={() => setActiveTab("ALL")}
              style={{padding: "0.5rem 1rem"}}
            >
              Todos ({allVehicles.length})
            </button>
          </div>
        </div>
      </div>

      {displayedVehicles.length === 0 ? (
        <div className={styles.emptyState}>No hay vehículos en esta categoría.</div>
      ) : (
        <div className={styles.tableCard}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Vehículo</th>
                <th>Estado</th>
                <th>Vendedor</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {displayedVehicles.map((vehicle: any) => {
                const mainImg = vehicle.images.find((i: any) => i.isMain) || vehicle.images[0];
                return (
                  <tr key={vehicle.id}>
                    <td>
                      <div className={styles.vehicleCell}>
                        <div className={styles.thumbnail}>
                          {mainImg ? (
                            <Image src={mainImg.url} alt="vehiculo" fill style={{objectFit: 'cover'}} />
                          ) : (
                            <span>Sin Foto</span>
                          )}
                        </div>
                        <div>
                          <strong>{vehicle.brand} {vehicle.model}</strong>
                          <div style={{fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 500}}>
                            MM{vehicle.id.replace(/-/g, '').substring(0, 8).toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style={{ fontSize: "0.8rem", padding: "0.2rem 0.5rem", borderRadius: "4px", backgroundColor: vehicle.status === "APPROVED" ? "#dcfce7" : vehicle.status === "PENDING" ? "#fef9c3" : "#fee2e2", color: vehicle.status === "APPROVED" ? "#166534" : vehicle.status === "PENDING" ? "#854d0e" : "#991b1b" }}>
                        {vehicle.status}
                      </span>
                    </td>
                    <td>
                      <div className={styles.sellerCell}>
                        <span className={vehicle.agencyId ? styles.agencyBadge : styles.particularBadge}>
                          {vehicle.agencyId ? "Agencia" : "Particular"}
                        </span>
                      </div>
                    </td>
                    <td><div className={styles.subtext}>{new Date(vehicle.createdAt).toLocaleDateString()}</div></td>
                    <td>
                      <div className={styles.actionsCell}>
                        <button className={styles.btnViewAdmin} onClick={() => { setSelectedVehicle(vehicle); setShowRejectionForm(false); setRejectionReason(""); }}>Revisar</button>
                        <button className={styles.btnReject} onClick={() => handleAction(deleteVehicle, vehicle.id)} disabled={isPending}>Eliminar</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* USERS MANAGEMENT */}
      <div className={styles.sectionHeader} style={{marginTop: "4rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem"}}>
        <h2 className={styles.sectionTitle} style={{marginBottom: 0}}>Gestión de Usuarios ({totalUsers})</h2>
        <input 
          type="text" 
          placeholder="Buscar por código AV, nombre o email..." 
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          style={{padding: "0.5rem 1rem", borderRadius: "4px", border: "1px solid #ccc", minWidth: "300px"}}
        />
      </div>
      
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre / Cliente</th>
              <th>Tipo</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user: any) => (
              <tr key={user.id}>
                <td>
                  <strong>{user.name} {user.lastName}</strong>
                  <div style={{fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 500}}>
                    {getAvCode(user.id)}
                  </div>
                </td>
                <td>
                  <span className={user.accountType === "AGENCIA" ? styles.agencyBadge : styles.particularBadge}>
                    {user.accountType}
                  </span>
                </td>
                <td>{user.email}</td>
                <td>
                  <div className={styles.actionsCell}>
                    <button className={styles.btnSecondary} onClick={() => setEditingUser(user)} style={{padding: '0.4rem 0.8rem', fontSize: '0.8rem'}}>Editar</button>
                    <button className={styles.btnReject} onClick={() => handleAction(deleteUser, user.id)} disabled={isPending}>Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* REVIEW MODAL */}
      {selectedVehicle && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.8)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
          <div style={{ backgroundColor: "white", borderRadius: "12px", width: "100%", maxWidth: "900px", maxHeight: "90vh", display: "flex", flexDirection: "column", overflow: "hidden", color: "#1c1917" }}>
            
            <div style={{ padding: "1rem 1.5rem", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Revisión de Publicación: {selectedVehicle.brand} {selectedVehicle.model}</h2>
              <button onClick={closeModal} style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#1c1917" }}>&times;</button>
            </div>
            
            <div style={{ padding: "1.5rem", overflowY: "auto", flex: 1, display: "flex", gap: "2rem" }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "1rem", fontWeight: 600 }}>Galería</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  {selectedVehicle.images.map((img: any) => (
                    <div key={img.id} style={{ position: "relative", width: "100%", height: "150px", borderRadius: "8px", overflow: "hidden" }}>
                      <Image src={img.url} alt="vehiculo" fill style={{objectFit: 'cover'}} />
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: "1rem", fontWeight: 600 }}>Detalles</h3>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem" }}>
                    <li><strong>Ref:</strong> <span style={{fontWeight: 600, color: 'var(--color-primary)'}}>MM{selectedVehicle.id.replace(/-/g, '').substring(0, 8).toUpperCase()}</span></li>
                    <li><strong>Versión:</strong> {selectedVehicle.version || '-'}</li>
                    <li><strong>Año:</strong> {selectedVehicle.year}</li>
                    <li><strong>Kilometraje:</strong> {selectedVehicle.mileage.toLocaleString()} km</li>
                    <li><strong>Precio:</strong> {selectedVehicle.currency} {selectedVehicle.price.toLocaleString()}</li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem", fontWeight: 600 }}>Descripción del Vendedor</h3>
                  <div style={{ padding: "1rem", backgroundColor: "#f9fafb", borderRadius: "8px", border: "1px solid #eee", fontSize: "0.85rem", lineHeight: "1.5", color: "#4b5563", maxHeight: "200px", overflowY: "auto" }}>
                    {selectedVehicle.description || "Sin descripción proporcionada."}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid #eee", display: "flex", gap: "1rem", justifyContent: "flex-end", backgroundColor: "#f9fafb", minHeight: "80px" }}>
              {showRejectionForm ? (
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.75rem", backgroundColor: "#fff5f5", border: "1px solid #fee2e2", padding: "1rem", borderRadius: "8px" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#991b1b" }}>Especificá el motivo del rechazo para el vendedor:</label>
                  <textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Ej: Las fotos del auto deben ser más nítidas y de día. Por favor, subí nuevas imágenes para aprobar tu publicación."
                    rows={3}
                    required
                    style={{ width: "100%", padding: "0.6rem", border: "1px solid #fca5a5", borderRadius: "6px", fontSize: "0.85rem", resize: "none", color: "#1c1917" }}
                  />
                  <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
                    <button
                      type="button"
                      className={styles.btnSecondary}
                      onClick={() => setShowRejectionForm(false)}
                      style={{ fontSize: "0.8rem", padding: "0.45rem 1rem", borderRadius: "8px", border: "1px solid #ddd", cursor: "pointer" }}
                    >
                      Volver
                    </button>
                    <button
                      type="button"
                      className={styles.btnReject}
                      onClick={() => {
                        if (!rejectionReason.trim()) {
                          alert("Por favor, escribí un motivo para rechazar la publicación.");
                          return;
                        }
                        startTransition(async () => {
                          const res = await rejectVehicle(selectedVehicle.id, rejectionReason);
                          if (res.success) {
                            closeModal();
                          } else {
                            alert("Error al rechazar: " + res.message);
                          }
                        });
                      }}
                      disabled={isPending}
                      style={{ fontSize: "0.8rem", padding: "0.45rem 1.2rem", borderRadius: "8px", backgroundColor: "#ef4444", color: "#fff", cursor: "pointer", border: "none", fontWeight: 600 }}
                    >
                      {isPending ? "Procesando..." : "Confirmar Rechazo"}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button className={styles.btnSecondary} onClick={closeModal} style={{ borderRadius: "12px" }}>Cerrar</button>
                  {selectedVehicle.status === "PENDING" && (
                    <>
                      <button className={styles.btnReject} onClick={() => setShowRejectionForm(true)} disabled={isPending} style={{ borderRadius: "12px" }}>Rechazar</button>
                      <button className={styles.btnApprove} onClick={() => handleAction(approveVehicle, selectedVehicle.id)} disabled={isPending} style={{ borderRadius: "12px" }}>Aprobar Publicación</button>
                    </>
                  )}
                </>
              )}
            </div>
            
          </div>
        </div>
      )}

      {/* EDIT USER MODAL */}
      {editingUser && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.8)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
          <div style={{ backgroundColor: "white", borderRadius: "12px", width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            
            <div style={{ padding: "1rem 1.5rem", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Editar Usuario</h2>
              <button onClick={() => setEditingUser(null)} style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}>&times;</button>
            </div>
            
            <form onSubmit={handleUpdateUser}>
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600 }}>Nombre</label>
                  <input name="name" defaultValue={editingUser.name} required style={{width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '8px'}} />
                </div>
                <div className={styles.inputGroup}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600 }}>Apellido</label>
                  <input name="lastName" defaultValue={editingUser.lastName} style={{width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '8px'}} />
                </div>
                <div className={styles.inputGroup}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600 }}>Email</label>
                  <input name="email" type="email" defaultValue={editingUser.email} required style={{width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '8px'}} />
                </div>
                <div className={styles.inputGroup}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 600 }}>Tipo de Cuenta</label>
                  <select name="accountType" defaultValue={editingUser.accountType} style={{width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <option value="PARTICULAR">Particular</option>
                    <option value="AGENCIA">Agencia</option>
                    <option value="ADMINISTRADOR">Administrador</option>
                  </select>
                </div>
              </div>

              <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid #eee", display: "flex", gap: "1rem", justifyContent: "flex-end", backgroundColor: "#f9fafb" }}>
                <button type="button" className={styles.btnSecondary} onClick={() => setEditingUser(null)} style={{ borderRadius: "12px" }}>Cancelar</button>
                <button type="submit" className={styles.btnPrimary} style={{ borderRadius: "12px" }} disabled={isPending}>Guardar Cambios</button>
              </div>
            </form>
            
          </div>
        </div>
      )}
    </>
  );
}


