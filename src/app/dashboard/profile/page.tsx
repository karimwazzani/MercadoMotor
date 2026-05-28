"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import dashboardStyles from "../dashboard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProfileSettingsPage() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    location: "",
    // Agency specific
    tradeName: "",
    city: "",
    address: "",
    website: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Mi Perfil | MercadoMotor";
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await fetch("/api/profile");
    if (res.ok) {
      const data = await res.json();
      setProfile(data);
      setImagePreview(data.accountType === "AGENCIA" ? data.agencies?.[0]?.logo : data.image);
      setFormData({
        name: data.name || "",
        lastName: data.lastName || "",
        phone: data.phone || "",
        location: data.location || "",
        tradeName: data.agencies?.[0]?.tradeName || "",
        city: data.agencies?.[0]?.city || "",
        address: data.agencies?.[0]?.address || "",
        website: data.agencies?.[0]?.website || "",
        description: data.agencies?.[0]?.description || "",
      });
    }
    setLoading(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMsg("");

    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });
    if (imageFile) {
      dataToSend.append("image", imageFile);
    }

    const res = await fetch("/api/profile", {
      method: "PUT",
      body: dataToSend,
    });

    if (res.ok) {
      setSuccessMsg("Perfil actualizado correctamente. ¡Tus datos están seguros!");
      setTimeout(() => setSuccessMsg(""), 5000);
    } else {
      alert("Error al guardar el perfil");
    }
    setSaving(false);
  };

  if (loading) return <div style={{padding: "4rem", textAlign: "center"}}>Cargando configuración...</div>;
  if (!profile) return <div>Error de autenticación comercial</div>;

  const isAgency = profile.accountType === "AGENCIA";

  return (
    <div className={dashboardStyles.dashboardPage}>
      <header className={dashboardStyles.header}>
        <div className={`container ${dashboardStyles.headerContent}`}>
          <Link href="/" className={dashboardStyles.logo} style={{ textDecoration: 'none' }}>
            Mercado<span className={dashboardStyles.logoAccent}>Motor</span>
          </Link>
          <nav className={dashboardStyles.nav}>
            <Link href="/dashboard" className={dashboardStyles.navLink}>Mis Publicaciones</Link>
            <Link href="/dashboard/favorites" className={dashboardStyles.navLink} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Favoritos
            </Link>
            <Link href="/dashboard/profile" className={dashboardStyles.navLink} style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>⚙️ Mi Perfil</Link>
            <Link href="/publish" className="btnPublish">PUBLICAR GRATIS</Link>
            <Link href="/" className={dashboardStyles.navLink}>Cerrar Panel</Link>
          </nav>
        </div>
      </header>

      <main className={`container ${dashboardStyles.main}`}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem'}}>
          <div>
            <h1 className={dashboardStyles.title}>Configuración</h1>
            <p className={dashboardStyles.subtitle} style={{marginBottom: 0}}>Gestiona tu identidad pública {isAgency && "empresarial"}.</p>
          </div>
          <div style={{backgroundColor: 'var(--color-bg-base)', padding: '0.8rem 1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center'}}>
            <div style={{fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem'}}>Tu Código de Usuario</div>
            <div style={{fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)'}}>
              MM{profile.id.replace(/-/g, '').substring(0, 8).toUpperCase()}
            </div>
          </div>
        </div>

        <div className={styles.profileContainer}>
          <div style={{marginBottom: '2rem'}}>
            <h2 className={styles.title} style={{marginBottom: '0.5rem'}}>
              Mis Datos 
              {isAgency && <span className={styles.badgeAgency}>Cuentas AGENCIA</span>}
            </h2>
            <p className={styles.subtitle} style={{borderBottom: 'none', marginBottom: 0, paddingBottom: 0}}>
              {isAgency 
                ? "Mantené tu vidriera comercial al día para inspirar la mayor confianza y prestigio automotor."
                : "Actualizá tu teléfono y ciudad para agilizar tus compras y ventas personales."}
            </p>
          </div>

          {isAgency && (
            <div className={styles.agencyPromotion}>
              <div className={styles.promotionText}>
                <h3>🚀 Tu Minisitio de Agencia</h3>
                <p>Publicá tu stock en una URL personalizada, mostrá tu logo y generá más confianza con tus clientes.</p>
              </div>
              <Link href="/dashboard/agency/setup" className={styles.btnCreateMinisite}>
                {profile.agencies?.length > 0 ? "Gestionar mi Minisitio" : "Crear mi Minisitio"}
              </Link>
            </div>
          )}

        <form onSubmit={handleSubmit}>
          
          <div className={styles.imageUploadSection}>
            <div className={styles.imagePreviewWrapper}>
              {imagePreview ? (
                <Image src={imagePreview} alt="Perfil" fill className={styles.previewImage} />
              ) : (
                <div className={styles.noImagePlaceholder}>
                  {isAgency ? "🏢 Logo" : "👤 Foto"}
                </div>
              )}
            </div>
            <div className={styles.imageUploadInfo}>
              <label htmlFor="profileImage" className={styles.btnUpload}>
                {imagePreview ? "Cambiar Imagen" : `Subir ${isAgency ? "Logo" : "Foto"}`}
              </label>
              <input 
                id="profileImage" 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className={styles.fileInputHidden} 
              />
              <p className={styles.uploadTip}>
                {isAgency 
                  ? "Sugerido: PNG o JPG cuadrado de al menos 400x400px."
                  : "Una foto clara ayuda a generar confianza con los compradores."}
              </p>
            </div>
          </div>

          <div className={styles.formGrid}>
            
            {/* AGENCIA FIELDS */}
            {isAgency ? (
              <>
                <div className={styles.inputGroup}>
                  <label>Nombre Comercial de Agencia</label>
                  <input type="text" className={styles.input} required
                         value={formData.tradeName} onChange={(e) => setFormData({...formData, tradeName: e.target.value})} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Teléfono Oficial del Concesionario</label>
                  <input type="tel" className={styles.input} required placeholder="Ej: +54 9 11..."
                         value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Ciudad Sede (Localidad, Municipio) *</label>
                  <input type="text" className={styles.input} required
                         value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Dirección Local (Calle y Nro) *</label>
                  <input type="text" className={styles.input} required placeholder="Ej: Av. del Libertador 1234"
                         value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
                </div>
                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label>Sitio Web Corporativo (Opcional)</label>
                  <input type="url" className={styles.input} placeholder="https://www..."
                         value={formData.website} onChange={(e) => setFormData({...formData, website: e.target.value})} />
                </div>
                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label>Descripción Institucional / Sobre Nosotros (Mín. 40 caracteres) *</label>
                  <textarea className={styles.textarea} required minLength={40} placeholder="Somos la agencia líder en vehículos premium..."
                            value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
                  {formData.description.length < 40 && formData.description.length > 0 && (
                    <span style={{color: '#ef4444', fontSize: '0.75rem'}}>Faltan {40 - formData.description.length} caracteres para el mínimo</span>
                  )}
                </div>
              </>
            ) : (
              // PARTICULAR FIELDS
              <>
                <div className={styles.inputGroup}>
                  <label>Nombre</label>
                  <input type="text" className={styles.input} required
                         value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Apellido</label>
                  <input type="text" className={styles.input} required
                         value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Tu Teléfono Celular (Visible al vender)</label>
                  <input type="tel" className={styles.input} required
                         value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Ciudad / Provincia (Opcional)</label>
                  <input type="text" className={styles.input} 
                         value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} />
                </div>
              </>
            )}

            <div className={`${styles.inputGroup} ${styles.fullWidth}`} style={{opacity: 0.5}}>
              <label>Correo Electrónico de Cuenta (No modificable)</label>
              <input type="email" className={styles.input} value={profile.email} disabled />
            </div>

          </div>

          <div className={styles.actionRow}>
            <button type="submit" className={styles.btnSave} disabled={saving}>
              {saving ? "Registrando Cambios..." : "Guardar Perfil"}
            </button>
          </div>
          
          {successMsg && <div className={styles.messageSuccess}>✅ {successMsg}</div>}
        </form>
      </div>
      </main>
    </div>
  );
}
