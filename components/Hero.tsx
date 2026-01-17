'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Users, Truck, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-16">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-flow-pink/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-flow-cyan/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mlb-blue/10 rounded-full blur-[128px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Tienda Física en La Hoyada, Caracas
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              FLOW
            </span>
            <br />
            <span className="bg-gradient-to-r from-flow-pink via-flow-cyan to-flow-yellow bg-clip-text text-transparent">
              CARACAS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto"
          >
            Tu Estilo Urbano | Gorras Originales MLB, NBA, NFL
            <br />
            <span className="text-white/50">Mayorista y Detal</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10"
          >
            <div className="flex items-center gap-2 text-white/80">
              <Users className="text-flow-pink" size={24} />
              <span className="font-bold text-lg">122K+</span>
              <span className="text-white/60">Seguidores</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Truck className="text-flow-cyan" size={24} />
              <span className="font-bold text-lg">Envíos</span>
              <span className="text-white/60">Nacionales</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="text-flow-yellow" size={24} />
              <span className="font-bold text-lg">Delivery</span>
              <span className="text-white/60">Caracas</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/catalogo"
              className="group relative px-8 py-4 bg-gradient-to-r from-flow-pink to-flow-cyan rounded-lg text-white font-bold text-lg overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Ver Catálogo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-flow-cyan to-flow-pink opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/mayorista"
              className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-lg text-white font-bold text-lg transition-all hover:bg-white/5"
            >
              Comprar al Mayor
            </Link>
          </motion.div>

          {/* League badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4 mt-12"
          >
            <Link
              href="/mlb"
              className="px-6 py-2 bg-mlb-blue/20 border border-mlb-blue/40 rounded-full text-mlb-blue hover:bg-mlb-blue/30 transition-colors font-medium"
            >
              ⚾ MLB
            </Link>
            <Link
              href="/nba"
              className="px-6 py-2 bg-nba-orange/20 border border-nba-orange/40 rounded-full text-nba-orange hover:bg-nba-orange/30 transition-colors font-medium"
            >
              🏀 NBA
            </Link>
            <Link
              href="/nfl"
              className="px-6 py-2 bg-nfl-red/20 border border-nfl-red/40 rounded-full text-nfl-red hover:bg-nfl-red/30 transition-colors font-medium"
            >
              🏈 NFL
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
