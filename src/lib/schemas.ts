import { z } from "zod";
import { validatePassword } from "./passwordValidator";

/**
 * Esquema de validación estricto para el registro de usuarios (Particular y Agencia)
 */
export const registerSchema = z.object({
  name: z
    .string({ message: "El nombre es obligatorio" })
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede superar los 50 caracteres")
    .trim(),
  email: z
    .string({ message: "El correo electrónico es obligatorio" })
    .email("Correo electrónico inválido")
    .trim()
    .toLowerCase(),
  password: z
    .string({ message: "La contraseña es obligatoria" })
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  accountType: z.enum(["PARTICULAR", "AGENCIA"], {
    message: "Tipo de cuenta inválido",
  }),
  lastName: z
    .string()
    .max(50, "El apellido no puede superar los 50 caracteres")
    .trim()
    .optional()
    .nullable(),
  phone: z
    .string()
    .max(20, "El teléfono no puede superar los 20 caracteres")
    .trim()
    .optional()
    .nullable(),
  location: z
    .string()
    .max(100, "La ubicación no puede superar los 100 caracteres")
    .trim()
    .optional()
    .nullable(),
  tradeName: z
    .string()
    .max(100, "El nombre comercial no puede superar los 100 caracteres")
    .trim()
    .optional()
    .nullable(),
  captchaToken: z.string().optional().nullable(),
}).superRefine((data, ctx) => {
  // 1. Validar la fortaleza de la contraseña usando el passwordValidator centralizado
  const pwdVal = validatePassword(data.password);
  if (!pwdVal.isValid) {
    ctx.addIssue({
      path: ["password"],
      code: z.ZodIssueCode.custom,
      message: pwdVal.message,
    });
  }

  // 2. Validación condicional basada en el tipo de cuenta
  if (data.accountType === "AGENCIA") {
    if (!data.tradeName || data.tradeName.trim().length === 0) {
      ctx.addIssue({
        path: ["tradeName"],
        code: z.ZodIssueCode.custom,
        message: "Completá los datos comerciales obligatorios",
      });
    }
    if (!data.phone || data.phone.trim().length === 0) {
      ctx.addIssue({
        path: ["phone"],
        code: z.ZodIssueCode.custom,
        message: "Completá los datos comerciales obligatorios",
      });
    }
    if (!data.location || data.location.trim().length === 0) {
      ctx.addIssue({
        path: ["location"],
        code: z.ZodIssueCode.custom,
        message: "Completá los datos comerciales obligatorios",
      });
    }
  } else if (data.accountType === "PARTICULAR") {
    if (!data.lastName || data.lastName.trim().length === 0) {
      ctx.addIssue({
        path: ["lastName"],
        code: z.ZodIssueCode.custom,
        message: "Tu apellido y celular son necesarios",
      });
    }
    if (!data.phone || data.phone.trim().length === 0) {
      ctx.addIssue({
        path: ["phone"],
        code: z.ZodIssueCode.custom,
        message: "Tu apellido y celular son necesarios",
      });
    }
  }
});

/**
 * Esquema de validación estricto para el inicio de sesión
 */
export const loginSchema = z.object({
  email: z
    .string({ message: "El correo electrónico es obligatorio" })
    .email("Correo electrónico inválido")
    .trim()
    .toLowerCase(),
  password: z
    .string({ message: "La contraseña es obligatoria" })
    .min(1, "La contraseña es obligatoria"),
  captchaToken: z.string().optional().nullable(),
});

/**
 * Esquema de validación estricto para solicitar recuperación de contraseña
 */
export const forgotPasswordSchema = z.object({
  email: z
    .string({ message: "El correo electrónico es obligatorio" })
    .email("Correo electrónico inválido")
    .trim()
    .toLowerCase(),
  captchaToken: z.string().optional().nullable(),
});

/**
 * Esquema de validación estricto para el restablecimiento de contraseña
 */
export const resetPasswordSchema = z.object({
  token: z
    .string({ message: "El token es obligatorio" })
    .min(1, "El token es obligatorio"),
  password: z
    .string({ message: "La contraseña es obligatoria" })
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
}).superRefine((data, ctx) => {
  // Validar robustez usando el passwordValidator
  const pwdVal = validatePassword(data.password);
  if (!pwdVal.isValid) {
    ctx.addIssue({
      path: ["password"],
      code: z.ZodIssueCode.custom,
      message: pwdVal.message,
    });
  }
});
