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
  VEHICLE_DATA_MAP, 
  MOTORIZATION_DATA 
} from "@/lib/constants";
import { EQUIPMENT_CATEGORIES } from "@/lib/equipment";

export default function EditForm({ vehicle }: { vehicle: any }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
  
  // New Category-based filtering
  const categoryData = formData.category ? VEHICLE_DATA_MAP[formData.category] : null;
  const brands = categoryData ? Object.keys(categoryData).sort((a, b) => a === "Otro" ? 1 : b === "Otro" ? -1 : a.localeCompare(b)) : [];
  const models = (categoryData && formData.brand) ? Object.keys(categoryData[formData.brand] || {}).sort((a, b) => a === "Otro" ? 1 : b === "Otro" ? -1 : a.localeCompare(b)) : [];
  const versions = (categoryData && formData.brand && formData.model) ? (categoryData[formData.brand]?.[formData.model] || ["Otro"]) : [];


  // Logica Mixta de Imagenes Viejas vs Nuevas
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

    // Resets when parent changes
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

  const nextStep = () => {
    setError("");
    if (step === 1 && (!formData.category || !formData.brand || !formData.model || !formData.year)) return setError("Faltan datos de identificación.");
    if (step === 2 && (!formData.province || !formData.municipality || !formData.locality)) return setError("Completá la ubicación del vehículo.");
    if (step === 4 && !formData.price) return setError("El precio es obligatorio.");
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (existingImages.length === 0 && newFiles.length === 0) {
      setError("Debes dejar por lo menos 1 foto en la publicación.");
      setLoading(false);
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

      // Adjuntar IDs de lo que debe borrarse
      uploadData.append("imagesToDelete", JSON.stringify(imagesToDelete));

      // Adjuntar nuevos archivos binarios
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
      setError(err.message || "Error al actualizar");
      setLoading(false);
    }
  };

  const progressPercentage = (step / 7) * 100;

  return (
    <div className={styles.publishPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo}>
            Mercado<span className={styles.logoAccent}>Motor</span>
          </Link>
          <div className={styles.navClose}>
            <Link href="/dashboard" className={styles.btnClose}>Cancelar y volver al Panel</Link>
          </div>
        </div>
      </header>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <main className={`container ${styles.main}`}>
        <div className={styles.formCard}>
          <div className={styles.stepIndicator}>MODO CORRECCIÓN - Paso {step} de 7</div>
          
          {error && <div className={styles.errorMessage}>{error}</div>}

          {step === 1 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>¿Qué vehículo querés publicar?</h1>
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
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Ubicación del vehículo</h1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
            </div>
          )}

          {step === 3 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Más datos de tu vehículo</h1>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Kilometraje (km)</label>
                  <input name="mileage" type="number" value={formData.mileage} onChange={handleChange} />
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
                  <label>Color</label>
                  <select name="color" value={formData.color} onChange={handleChange}>
                    <option value="">Seleccioná color</option>
                    {COLORS.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup} style={{flex: 1}}>
                  <label>Cantidad de Puertas</label>
                  <select name="doors" value={formData.doors} onChange={handleChange}>
                    <option value="">Seleccionar</option>
                    {DOORS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div style={{flex: 1}}></div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Precio y condiciones</h1>
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
                  <input name="price" type="number" value={formData.price} onChange={handleChange} />
                </div>
              </div>
              <div className={styles.checkboxContainer}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="acceptsTradeIn" checked={formData.acceptsTradeIn} onChange={handleChange} /> 
                  Acepto Permuta (Parte de pago)
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="acceptsFinancing" checked={formData.acceptsFinancing} onChange={handleChange} /> 
                  Ofrezco u Acepto Financiación
                </label>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Equipamiento y Prestaciones</h1>
              {EQUIPMENT_CATEGORIES.map((category) => (
                <div key={category.category} className={styles.equipmentGroup}>
                  <h3 className={styles.equipmentTitle}>{category.category}</h3>
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
          )}

          {step === 6 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Descripción adicional</h1>
              <div className={styles.inputGroup}>
                <label>Texto descriptivo</label>
                <textarea 
                  name="description" 
                  rows={6} 
                  value={formData.description} 
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>
            </div>
          )}

          {step === 7 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Galería de Imágenes</h1>
              <p className={styles.subtitle}>Recomendamos fotos horizontales (tamaño 1200x800 o similar) para que se vean mejor. Límite: 15 fotos.</p>
              
              {existingImages.length > 0 && (
                <div style={{ marginBottom: "2rem" }}>
                  <h4 style={{marginBottom: "1rem", color: "var(--color-primary)"}}>Fotos Actuales</h4>
                  <div className={styles.previewGrid}>
                    {existingImages.map((img) => (
                      <div key={img.id} className={styles.previewCard}>
                        <Image src={img.url} alt="vehiculo" fill style={{objectFit: 'cover'}} />
                        <button onClick={() => handleOldImageRemove(img.id)} className={styles.removeBtn}>X</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.mockUploadBox} style={{position: 'relative'}}>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*"
                  onChange={handleFileChange}
                  className={styles.fileInputHidden}
                />
                <div className={styles.uploadIcon}>📸</div>
                <div className={styles.uploadText}>
                  <strong>Buscador Abierto</strong>: Haz clic aquí para añadir fotografías nuevas.
                </div>
              </div>

              {previewUrls.length > 0 && (
                <div>
                  <h4 style={{marginBottom: "1rem", color: "var(--color-primary)"}}>Fotos Nuevas que vas a sumar</h4>
                  <div className={styles.previewGrid}>
                    {previewUrls.map((url, index) => (
                      <div key={index} className={styles.previewCard}>
                        <Image src={url} alt="previa" fill style={{objectFit: 'cover'}} />
                        <button onClick={() => removeNewFile(index)} className={styles.removeBtn}>X</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          <div className={styles.actionButtons}>
            {step > 1 ? (
              <button type="button" onClick={prevStep} className={styles.btnSecondary}>Volver</button>
            ) : <div></div>}
            
            {step < 7 ? (
              <button type="button" onClick={nextStep} className={styles.btnPrimary}>Siguiente Paso</button>
            ) : (
              <button 
                type="button" 
                onClick={handleSubmit} 
                className={styles.btnSubmit} 
                disabled={loading || (existingImages.length === 0 && newFiles.length === 0)}
              >
                {loading ? "Guardando cambios..." : "Guardar y Finalizar"}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
