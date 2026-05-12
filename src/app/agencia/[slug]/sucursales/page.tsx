import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default async function AgencyBranchesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const agency = await prisma.agency.findUnique({
    where: { slug },
    include: { branches: true }
  });

  if (!agency) notFound();

  const capitalize = (s: string) => s ? s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()) : "";

  return (
    <div className={styles.minisite} style={{ paddingTop: '2rem' }}>
      <div className="container">
        <header style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href={`/agencia/${slug}`} style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontWeight: 600 }}>
            ← Volver al Minisitio
          </Link>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
            Sucursales de {agency.tradeName}
          </h1>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {/* CASA CENTRAL */}
          <div className={styles.stripCard} style={{ minHeight: 'auto', border: '2px solid var(--color-accent)' }}>
            <h3 className={styles.cardTitle} style={{ color: 'var(--color-accent)' }}>Casa Central</h3>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ margin: '0.5rem 0', fontWeight: 700 }}>{capitalize(agency.city || "")}, {capitalize(agency.province || "")}</p>
              {agency.address && <p style={{ margin: '0.5rem 0', color: '#666' }}>📍 {agency.address}</p>}
              {agency.phone && <p style={{ margin: '0.5rem 0', color: '#666' }}>📞 {agency.phone}</p>}
            </div>
          </div>

          {/* SUCURSALES */}
          {agency.branches.map((branch) => (
            <div key={branch.id} className={styles.stripCard} style={{ minHeight: 'auto' }}>
              <h3 className={styles.cardTitle}>{branch.name}</h3>
              <div style={{ marginTop: '1rem' }}>
                <p style={{ margin: '0.5rem 0', fontWeight: 700 }}>{capitalize(branch.city || "")}, {capitalize(branch.province || "")}</p>
                {branch.address && <p style={{ margin: '0.5rem 0', color: '#666' }}>📍 {branch.address}</p>}
                {branch.phone && <p style={{ margin: '0.5rem 0', color: '#666' }}>📞 {branch.phone}</p>}
                {branch.manager && <p style={{ margin: '0.5rem 0', color: '#666', fontSize: '0.9rem' }}>👤 Encargado: {branch.manager}</p>}
              </div>
            </div>
          ))}
        </div>

        {agency.branches.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem', background: 'white', borderRadius: '12px', border: '1px solid #eee' }}>
            <p style={{ color: '#666' }}>Esta agencia no tiene sucursales adicionales cargadas.</p>
          </div>
        )}
      </div>
    </div>
  );
}
