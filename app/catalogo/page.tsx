'use client';

import { motion } from 'framer-motion';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-flow-pink/20 via-black to-flow-cyan/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-flow-pink/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-flow-cyan/10 rounded-full blur-[128px]" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
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
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Catálogo{' '}
              <span className="bg-gradient-to-r from-flow-pink to-flow-cyan bg-clip-text text-transparent">
                Completo
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Explora todos nuestros productos. Gorras MLB, NBA, NFL y accesorios deportivos.
            </p>

            {/* Quick filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/mlb"
                className="px-6 py-2 bg-mlb-blue/20 border border-mlb-blue/40 rounded-full text-white hover:bg-mlb-blue/30 transition-colors"
              >
                ⚾ MLB
              </Link>
              <Link
                href="/nba"
                className="px-6 py-2 bg-nba-orange/20 border border-nba-orange/40 rounded-full text-white hover:bg-nba-orange/30 transition-colors"
              >
                🏀 NBA
              </Link>
              <Link
                href="/nfl"
                className="px-6 py-2 bg-nfl-red/20 border border-nfl-red/40 rounded-full text-white hover:bg-nfl-red/30 transition-colors"
              >
                🏈 NFL
              </Link>
              <Link
                href="/accesorios"
                className="px-6 py-2 bg-flow-cyan/20 border border-flow-cyan/40 rounded-full text-white hover:bg-flow-cyan/30 transition-colors"
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
