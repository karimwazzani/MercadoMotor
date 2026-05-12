"use client";

import { useState, useEffect, useTransition } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import { deleteAd } from "../actions";

const AD_SLOTS_MAP: Record<string, string> = {
  "HOME_INTERSTITIAL": "Inicio - Banner Central (Ancho)",
  "HOME_PRE_NEW": "Inicio - Banner Superior (Ancho)",
  "CAT_SIDEBAR": "Catálogo - Barra Lateral (Cuadrado)",
  "CAT_GRID_NATIVE": "Catálogo - Tarjeta Nativa (Grilla)",
  "DETAIL_SIDEBAR": "Detalle - Bajo Descripción (Finito)",
  "DETAIL_BOTTOM": "Detalle - Banner Final (Ancho)"
};

export default function AdManagerClient() {
  const [ads, setAds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingAd, setEditingAd] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const res = await fetch("/api/admin/ads");
      const data = await res.json();
      setAds(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    if (file) {
      formData.append("file", file);
    }

    setLoading(true);
    try {
      if (editingAd) {
        // ACTUALIZAR (PATCH)
        formData.append("id", editingAd.id);
        
        await fetch("/api/admin/ads", {
          method: "PATCH",
          body: formData
        });
      } else {
        // CREAR (POST)
        if (!file) return alert("Por favor selecciona un archivo");
        await fetch("/api/admin/ads", {
          method: "POST",
          body: formData
        });
      }
      
      setEditingAd(null);
      setShowModal(false);
      setFile(null);
      setPreview(null);
      fetchAds();
    } catch (e) {
      alert("Error en la operación");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de eliminar esta publicidad?")) {
      startTransition(async () => {
        await deleteAd(id);
        fetchAds();
      });
    }
  };

  if (loading && ads.length === 0) return <div className={styles.emptyState}>Cargando centro de anuncios...</div>;

  return (
    <>
      {/* ... (KPI section stays same) ... */}
      <section className={styles.kpiGrid} style={{ marginBottom: "3rem" }}>
        <div className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Anuncios Activos</span>
          <div className={styles.kpiValue}>{ads.filter(a => a.isActive).length}</div>
          <div className={styles.kpiTrend}>Pautas en curso</div>
        </div>
        <div className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Alcance Total</span>
          <div className={styles.kpiValue}>👁️ {ads.reduce((acc, ad) => acc + ad.views, 0).toLocaleString()}</div>
          <div className={styles.kpiTrend}>Impresiones totales</div>
        </div>
        <div className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Clics Totales</span>
          <div className={styles.kpiValue}>🖱️ {ads.reduce((acc, ad) => acc + ad.clicks, 0).toLocaleString()}</div>
          <div className={styles.kpiTrend}>Interacción directa</div>
        </div>
      </section>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h2 className={styles.sectionTitle} style={{ margin: 0 }}>Pautas Configuradas</h2>
        <button className={styles.btnPrimary} onClick={() => { setEditingAd(null); setPreview(null); setShowModal(true); }} style={{ borderRadius: "12px" }}>
          + PROGRAMAR NUEVA PAUTA
        </button>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Anuncio</th>
              <th>Ubicación / Slot</th>
              <th>Estado</th>
              <th>Vencimiento</th>
              <th>Performance</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((ad) => (
              <tr key={ad.id}>
                <td>
                  <div className={styles.vehicleCell}>
                    <div className={styles.thumbnail} style={{ borderRadius: "8px" }}>
                      {ad.type === "IMAGE" ? (
                        <Image src={ad.mediaUrl} alt="ad" fill style={{ objectFit: "cover" }} />
                      ) : (
                        <video src={ad.mediaUrl} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
                      )}
                    </div>
                    <div>
                      <strong>{ad.title}</strong>
                      <div className={styles.subtext}>{ad.type}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--color-primary)" }}>
                    {AD_SLOTS_MAP[ad.areaKey] || ad.areaKey}
                  </div>
                  <div className={styles.subtext}>{ad.page}</div>
                </td>
                <td>
                  <span style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "20px", background: ad.isActive ? "#dcfce7" : "#fee2e2", color: ad.isActive ? "#166534" : "#991b1b", fontWeight: 700 }}>
                    {ad.isActive ? "ACTIVO" : "FINALIZADO"}
                  </span>
                </td>
                <td>
                  <div className={styles.subtext}>
                    {ad.endDate ? new Date(ad.endDate).toLocaleDateString() : "Permanente"}
                  </div>
                </td>
                <td>
                  <div style={{ fontSize: "0.85rem" }}>👁️ {ad.views} / 🖱️ {ad.clicks}</div>
                </td>
                <td>
                  <div className={styles.actionsCell}>
                    <button className={styles.btnSecondary} onClick={() => { setEditingAd(ad); setPreview(ad.mediaUrl); setShowModal(true); }} style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem" }}>Editar</button>
                    <button className={styles.btnReject} onClick={() => handleDelete(ad.id)} disabled={isPending}>Borrar</button>
                  </div>
                </td>
              </tr>
            ))}
            {ads.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "4rem", color: "#666" }}>No hay anuncios programados todavía.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* UPLOAD / EDIT MODAL */}
      {showModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.85)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem", backdropFilter: "blur(5px)" }}>
          <div style={{ backgroundColor: "white", borderRadius: "16px", width: "100%", maxWidth: "700px", maxHeight: "90vh", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
            <div style={{ padding: "1.5rem", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800 }}>{editingAd ? "Editar Publicidad" : "Programar Nueva Publicidad"}</h2>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: "1.8rem", cursor: "pointer", color: "#666" }}>&times;</button>
            </div>
            
            <form onSubmit={handleSubmit} style={{ overflowY: "auto", padding: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                
                {/* PREVIEW ZONE */}
                <div style={{ gridColumn: "span 2" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 700 }}>Archivo Multimedia (Clic para cambiar)</label>
                  <div 
                    onClick={() => document.getElementById('adFile')?.click()}
                    style={{ width: "100%", height: "150px", border: "2px dashed #ddd", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", overflow: "hidden", position: "relative" }}
                  >
                    {preview ? (
                      (editingAd?.type === "VIDEO" || file?.type.includes('video')) && !file?.type.includes('image') ? (
                        <video src={preview} style={{ width: "100%", height: "100%", objectFit: "cover" }} autoPlay muted loop />
                      ) : (
                        <Image src={preview} alt="preview" fill style={{ objectFit: "contain" }} />
                      )
                    ) : (
                      <>
                        <span style={{ fontSize: "2rem" }}>📁</span>
                        <span style={{ fontSize: "0.8rem", color: "#666" }}>Clic para seleccionar archivo</span>
                      </>
                    )}
                  </div>
                  <input id="adFile" type="file" accept="image/*,video/*" hidden onChange={handleFileChange} />
                </div>

                <div style={{ gridColumn: "span 2" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 700 }}>Título</label>
                  <input name="title" defaultValue={editingAd?.title} required style={{ width: "100%", padding: "0.8rem", borderRadius: "10px", border: "1px solid #ddd" }} />
                </div>

                {!editingAd && (
                  <>
                    <div>
                      <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 700 }}>Página</label>
                      <select name="page" style={{ width: "100%", padding: "0.8rem", borderRadius: "10px", border: "1px solid #ddd" }}>
                        <option value="HOME">Página de Inicio</option>
                        <option value="CATALOGO">Catálogo General</option>
                        <option value="DETALLE">Detalle de Vehículo</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 700 }}>Espacio (Slot)</label>
                      <select name="areaKey" style={{ width: "100%", padding: "0.8rem", borderRadius: "10px", border: "1px solid #ddd" }}>
                        {Object.entries(AD_SLOTS_MAP).map(([key, label]) => (
                          <option key={key} value={key}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <div style={{ gridColumn: "span 2" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 700 }}>Link de Destino</label>
                  <input name="linkUrl" defaultValue={editingAd?.linkUrl} placeholder="https://..." style={{ width: "100%", padding: "0.8rem", borderRadius: "10px", border: "1px solid #ddd" }} />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 700 }}>Inicio</label>
                  <input name="startDate" type="date" required defaultValue={editingAd?.startDate ? new Date(editingAd.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]} style={{ width: "100%", padding: "0.8rem", borderRadius: "10px", border: "1px solid #ddd" }} />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: 700 }}>Fin (Opcional)</label>
                  <input name="endDate" type="date" defaultValue={editingAd?.endDate ? new Date(editingAd.endDate).toISOString().split('T')[0] : ""} style={{ width: "100%", padding: "0.8rem", borderRadius: "10px", border: "1px solid #ddd" }} />
                </div>

                <div style={{ gridColumn: "span 2", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <input type="checkbox" name="isActive" id="isActive" defaultChecked={editingAd ? editingAd.isActive : true} />
                  <label htmlFor="isActive" style={{ fontSize: "0.9rem", fontWeight: 700 }}>¿Publicidad Activa?</label>
                </div>

              </div>

              <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                <button type="button" onClick={() => setShowModal(false)} className={styles.btnSecondary} style={{ borderRadius: "12px" }}>Cancelar</button>
                <button type="submit" className={styles.btnPrimary} disabled={loading} style={{ borderRadius: "12px", padding: "0.8rem 2rem" }}>
                  {loading ? "GUARDANDO..." : editingAd ? "GUARDAR CAMBIOS" : "CREAR PUBLICIDAD"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
