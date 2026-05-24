import styles from "../terminos/page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | MercadoMotor",
  description: "Conocé cómo protegemos tus datos personales en MercadoMotor. Información sobre recolección, uso y derechos conforme a la Ley 25.326.",
};

export default function PrivacidadPage() {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
          </Link>
          <nav className={styles.nav}>
            <Link href="/catalogo" className={styles.navLink}>Catálogo</Link>
            <Link href="/auth/login" className={styles.navLink}>Ingresar</Link>
            <Link href="/publish" className={styles.btnPrimary}>PUBLICAR GRATIS</Link>
          </nav>
        </div>
      </header>

      {/* HERO / TITLE AREA */}
      <section className={styles.titleArea}>
        <div className={styles.titleContainer}>
          <h1>Política de Privacidad</h1>
          <p className={styles.subtitle}>
            Tu privacidad es de suma importancia. Conocé cómo resguardamos y tratamos tus datos personales.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <main className={styles.main}>
        <div className={styles.layout}>
          {/* SIDEBAR INDEX */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Secciones</h3>
            <nav className={styles.sidebarNav}>
              <a href="#compromiso" className={styles.sidebarLink}>1. Nuestro Compromiso</a>
              <a href="#recoleccion" className={styles.sidebarLink}>2. Datos que Recolectamos</a>
              <a href="#uso-datos" className={styles.sidebarLink}>3. Cómo Usamos los Datos</a>
              <a href="#compartir" className={styles.sidebarLink}>4. Compartir Información</a>
              <a href="#derechos" className={styles.sidebarLink}>5. Derechos del Usuario</a>
              <a href="#cookies" className={styles.sidebarLink}>6. Cookies y Navegación</a>
              <a href="#seguridad" className={styles.sidebarLink}>7. Medidas de Seguridad</a>
            </nav>
          </aside>

          {/* CONTENT CARD */}
          <article className={styles.contentCard}>
            <span className={styles.lastUpdated}>Última actualización: 21 de Mayo de 2026</span>

            {/* PRIVACY HIGHLIGHT BOX */}
            <div className={styles.disclaimerBox}>
              <h4 className={styles.disclaimerTitle}>🔒 PROTECCIÓN DE DATOS PERSONALES (LEY 25.326)</h4>
              <p className={styles.disclaimerText}>
                MercadoMotor cumple de manera estricta con las disposiciones de la <strong>Ley N° 25.326 de Protección de Datos Personales de la República Argentina</strong>. Garantizamos que tu información personal no es vendida, alquilada ni comercializada de ninguna manera con terceros ajenos a la prestación de los servicios del sitio.
              </p>
            </div>

            <div className={styles.legalBody}>
              <h2 id="compromiso">1. Nuestro Compromiso con la Privacidad</h2>
              <p>
                En <strong>MercadoMotor</strong> valoramos enormemente la confianza que depositas en nosotros al utilizar nuestra Plataforma. Esta Política de Privacidad describe de manera clara y accesible qué datos personales recopilamos, con qué finalidades los tratamos, bajo qué circunstancias los compartimos y cuáles son las herramientas que tenés a disposición para ejercer el control total de tu información.
              </p>
              <p>
                Al registrarse o utilizar la Plataforma, usted presta su consentimiento libre, expreso e informado para el tratamiento de sus datos conforme a los términos aquí descritos.
              </p>

              <h2 id="recoleccion">2. Datos Personales que Recolectamos</h2>
              <p>
                Para brindar un servicio ágil y conectar de forma efectiva a los anunciantes con potenciales compradores, recolectamos los siguientes grupos de datos:
              </p>
              <ul>
                <li><strong>Datos de Registro:</strong> Al crear una cuenta (particular o de agencia), recopilamos su nombre, apellido, dirección de correo electrónico, número de teléfono y, opcionalmente, dirección de perfil o redes sociales corporativas.</li>
                <li><strong>Datos de Anuncios:</strong> Cuando publica un vehículo, recopilamos la marca, modelo, versión, año, kilometraje, precio, ubicación geográfica informada de la unidad y fotos de la misma.</li>
                <li><strong>Datos de Uso y Navegación:</strong> Recopilamos información técnica de manera automatizada, tal como dirección IP, tipo de navegador, páginas visitadas, búsquedas realizadas, clicks en botones de contacto (WhatsApp o llamada) y tiempos de permanencia, a los fines exclusivos de analítica y optimización de velocidad.</li>
              </ul>

              <h2 id="uso-datos">3. Finalidad del Tratamiento de los Datos</h2>
              <p>
                Tratamos los datos recopilados únicamente con los siguientes fines autorizados:
              </p>
              <ul>
                <li><strong>Facilitar la intermediación publicitaria:</strong> Compartir y mostrar tu número de teléfono y/o enlace de WhatsApp con los usuarios interesados en comprar los vehículos que hayas publicado.</li>
                <li><strong>Operación de la Plataforma:</strong> Habilitar la creación de perfiles, la publicación, renovación o pausa de anuncios y la administración de favoritos.</li>
                <li><strong>Centro de Notificaciones:</strong> Enviarle alertas relevantes, por ejemplo, cuando un vehículo guardado en sus favoritos sufre una baja en el precio publicado.</li>
                <li><strong>Mejora continua y seguridad:</strong> Detección temprana de comportamientos sospechosos, prevención de fraudes o estafas en las publicaciones y optimización del rendimiento técnico de las búsquedas.</li>
              </ul>

              <h2 id="compartir">4. Compartir Información con Terceros</h2>
              <p>
                MercadoMotor **NO** vende ni alquila datos de carácter personal. La información es transferida o visible únicamente bajo los siguientes supuestos:
              </p>
              <ul>
                <li><strong>Visualización Pública Consentida:</strong> Al publicar un aviso, el teléfono del anunciante y su nombre quedan expuestos públicamente para que los visitantes interesados puedan iniciar el contacto comercial directamente.</li>
                <li><strong>Cumplimiento de Obligaciones Legales:</strong> Si una autoridad judicial o gubernamental competente de la República Argentina lo requiere formalmente bajo los procedimientos legales vigentes.</li>
              </ul>

              <h2 id="derechos">5. Derechos del Usuario (Acceso, Rectificación y Supresión)</h2>
              <p>
                De acuerdo con la legislación argentina, usted es titular exclusivo de sus datos y tiene el derecho absoluto de acceder a ellos, rectificarlos cuando sean inexactos, actualizarlos o solicitar su supresión definitiva de nuestras bases de datos en cualquier momento.
              </p>
              <p>
                Para ejercer estos derechos:
              </p>
              <ul>
                <li>Puede modificar su información personal y de contacto de forma inmediata accediendo a su **Mi Panel** en el sitio.</li>
                <li>Puede pausar o eliminar definitivamente sus anuncios publicados en cualquier momento.</li>
                <li>Para solicitar la eliminación definitiva de su cuenta de usuario y de todos sus datos asociados, puede escribirnos un correo electrónico a nuestro canal de soporte solicitando la baja de su registro.</li>
              </ul>

              <h2 id="cookies">6. Cookies y Tecnologías de Seguimiento</h2>
              <p>
                Utilizamos "cookies" estándar para mantener las sesiones de usuario activas y recordar sus preferencias de configuración (como vehículos guardados en el comparador o en favoritos). 
              </p>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su navegador. Usted puede configurar su navegador para bloquear o eliminar las cookies en cualquier momento; sin embargo, esto podría limitar algunas funcionalidades interactivas de la Plataforma (por ejemplo, tener que iniciar sesión repetidamente).
              </p>

              <h2 id="seguridad">7. Medidas de Seguridad de la Información</h2>
              <p>
                Hemos adoptado medidas técnicas y organizativas razonables para resguardar la seguridad de sus datos personales y evitar su alteración, pérdida, acceso no autorizado o tratamiento indebido. Entre estas medidas se incluye el cifrado de comunicaciones web mediante protocolo seguro SSL/HTTPS y el uso de base de datos relacional robusta en servidores de Supabase de alta fidelidad.
              </p>
              <p>
                No obstante, el Usuario reconoce y acepta que las medidas de seguridad en Internet no son inexpugnables, y MercadoMotor no se responsabiliza por filtraciones de datos producidas por hackeos maliciosos perpetrados por terceros que excedan nuestro control de seguridad razonable.
              </p>
            </div>
          </article>
        </div>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Link href="/" className={styles.footerLogo}>
            <img src="/logo-dark.svg" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
          </Link>
          <div className={styles.footerLinks}>
            <Link href="/terminos">Términos</Link>
            <Link href="/privacidad">Privacidad</Link>
            <Link href="/catalogo">Catálogo</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} MercadoMotor. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
