import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MercadoMotor | Compra y Venta de Vehículos",
  description: "Plataforma premium de compra y venta de vehículos entre particulares y agencias.",
};

import { Providers } from "./providers";
import CompareBar from "./components/CompareBar";
import SplashScreen from "./components/SplashScreen";
import CookieConsent from "./components/CookieConsent";
import { AnalyticsTracker } from "./components/AnalyticsTracker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Synchronous inline style: hides splash screen instantly if class is present */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html.splash-shown #MM_splash_screen {
                display: none !important;
              }
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <SplashScreen />
          <AnalyticsTracker />
          {children}
          <CompareBar />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
