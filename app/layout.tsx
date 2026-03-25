import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriela Dodelson | Arquitectura Comercial",
  description: "Portfolio de arquitectura, diseño de locales comerciales, retail, visualización 3D y espacios de marca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
