'use client';

import { motion } from 'framer-motion';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gray-50">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-[128px]" />

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
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Catálogo Completo
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
              Explora todos nuestros productos. Gorras MLB, NBA, NFL y accesorios deportivos.
            </p>

            {/* Quick filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/mlb"
                className="px-6 py-2 bg-mlb-blue/10 border border-mlb-blue/30 rounded-full text-mlb-blue hover:bg-mlb-blue/20 transition-colors font-medium"
              >
                ⚾ MLB
              </Link>
              <Link
                href="/nba"
                className="px-6 py-2 bg-nba-orange/10 border border-nba-orange/30 rounded-full text-nba-orange hover:bg-nba-orange/20 transition-colors font-medium"
              >
                🏀 NBA
              </Link>
              <Link
                href="/nfl"
                className="px-6 py-2 bg-nfl-red/10 border border-nfl-red/30 rounded-full text-nfl-red hover:bg-nfl-red/20 transition-colors font-medium"
              >
                🏈 NFL
              </Link>
              <Link
                href="/accesorios"
                className="px-6 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-200 transition-colors font-medium"
              >
                👕 Accesorios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <ProductGrid products={products} showFilters={true} title={`${products.length} productos disponibles`} />
    </div>
  );
}
