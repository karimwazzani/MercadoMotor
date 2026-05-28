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

interface GalleryItem {
  key: string;
  type: "existing" | "new";
  id?: string;
  url: string;
  file?: File | Blob;
}

export default function EditForm({ vehicle }: { vehicle: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategoryExpand = (catName: string) => {
    setExpandedCategories(prev => 
      prev.includes(catName) 
        ? prev.filter(c => c !== catName)
        : [...prev, catName]
    );
  };

  useEffect(() => {
    document.title = "Editar Publicación | MercadoMotor";
  }, []);

  // Parse location (format: "Locality, Municipality, Province")
  const initialLocation = vehicle.location || "";
  const locationParts = initialLocation.split(", ");
  const rawLocality = locationParts[0] || "";
  const rawMunicipality = locationParts[1] || "";
  const rawProvince = locationParts[2] || "";

  // Normalize case-insensitively
  const norm = (s: string) => s ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim() : "";
  const normProv = norm(rawProvince);
  const normMuni = norm(rawMunicipality);
  const normLoc = norm(rawLocality);

  let initialProvince = "";
  let initialMunicipality = "";
  let initialLocality = "";

  const provinceKeys = Object.keys(LOCATION_DATA);
  const matchedProvKey = provinceKeys.find(p => norm(p) === normProv);

  if (matchedProvKey) {
    initialProvince = matchedProvKey;
    const muniKeys = Object.keys(LOCATION_DATA[matchedProvKey] || {});
    const matchedMuniKey = muniKeys.find(m => norm(m) === normMuni);

    if (matchedMuniKey) {
      initialMunicipality = matchedMuniKey;
      const localitiesList = LOCATION_DATA[matchedProvKey][matchedMuniKey] || [];
      const matchedLocKey = localitiesList.find(l => norm(l) === normLoc);

      if (matchedLocKey) {
        initialLocality = matchedLocKey;
      } else if (localitiesList.length > 0) {
        initialLocality = localitiesList[0];
      }
    }
  }

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

  // Gallery management unificada
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    if (vehicle.images) {
      return [...vehicle.images]
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map((img: any) => ({
          key: `existing-${img.id}`,
          type: "existing",
          id: img.id,
          url: img.url
        }));
    }
    return [];
  });
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

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

  const compressImage = (file: File, maxWidth = 1200, quality = 0.75): Promise<File | Blob> => {
    return new Promise((resolve) => {
      const dataURLtoBlob = (dataurl: string): Blob => {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)![1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      };

      const img = new window.Image();
      const objectUrl = URL.createObjectURL(file);
      
      img.onload = () => {
        URL.revokeObjectURL(objectUrl);
        const canvas = document.createElement('canvas');
        let { width, height } = img;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(img, 0, 0, width, height);

        const resolveCompressed = (blob: Blob) => {
          const name = file.name ? file.name.replace(/\.[^.]+$/, '.jpg') : 'image.jpg';
          const compressed = Object.assign(blob, {
            name: name,
            lastModified: Date.now()
          });
          resolve(compressed);
        };

        try {
          if (canvas.toBlob) {
            canvas.toBlob(
              (blob) => {
                if (blob) {
                  resolveCompressed(blob);
                } else {
                  try {
                    const dataUrl = canvas.toDataURL('image/jpeg', quality);
                    resolveCompressed(dataURLtoBlob(dataUrl));
                  } catch (e) {
                    resolve(file);
                  }
                }
              },
              'image/jpeg',
              quality
            );
          } else {
            const dataUrl = canvas.toDataURL('image/jpeg', quality);
            resolveCompressed(dataURLtoBlob(dataUrl));
          }
        } catch (e) {
          resolve(file);
        }
      };
      
      img.onerror = () => { 
        URL.revokeObjectURL(objectUrl); 
        resolve(file);
      };
      img.src = objectUrl;
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (gallery.length + selectedFiles.length > 15) {
        setError("Podés subir hasta un máximo de 15 fotos por publicación.");
        return;
      }
      setError("");
      
      const compressed = await Promise.all(selectedFiles.map(f => compressImage(f)));
      const newItems: GalleryItem[] = compressed.map(file => {
        const url = URL.createObjectURL(file as File);
        return {
          key: `new-${Date.now()}-${Math.random()}`,
          type: "new",
          url: url,
          file: file
        };
      });
      setGallery(prev => [...prev, ...newItems]);
    }
  };

  const removeGalleryItem = (item: GalleryItem) => {
    if (item.type === "existing") {
      setImagesToDelete(prev => [...prev, item.id!]);
    } else {
      URL.revokeObjectURL(item.url);
    }
    setGallery(prev => prev.filter(x => x.key !== item.key));
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const sourceIndex = draggedIndex !== null ? draggedIndex : parseInt(e.dataTransfer.getData("text/plain"), 10);
    
    if (sourceIndex === targetIndex || isNaN(sourceIndex)) {
      setDraggedIndex(null);
      return;
    }

    setGallery(prev => {
      const updated = [...prev];
      const [removed] = updated.splice(sourceIndex, 1);
      updated.splice(targetIndex, 0, removed);
      return updated;
    });

    setDraggedIndex(null);
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
    if (gallery.length === 0) {
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

      const newFilesToUpload = gallery
        .filter(item => item.type === "new")
        .map(item => item.file) as (File | Blob)[];

      const imageOrder = gallery.map((item) => {
        if (item.type === "existing") {
          return { type: "existing", id: item.id };
        } else {
          const newItemsOnly = gallery.filter(x => x.type === "new");
          const index = newItemsOnly.findIndex(x => x.key === item.key);
          return { type: "new", index: index };
        }
      });

      newFilesToUpload.forEach((file) => {
        const filename = (file as any).name || "image.jpg";
        uploadData.append("newImages", file, filename);
      });
      uploadData.append("imageOrder", JSON.stringify(imageOrder));

      const res = await fetch(`/api/vehicles/${vehicle.id}`, {
        method: "PUT",
        body: uploadData,
      });

      let data: any = {};
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        console.error("Server non-JSON response:", text);
        if (res.status === 413) {
          throw new Error("Las imágenes son demasiado pesadas. Por favor, intentá subir menos fotos o fotos de menor tamaño.");
        }
        throw new Error(`Error de comunicación con el servidor (Código ${res.status}). Por favor, intentá de nuevo.`);
      }

      if (!res.ok) throw new Error(data.message || "Error al actualizar la publicación");

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
            <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "32px", width: "auto", display: "block" }} />
          </Link>
          <div className={styles.navClose}>
            <Link href="/dashboard" className={styles.btnClose}>Cancelar y volver</Link>
          </div>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <form onSubmit={handleSubmit} className={styles.formCard}>
          <h1 className={styles.title} style={{ marginBottom: "2rem" }}>Editar Publicación</h1>

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
              Hacé clic en cada categoría de abajo para desplegarla y seleccionar las prestaciones que tiene tu vehículo.
            </p>
            
            {EQUIPMENT_CATEGORIES.map((category) => {
              const isExpanded = expandedCategories.includes(category.category);
              return (
                <div key={category.category} className={styles.equipmentAccordion}>
                  <div 
                    className={styles.equipmentAccordionHeader}
                    onClick={() => toggleCategoryExpand(category.category)}
                  >
                    <h4>{category.category}</h4>
                    <svg 
                      className={`${styles.accordionChevron} ${isExpanded ? styles.chevronOpen : ""}`} 
                      width="12" 
                      height="8" 
                      viewBox="0 0 12 8" 
                      fill="none"
                    >
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {isExpanded && (
                    <div className={styles.equipmentAccordionContent}>
                      <div className={styles.equipmentCheckboxGrid}>
                        {category.items.map((item) => {
                          const isActive = formData.equipment.includes(item);
                          return (
                            <label key={item} className={styles.equipmentCheckboxLabel}>
                              <input 
                                type="checkbox" 
                                checked={isActive}
                                onChange={() => toggleEquipment(item)}
                              />
                              <span>{item}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
                className={styles.descriptionTextarea}
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

            {gallery.length > 0 && (
              <div>
                <h4 style={{ marginBottom: "1.25rem", color: "var(--color-primary)", fontSize: "0.9rem" }}>Fotos del Vehículo (Arrastra para reordenar)</h4>
                <div className={styles.photoGrid}>
                  {gallery.map((item, index) => (
                    <div 
                      key={item.key} 
                      className={`${styles.photoItem} ${draggedIndex === index ? styles.photoItemDragging : ""}`}
                      draggable="true"
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      onDragEnd={() => setDraggedIndex(null)}
                      style={{ cursor: "grab" }}
                    >
                      <Image src={item.url} alt="vehiculo" fill style={{ objectFit: 'cover', pointerEvents: 'none' }} />
                      <button type="button" onClick={() => removeGalleryItem(item)} className={styles.btnRemovePhoto}>X</button>
                      {index === 0 && <span className={styles.mainPhotoTag}>Principal</span>}
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
              disabled={loading || gallery.length === 0}
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
