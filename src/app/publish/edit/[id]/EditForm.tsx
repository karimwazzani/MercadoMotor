"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "../../page.module.css"; 
import { 
  CATEGORIES, 
  COLORS, 
  DOORS, 
  YEARS, 
  LOCATION_DATA, 
  VEHICLE_DATA_MAP
} from "@/lib/constants";
import { EQUIPMENT_CATEGORIES } from "@/lib/equipment";

export default function EditForm({ vehicle }: { vehicle: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Editar Publicación | MercadoMotor";
  }, []);

  // Parse location (format: "Locality, Municipality, Province")
  const initialLocation = vehicle.location || "";
  const locationParts = initialLocation.split(", ");
  const initialLocality = locationParts[0] || "";
  const initialMunicipality = locationParts[1] || "";
  const initialProvince = locationParts[2] || "";

  const [formData, setFormData] = useState({
    category: vehicle.category || "",
    province: initialProvince,
    municipality: initialMunicipality,
    locality: initialLocality,
    brand: vehicle.brand || "",
    model: vehicle.model || "",
    version: vehicle.version || "",
    year: vehicle.year ? vehicle.year.toString() : "",
    mileage: vehicle.mileage ? vehicle.mileage.toString() : "",
    fuel: vehicle.fuel || "",
    transmission: vehicle.transmission || "",
    color: vehicle.color || "",
    doors: vehicle.doors ? vehicle.doors.toString() : "",
    price: vehicle.price ? vehicle.price.toString() : "",
    currency: vehicle.currency || "USD",
    acceptsTradeIn: vehicle.acceptsTradeIn,
    acceptsFinancing: vehicle.acceptsFinancing,
    description: vehicle.description || "",
    equipment: vehicle.equipment ? JSON.parse(vehicle.equipment) : [] as string[],
  });

  // Derived data
  const provinces = Object.keys(LOCATION_DATA).sort();
  const municipalities = formData.province ? Object.keys(LOCATION_DATA[formData.province] || {}).sort() : [];
  const localities = (formData.province && formData.municipality) ? (LOCATION_DATA[formData.province][formData.municipality] || []).sort() : [];
  
  // Category-based data maps
  const categoryData = formData.category ? VEHICLE_DATA_MAP[formData.category] : null;
  const brands = categoryData ? Object.keys(categoryData).sort((a, b) => a === "Otro" ? 1 : b === "Otro" ? -1 : a.localeCompare(b)) : [];
  const models = (categoryData && formData.brand) ? Object.keys(categoryData[formData.brand] || {}).sort((a, b) => a === "Otro" ? 1 : b === "Otro" ? -1 : a.localeCompare(b)) : [];
  const versions = (categoryData && formData.brand && formData.model) ? (categoryData[formData.brand]?.[formData.model] || ["Otro"]) : [];

  // Existing vs New Images management
  const [existingImages, setExistingImages] = useState<{id: string, url: string}[]>(vehicle.images || []);
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const updatedData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    // Resets cascade filters when parents change
    if (name === "province") {
      updatedData.municipality = "";
      updatedData.locality = "";
    }
    if (name === "municipality") {
      updatedData.locality = "";
    }
    if (name === "category") {
      updatedData.brand = "";
      updatedData.model = "";
      updatedData.version = "";
    }
    if (name === "brand") {
      updatedData.model = "";
      updatedData.version = "";
    }
    if (name === "model") {
      updatedData.version = "";
    }

    setFormData(updatedData);
  };

  const toggleEquipment = (item: string) => {
    setFormData(prev => {
      const isSelected = prev.equipment.includes(item);
      const newEquipment = isSelected 
        ? prev.equipment.filter((eq: string) => eq !== item)
        : [...prev.equipment, item];
      return { ...prev, equipment: newEquipment };
    });
  };

  const handleOldImageRemove = (imageId: string) => {
    setExistingImages(prev => prev.filter(img => img.id !== imageId));
    setImagesToDelete(prev => [...prev, imageId]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (existingImages.length + newFiles.length + selectedFiles.length > 15) {
        setError("Podés tener hasta un máximo de 15 fotos por publicación.");
        return;
      }
      setError("");
      setNewFiles((prev) => [...prev, ...selectedFiles]);

      const newUrls = selectedFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newUrls]);
    }
  };

  const removeNewFile = (index: number) => {
    setNewFiles(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => {
      const newUrls = [...prev];
      URL.revokeObjectURL(newUrls[index]);
      newUrls.splice(index, 1);
      return newUrls;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Unified client-side validation
    if (!formData.category || !formData.brand || !formData.model || !formData.year) {
      setError("Faltan datos de identificación (Categoría, Marca, Modelo o Año).");
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (!formData.province || !formData.municipality || !formData.locality) {
      setError("Completá los datos de ubicación (Provincia, Municipio y Localidad).");
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (!formData.price) {
      setError("El precio de venta es obligatorio.");
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (existingImages.length === 0 && newFiles.length === 0) {
      setError("Debes conservar al menos 1 foto del vehículo.");
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    try {
      const uploadData = new FormData();
      const location = `${formData.locality}, ${formData.municipality}, ${formData.province}`;

      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "province" && key !== "municipality" && key !== "locality" && key !== "equipment") {
          uploadData.append(key, typeof value === 'boolean' ? String(value) : value as string);
        }
      });
      uploadData.append("location", location);
      uploadData.append("equipment", JSON.stringify(formData.equipment));
      uploadData.append("imagesToDelete", JSON.stringify(imagesToDelete));

      newFiles.forEach((file) => {
        uploadData.append("newImages", file);
      });

      const res = await fetch(`/api/vehicles/${vehicle.id}`, {
        method: "PUT",
        body: uploadData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      router.push("/publish/success"); 
    } catch (err: any) {
      setError(err.message || "Error al actualizar la publicación");
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.publishPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo}>
            Mercado<span className={styles.logoAccent}>Motor</span>
          </Link>
          <div className={styles.navClose}>
            <Link href="/dashboard" className={styles.btnClose}>Cancelar y volver</Link>
          </div>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <form onSubmit={handleSubmit} className={styles.formCard}>
          <div className={styles.stepIndicator}>MODO DE EDICIÓN DIRECTA</div>
          
          <h1 className={styles.title} style={{ marginBottom: "0.5rem" }}>Modificar Publicación</h1>
          <p className={styles.subtitle} style={{ marginBottom: "2.5rem", color: "var(--color-text-muted)" }}>
            Realizá cualquier corrección en una sola pantalla y hacé clic en "Guardar Cambios" al final del formulario.
          </p>

          {error && <div className={styles.errorMessage} style={{ marginBottom: "2rem" }}>{error}</div>}

          {/* SECCIÓN 1: IDENTIFICACIÓN */}
          <div className={styles.editSection}>
            <h3 className={styles.editSectionTitle}>1. Identificación del Vehículo</h3>
            
            <div className={styles.inputGroup}>
              <label>Categoría</label>
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Seleccioná una categoría</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Marca</label>
                <select name="brand" value={formData.brand} onChange={handleChange} required disabled={!formData.category}>
                  <option value="">Seleccioná marca</option>
                  {brands.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Modelo</label>
                <select name="model" value={formData.model} onChange={handleChange} required disabled={!formData.brand}>
                  <option value="">Seleccioná modelo</option>
                  {models.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Versión</label>
                <select name="version" value={formData.version} onChange={handleChange} disabled={!formData.model}>
                  <option value="">Seleccioná versión</option>
                  {versions.map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Año</label>
                <select name="year" value={formData.year} onChange={handleChange} required>
                  <option value="">Seleccioná año</option>
                  {YEARS.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={styles.editSeparator} />

          {/* SECCIÓN 2: UBICACIÓN */}
          <div className={styles.editSection}>
            <h3 className={styles.editSectionTitle}>2. Ubicación de Venta</h3>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Provincia</label>
                <select name="province" value={formData.province} onChange={handleChange} required>
                  <option value="">Seleccioná provincia</option>
                  {provinces.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Municipio</label>
                <select name="municipality" value={formData.municipality} onChange={handleChange} required disabled={!formData.province}>
                  <option value="">Seleccioná municipio</option>
                  {municipalities.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Localidad</label>
              <select name="locality" value={formData.locality} onChange={handleChange} required disabled={!formData.municipality}>
                <option value="">Seleccioná localidad</option>
                {localities.map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.editSeparator} />

          {/* SECCIÓN 3: FICHA TÉCNICA */}
          <div className={styles.editSection}>
            <h3 className={styles.editSectionTitle}>3. Detalles Técnicos y Ficha</h3>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Kilometraje (km)</label>
                <input name="mileage" type="number" value={formData.mileage} onChange={handleChange} placeholder="Ej: 85000" />
              </div>
              <div className={styles.inputGroup}>
                <label>Combustible</label>
                <select name="fuel" value={formData.fuel} onChange={handleChange}>
                  <option value="">Seleccionar</option>
                  <option value="Nafta">Nafta</option>
                  <option value="Diesel">Diesel</option>
                  <option value="GNC">GNC</option>
                  <option value="Híbrido">Híbrido</option>
                  <option value="Eléctrico">Eléctrico</option>
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Transmisión</label>
                <select name="transmission" value={formData.transmission} onChange={handleChange}>
                  <option value="">Seleccionar</option>
                  <option value="Manual">Manual</option>
                  <option value="Automática">Automática</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Color Exterior</label>
                <select name="color" value={formData.color} onChange={handleChange}>
                  <option value="">Seleccioná color</option>
                  {COLORS.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup} style={{ flex: 1 }}>
                <label>Cantidad de Puertas</label>
                <select name="doors" value={formData.doors} onChange={handleChange}>
                  <option value="">Seleccionar</option>
                  {DOORS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: 1 }}></div>
            </div>
          </div>

          <div className={styles.editSeparator} />

          {/* SECCIÓN 4: PRECIO */}
          <div className={styles.editSection}>
            <h3 className={styles.editSectionTitle}>4. Precio de Venta y Condiciones</h3>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Moneda</label>
                <select name="currency" value={formData.currency} onChange={handleChange}>
                  <option value="USD">Dólares (USD)</option>
                  <option value="ARS">Pesos (ARS)</option>
                </select>
              </div>
              <div className={styles.inputGroup} style={{ flex: 2 }}>
                <label>Precio</label>
                <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Ej: 14500" />
              </div>
            </div>

            <div className={styles.checkboxContainer} style={{ marginTop: "1rem" }}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" name="acceptsTradeIn" checked={formData.acceptsTradeIn} onChange={handleChange} /> 
                Acepto Permuta (vehículo de menor valor en parte de pago)
              </label>
            </div>
            
            <div className={styles.checkboxContainer}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" name="acceptsFinancing" checked={formData.acceptsFinancing} onChange={handleChange} /> 
                Ofrezco / Acepto facilidades de Financiación
              </label>
            </div>
          </div>

          <div className={styles.editSeparator} />

          {/* SECCIÓN 5: EQUIPAMIENTO */}
          <div className={styles.editSection}>
            <h3 className={styles.editSectionTitle}>5. Equipamiento y Confort</h3>
            <p className={styles.subtitle} style={{ marginBottom: "1.5rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              Seleccioná los chips de prestaciones que incluye tu unidad.
            </p>
            
            {EQUIPMENT_CATEGORIES.map((category) => (
              <div key={category.category} className={styles.equipmentGroup} style={{ marginBottom: "1.5rem" }}>
                <h4 className={styles.equipmentTitle} style={{ fontSize: "0.95rem", color: "var(--color-primary)", marginBottom: "0.75rem" }}>
                  {category.category}
                </h4>
                <div className={styles.chipContainer}>
                  {category.items.map((item) => {
                    const isActive = formData.equipment.includes(item);
                    return (
                      <div 
                        key={item} 
                        onClick={() => toggleEquipment(item)}
                        className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.editSeparator} />

          {/* SECCIÓN 6: DESCRIPCIÓN */}
          <div className={styles.editSection}>
            <h3 className={styles.editSectionTitle}>6. Descripción Detallada</h3>
            
            <div className={styles.inputGroup}>
              <label>Texto de la publicación</label>
              <textarea 
                name="description" 
                rows={6} 
                value={formData.description} 
                onChange={handleChange}
                placeholder="Escribí aquí detalles sobre el estado del auto, service realizados, únicos dueños, etc..."
                className={styles.textarea}
              />
            </div>
          </div>

          <div className={styles.editSeparator} />

          {/* SECCIÓN 7: IMÁGENES */}
          <div className={styles.editSection}>
            <h3 className={styles.editSectionTitle}>7. Galería de Imágenes</h3>
            <p className={styles.subtitle} style={{ marginBottom: "1.5rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              Agrega o elimina fotos de tu unidad. Se recomienda usar formatos horizontales. Límite total: 15 fotos.
            </p>
            
            {existingImages.length > 0 && (
              <div style={{ marginBottom: "2rem" }}>
                <h4 style={{ marginBottom: "1rem", color: "var(--color-primary)", fontSize: "0.9rem" }}>Fotos Guardadas Actuales</h4>
                <div className={styles.previewGrid}>
                  {existingImages.map((img) => (
                    <div key={img.id} className={styles.previewCard}>
                      <Image src={img.url} alt="vehiculo" fill style={{ objectFit: 'cover' }} />
                      <button type="button" onClick={() => handleOldImageRemove(img.id)} className={styles.removeBtn}>X</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.mockUploadBox} style={{ position: 'relative', marginBottom: "2rem" }}>
              <input 
                type="file" 
                multiple 
                accept="image/*"
                onChange={handleFileChange}
                className={styles.fileInputHidden}
              />
              <div className={styles.uploadIcon}>📸</div>
              <div className={styles.uploadText}>
                <strong>Haz clic aquí</strong> para buscar y sumar fotos nuevas desde tu dispositivo.
              </div>
            </div>

            {previewUrls.length > 0 && (
              <div>
                <h4 style={{ marginBottom: "1rem", color: "var(--color-accent)", fontSize: "0.9rem" }}>Fotos Nuevas a Subir</h4>
                <div className={styles.previewGrid}>
                  {previewUrls.map((url, index) => (
                    <div key={index} className={styles.previewCard}>
                      <Image src={url} alt="previa" fill style={{ objectFit: 'cover' }} />
                      <button type="button" onClick={() => removeNewFile(index)} className={styles.removeBtn}>X</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* BOTONES DE ACCIÓN UNIFICADOS */}
          <div className={styles.editActionButtons}>
            <Link href="/dashboard" className={styles.btnSecondary} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: "150px" }}>
              Cancelar
            </Link>
            <button 
              type="submit" 
              className={styles.btnSubmit} 
              disabled={loading || (existingImages.length === 0 && newFiles.length === 0)}
              style={{ minWidth: "180px" }}
            >
              {loading ? "Guardando cambios..." : "Guardar Cambios"}
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}
