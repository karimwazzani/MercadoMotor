"use client";

import { useState } from "react";

export default function ReferralBanner({ userId }: { userId: string }) {
  const [copied, setCopied] = useState(false);
  const referralUrl = `https://mercadomotor.ar/publish?ref=${userId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-accent)', marginBottom: '2rem' }}>
      <h2 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.4rem' }}>
        ¡Ganá 7 días de Destacado!
      </h2>
      <p style={{ color: 'var(--color-text)', marginBottom: '1.2rem', lineHeight: 1.6 }}>
        Invitá a un amigo a publicar su auto en MercadoMotor. Cuando su auto sea aprobado, <strong>tu publicación más reciente se destacará automáticamente en la página principal durante 7 días</strong>.
      </p>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: 'var(--color-bg)', 
        border: '1px solid var(--color-border)', 
        borderRadius: '8px', 
        overflow: 'hidden',
        maxWidth: '600px'
      }}>
        <div style={{ 
          padding: '0.8rem 1rem', 
          color: 'var(--color-text-muted)', 
          flexGrow: 1, 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap',
          fontSize: '0.95rem'
        }}>
          {referralUrl}
        </div>
        <button 
          onClick={handleCopy}
          style={{ 
            backgroundColor: copied ? '#2ecc71' : 'var(--color-accent)', 
            color: '#000', 
            border: 'none', 
            padding: '0.8rem 1.5rem', 
            fontWeight: 600, 
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            whiteSpace: 'nowrap'
          }}
        >
          {copied ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              ¡Copiado!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              Copiar Enlace
            </>
          )}
        </button>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.8rem' }}>
        Compartí este enlace único por WhatsApp o redes sociales.
      </p>
    </div>
  );
}
