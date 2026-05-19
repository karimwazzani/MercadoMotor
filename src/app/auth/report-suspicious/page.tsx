"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ReportSuspiciousContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!email || !token) {
      setErrorMsg("Faltan parámetros de seguridad obligatorios en el enlace.");
      setLoading(false);
      return;
    }

    const processReport = async () => {
      try {
        const response = await fetch("/api/auth/report-suspicious", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, token }),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccess(true);
        } else {
          setErrorMsg(data.message || "Ocurrió un error al procesar el reporte.");
        }
      } catch (err) {
        setErrorMsg("Error de conexión al procesar el reporte de seguridad.");
      } finally {
        setLoading(false);
      }
    };

    processReport();
  }, [email, token]);

  return (
    <div className="min-h-screen bg-[#0f0f11] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Gradientes translúcidos decorativos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b89759]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-md w-full bg-[#18181b] border border-[#27272a] rounded-xl p-8 shadow-2xl relative z-10 text-center">
        <div className="mb-6">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            Mercado<span className="text-[#b89759]">Motor</span>
          </Link>
        </div>

        {loading ? (
          <div className="py-12 flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#b89759] mb-4"></div>
            <p className="text-zinc-400 font-medium">Procesando reporte de seguridad...</p>
          </div>
        ) : success ? (
          <div className="py-6">
            <div className="mx-auto w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🔐</span>
            </div>
            
            <h1 className="text-xl font-bold text-white mb-3">
              Cuenta Suspendida Preventivamente
            </h1>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Hemos bloqueado tu cuenta para el correo <strong className="text-zinc-200">{email}</strong> de forma inmediata tras recibir tu reporte. 
              El atacante ya no podrá iniciar sesión, publicar vehículos ni cambiar tu información personal.
            </p>

            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 mb-8 text-left">
              <p className="text-xs text-red-400 font-medium mb-1.5">🛡️ Próximos pasos de seguridad:</p>
              <ul className="text-xs text-zinc-400 list-disc list-inside space-y-1">
                <li>Acabamos de notificar al equipo de administración sobre este reporte de hackeo.</li>
                <li>Por favor, ponete en contacto con nuestro equipo de soporte para validar tu identidad.</li>
                <li>Una vez verificado tu acceso, te ayudaremos a restablecer la cuenta de forma segura.</li>
              </ul>
            </div>

            <Link
              href="/"
              className="inline-block w-full bg-[#b89759] hover:bg-[#a6864c] text-black font-semibold py-3 px-6 rounded-lg transition duration-200 text-sm"
            >
              Volver al Inicio
            </Link>
          </div>
        ) : (
          <div className="py-6">
            <div className="mx-auto w-16 h-16 bg-zinc-800/50 border border-zinc-700/50 rounded-full flex items-center justify-center mb-6 text-3xl">
              ⚠️
            </div>
            
            <h1 className="text-xl font-bold text-white mb-3">
              Enlace Expirado o Inválido
            </h1>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              {errorMsg}
            </p>

            <Link
              href="/"
              className="inline-block w-full bg-[#18181b] hover:bg-[#27272a] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-sm border border-zinc-800"
            >
              Ir al Inicio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ReportSuspiciousPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0f0f11] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#b89759]"></div>
        </div>
      }
    >
      <ReportSuspiciousContent />
    </Suspense>
  );
}
