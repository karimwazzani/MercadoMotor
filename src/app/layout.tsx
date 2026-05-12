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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <Providers>
          {children}
          <CompareBar />
        </Providers>
      </body>
    </html>
  );
}
