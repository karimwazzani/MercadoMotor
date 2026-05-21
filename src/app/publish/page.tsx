"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"; 
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

  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [referralCode, setReferralCode] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Publicar Vehículo | MercadoMotor";
    
    // Check for referral code
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) setReferralCode(ref);

    fetch('/api/profile').then(res => res.json()).then(data => {
      if (data?.accountType === "AGENCIA" && data.agencies?.[0]) {
        const agency = data.agencies[0];
        const cityParts = agency.city?.split(", ") || [];
        setFormData(prev => ({
          ...prev,
          province: agency.province || "",
          municipality: cityParts[1] || "",
          locality: cityParts[0] || ""
        }));
      } else if (data?.location) {
        const parts = data.location.split(", ");
        if (parts.length >= 3) {
          setFormData(prev => ({
            ...prev,
            locality: parts[0]?.trim() || "",
            municipality: parts[1]?.trim() || "",
            province: parts[2]?.trim() || ""
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

  const toggleEquipment = (item: string) => {
    setFormData(prev => {
      const isSelected = prev.equipment.includes(item);
      const newEquipment = isSelected 
        ? prev.equipment.filter(eq => eq !== item)
        : [...prev.equipment, item];
      return { ...prev, equipment: newEquipment };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (files.length + selectedFiles.length > 15) {
        setError("Podés subir hasta un máximo de 15 fotos por publicación.");
        return;
      }
      setError("");
      setFiles((prev) => [...prev, ...selectedFiles]);

      const newUrls = selectedFiles.map(file => URL.createObjectURL(file));
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
        uploadData.append("images", file);
      });

      if (referralCode) {
        uploadData.append("referralCode", referralCode);
      }

      const res = await fetch("/api/vehicles/publish", {
        method: "POST",
        body: uploadData,
      });

      const data = await res.json();
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
            <img src="/logo.png" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
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
                  <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Seleccioná una categoría</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Condición</label>
                  <select name="condition" value={formData.condition} onChange={handleChange} required>
                    <option value="USADO">Usado</option>
                    <option value="0KM">0KM</option>
                  </select>
                </div>
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
                  <select name="version" value={formData.version} onChange={handleChange} required disabled={!formData.model}>
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
                <select name="province" value={formData.province} onChange={handleChange} required>
                  <option value="">Seleccioná provincia</option>
                  {provinces.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Municipio / Partido</label>
                <select name="municipality" value={formData.municipality} onChange={handleChange} required disabled={!formData.province}>
                  <option value="">Seleccioná municipio</option>
                  {municipalities.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Localidad / Ciudad</label>
                <select name="locality" value={formData.locality} onChange={handleChange} required disabled={!formData.municipality}>
                  <option value="">Seleccioná localidad</option>
                  {localities.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
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
                  <select name="fuel" value={formData.fuel} onChange={handleChange} required>
                    <option value="">Seleccioná</option>
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
                  <select name="transmission" value={formData.transmission} onChange={handleChange} required>
                    <option value="">Seleccioná</option>
                    <option value="Manual">Manual</option>
                    <option value="Automática">Automática</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Color</label>
                  <select name="color" value={formData.color} onChange={handleChange} required>
                    <option value="">Seleccioná color</option>
                    {COLORS.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Puertas</label>
                  <select name="doors" value={formData.doors} onChange={handleChange} required>
                    <option value="">Cant. puertas</option>
                    {DOORS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
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
                <label htmlFor="photos" className={styles.photoUploadTrigger}>
                  <div className={styles.uploadIcon}>+</div>
                  <span>Agregar Fotos</span>
                </label>

                <div className={styles.photoGrid}>
                  {previewUrls.map((url, index) => (
                    <div key={index} className={styles.photoItem}>
                      <Image src={url} alt={`Preview ${index}`} fill style={{ objectFit: 'cover' }} />
                      <button type="button" onClick={() => removeFile(index)} className={styles.btnRemovePhoto}>×</button>
                      {index === 0 && <span className={styles.mainPhotoTag}>Principal</span>}
                    </div>
                  ))}
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
