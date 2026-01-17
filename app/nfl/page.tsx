'use client';

import { motion } from 'framer-motion';
import ProductGrid from '@/components/ProductGrid';
import { getProductsByLeague } from '@/data/products';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NFLPage() {
  const nflProducts = getProductsByLeague('NFL');

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-nfl-red/30 via-black to-nfl-red/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-nfl-red/20 rounded-full blur-[128px]" />

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
          >
            <span className="text-6xl mb-4 block">🏈</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Gorras{' '}
              <span className="text-nfl-red">NFL</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mb-8">
              Gorras oficiales de National Football League. Cowboys, Patriots, 49ers y más equipos disponibles.
            </p>

            {/* Teams pills */}
            <div className="flex flex-wrap gap-2">
              {['Cowboys', 'Patriots', '49ers', 'Packers', 'Steelers', 'Raiders', 'Chiefs', 'Seahawks'].map((team) => (
                <span
                  key={team}
                  className="px-4 py-2 bg-nfl-red/20 border border-nfl-red/40 rounded-full text-white/80 text-sm"
                >
                  {team}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <ProductGrid products={nflProducts} title={`${nflProducts.length} productos encontrados`} />

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-nfl-red/20 to-nfl-red/5 rounded-2xl p-8 md:p-12 border border-nfl-red/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿No encuentras tu equipo favorito?
            </h2>
            <p className="text-white/60 mb-6">
              Contáctanos por WhatsApp y te ayudamos a conseguir la gorra que buscas
            </p>
            <a
              href="https://wa.me/584241582672?text=Hola!%20Busco%20una%20gorra%20NFL"
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
