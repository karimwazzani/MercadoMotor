/**
 * Validador de contraseñas para MercadoMotor
 * Implementa filtros de complejidad y lista negra de contraseñas fáciles/comunes.
 */

// Lista negra de contraseñas comunes (globales, locales de Argentina y relacionadas con el sitio)
const PASSWORD_BLACKLIST = new Set([
  // Secuencias simples
  "123456", "12345678", "123456789", "12345", "1234567", "00000000", "11111111", "123123",
  "qwerty", "qwertyuiop", "asdfghjk", "zxcvbnm", "abcdefg", "abcdefgh",
  // Palabras comunes / por defecto
  "password", "contraseña", "contrasena", "clave123", "contraseña123", "admin123", "usuario123",
  // Relacionadas al sitio
  "mercadomotor", "mercadomotor123", "mercadomotor2026", "mercadomotor2025", "autovirtual",
  // Equipos de fútbol de Argentina y palabras muy populares locales
  "bocajuniors", "riverplate", "racingclub", "independiente", "sanlorenzo", "cabj", "carp",
  "argentina", "argentina123", "maradona", "messi10", "messi", "campeondeamerica"
]);

export interface PasswordValidationResult {
  isValid: boolean;
  score: number; // 0 a 4
  message: string;
  feedback: string[];
}

export function validatePassword(password: string): PasswordValidationResult {
  const feedback: string[] = [];
  let score = 0;

  if (!password) {
    return {
      isValid: false,
      score: 0,
      message: "La contraseña es requerida.",
      feedback: ["La contraseña es requerida."]
    };
  }

  // 1. Longitud mínima (8 caracteres)
  const hasMinLength = password.length >= 8;
  if (!hasMinLength) {
    feedback.push("Debe tener al menos 8 caracteres.");
  } else {
    score++;
  }

  // 2. Mayúsculas y minúsculas
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  if (!hasUppercase || !hasLowercase) {
    feedback.push("Debe incluir letras mayúsculas y minúsculas.");
  } else {
    score++;
  }

  // 3. Números
  const hasDigit = /[0-9]/.test(password);
  if (!hasDigit) {
    feedback.push("Debe incluir al menos un número.");
  } else {
    score++;
  }

  // 4. Caracteres especiales
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  if (!hasSpecial) {
    feedback.push("Debe incluir al menos un carácter especial (ej: @, $, !, %, *, ?, &).");
  } else {
    score++;
  }

  // 5. Lista Negra (Blacklist) - Esto anula la validez inmediatamente si coincide
  const normalizedPassword = password.toLowerCase().trim();
  
  // Coincidencia exacta o si contiene alguna palabra prohibida de forma directa en contraseñas cortas/simples
  let isBlacklisted = false;
  for (const blacklisted of PASSWORD_BLACKLIST) {
    if (normalizedPassword === blacklisted || (normalizedPassword.includes(blacklisted) && password.length < 12)) {
      isBlacklisted = true;
      break;
    }
  }

  if (isBlacklisted) {
    return {
      isValid: false,
      score: 0, // Fuerza cero si está en la lista negra
      message: "Contraseña demasiado común o fácil de adivinar. Elige algo más seguro.",
      feedback: ["Evita usar palabras comunes, nombres conocidos o secuencias como '123456'."]
    };
  }

  const isValid = hasMinLength && hasUppercase && hasLowercase && hasDigit && hasSpecial;

  let message = "Contraseña débil";
  if (score === 4 && isValid) {
    message = "Contraseña muy segura";
  } else if (score >= 3) {
    message = "Contraseña segura media";
  } else if (score >= 2) {
    message = "Contraseña débil";
  }

  return {
    isValid,
    score,
    message,
    feedback
  };
}
