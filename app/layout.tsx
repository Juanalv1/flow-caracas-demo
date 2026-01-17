import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flow Caracas | Gorras Originales MLB, NBA, NFL - Mayorista y Detal",
  description: "Tienda de gorras originales MLB, NBA, NFL en Caracas, Venezuela. Precios mayoristas, delivery en Caracas y envíos nacionales. Visítanos en La Hoyada.",
  keywords: "gorras, MLB, NBA, NFL, caracas, venezuela, mayorista, snapback, new era",
  openGraph: {
    title: "Flow Caracas | Tu Estilo Urbano",
    description: "Tienda mayorista de gorras y accesorios deportivos en Caracas",
    images: ["/og-image.jpg"],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Caracas | Gorras Originales",
    description: "122K+ clientes satisfechos. Gorras MLB, NBA, NFL en Venezuela.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
