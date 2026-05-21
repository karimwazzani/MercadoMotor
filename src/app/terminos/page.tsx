import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso | MercadoMotor",
  description: "Leé atentamente los términos y condiciones de uso de MercadoMotor. Conocé las reglas de nuestra plataforma de clasificados de vehículos.",
};

export default function TerminosPage() {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
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
          <h1>Términos y Condiciones</h1>
          <p className={styles.subtitle}>
            Reglas de uso, limitación de responsabilidad y pautas de convivencia para nuestra comunidad.
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
              <a href="#aceptacion" className={styles.sidebarLink}>1. Aceptación de Términos</a>
              <a href="#naturaleza" className={styles.sidebarLink}>2. Rol de MercadoMotor</a>
              <a href="#responsabilidad-usuario" className={styles.sidebarLink}>3. Responsabilidad del Usuario</a>
              <a href="#exclusiones" className={styles.sidebarLink}>4. Exclusión de Responsabilidad</a>
              <a href="#seguridad" className={styles.sidebarLink}>5. Recomendaciones de Seguridad</a>
              <a href="#moderacion" className={styles.sidebarLink}>6. Moderación y Reportes</a>
              <a href="#jurisdiccion" className={styles.sidebarLink}>7. Ley Aplicable y Jurisdicción</a>
            </nav>
          </aside>

          {/* CONTENT CARD */}
          <article className={styles.contentCard}>
            <span className={styles.lastUpdated}>Última actualización: 21 de Mayo de 2026</span>

            {/* GOLDEN DISCLAIMER BOX */}
            <div className={styles.disclaimerBox}>
              <h4 className={styles.disclaimerTitle}>⚠️ DESLINDE DE RESPONSABILIDAD IMPORTANTÍSIMO</h4>
              <p className={styles.disclaimerText}>
                <strong>MercadoMotor es únicamente una plataforma digital de clasificados e intermediación publicitaria.</strong> No somos dueños, no vendemos, no compramos, no inspeccionamos ni participamos de ninguna manera en las negociaciones o transacciones de los vehículos aquí publicados. Cualquier acuerdo comercial se realiza pura y exclusivamente entre el anunciante y el interesado, fuera de esta plataforma y bajo su total y absoluto riesgo.
              </p>
            </div>

            <div className={styles.legalBody}>
              <h2 id="aceptacion">1. Aceptación de los Términos y Condiciones</h2>
              <p>
                Al acceder, navegar o utilizar la plataforma web <strong>MercadoMotor</strong> (en adelante, la "Plataforma"), usted acepta estar sujeto a los presentes Términos y Condiciones de Uso. Si usted no está de acuerdo con alguna parte de estos términos, debe abstenerse inmediatamente de utilizar los servicios provistos en este sitio.
              </p>
              <p>
                Estos términos constituyen un contrato vinculante entre cualquier persona que acceda o publique en la Plataforma (en adelante, el "Usuario") y MercadoMotor.
              </p>

              <h2 id="naturaleza">2. Rol de la Plataforma (Hosting y Clasificados)</h2>
              <p>
                El Usuario reconoce y acepta que MercadoMotor funciona bajo la modalidad de <strong>proveedor de hosting y espacio de publicidad clasificada en línea</strong>.
              </p>
              <p>
                Nuestra función se limita de forma exclusiva a proveer una infraestructura tecnológica para que usuarios particulares y agencias automotrices puedan publicar anuncios de venta de vehículos, y para que potenciales compradores puedan visualizar dichos anuncios y contactar de forma directa a los anunciantes.
              </p>
              <p>
                En consecuencia, <strong>MercadoMotor NO:</strong>
              </p>
              <ul>
                <li>Es propietario de los vehículos publicados.</li>
                <li>Realiza peritajes, verificaciones mecánicas ni constataciones del estado físico o legal de las unidades.</li>
                <li>Garantiza la existencia, idoneidad, procedencia, calidad ni el título de propiedad de los vehículos.</li>
                <li>Participa como comisionista, intermediario, mandatario o parte en las conversaciones, señas, pagos, transferencias o firmas de contratos.</li>
              </ul>

              <h2 id="responsabilidad-usuario">3. Responsabilidad del Usuario Anunciante</h2>
              <p>
                Cualquier Usuario que publique un aviso es el <strong>único y exclusivo responsable</strong> de la veracidad, exactitud y legalidad de toda la información suministrada, incluyendo, de forma enunciativa pero no limitativa:
              </p>
              <ul>
                <li>El estado real de uso, kilometraje, detalles mecánicos y estéticos del vehículo.</li>
                <li>Los datos de contacto (teléfono, WhatsApp, dirección física).</li>
                <li>La titularidad del vehículo y la vigencia/validez de la documentación necesaria para la transferencia (Título, Cédula Verde/Azul, verificación policial, grabado de autopartes, libre deuda de patentes e infracciones).</li>
                <li>La fijación y transparencia del precio publicado.</li>
              </ul>
              <p>
                Queda estrictamente prohibido publicar información falsa, engañosa, maliciosa o de vehículos sobre los cuales no se posea la legítima facultad de venta o representación comercial. El Usuario mantendrá indemne a MercadoMotor frente a cualquier reclamo derivado de sus publicaciones.
              </p>

              <h2 id="exclusiones">4. Exclusión Absoluta de Responsabilidad</h2>
              <p>
                En la máxima medida permitida por las leyes aplicables de la República Argentina, <strong>MercadoMotor, sus desarrolladores, propietarios y colaboradores quedan eximidos de cualquier tipo de responsabilidad civil, penal, comercial o administrativa</strong> por daños, perjuicios o pérdidas directas o indirectas que puedan sufrir los Usuarios, originadas por:
              </p>
              <ul>
                <li><strong>Estafas, fraudes o engaños:</strong> Pagos de señas por vehículos inexistentes, transferencias bancarias a cuentas fraudulentas o cualquier maniobra delictiva perpetrada por terceros.</li>
                <li><strong>Vicios ocultos o fallas:</strong> Desperfectos mecánicos, eléctricos o de cualquier índole en los vehículos adquiridos a través del contacto en la Plataforma.</li>
                <li><strong>Problemas de papeles o documentación:</strong> Inhibiciones, embargos, denuncias de venta, robos, falsificaciones de firmas, patentes impagas o multas acumuladas sobre las unidades.</li>
                <li><strong>Problemas de seguridad personal:</strong> Robos, hurtos o agresiones sufridas durante encuentros presenciales de compraventa coordinados a raíz de contactos iniciados en el sitio.</li>
                <li><strong>Enlaces externos:</strong> Contenido, disponibilidad o políticas de privacidad de sitios de terceros enlazados en anuncios o banners publicitarios.</li>
              </ul>

              <h2 id="seguridad">5. Recomendaciones Esenciales de Seguridad</h2>
              <p>
                Para cuidar su integridad física y patrimonial, MercadoMotor insta enfáticamente a los compradores y vendedores a seguir las siguientes pautas mínimas al realizar transacciones comerciales:
              </p>
              <ul>
                <li><strong>Encuentros seguros:</strong> No asista solo a ver un vehículo. Coordina los encuentros en lugares públicos y altamente transitados (estaciones de servicio, dependencias policiales, estacionamientos de centros comerciales) y siempre durante el día. Evite ir a domicilios particulares desconocidos o zonas aisladas.</li>
                <li><strong>No transfiera señas por adelantado:</strong> Bajo ninguna circunstancia envíe dinero por transferencias (Mercado Pago, transferencia bancaria, etc.) como seña o reserva sin antes haber visto el auto en persona, verificado su estado y verificado la documentación correspondiente.</li>
                <li><strong>Verificación de documentación:</strong> Solicite siempre un Informe de Dominio histórico y libre deuda en el Registro Nacional de la Propiedad Automotor (DNRPA) antes de concretar la compra. Realice la verificación policial física del vehículo en las plantas autorizadas del Estado.</li>
                <li><strong>Operaciones bancarias seguras:</strong> Realice los pagos en entidades bancarias o mediante transferencias directas inmediatas consolidadas en el momento de la firma del formulario 08 y trámite de transferencia en el Registro.</li>
              </ul>

              <h2 id="moderacion">6. Moderación, Reportes y Derecho de Admisión</h2>
              <p>
                MercadoMotor ofrece una herramienta o canal de reporte para que los Usuarios denuncien avisos sospechosos, abusivos, duplicados o fraudulentos. 
              </p>
              <p>
                La administración de la Plataforma se reserva el derecho absoluto e inapelable de suspender, editar o eliminar de forma permanente cualquier anuncio o cuenta de usuario que a su solo criterio viole las reglas de convivencia, los presentes términos, o sea sospechoso de cometer actividades ilícitas. Dicha acción no generará derecho a reclamo o indemnización alguna por parte del usuario afectado.
              </p>

              <h2 id="jurisdiccion">7. Ley Aplicable y Jurisdicción</h2>
              <p>
                Estos Términos y Condiciones se rigen de conformidad con las leyes vigentes de la República Argentina. 
              </p>
              <p>
                Cualquier controversia, divergencia o conflicto derivado del uso de la Plataforma, su interpretación o validez, será sometido a la jurisdicción exclusiva de los Tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de Buenos Aires, con renuncia expresa a cualquier otro fuero o jurisdicción que pudiera corresponder.
              </p>
            </div>
          </article>
        </div>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Link href="/" className={styles.footerLogo}>
            <img src="/logo.png" alt="MercadoMotor" style={{ height: "36px", width: "auto", display: "block" }} />
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
