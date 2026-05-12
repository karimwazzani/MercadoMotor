import Link from "next/link";
import styles from "../page.module.css"; 

export default function PublishSuccessPage() {
  return (
    <div className={styles.publishPage} style={{ justifyContent: 'center' }}>
      <main className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.formCard} style={{ textAlign: 'center', maxWidth: '500px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
          <h1 className={styles.title} style={{ fontSize: '2rem' }}>¡Vehículo Cargado!</h1>
          <p className={styles.subtitle} style={{ marginBottom: '2rem' }}>
            Tu publicación ha sido enviada exitosamente y actualmente se encuentra en <b>estado de revisión manual</b>.
            <br/><br/>
            Un administrador de MercadoMotor revisará la publicación en breve para garantizar la calidad del catálogo antes de hacerla pública.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/dashboard" className={styles.btnPrimary} style={{ textAlign: 'center', textDecoration: 'none' }}>
              Ir a Mi Panel de Control
            </Link>
            <Link href="/" className={styles.btnSecondary} style={{ textAlign: 'center', textDecoration: 'none' }}>
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
