"use client";

import { useState, useEffect } from "react";
import styles from "./ShareButtons.module.css";

interface ShareButtonsProps {
  title: string;
  url: string;
  vehicleId?: string;
  brand?: string;
  model?: string;
  version?: string;
  year?: number;
  mileage?: number;
  price?: number;
  currency?: string;
  mainImageUrl?: string;
}

export default function ShareButtons({
  title,
  url,
  vehicleId,
  brand,
  model,
  version,
  year,
  mileage,
  price,
  currency,
  mainImageUrl,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  
  // Instagram modal and generation states
  const [showIgModal, setShowIgModal] = useState(false);
  const [igImageSrc, setIgImageSrc] = useState<string | null>(null);
  const [igFile, setIgFile] = useState<File | null>(null);
  const [generatingIg, setGeneratingIg] = useState(false);
  const [shareError, setShareError] = useState("");

  useEffect(() => {
    if (typeof navigator !== "undefined" && (navigator as any).share && (navigator as any).canShare) {
      setCanShare(true);
    }
  }, []);

  const shareText = `Mirá este auto en MercadoMotor: ${title}`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(url);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText} ${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: shareText,
        url: url,
      }).catch(console.error);
    }
  };

  // Canvas-based premium card drawing for Instagram Stories
  const drawInstagramStoryCard = async (): Promise<Blob | null> => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // 1. Draw premium dark gradient background
    const grad = ctx.createLinearGradient(0, 0, 0, 1920);
    grad.addColorStop(0, "#0F0F11");
    grad.addColorStop(0.5, "#151519");
    grad.addColorStop(1, "#0A0A0C");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1920);

    // 2. Draw gold accent background glow (diffused soft lighting)
    const radialGlow = ctx.createRadialGradient(540, 960, 50, 540, 960, 800);
    radialGlow.addColorStop(0, "rgba(184, 151, 89, 0.08)");
    radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = radialGlow;
    ctx.fillRect(0, 0, 1080, 1920);

    // 3. Draw upper gold decorative line
    ctx.strokeStyle = "#B89759";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(100, 120);
    ctx.lineTo(980, 120);
    ctx.stroke();

    // 4. Logo: MercadoMotor
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 44px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const baseText = "MERCADO";
    const accentText = "MOTOR";
    const baseWidth = ctx.measureText(baseText).width;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(baseText, 540 - 50, 180);
    ctx.fillStyle = "#B89759";
    ctx.fillText(accentText, 540 + baseWidth / 2 + 10, 180);

    // 5. Draw vehicle image with rounded corners and a premium gold border
    if (mainImageUrl) {
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";

        const imageLoaded = new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject();
        });
        img.src = mainImageUrl;
        await imageLoaded;

        // Image boundary layout
        const x = 90;
        const y = 300;
        const w = 900;
        const h = 750;
        const r = 32; // border radius

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
        ctx.clip();

        // Aspect fill image drawing
        const imgRatio = img.width / img.height;
        const targetRatio = w / h;
        let drawW, drawH, drawX, drawY;

        if (imgRatio > targetRatio) {
          drawH = h;
          drawW = h * imgRatio;
          drawX = x - (drawW - w) / 2;
          drawY = y;
        } else {
          drawW = w;
          drawH = w / imgRatio;
          drawX = x;
          drawY = y - (drawH - h) / 2;
        }

        ctx.drawImage(img, drawX, drawY, drawW, drawH);
        ctx.restore();

        // Gold border around image
        ctx.strokeStyle = "rgba(184, 151, 89, 0.4)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
        ctx.stroke();
      } catch (e) {
        console.error("Error loading image for canvas:", e);
        // Fallback: draw placeholder box
        ctx.fillStyle = "#27272A";
        ctx.fillRect(90, 300, 900, 750);
      }
    }

    // 6. Text Info: Brand, Model, Version
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";

    // Brand + Model
    ctx.font = "bold 72px sans-serif";
    const vTitle = `${brand || ""} ${model || ""}`.trim();
    ctx.fillText(vTitle, 540, 1140);

    // Version
    if (version) {
      ctx.font = "500 42px sans-serif";
      ctx.fillStyle = "#A1A1AA";
      ctx.fillText(version, 540, 1220);
    }

    // Year & Mileage
    ctx.font = "600 40px sans-serif";
    ctx.fillStyle = "#D4D4D8";
    const specsText = `${year || ""}  •  ${mileage ? mileage.toLocaleString() : 0} km`;
    ctx.fillText(specsText, 540, 1310);

    // 7. Gold Price Capsule
    const priceX = 540;
    const priceY = 1420;
    const priceText = `${currency === "ARS" ? "$" : "US$"} ${price ? price.toLocaleString() : 0}`;

    ctx.font = "bold 64px sans-serif";
    const textWidth = ctx.measureText(priceText).width;
    const capW = textWidth + 80;
    const capH = 110;
    const capX = priceX - capW / 2;
    const capY = priceY - capH / 2;
    const capR = 24;

    ctx.fillStyle = "#B89759";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(capX, capY, capW, capH, capR);
    } else {
      ctx.rect(capX, capY, capW, capH);
    }
    ctx.fill();

    ctx.fillStyle = "#0F0F11";
    ctx.fillText(priceText, priceX, priceY + 5);

    // 8. Bottom QR Code
    try {
      const qrImg = new Image();
      qrImg.crossOrigin = "anonymous";
      const qrLoaded = new Promise<void>((resolve, reject) => {
        qrImg.onload = () => resolve();
        qrImg.onerror = () => reject();
      });
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=b89759&bgcolor=0c0c0e&data=${encodeURIComponent(url)}`;
      await qrLoaded;

      ctx.drawImage(qrImg, 540 - 90, 1590, 180, 180);

      // QR outer thin border
      ctx.strokeStyle = "rgba(184, 151, 89, 0.3)";
      ctx.lineWidth = 3;
      ctx.strokeRect(540 - 95, 1590 - 5, 190, 190);
    } catch (e) {
      console.error("Error loading QR code:", e);
    }

    // Call to action text
    ctx.fillStyle = "#A1A1AA";
    ctx.font = "500 28px sans-serif";
    ctx.fillText("Escaneá para ver la publicación en MercadoMotor", 540, 1820);

    return new Promise<Blob | null>((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/png");
    });
  };

  const handleInstagramClick = async () => {
    setShowIgModal(true);
    setGeneratingIg(true);
    setShareError("");
    setIgImageSrc(null);
    setIgFile(null);

    try {
      const blob = await drawInstagramStoryCard();
      if (blob) {
        const generatedUrl = URL.createObjectURL(blob);
        setIgImageSrc(generatedUrl);

        const filename = `mercadomotor-${brand}-${model}-story.png`.toLowerCase().replace(/\s+/g, "-");
        const file = new File([blob], filename, { type: "image/png" });
        setIgFile(file);

        // Auto-download as a fallback for desktop or non-sharing browsers
        if (!navigator.share || !navigator.canShare) {
          triggerDownload(generatedUrl, filename);
        }
      } else {
        setShareError("No se pudo generar la tarjeta de historia.");
      }
    } catch (e) {
      console.error(e);
      setShareError("Ocurrió un error al generar la tarjeta.");
    } finally {
      setGeneratingIg(false);
    }
  };

  const handleInstagramShare = () => {
    if (!igImageSrc || !igFile) return;

    try {
      if (navigator.share) {
        const shareData = {
          files: [igFile],
          title: `MercadoMotor - ${brand} ${model}`,
          text: `¡Mirá esta publicación en MercadoMotor!`,
        };
        navigator.share(shareData).catch((err) => {
          console.error("Error direct share:", err);
          // Fallback manual download
          triggerDownload(igImageSrc, igFile.name);
        });
      } else {
        triggerDownload(igImageSrc, igFile.name);
      }
    } catch (e) {
      console.error("Error sharing story card:", e);
      triggerDownload(igImageSrc, igFile.name);
    }
  };

  const triggerDownload = (src: string, name: string) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className={styles.shareContainer}>
      <span className={styles.shareLabel}>Compartir publicación:</span>
      <div className={styles.buttonsGroup}>
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.shareBtn} ${styles.whatsapp}`}
          title="Compartir por WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        {/* Instagram Stories Premium Card */}
        {vehicleId && (
          <button
            onClick={handleInstagramClick}
            className={`${styles.shareBtn} ${styles.instagram}`}
            title="Generar tarjeta para Historia de Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </button>
        )}

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.shareBtn} ${styles.facebook}`}
          title="Compartir por Facebook"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854V15.469H7.078V12.073H10.125V9.483c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.396h-2.796v8.459C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        {/* Twitter/X */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.shareBtn} ${styles.twitter}`}
          title="Compartir por Twitter"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Web Share (if supported) */}
        {canShare && (
          <button
            onClick={handleShare}
            className={`${styles.shareBtn} ${styles.generic}`}
            title="Otras opciones"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        )}

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className={`${styles.shareBtn} ${styles.copy}`}
          title="Copiar enlace"
        >
          {copied ? "¡Copiado!" : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          )}
        </button>
      </div>

      {/* Instagram Story Generation Modal */}
      {showIgModal && (
        <div className={styles.modalOverlay} onClick={() => setShowIgModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setShowIgModal(false)}>
              &times;
            </button>
            <h3 className={styles.modalTitle}>Tarjeta para Historias</h3>

            {generatingIg ? (
              <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p>Generando tarjeta premium para Instagram...</p>
              </div>
            ) : (
              <>
                {shareError ? (
                  <div style={{ color: "#f87171", padding: "2rem 0" }}>{shareError}</div>
                ) : (
                  <>
                    <div className={styles.previewContainer}>
                      {igImageSrc && (
                        <img
                          src={igImageSrc}
                          alt="Instagram Story Card Preview"
                          className={styles.previewImage}
                        />
                      )}
                    </div>
                    <p className={styles.modalInstructions}>
                      {canShare
                        ? "Hacé clic en 'Compartir en Historias' para enviar la tarjeta directamente a tu Instagram."
                        : "¡Tarjeta premium descargada con éxito! Subila a tu Historia de Instagram y agrégale el enlace de la publicación."}
                    </p>
                    <div className={styles.modalButtons}>
                      <button className={styles.btnAction} onClick={handleInstagramShare}>
                        {canShare ? "Compartir en Historias" : "Volver a Descargar"}
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
