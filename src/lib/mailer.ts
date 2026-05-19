import { Resend } from "resend";

// Inicializar Resend si la clave de API está provista en las variables de entorno
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Email remitente por defecto (onboarding de Resend o tu dominio verificado)
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "MercadoMotor <hola@mercadomotor.ar>";

/**
 * Plantilla HTML compartida para mantener la estética premium dark/gold de MercadoMotor
 */
function getEmailTemplate(title: string, contentHtml: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #0f0f11;
            margin: 0;
            padding: 40px 20px;
            color: #e4e4e7;
          }
          .card {
            background-color: #18181b;
            max-width: 550px;
            margin: 0 auto;
            border-radius: 12px;
            border: 1px solid #27272a;
            padding: 40px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
          .logo {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            text-align: center;
            margin-bottom: 30px;
            letter-spacing: -0.04em;
          }
          .logo-accent {
            color: #b89759;
          }
          .title {
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
            margin-top: 0;
            margin-bottom: 20px;
            text-align: center;
          }
          .text {
            font-size: 15px;
            line-height: 1.6;
            color: #a1a1aa;
            margin-bottom: 30px;
          }
          .btn-container {
            text-align: center;
            margin-bottom: 30px;
          }
          .btn {
            background-color: #b89759;
            color: #000000 !important;
            text-decoration: none;
            padding: 14px 28px;
            border-radius: 6px;
            font-size: 15px;
            font-weight: 600;
            display: inline-block;
            transition: background-color 0.2s ease;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #71717a;
            border-top: 1px solid #27272a;
            padding-top: 20px;
            margin-top: 30px;
          }
          .link-fallback {
            word-break: break-all;
            font-size: 12px;
            color: #71717a;
            text-align: center;
            margin-top: 15px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="logo">
            Mercado<span class="logo-accent">Motor</span>
          </div>
          ${contentHtml}
          <div class="footer">
            &copy; ${new Date().getFullYear()} MercadoMotor. Todos los derechos reservados.<br>
            Plataforma digital de publicación y gestión de vehículos.
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Envía el correo de verificación de cuenta al registrarse
 */
export async function sendVerificationEmail(recipientEmail: string, verificationLink: string) {
  const title = "Confirma tu cuenta en MercadoMotor";
  const contentHtml = `
    <h2 class="title">¡Hola! Te damos la bienvenida</h2>
    <p class="text">
      Gracias por registrarte en MercadoMotor. Para comenzar a publicar y gestionar tus vehículos de manera premium, por favor confirma tu dirección de correo electrónico haciendo clic en el siguiente botón:
    </p>
    <div class="btn-container">
      <a href="${verificationLink}" class="btn" target="_blank">Confirmar mi Cuenta</a>
    </div>
    <p class="text" style="font-size: 13px; text-align: center; margin-bottom: 0;">
      Si el botón no funciona, podés copiar y pegar este enlace en tu navegador:
    </p>
    <div class="link-fallback">
      <a href="${verificationLink}" style="color: #b89759;">${verificationLink}</a>
    </div>
  `;

  const html = getEmailTemplate(title, contentHtml);

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: recipientEmail,
        subject: "Confirma tu cuenta en MercadoMotor",
        html
      });
      console.log(`✉️ Email de verificación REAL enviado con éxito vía Resend a: ${recipientEmail}`);
      return true;
    } catch (error) {
      console.error("❌ Error enviando email de verificación con Resend:", error);
    }
  }

  // Fallback para desarrollo sin credenciales configuradas
  console.log(`
=========================================
📧 E-MAIL SIMULADO: VERIFICACIÓN DE CUENTA (MOCK)
-----------------------------------------
Para: ${recipientEmail}
Asunto: Confirma tu cuenta en MercadoMotor
Enlace: ${verificationLink}
=========================================
  `);
  return true;
}

/**
 * Envía el correo de restablecimiento de contraseña
 */
export async function sendPasswordResetEmail(recipientEmail: string, resetLink: string) {
  const title = "Restablece tu contraseña - MercadoMotor";
  const contentHtml = `
    <h2 class="title">Restablecer tu contraseña</h2>
    <p class="text">
      Recibimos una solicitud para restablecer la contraseña de tu cuenta en MercadoMotor. Para crear una nueva contraseña, hacé clic en el botón de abajo:
    </p>
    <div class="btn-container">
      <a href="${resetLink}" class="btn" target="_blank">Restablecer mi Contraseña</a>
    </div>
    <p class="text" style="color: #71717a; font-size: 13px; text-align: center;">
      Este enlace es temporal y expirará en 1 hora por razones de seguridad.
    </p>
    <div class="link-fallback">
      Si el botón no funciona, copiá este enlace: <br>
      <a href="${resetLink}" style="color: #b89759;">${resetLink}</a>
    </div>
  `;

  const html = getEmailTemplate(title, contentHtml);

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: recipientEmail,
        subject: "Restablece tu contraseña - MercadoMotor",
        html
      });
      console.log(`🔑 Email de restablecimiento REAL enviado con éxito vía Resend a: ${recipientEmail}`);
      return true;
    } catch (error) {
      console.error("❌ Error enviando email de restablecimiento con Resend:", error);
    }
  }

  // Fallback de desarrollo
  console.log(`
=========================================
📧 E-MAIL SIMULADO: RECUPERACIÓN DE CONTRASEÑA (MOCK)
-----------------------------------------
Para: ${recipientEmail}
Asunto: Restablece tu contraseña - MercadoMotor
Enlace: ${resetLink}
=========================================
  `);
  return true;
}

/**
 * Envía una notificación de que la publicación va a caducar
 */
export async function sendRenewalNotificationEmail(recipientEmail: string, vehicleName: string) {
  const title = "Tu publicación está a punto de caducar";
  const contentHtml = `
    <h2 class="title">⚠️ Tu publicación está a punto de caducar</h2>
    <p class="text">
      Te avisamos que tu vehículo <strong>${vehicleName}</strong> publicado en MercadoMotor va a expirar en los próximos 5 días.
      Para que siga siendo visible para miles de compradores interesados, te sugerimos renovar tu publicación de forma gratuita ingresando a tu panel.
    </p>
    <div class="btn-container">
      <a href="${process.env.NEXTAUTH_URL || 'https://mercadomotor.com.ar'}/dashboard" class="btn" target="_blank">Ir a Mi Panel</a>
    </div>
  `;

  const html = getEmailTemplate(title, contentHtml);

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: recipientEmail,
        subject: `Tu publicación de ${vehicleName} está por caducar`,
        html
      });
      return true;
    } catch (error) {
      console.error("❌ Error enviando email de renovación con Resend:", error);
    }
  }

  console.log(`
=========================================
📧 E-MAIL SIMULADO: NOTIFICACIÓN DE RENOVAR (MOCK)
-----------------------------------------
Para: ${recipientEmail}
Asunto: Tu publicación de ${vehicleName} está a punto de caducar
=========================================
  `);
  return true;
}

/**
 * Envía un correo notificando una baja de precio en favoritos
 */
export async function sendPriceDropEmail(recipientEmail: string, vehicleName: string, oldPrice: string, newPrice: string, vehicleLink: string) {
  const title = "¡Bajó de precio el vehículo de tus favoritos!";
  const contentHtml = `
    <h2 class="title">🔥 ¡Bajó de precio el ${vehicleName}!</h2>
    <p class="text">
      ¡Buenas noticias! El vehículo que tenías guardado en tus favoritos acaba de bajar de precio:
    </p>
    <div style="background-color: #27272a; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center; font-size: 16px;">
      <span style="text-decoration: line-through; color: #71717a; margin-right: 15px;">Antes: ${oldPrice}</span>
      <strong style="color: #2ecc71; font-size: 18px;">Ahora: ${newPrice}</strong>
    </div>
    <div class="btn-container">
      <a href="${vehicleLink}" class="btn" target="_blank">Ver publicación</a>
    </div>
  `;

  const html = getEmailTemplate(title, contentHtml);

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: recipientEmail,
        subject: `¡Bajó de precio el ${vehicleName} que te interesa!`,
        html
      });
      return true;
    } catch (error) {
      console.error("❌ Error enviando email de baja de precio con Resend:", error);
    }
  }

  console.log(`
=========================================
📧 E-MAIL SIMULADO: ¡BAJA DE PRECIO! (MOCK)
-----------------------------------------
Para: ${recipientEmail}
Asunto: ¡Bajó de precio el ${vehicleName} que te interesa!
=========================================
  `);
  return true;
}

/**
 * Envía una confirmación de que la contraseña ha sido cambiada con éxito
 */
export async function sendPasswordChangedSuccessEmail(recipientEmail: string, reportLink: string) {
  const title = "Tu contraseña ha sido cambiada";
  const contentHtml = `
    <h2 class="title" style="color: #ffffff;">🔐 Contraseña modificada con éxito</h2>
    <p class="text">
      Te notificamos que la contraseña de tu cuenta en MercadoMotor ha sido modificada recientemente con éxito.
    </p>
    <p class="text" style="font-size: 14px; background-color: #27272a; padding: 15px; border-radius: 8px; border: 1px solid #3f3f46; color: #a1a1aa; text-align: center;">
      Fecha y hora del cambio: <strong>${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })} (Arg)</strong>
    </p>
    <p class="text" style="color: #f87171; font-weight: 500; text-align: center; margin-top: 25px;">
      ⚠️ ¿No realizaste este cambio?
    </p>
    <p class="text" style="font-size: 14px; text-align: center;">
      Si vos no solicitaste este cambio, es posible que alguien haya accedido a tu cuenta. Hacé clic en el siguiente botón para <strong>suspender tu cuenta preventivamente</strong> y proteger tus datos:
    </p>
    <div class="btn-container">
      <a href="${reportLink}" class="btn" style="background-color: #ef4444 !important; color: #ffffff !important; transition: background-color 0.2s ease;">
        ¡No fui yo! Bloquear mi cuenta
      </a>
    </div>
  `;

  const html = getEmailTemplate(title, contentHtml);

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: recipientEmail,
        subject: "Alerta de seguridad: Contraseña modificada - MercadoMotor",
        html
      });
      return true;
    } catch (error) {
      console.error("❌ Error enviando email de confirmación de contraseña con Resend:", error);
    }
  }

  console.log(`
=========================================
📧 E-MAIL SIMULADO: CONTRASEÑA MODIFICADA CON ÉXITO (MOCK)
-----------------------------------------
Para: ${recipientEmail}
Asunto: Alerta de seguridad: Contraseña modificada - MercadoMotor
Enlace de suspensión: ${reportLink}
=========================================
  `);
  return true;
}

/**
 * Envía una alerta roja al administrador notificando un reporte de actividad sospechosa (hackeo)
 */
export async function sendSuspiciousActivityAlertToAdmins(affectedUserEmail: string, adminEmail: string) {
  const title = "ALERTA: Reporte de Actividad Sospechosa";
  const contentHtml = `
    <h2 class="title" style="color: #ef4444;">🚨 ALERTA DE HACKEO / ACCESO NO AUTORIZADO</h2>
    <p class="text" style="color: #ffffff;">
      El sistema ha registrado un reporte de actividad no autorizada en MercadoMotor.
    </p>
    <div style="background-color: #ef444422; border: 1px solid #ef4444; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
      <p class="text" style="color: #fca5a5; margin: 0 0 10px 0;"><strong>Detalles del incidente:</strong></p>
      <ul style="color: #e4e4e7; font-size: 14px; padding-left: 20px; margin: 0;">
        <li>Usuario Afectado: <strong>${affectedUserEmail}</strong></li>
        <li>Acción Tomada: <strong>Cuenta suspendida temporalmente de forma automática (status: SUSPENDED)</strong></li>
        <li>Fecha del Reporte: <strong>${new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })} (Arg)</strong></li>
      </ul>
    </div>
    <p class="text" style="font-size: 14px;">
      La cuenta de este usuario ha sido bloqueada de manera preventiva en la base de datos para impedir que el atacante publique vehículos o modifique información. 
      Es necesario realizar una verificación de seguridad con el usuario antes de reactivar su estado a "ACTIVE".
    </p>
  `;

  const html = getEmailTemplate(title, contentHtml);

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: adminEmail,
        subject: `ALERTA: Reporte de hackeo en cuenta ${affectedUserEmail}`,
        html
      });
      return true;
    } catch (error) {
      console.error("❌ Error enviando email de alerta a administradores con Resend:", error);
    }
  }

  console.log(`
=========================================
📧 E-MAIL SIMULADO: ALERTA DE HACKEO PARA ADMINS (MOCK)
-----------------------------------------
Para Administrador: ${adminEmail}
Usuario Afectado: ${affectedUserEmail}
=========================================
  `);
  return true;
}

/**
 * Envía una notificación cuando se crea una publicación (pendiente de revisión)
 */
export async function sendVehiclePendingEmail(recipientEmail: string, brand: string, model: string) {
  const title = "Recibimos tu publicación - MercadoMotor";
  const contentHtml = `
    <h2 class="title">🚗 Recibimos tu publicación</h2>
    <p class="text">
      ¡Gracias por publicar en MercadoMotor! Queremos avisarte que la publicación de tu <strong>${brand} ${model}</strong> se ha guardado correctamente y ya se encuentra en proceso de revisión por nuestro equipo de moderadores.
    </p>
    <p class="text" style="font-size: 14px; background-color: #27272a; padding: 15px; border-radius: 8px; border: 1px solid #3f3f46; color: #a1a1aa; text-align: center;">
      ⏰ <strong>Plazo de revisión:</strong> Habitualmente revisamos las publicaciones en un plazo máximo de <strong>2 horas</strong>. Te notificaremos por correo electrónico en cuanto sea aprobada o requiera alguna modificación.
    </p>
    <div class="btn-container">
      <a href="${process.env.NEXTAUTH_URL || 'https://mercadomotor.com.ar'}/dashboard" class="btn" style="transition: background-color 0.2s ease;">
        Ir a mi Panel de Control
      </a>
    </div>
  `;

  const html = getEmailTemplate(title, contentHtml);

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: recipientEmail,
        subject: `Recibimos tu publicación de ${brand} ${model} - MercadoMotor`,
        html
      });
      return true;
    } catch (error) {
      console.error("❌ Error enviando email de publicación pendiente con Resend:", error);
    }
  }

  console.log(`
=========================================
📧 E-MAIL SIMULADO: PUBLICACIÓN CREADA / PENDIENTE (MOCK)
-----------------------------------------
Para: ${recipientEmail}
Vehículo: ${brand} ${model}
=========================================
  `);
  return true;
}

/**
 * Envía una notificación cuando la publicación es aprobada y publicada en vivo
 */
export async function sendVehicleApprovedEmail(recipientEmail: string, brand: string, model: string, vehicleId: string) {
  const title = "¡Tu publicación está activa! - MercadoMotor";
  const vehicleLink = `${process.env.NEXTAUTH_URL || 'https://mercadomotor.com.ar'}/vehiculos/${vehicleId}`;
  
  const contentHtml = `
    <h2 class="title" style="color: #ffffff;">🎉 ¡Excelentes noticias!</h2>
    <p class="text">
      Nos alegra informarte que la publicación de tu <strong>${brand} ${model}</strong> ha sido <strong>aprobada con éxito</strong> por nuestro equipo de moderación.
    </p>
    <p class="text" style="text-align: center; color: #b89759; font-weight: 600; font-size: 16px;">
      ¡Ya se encuentra activa y visible para miles de compradores interesados en MercadoMotor!
    </p>
    <div class="btn-container" style="margin-top: 30px;">
      <a href="${vehicleLink}" class="btn" style="transition: background-color 0.2s ease;">
        Ver mi Publicación en Vivo
      </a>
    </div>
  `;

  const html = getEmailTemplate(title, contentHtml);

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: recipientEmail,
        subject: `¡Publicación aprobada y activa! - ${brand} ${model}`,
        html
      });
      return true;
    } catch (error) {
      console.error("❌ Error enviando email de publicación aprobada con Resend:", error);
    }
  }

  console.log(`
=========================================
📧 E-MAIL SIMULADO: PUBLICACIÓN APROBADA (MOCK)
-----------------------------------------
Para: ${recipientEmail}
Vehículo: ${brand} ${model}
Enlace: ${vehicleLink}
=========================================
  `);
  return true;
}

/**
 * Envía una notificación cuando la publicación es rechazada y requiere revisión
 */
export async function sendVehicleRejectedEmail(recipientEmail: string, brand: string, model: string) {
  const title = "Tu publicación requiere revisión - MercadoMotor";
  const dashboardLink = `${process.env.NEXTAUTH_URL || 'https://mercadomotor.com.ar'}/dashboard`;
  
  const contentHtml = `
    <h2 class="title" style="color: #f87171;">⚠️ Tu publicación requiere cambios</h2>
    <p class="text">
      Te informamos que la publicación de tu <strong>${brand} ${model}</strong> ha sido revisada por nuestro equipo y requiere que realices algunas modificaciones antes de que podamos aprobarla y publicarla en el catálogo.
    </p>
    <p class="text" style="font-size: 14px; background-color: #27272a; padding: 15px; border-radius: 8px; border: 1px solid #3f3f46; color: #a1a1aa;">
      📌 <strong>¿Qué tenés que hacer?</strong><br>
      Ingresá a tu Panel de Control, hacé clic en editar sobre esta publicación, y revisá que las fotos sean nítidas, que el precio esté correcto, y que la descripción cumpla con las normas de convivencia de MercadoMotor.
    </p>
    <div class="btn-container" style="margin-top: 30px;">
      <a href="${dashboardLink}" class="btn" style="background-color: #b89759; color: #000000; transition: background-color 0.2s ease;">
        Ir a mi Panel para Editar
      </a>
    </div>
  `;

  const html = getEmailTemplate(title, contentHtml);

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: recipientEmail,
        subject: `Tu publicación de ${brand} ${model} requiere revisión`,
        html
      });
      return true;
    } catch (error) {
      console.error("❌ Error enviando email de publicación rechazada con Resend:", error);
    }
  }

  console.log(`
=========================================
📧 E-MAIL SIMULADO: PUBLICACIÓN RECHAZADA (MOCK)
-----------------------------------------
Para: ${recipientEmail}
Vehículo: ${brand} ${model}
Panel: ${dashboardLink}
=========================================
  `);
  return true;
}
