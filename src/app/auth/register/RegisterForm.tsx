"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import WelcomeScreen from "../../components/WelcomeScreen";
import styles from "./RegisterForm.module.css";
import { LOCATION_DATA } from "@/lib/constants";

export default function RegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  
  const router = useRouter();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      accountType: "PARTICULAR",
      name: "",
      lastName: "",
      tradeName: "",
      email: "",
      phone: "",
      password: "",
      province: "",
      municipality: "",
      locality: ""
    }
  });

  const accountType = watch("accountType");
  const province = watch("province");
  const municipality = watch("municipality");

  // Función para capitalizar iniciales
  const capitalize = (str: string) => {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  };

  // Datos derivados para los selectores dependientes
  const provinces = Object.keys(LOCATION_DATA).sort();
  const municipalities = province ? Object.keys(LOCATION_DATA[province] || {}).sort() : [];
  const localities = (province && municipality) ? (LOCATION_DATA[province][municipality] || []).sort() : [];

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError(null);

    try {
      // Formateamos la ubicación en minúsculas para la base de datos
      const fullLocation = `${data.locality}, ${data.municipality}, ${data.province}`.toLowerCase();
      
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          location: fullLocation
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Error al registrar");
      }

      setRegisteredEmail(data.email);
      setIsVerificationSent(true);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (isVerificationSent) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.authCard} style={{ textAlign: "center", padding: "3rem" }}>
          <div className={styles.logo}>
            Mercado<span className={styles.logoAccent}>Motor</span>
          </div>
          <div style={{
            fontSize: "4.5rem",
            marginBottom: "1.5rem",
            animation: "bounce 2s infinite"
          }}>✉️</div>
          <h1 className={styles.title}>¡Verificá tu correo!</h1>
          <p className={styles.subtitle} style={{ marginBottom: "2.5rem", lineHeight: "1.6" }}>
            Te enviamos un enlace de activación a <strong>{registeredEmail}</strong>.<br/><br/>
            Por favor, revisá tu bandeja de entrada (y la carpeta de correo no deseado o spam) y hacé clic en el botón de confirmación para poder ingresar a MercadoMotor.
          </p>
          
          <Link href="/auth/login" className={styles.btnSubmit} style={{
            display: "block",
            textDecoration: "none",
            textAlign: "center"
          }}>
            Ir al inicio de sesión
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.logo}>
          Mercado<span className={styles.logoAccent}>Motor</span>
        </div>
        <h1 className={styles.title}>Crear cuenta</h1>
        <p className={styles.subtitle}>Unite a la red de vehículos más grande del país.</p>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Tipo de Cuenta</label>
            <select {...register("accountType")}>
              <option value="PARTICULAR">Particular</option>
              <option value="AGENCIA">Agencia / Concesionaria</option>
            </select>
          </div>

          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label>Nombre</label>
              <input 
                {...register("name", { required: "El nombre es obligatorio" })}
                type="text"
                placeholder="Ej: Juan"
                className={errors.name ? styles.inputError : ""}
              />
            </div>

            {accountType === "PARTICULAR" && (
              <div className={styles.inputGroup}>
                <label>Apellido</label>
                <input 
                  {...register("lastName", { required: "El apellido es obligatorio" })}
                  type="text"
                  placeholder="Ej: Pérez"
                  className={errors.lastName ? styles.inputError : ""}
                />
              </div>
            )}
          </div>

          {accountType === "AGENCIA" && (
            <div className={styles.inputGroup}>
              <label>Nombre de la Agencia</label>
              <input 
                {...register("tradeName", { required: "El nombre comercial es obligatorio" })}
                type="text"
                placeholder="Ej: MercadoMotor Motors"
                className={errors.tradeName ? styles.inputError : ""}
              />
            </div>
          )}

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input 
              {...register("email", { 
                required: "El email es obligatorio",
                pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
              })}
              type="email"
              placeholder="tu@email.com"
              className={errors.email ? styles.inputError : ""}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Teléfono</label>
            <input 
              {...register("phone", { required: "El teléfono es obligatorio" })}
              type="text"
              placeholder="11 1234 5678"
              className={errors.phone ? styles.inputError : ""}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Provincia</label>
            <select 
              {...register("province", { required: "La provincia es obligatoria" })}
              onChange={(e) => {
                setValue("province", e.target.value);
                setValue("municipality", "");
                setValue("locality", "");
              }}
              className={errors.province ? styles.inputError : ""}
            >
              <option value="">Seleccionar Provincia</option>
              {provinces.map(p => (
                <option key={p} value={p}>{capitalize(p)}</option>
              ))}
            </select>
          </div>

          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label>Municipio</label>
              <select 
                {...register("municipality", { required: "El municipio es obligatorio" })}
                onChange={(e) => {
                  setValue("municipality", e.target.value);
                  setValue("locality", "");
                }}
                disabled={!province}
                className={errors.municipality ? styles.inputError : ""}
              >
                <option value="">Seleccionar Municipio</option>
                {municipalities.map(m => (
                  <option key={m} value={m}>{capitalize(m)}</option>
                ))}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Localidad</label>
              <select 
                {...register("locality", { required: "La localidad es obligatoria" })}
                disabled={!municipality}
                className={errors.locality ? styles.inputError : ""}
              >
                <option value="">Seleccionar Localidad</option>
                {localities.map(l => (
                  <option key={l} value={l}>{capitalize(l)}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Contraseña</label>
            <input 
              {...register("password", { 
                required: "La contraseña es obligatoria",
                minLength: { value: 6, message: "Mínimo 6 caracteres" }
              })}
              type="password"
              placeholder="••••••••"
              className={errors.password ? styles.inputError : ""}
            />
          </div>

          <button type="submit" disabled={loading} className={styles.btnSubmit}>
            {loading ? "Registrando..." : "Crear mi cuenta"}
          </button>
        </form>

        <div className={styles.registerPrompt}>
          ¿Ya tenés cuenta? <br/>
          <Link href="/auth/login" className={styles.loginLink}>Iniciar sesión</Link>
        </div>
      </div>
    </div>
  );
}
