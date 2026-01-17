'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Users, Truck, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-36 pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-flow-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-flow-cyan/10 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h1v40H0V0zm39 0h1v40h-1V0zM0 0h40v1H0V0zm0 39h40v1H0v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Tienda Física en La Hoyada, Caracas
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-[0.9]"
            >
              Tu Estilo
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                Urbano
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Gorras, snapbacks y accesorios de moda urbana.
              <span className="text-gray-900 font-medium"> Mayorista y detal</span> con envíos a toda Venezuela.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Users className="text-white" size={18} />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">122K+</span>
                  <span className="text-gray-500 text-sm">Seguidores</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Truck className="text-white" size={18} />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Nacional</span>
                  <span className="text-gray-500 text-sm">Envíos</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Delivery</span>
                  <span className="text-gray-500 text-sm">Caracas</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/catalogo"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
              >
                <ShoppingBag size={20} />
                Ver Catálogo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/mayorista"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-black rounded-full text-gray-900 font-bold text-lg transition-all hover:bg-gray-50"
              >
                Comprar al Mayor
              </Link>
            </motion.div>
          </div>

          {/* Hero Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Background shape */}
                <div className="absolute inset-0 bg-black rounded-[3rem] rotate-3 transform-gpu" />

                {/* Image */}
                <div className="absolute inset-0 rounded-[3rem] -rotate-3 overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop"
                    alt="Gorras Flow Caracas"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100"
                >
                  <span className="text-2xl">🧢</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-black text-white px-5 py-3 rounded-2xl shadow-lg"
                >
                  <span className="font-bold">+500</span>
                  <span className="text-white/70 text-sm ml-1">modelos</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category pills - more subtle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-16 pt-8 border-t border-gray-200"
        >
          <span className="text-gray-400 text-sm mr-2">Categorías:</span>
          <Link
            href="/mlb"
            className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            MLB
          </Link>
          <Link
            href="/nba"
            className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            NBA
          </Link>
          <Link
            href="/nfl"
            className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            NFL
          </Link>
          <Link
            href="/accesorios"
            className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Accesorios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
