'use client';

import { motion } from 'framer-motion';
import { Instagram, MapPin, MessageCircle } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-50 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Visual/Numbers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Big number background */}
              <div className="absolute -top-10 -left-10 text-[180px] md:text-[240px] font-black text-gray-100 leading-none select-none -z-10">
                23
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-black text-white p-6 rounded-2xl"
                >
                  <span className="text-4xl md:text-5xl font-black">122K</span>
                  <p className="text-white/60 mt-1">Seguidores en Instagram</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gray-100 p-6 rounded-2xl"
                >
                  <span className="text-4xl md:text-5xl font-black text-gray-900">+500</span>
                  <p className="text-gray-500 mt-1">Modelos disponibles</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gray-100 p-6 rounded-2xl"
                >
                  <span className="text-4xl md:text-5xl font-black text-gray-900">5+</span>
                  <p className="text-gray-500 mt-1">Años en el mercado</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-black text-white p-6 rounded-2xl"
                >
                  <span className="text-4xl md:text-5xl font-black">24h</span>
                  <p className="text-white/60 mt-1">Delivery en Caracas</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full mb-6">
              Sobre Flow Caracas
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              No solo vendemos gorras,
              <br />
              <span className="text-gray-400">vendemos estilo.</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Desde La Hoyada en el corazón de Caracas, llevamos más de 5 años vistiendo a Venezuela
              con las mejores gorras y accesorios de moda urbana. Nuestra comunidad de 122K seguidores
              es testimonio de la calidad y variedad que ofrecemos.
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gray-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Tienda física</h4>
                  <p className="text-gray-500 text-sm">Visítanos en La Hoyada, Caracas. Lun-Sáb 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram size={18} className="text-gray-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">@flowcaracas23</h4>
                  <p className="text-gray-500 text-sm">Síguenos para ver las últimas novedades y ofertas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={18} className="text-gray-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Atención personalizada</h4>
                  <p className="text-gray-500 text-sm">Escríbenos por WhatsApp y te asesoramos</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://instagram.com/flowcaracas23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 font-bold hover:gap-4 transition-all"
            >
              <Instagram size={20} />
              Ver Instagram
              <span className="text-gray-400">→</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-black rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            ¿Revendes gorras?
          </h3>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">
            Tenemos precios especiales para mayoristas. Descuentos de hasta 20% en compras por volumen.
          </p>
          <a
            href="/mayorista"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Ver precios mayoristas
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
