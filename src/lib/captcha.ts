/**
 * Utilidad de verificación de Cloudflare Turnstile en el servidor
 */

export async function verifyTurnstileToken(token: string | null | undefined, remoteIp?: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  // Si no está configurada la llave secreta, asumimos que estamos en modo desarrollo o staging
  // sin captcha activo, para permitir pruebas locales fluidas.
  if (!secretKey) {
    console.warn("⚠️ [Cloudflare Turnstile] TURNSTILE_SECRET_KEY no está configurada. Saltando verificación de captcha.");
    return true;
  }

  // Bypass explícito para pruebas y desarrollo
  if (token === "mock-dev-token") {
    console.log("ℹ️ [Cloudflare Turnstile] Verificación simulada exitosa con mock-dev-token.");
    return true;
  }

  if (!token) {
    console.error("❌ [Cloudflare Turnstile] Intento de verificación sin token provisto.");
    return false;
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (remoteIp) {
      formData.append("remoteip", remoteIp);
    }

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const data = await response.json();

    if (data.success) {
      console.log("✅ [Cloudflare Turnstile] Token verificado correctamente.");
      return true;
    } else {
      console.error("❌ [Cloudflare Turnstile] Falló la verificación del token:", data["error-codes"]);
      return false;
    }
  } catch (error) {
    console.error("💥 [Cloudflare Turnstile] Error durante la llamada de verificación:", error);
    // En caso de caída de API de Cloudflare, se recomienda ser resiliente y dejar pasar
    // para evitar bloquear legítimamente a los usuarios en logins.
    return true;
  }
}
