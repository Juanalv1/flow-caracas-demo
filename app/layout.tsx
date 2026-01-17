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
  title: "Flow Caracas | Tu Estilo Urbano - Gorras y Moda Streetwear",
  description: "Tu tienda de moda urbana en Caracas. Gorras, snapbacks, accesorios y estilo streetwear. Precios mayoristas, delivery en Caracas y envíos nacionales.",
  keywords: "gorras, moda urbana, streetwear, caracas, venezuela, mayorista, snapback, estilo",
  openGraph: {
    title: "Flow Caracas | Tu Estilo Urbano",
    description: "Tienda de moda urbana y gorras en Caracas. 122K+ seguidores nos respaldan.",
    images: ["/og-image.jpg"],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Caracas | Tu Estilo Urbano",
    description: "122K+ clientes satisfechos. Moda urbana y gorras en Venezuela.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
