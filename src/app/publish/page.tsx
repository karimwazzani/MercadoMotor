"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"; 
import CustomSelect from "../catalogo/CustomSelect";
import { 
  CATEGORIES, 
  COLORS, 
  DOORS, 
  YEARS, 
  LOCATION_DATA, 
  VEHICLE_DATA_MAP
} from "@/lib/constants";
import { EQUIPMENT_CATEGORIES } from "@/lib/equipment";

export default function PublishForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [acceptedVehicleTerms, setAcceptedVehicleTerms] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategoryExpand = (catName: string) => {
    setExpandedCategories(prev => 
      prev.includes(catName) 
        ? prev.filter(c => c !== catName)
        : [...prev, catName]
    );
  };

  const [formData, setFormData] = useState({
    category: "",
    condition: "USADO", // USADO | 0KM
    province: "",
    municipality: "",
    locality: "",
    brand: "",
    model: "",
    version: "",
    year: "",
    mileage: "",
    fuel: "",
    transmission: "",
    color: "",
    doors: "",
    price: "",
    currency: "USD",
    acceptsTradeIn: false,
    acceptsFinancing: false,
    description: "",
    equipment: [] as string[],
  });

  const [files, setFiles] = useState<(File | Blob)[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Publicar Vehículo | MercadoMotor";
    
    // Check for referral code
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) setReferralCode(ref);

    const findExactLocationMatch = (provInput: string, muniInput: string, locInput: string) => {
      const norm = (s: string) => s ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim() : "";
      
      const normProv = norm(provInput);
      const normMuni = norm(muniInput);
      const normLoc = norm(locInput);
      
      let matchedProvince = "";
      let matchedMunicipality = "";
      let matchedLocality = "";
      
      const provinceKeys = Object.keys(LOCATION_DATA);
      const matchedProvKey = provinceKeys.find(p => norm(p) === normProv);
      
      if (matchedProvKey) {
        matchedProvince = matchedProvKey;
        const muniKeys = Object.keys(LOCATION_DATA[matchedProvKey] || {});
        const matchedMuniKey = muniKeys.find(m => norm(m) === normMuni);
        
        if (matchedMuniKey) {
          matchedMunicipality = matchedMuniKey;
          const localitiesList = LOCATION_DATA[matchedProvKey][matchedMuniKey] || [];
          const matchedLocKey = localitiesList.find(l => norm(l) === normLoc);
          
          if (matchedLocKey) {
            matchedLocality = matchedLocKey;
          } else if (localitiesList.length > 0) {
            matchedLocality = localitiesList[0];
          }
        }
      }
      
      return {
        province: matchedProvince,
        municipality: matchedMunicipality,
        locality: matchedLocality
      };
    };

    fetch('/api/profile').then(res => res.json()).then(data => {
      if (data?.accountType === "AGENCIA" && data.agencies?.[0]) {
        const agency = data.agencies[0];
        const cityParts = agency.city?.split(", ") || [];
        const matched = findExactLocationMatch(agency.province || "", cityParts[1] || "", cityParts[0] || "");
        setFormData(prev => ({
          ...prev,
          province: matched.province,
          municipality: matched.municipality,
          locality: matched.locality
        }));
      } else if (data?.location) {
        const parts = data.location.split(", ");
        if (parts.length >= 3) {
          const matched = findExactLocationMatch(parts[2]?.trim() || "", parts[1]?.trim() || "", parts[0]?.trim() || "");
          setFormData(prev => ({
            ...prev,
            province: matched.province,
            municipality: matched.municipality,
            locality: matched.locality
          }));
        }
      }
    }).catch(console.error);
  }, []);

  // Derived data
  const provinces = Object.keys(LOCATION_DATA).sort();
  const municipalities = formData.province ? Object.keys(LOCATION_DATA[formData.province] || {}).sort() : [];
  const localities = (formData.province && formData.municipality) ? (LOCATION_DATA[formData.province]?.[formData.municipality] || []).sort() : [];
  
  // New Category-based filtering
  const categoryData = formData.category ? VEHICLE_DATA_MAP[formData.category] : null;
  const brands = categoryData ? Object.keys(categoryData).sort((a, b) => a === "Otro" ? 1 : b === "Otro" ? -1 : a.localeCompare(b)) : [];
  const models = (categoryData && formData.brand) ? Object.keys(categoryData[formData.brand] || {}).sort((a, b) => a === "Otro" ? 1 : b === "Otro" ? -1 : a.localeCompare(b)) : [];
  const versions = (categoryData && formData.brand && formData.model) ? (categoryData[formData.brand]?.[formData.model] || ["Otro"]) : [];

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

    // Auto-set mileage to 0 if 0KM
    if (name === "condition" && value === "0KM") {
      updatedData.mileage = "0";
    }

    setFormData(updatedData);
  };

  const handleSelectChange = (name: string, value: string) => {
    const updatedData = {
      ...formData,
      [name]: value,
    };

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

    if (name === "condition" && value === "0KM") {
      updatedData.mileage = "0";
    }

    setFormData(updatedData);
  };

  const toggleEquipment = (item: string) => {
    setFormData(prev => {
      const isSelected = prev.equipment.includes(item);
      const newEquipment = isSelected 
        ? prev.equipment.filter(eq => eq !== item)
        : [...prev.equipment, item];
      return { ...prev, equipment: newEquipment };
    });
  };

  // Compresses an image file to JPEG using the Canvas API (works in all browsers incl. iOS Safari)
  const compressImage = (file: File, maxWidth = 1200, quality = 0.75): Promise<File | Blob> => {
    return new Promise((resolve) => {
      // Helper to convert data URL to Blob (safest fallback for Safari)
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
          // Use Object.assign to decorate the Blob with name and lastModified properties
          // to act like a File object and bypass the iOS/Safari new File() WebKit constructor bug.
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
                  // Fallback to toDataURL if toBlob returned null
                  try {
                    const dataUrl = canvas.toDataURL('image/jpeg', quality);
                    resolveCompressed(dataURLtoBlob(dataUrl));
                  } catch (e) {
                    resolve(file); // fallback: keep original
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
          resolve(file); // fallback: keep original
        }
      };
      
      img.onerror = () => { 
        URL.revokeObjectURL(objectUrl); 
        resolve(file); // fallback: keep original
      };
      img.src = objectUrl;
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (files.length + selectedFiles.length > 15) {
        setError("Podés subir hasta un máximo de 15 fotos por publicación.");
        return;
      }
      setError("");
      // Compress each image before adding to state
      const compressed = await Promise.all(selectedFiles.map(f => compressImage(f)));
      setFiles((prev) => [...prev, ...compressed]);
      const newUrls = compressed.map(file => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newUrls]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => {
      const newUrls = [...prev];
      URL.revokeObjectURL(newUrls[index]);
      newUrls.splice(index, 1);
      return newUrls;
    });
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

    setFiles(prev => {
      const updated = [...prev];
      const [removed] = updated.splice(sourceIndex, 1);
      updated.splice(targetIndex, 0, removed);
      return updated;
    });

    setPreviewUrls(prev => {
      const updated = [...prev];
      const [removed] = updated.splice(sourceIndex, 1);
      updated.splice(targetIndex, 0, removed);
      return updated;
    });

    setDraggedIndex(null);
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
    if (!acceptedVehicleTerms) {
      setError("Debés declarar que la información es veraz y que estás autorizado a vender el vehículo.");
      return;
    }
    setLoading(true);
    setError("");
    
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

      files.forEach((file) => {
        const filename = (file as any).name || "image.jpg";
        uploadData.append("images", file, filename);
      });

      if (referralCode) {
        uploadData.append("referralCode", referralCode);
      }

      const res = await fetch("/api/vehicles/publish", {
        method: "POST",
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

      if (!res.ok) throw new Error(data.message || "Error al guardar el vehículo");

      router.push("/publish/success");
    } catch (err: any) {
      setError(err.message || "Error al publicar");
      setLoading(false);
    }
  };

  const progressPercentage = (step / 7) * 100;

  return (
    <div className={styles.publishPage}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <Link href="/" className={styles.logo}>
            <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
          </Link>
          <div className={styles.navClose}>
            <Link href="/" className={styles.btnClose}>Cancelar y volver</Link>
          </div>
        </div>
      </header>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <main className={`container ${styles.main}`}>
        <div className={styles.formCard}>
          <div className={styles.stepIndicator}>Paso {step} de 7</div>
          
          {error && <div className={styles.errorMessage}>{error}</div>}

          {step === 1 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>¿Qué vehículo querés publicar?</h1>
              <p className={styles.subtitle}>Seleccioná la categoría y sus detalles principales.</p>
              
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Categoría</label>
                  <CustomSelect
                    options={CATEGORIES}
                    value={formData.category}
                    onChange={(val) => handleSelectChange("category", val)}
                    placeholder="Seleccioná una categoría"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Condición</label>
                  <CustomSelect
                    options={[{ value: "USADO", label: "Usado" }, { value: "0KM", label: "0KM" }]}
                    value={formData.condition}
                    onChange={(val) => handleSelectChange("condition", val)}
                    placeholder="Seleccioná condición"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Marca</label>
                  <CustomSelect
                    options={brands}
                    value={formData.brand}
                    onChange={(val) => handleSelectChange("brand", val)}
                    placeholder="Seleccioná marca"
                    disabled={!formData.category}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Modelo</label>
                  <CustomSelect
                    options={models}
                    value={formData.model}
                    onChange={(val) => handleSelectChange("model", val)}
                    placeholder="Seleccioná modelo"
                    disabled={!formData.brand}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Versión</label>
                  <CustomSelect
                    options={versions}
                    value={formData.version}
                    onChange={(val) => handleSelectChange("version", val)}
                    placeholder="Seleccioná versión"
                    disabled={!formData.model}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Año</label>
                  <CustomSelect
                    options={YEARS}
                    value={formData.year}
                    onChange={(val) => handleSelectChange("year", val)}
                    placeholder="Seleccioná año"
                  />
                </div>
              </div>

              <div className={styles.actions}>
                <button type="button" onClick={nextStep} className={styles.btnNext}>Siguiente Paso</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>¿Dónde está el vehículo?</h1>
              <p className={styles.subtitle}>Esto ayudará a los compradores locales a encontrarte.</p>
              
              <div className={styles.inputGroup}>
                <label>Provincia</label>
                <CustomSelect
                  options={provinces}
                  value={formData.province}
                  onChange={(val) => handleSelectChange("province", val)}
                  placeholder="Seleccioná provincia"
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Municipio / Partido</label>
                <CustomSelect
                  options={municipalities}
                  value={formData.municipality}
                  onChange={(val) => handleSelectChange("municipality", val)}
                  placeholder="Seleccioná municipio"
                  disabled={!formData.province}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Localidad / Ciudad</label>
                <CustomSelect
                  options={localities}
                  value={formData.locality}
                  onChange={(val) => handleSelectChange("locality", val)}
                  placeholder="Seleccioná localidad"
                  disabled={!formData.municipality}
                />
              </div>

              <div className={styles.actions}>
                <button type="button" onClick={prevStep} className={styles.btnBack}>Atrás</button>
                <button type="button" onClick={nextStep} className={styles.btnNext}>Siguiente Paso</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Detalles técnicos</h1>
              <p className={styles.subtitle}>Información adicional para filtrar mejor las búsquedas.</p>
              
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Kilometraje</label>
                  <input 
                    type="number" 
                    name="mileage" 
                    value={formData.mileage} 
                    onChange={handleChange} 
                    placeholder="Ej: 45000" 
                    required 
                    disabled={formData.condition === "0KM"}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Combustible</label>
                  <CustomSelect
                    options={["Nafta", "Diesel", "GNC", "Híbrido", "Eléctrico"]}
                    value={formData.fuel}
                    onChange={(val) => handleSelectChange("fuel", val)}
                    placeholder="Seleccioná combustible"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Transmisión</label>
                  <CustomSelect
                    options={["Manual", "Automática"]}
                    value={formData.transmission}
                    onChange={(val) => handleSelectChange("transmission", val)}
                    placeholder="Seleccioná transmisión"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Color</label>
                  <CustomSelect
                    options={COLORS}
                    value={formData.color}
                    onChange={(val) => handleSelectChange("color", val)}
                    placeholder="Seleccioná color"
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Puertas</label>
                  <CustomSelect
                    options={DOORS}
                    value={formData.doors}
                    onChange={(val) => handleSelectChange("doors", val)}
                    placeholder="Cant. puertas"
                  />
                </div>
                <div className={styles.inputGroup}>
                  {/* Empty for spacing */}
                </div>
              </div>

              <div className={styles.actions}>
                <button type="button" onClick={prevStep} className={styles.btnBack}>Atrás</button>
                <button type="button" onClick={nextStep} className={styles.btnNext}>Siguiente Paso</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Precio y condiciones</h1>
              <p className={styles.subtitle}>Definí el valor de tu vehículo.</p>
              
              <div className={styles.priceContainer}>
                <div className={styles.currencyToggle}>
                  <button 
                    type="button" 
                    className={formData.currency === "USD" ? styles.activeCurrency : ""}
                    onClick={() => setFormData({...formData, currency: "USD"})}
                  >
                    Dólares
                  </button>
                  <button 
                    type="button" 
                    className={formData.currency === "ARS" ? styles.activeCurrency : ""}
                    onClick={() => setFormData({...formData, currency: "ARS"})}
                  >
                    Pesos
                  </button>
                </div>
                <div className={styles.priceInputWrapper}>
                  <span className={styles.priceSymbol}>{formData.currency === "USD" ? "US$" : "$"}</span>
                  <input 
                    type="number" 
                    name="price" 
                    value={formData.price} 
                    onChange={handleChange} 
                    placeholder="0"
                    className={styles.priceInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.checksGrid}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="acceptsTradeIn" checked={formData.acceptsTradeIn} onChange={handleChange} />
                  <span>Acepto permuta</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="acceptsFinancing" checked={formData.acceptsFinancing} onChange={handleChange} />
                  <span>Acepto financiación</span>
                </label>
              </div>

              <div className={styles.actions}>
                <button type="button" onClick={prevStep} className={styles.btnBack}>Atrás</button>
                <button type="button" onClick={nextStep} className={styles.btnNext}>Siguiente Paso</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Equipamiento</h1>
              <p className={styles.subtitle}>Hacé clic en cada categoría de abajo para desplegarla y seleccionar las prestaciones.</p>
              
              <div className={styles.equipmentContainer} style={{ maxHeight: "none", overflow: "visible" }}>
                {EQUIPMENT_CATEGORIES.map((cat, catIdx) => {
                  const isExpanded = expandedCategories.includes(cat.category);
                  return (
                    <div key={`cat-${catIdx}-${cat.category}`} className={styles.equipmentAccordion}>
                      <div 
                        className={styles.equipmentAccordionHeader}
                        onClick={() => toggleCategoryExpand(cat.category)}
                      >
                        <h4>{cat.category}</h4>
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
                            {cat.items.map((item, itemIdx) => {
                              const isActive = formData.equipment.includes(item);
                              return (
                                <label key={`item-${catIdx}-${itemIdx}`} className={styles.equipmentCheckboxLabel}>
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

              <div className={styles.actions}>
                <button type="button" onClick={prevStep} className={styles.btnBack}>Atrás</button>
                <button type="button" onClick={nextStep} className={styles.btnNext}>Siguiente Paso</button>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Fotos del vehículo</h1>
              <p className={styles.subtitle}>Subí hasta 15 fotos. La primera será la principal.</p>
              
              <div className={styles.photoUploadContainer}>
                <input 
                  type="file" 
                  id="photos" 
                  multiple 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  className={styles.fileInputHidden}
                />

                <div className={styles.photoGrid}>
                  {previewUrls.map((url, index) => (
                    <div 
                      key={index} 
                      className={`${styles.photoItem} ${draggedIndex === index ? styles.photoItemDragging : ""}`}
                      draggable="true"
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      onDragEnd={() => setDraggedIndex(null)}
                      style={{ cursor: "grab" }}
                    >
                      <Image src={url} alt={`Preview ${index}`} fill style={{ objectFit: 'cover', pointerEvents: 'none' }} />
                      <button type="button" onClick={() => removeFile(index)} className={styles.btnRemovePhoto}>×</button>
                      {index === 0 && <span className={styles.mainPhotoTag}>Principal</span>}
                    </div>
                  ))}

                  {previewUrls.length < 15 && (
                    <label htmlFor="photos" className={styles.photoItemUploadCard}>
                      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" className={styles.uploadCardIcon}>
                        <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7H10L12 4H16L18 7H21C21.5304 7 22.0391 7.21071 22.4142 7.58579C22.7893 7.96086 23 8.46957 23 9V19Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 14C15 14.5304 14.7893 15.0391 14.4142 15.4142C14.0391 15.7893 13.5304 16 13 16C12.4696 16 11.9609 15.7893 11.5858 15.4142C11.2107 15.0391 11 14.5304 11 14C11 13.4696 11.2107 12.9609 11.5858 12.5858C11.9609 12.2107 12.4696 12 13 12C13.5304 12 14.0391 12.2107 14.4142 12.5858C14.7893 12.9609 15 13.4696 15 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Sumar Foto</span>
                    </label>
                  )}
                </div>
              </div>

              <div className={styles.actions}>
                <button type="button" onClick={prevStep} className={styles.btnBack}>Atrás</button>
                <button type="button" onClick={nextStep} className={styles.btnNext}>Siguiente Paso</button>
              </div>
            </div>
          )}

          {step === 7 && (
            <div className={styles.stepContent}>
              <h1 className={styles.title}>Descripción final</h1>
              <p className={styles.subtitle}>Contanos más sobre el estado y mantenimiento del vehículo.</p>
              
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Ej: Único dueño, service al día en concesionario oficial..."
                className={styles.descriptionTextarea}
              />

              <label className={styles.vehicleTermsCheckbox}>
                <input
                  type="checkbox"
                  checked={acceptedVehicleTerms}
                  onChange={(e) => setAcceptedVehicleTerms(e.target.checked)}
                />
                <span>
                  Confirmo que soy el titular del vehículo o cuento con autorización expresa para publicarlo en nombre del propietario o de la agencia que represento, y que <strong>toda la información declarada es veraz y exacta</strong>. Acepto los{" "}
                  <Link href="/terminos" target="_blank" className={styles.vehicleTermsLink}>Términos y Condiciones</Link> de MercadoMotor.
                </span>
              </label>

              <div className={styles.actions}>
                <button type="button" onClick={prevStep} className={styles.btnBack}>Atrás</button>
                <button type="submit" onClick={handleSubmit} className={styles.btnSubmit} disabled={loading || !acceptedVehicleTerms}>
                  {loading ? "Publicando..." : "Finalizar Publicación"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
