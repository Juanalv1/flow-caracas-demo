'use client';

import { motion } from 'framer-motion';
import ProductGrid from '@/components/ProductGrid';
import { getProductsByLeague } from '@/data/products';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AccesoriosPage() {
  const accesoriosProducts = getProductsByLeague('ACCESORIO');

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gray-50">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-[128px]" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-6xl mb-4 block">👕</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Accesorios
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mb-8">
              Camisetas, mochilas, combos y más accesorios deportivos para complementar tu estilo urbano.
            </p>

            {/* Categories pills */}
            <div className="flex flex-wrap gap-2">
              {['Camisetas', 'Mochilas', 'Gorras Lisas', 'Combos'].map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 bg-black/5 border border-black/10 rounded-full text-gray-700 text-sm font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <ProductGrid products={accesoriosProducts} title={`${accesoriosProducts.length} productos encontrados`} />

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Buscas algo específico?
            </h2>
            <p className="text-gray-500 mb-6">
              Contáctanos por WhatsApp y te ayudamos a encontrar lo que necesitas
            </p>
            <a
              href="https://wa.me/584241582672?text=Hola!%20Busco%20accesorios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
