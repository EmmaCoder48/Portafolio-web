/* IMPORTACIÓN DE FUENTES: Next.js optimiza las fuentes de Google automáticamente */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Importamos los estilos globales (fondo negro, etc.)

// Configuración de la fuente Sans
const geistSans = Geist({
  variable: "--font-geist-sans", // Creamos una variable CSS para usarla en Tailwind
  subsets: ["latin"],
});

// Configuración de la fuente Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* METADATOS: Esto es lo que aparece en la pestaña del navegador y ayuda al SEO */
export const metadata = {
  title: "Portafolio web",
};

/* COMPONENTE RAÍZ: Es la estructura HTML base */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        /* Aplicamos las variables de las fuentes y 'antialiased' 
           para que las letras se vean más nítidas en el fondo negro.
        */
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 'children' representa el contenido de cada página */}
        {children}
      </body>
    </html>
  );
}
