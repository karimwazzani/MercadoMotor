"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import dashboardStyles from "../../dashboard.module.css";
import Link from "next/link";
import Image from "next/image";
import { LOCATION_DATA } from "@/lib/constants";

export default function AgencySetupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [agency, setAgency] = useState<any>(null);

  const [formData, setFormData] = useState({
    tradeName: "",
    slug: "",
    description: "",
    province: "",
    address: "",
    phone: "",
    whatsapp: "",
    instagram: "",
    facebook: "",
    openingHours: "",
    website: "",
  });

  // Sucursales con estructura de ubicación triple
  const [branches, setBranches] = useState<any[]>([]);

  // Location selectors para Casa Central
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");

  const provinces = Object.keys(LOCATION_DATA).sort();
  const getMunicipalities = (prov: string) => prov ? Object.keys(LOCATION_DATA[prov] || {}).sort() : [];
  const getLocalities = (prov: string, muni: string) => (prov && muni) ? (LOCATION_DATA[prov][muni] || []).sort() : [];

  const capitalize = (s: string) => s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  useEffect(() => {
    fetchAgency();
  }, []);

  const fetchAgency = async () => {
    const res = await fetch("/api/agencies");
    if (res.ok) {
      const data = await res.json();
      if (data) {
        setAgency(data);
        setFormData({
          tradeName: data.tradeName || "",
          slug: data.slug || "",
          description: data.description || "",
          province: data.province || "",
          address: data.address || "",
          phone: data.phone || "",
          whatsapp: data.whatsapp || "",
          instagram: data.instagram || "",
          facebook: data.facebook || "",
          openingHours: data.openingHours || "",
          website: data.website || "",
        });
        
        if (data.branches) {
          const processedBranches = data.branches.map((b: any) => {
            const parts = b.city?.split(", ") || ["", ""];
            return {
              ...b,
              province: b.province || "",
              municipality: parts[1] || "",
              locality: parts[0] || ""
            };
          });
          setBranches(processedBranches);
        }

        if (data.province) setSelectedProvince(data.province);
        if (data.city) {
          const parts = data.city.split(", ");
          setSelectedMunicipality(parts[1] || "");
          setSelectedLocality(parts[0] || "");
        }
        setLogoPreview(data.logo);
        setCoverPreview(data.coverImage);
      }
    }
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverFile(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const addBranch = () => {
    setBranches([...branches, { name: "", province: "", municipality: "", locality: "", phone: "", manager: "", address: "" }]);
  };

  const removeBranch = (index: number) => {
    setBranches(branches.filter((_, i) => i !== index));
  };

  const updateBranch = (index: number, field: string, value: string) => {
    const newBranches = [...branches];
    if (field === "province") {
      newBranches[index] = { ...newBranches[index], province: value, municipality: "", locality: "" };
    } else if (field === "municipality") {
      newBranches[index] = { ...newBranches[index], municipality: value, locality: "" };
    } else {
      newBranches[index] = { ...newBranches[index], [field]: value };
    }
    setBranches(newBranches);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.description.length < 40) {
      alert("La descripción debe tener al menos 40 caracteres.");
      return;
    }
    if (formData.openingHours.length < 20) {
      alert("Los horarios de atención deben tener al menos 20 caracteres.");
      return;
    }
    if (!formData.address) {
      alert("La dirección de la Casa Central es obligatoria.");
      return;
    }

    if (!selectedProvince || !selectedMunicipality || !selectedLocality) {
      alert("Completá la ubicación (Provincia, Municipio, Localidad) de la Casa Central.");
      return;
    }
    
    for (const b of branches) {
      if (!b.province || !b.municipality || !b.locality) {
        alert(`Completá la ubicación de la sucursal: ${b.name || 'Sin nombre'}`);
        return;
      }
    }

    setSaving(true);

    const data = new FormData();
    const cityValue = `${selectedLocality}, ${selectedMunicipality}`;
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.set("city", cityValue);
    data.set("province", selectedProvince);
    
    const branchesToSave = branches.map(b => ({
      ...b,
      city: `${b.locality}, ${b.municipality}`
    }));
    data.set("branches", JSON.stringify(branchesToSave));

    if (logoFile) data.append("logo", logoFile);
    if (coverFile) data.append("cover", coverFile);

    const method = agency ? "PUT" : "POST";
    const res = await fetch("/api/agencies", { method, body: data });

    if (res.ok) {
      alert("Información guardada.");
      router.push("/dashboard/profile");
    } else {
      alert("Error al guardar.");
    }
    setSaving(false);
  };

  if (loading) return <div className={styles.setupPage}>Cargando...</div>;

  return (
    <div className={dashboardStyles.dashboardPage}>
      <header className={dashboardStyles.header}>
        <div className={`container ${dashboardStyles.headerContent}`}>
          <Link href="/dashboard/profile" className={dashboardStyles.logo}>Volver</Link>
          <h1 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Configuración de Minisitio</h1>
        </div>
      </header>

      <main className={`container ${styles.setupPage}`}>
        <form onSubmit={handleSubmit} className={styles.formCard}>
          {/* IDENTIDAD VISUAL */}
          <section>
            <h2 className={styles.sectionTitle}>Identidad Visual</h2>
            <div className={styles.imageUploads}>
              <div className={styles.inputGroup}>
                <label>Logo</label>
                <div className={styles.uploadBox} onClick={() => document.getElementById('logoInput')?.click()}>
                  {logoPreview ? <Image src={logoPreview} alt="Logo" width={80} height={80} /> : <span>Elegir Logo</span>}
                  <input type="file" id="logoInput" hidden onChange={handleLogoChange} accept="image/*" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Portada</label>
                <div className={styles.uploadBox} onClick={() => document.getElementById('coverInput')?.click()}>
                  {coverPreview ? <Image src={coverPreview} alt="Cover" width={400} height={120} /> : <span>Elegir Portada</span>}
                  <input type="file" id="coverInput" hidden onChange={handleCoverChange} accept="image/*" />
                </div>
              </div>
            </div>
          </section>

          {/* INFO GENERAL */}
          <section>
            <h2 className={styles.sectionTitle}>Información General</h2>
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label>Nombre Comercial *</label>
                <input type="text" name="tradeName" value={formData.tradeName} onChange={handleInputChange} className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <label>Link (URL personalizada)</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} className={styles.input} placeholder="ej: mi-agencia" />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Descripción / Sobre Nosotros *</label>
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleInputChange} 
                  className={styles.textarea} 
                  placeholder="Contanos sobre tu trayectoria..."
                  minLength={40}
                  maxLength={161} 
                  required
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className={styles.charCount} style={{ color: formData.description.length < 40 ? '#ef4444' : '#666' }}>
                    {formData.description.length < 40 ? `Faltan ${40 - formData.description.length} caracteres` : 'Mínimo alcanzado'}
                  </span>
                  <span className={styles.charCount}>{formData.description.length}/161</span>
                </div>
              </div>
            </div>
          </section>

          {/* UBICACIÓN CASA CENTRAL */}
          <section>
            <h2 className={styles.sectionTitle}>Ubicación y Horarios (Casa Central)</h2>
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label>Provincia *</label>
                <select className={styles.input} value={selectedProvince} onChange={(e) => { setSelectedProvince(e.target.value); setSelectedMunicipality(""); setSelectedLocality(""); }} required>
                  <option value="">Seleccionar</option>
                  {provinces.map(p => <option key={p} value={p}>{capitalize(p)}</option>)}
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Municipio *</label>
                <select className={styles.input} value={selectedMunicipality} onChange={(e) => { setSelectedMunicipality(e.target.value); setSelectedLocality(""); }} disabled={!selectedProvince} required>
                  <option value="">Seleccionar</option>
                  {getMunicipalities(selectedProvince).map(m => <option key={m} value={m}>{capitalize(m)}</option>)}
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Localidad *</label>
                <select className={styles.input} value={selectedLocality} onChange={(e) => setSelectedLocality(e.target.value)} disabled={!selectedMunicipality} required>
                  <option value="">Seleccionar</option>
                  {getLocalities(selectedProvince, selectedMunicipality).map(l => <option key={l} value={l}>{capitalize(l)}</option>)}
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Dirección (Calle y Nro) *</label>
                <input 
                  type="text" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleInputChange} 
                  className={styles.input} 
                  placeholder="Ej: Av. Rivadavia 1234"
                  required 
                />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Horarios de Atención *</label>
                <textarea 
                  name="openingHours" 
                  value={formData.openingHours} 
                  onChange={handleInputChange} 
                  className={styles.textarea} 
                  placeholder="Lunes a Viernes 9:00 - 18:00..."
                  minLength={20}
                  maxLength={161} 
                  required
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className={styles.charCount} style={{ color: formData.openingHours.length < 20 ? '#ef4444' : '#666' }}>
                    {formData.openingHours.length < 20 ? `Faltan ${20 - formData.openingHours.length} caracteres` : 'Mínimo alcanzado'}
                  </span>
                  <span className={styles.charCount}>{formData.openingHours.length}/161</span>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className={styles.inputGroup}>
                <label>WhatsApp (solo números)</label>
                <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} className={styles.input} placeholder="Ej: 1123456789" />
              </div>
              <div className={styles.inputGroup}>
                <label>Instagram (usuario)</label>
                <input type="text" name="instagram" value={formData.instagram} onChange={handleInputChange} className={styles.input} placeholder="Ej: @miagencia" />
              </div>
              <div className={styles.inputGroup}>
                <label>Facebook (URL)</label>
                <input type="text" name="facebook" value={formData.facebook} onChange={handleInputChange} className={styles.input} placeholder="facebook.com/miagencia" />
              </div>
              <div className={styles.inputGroup}>
                <label>Sitio Web</label>
                <input type="url" name="website" value={formData.website} onChange={handleInputChange} className={styles.input} placeholder="https://www.miagencia.com" />
              </div>
            </div>
          </section>

          {/* SUCURSALES */}
          <section>
            <h2 className={styles.sectionTitle}>Sucursales</h2>
            <div className={styles.branchesList}>
              {branches.map((branch, index) => (
                <div key={index} className={styles.branchCard}>
                  <div className={styles.branchHeader}>
                    <h3>Sucursal #{index + 1}</h3>
                    <button type="button" onClick={() => removeBranch(index)} className={styles.btnRemove}>Eliminar</button>
                  </div>
                  <div className={styles.grid}>
                    <div className={styles.inputGroup}>
                      <label>Nombre</label>
                      <input type="text" value={branch.name} onChange={(e) => updateBranch(index, "name", e.target.value)} className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Provincia</label>
                      <select className={styles.input} value={branch.province} onChange={(e) => updateBranch(index, "province", e.target.value)} required>
                        <option value="">Seleccionar</option>
                        {provinces.map(p => <option key={p} value={p}>{capitalize(p)}</option>)}
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Municipio</label>
                      <select className={styles.input} value={branch.municipality} onChange={(e) => updateBranch(index, "municipality", e.target.value)} disabled={!branch.province} required>
                        <option value="">Seleccionar</option>
                        {getMunicipalities(branch.province).map(m => <option key={m} value={m}>{capitalize(m)}</option>)}
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Localidad</label>
                      <select className={styles.input} value={branch.locality} onChange={(e) => updateBranch(index, "locality", e.target.value)} disabled={!branch.municipality} required>
                        <option value="">Seleccionar</option>
                        {getLocalities(branch.province, branch.municipality).map(l => <option key={l} value={l}>{capitalize(l)}</option>)}
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Dirección</label>
                      <input type="text" value={branch.address || ""} onChange={(e) => updateBranch(index, "address", e.target.value)} className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Teléfono</label>
                      <input type="text" value={branch.phone} onChange={(e) => updateBranch(index, "phone", e.target.value)} className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Encargado</label>
                      <input type="text" value={branch.manager} onChange={(e) => updateBranch(index, "manager", e.target.value)} className={styles.input} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={addBranch} className={styles.btnAdd}>+ Agregar otra sucursal</button>
            </div>
          </section>

          <div className={styles.footerActions}>
            <button type="submit" disabled={saving} className={styles.btnSave}>{saving ? "Guardando..." : "Guardar Cambios"}</button>
          </div>
        </form>
      </main>
    </div>
  );
}
