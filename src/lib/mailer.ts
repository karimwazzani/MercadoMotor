// MVP Mock Mailer. Cuando integres Resend / SendGrid o SES, configurar el transporte real aquí.
export async function sendRenewalNotificationEmail(recipientEmail: string, vehicleName: string) {
    if (process.env.NODE_ENV !== "production") {
        console.log(`
=========================================
📧 E-MAIL SIMULADO: NOTIFICACIÓN DE VENCIMIENTO
-----------------------------------------
Para: ${recipientEmail}
Asunto: ⚠️ Tu publicación de ${vehicleName} está a punto de caducar

Hola,
Te avisamos que tu vehículo publicado en AutoVirtual va a expirar en los próximos 5 días. 
Ingresá a tu panel para renovar la publicación gratuitamente y que siga siendo visible.

AutoVirtual Admin
=========================================
        `);
        return true;
    }

    // Aquí iría el código real (ej: await resend.emails.send({ ... }))
    return true;
}

export async function sendPriceDropEmail(recipientEmail: string, vehicleName: string, oldPrice: string, newPrice: string, vehicleLink: string) {
    if (process.env.NODE_ENV !== "production") {
        console.log(`
=========================================
📧 E-MAIL SIMULADO: ¡BAJA DE PRECIO!
-----------------------------------------
Para: ${recipientEmail}
Asunto: 🔥 ¡Bajó de precio el ${vehicleName} que te interesa!

Hola,
Tenemos buenas noticias. El vehículo que tenías en tus favoritos acaba de bajar de precio.

Antes: ${oldPrice}
Ahora: ${newPrice}

Podés verlo aquí: ${vehicleLink}

AutoVirtual
=========================================
        `);
        return true;
    }
    return true;
}
