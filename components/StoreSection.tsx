'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

export default function StoreSection() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-flow-cyan/20 text-flow-cyan rounded-full text-sm font-medium mb-4">
            Visítanos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tienda Física en La Hoyada
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ven a conocer nuestra tienda con miles de gorras en exhibición
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=500&fit=crop"
                alt="Tienda Flow Caracas"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/5] rounded-xl overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop"
                alt="Gorras en exhibición"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/5] rounded-xl overflow-hidden -mt-8">
              <img
                src="https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=500&fit=crop"
                alt="Variedad de gorras"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=500&fit=crop"
                alt="Interior tienda"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pl-8"
          >
            <div className="bg-dark-gray rounded-2xl p-8 border border-white/10">
              {/* Map placeholder */}
              <div className="aspect-video bg-charcoal rounded-xl mb-6 overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.0!2d-66.9!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA2NsKwNTQnMDAuMCJX!5e0!3m2!1ses!2sve!4v1234567890"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-flow-pink/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-flow-pink" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Dirección</h4>
                    <p className="text-white/60 text-sm">La Hoyada, Caracas 1030, Venezuela</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-flow-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-flow-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Horario</h4>
                    <p className="text-white/60 text-sm">Lunes a Sábado: 9:00 AM - 6:00 PM</p>
                    <p className="text-white/60 text-sm">Domingo: Cerrado</p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=La+Hoyada+Caracas+Venezuela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-flow-pink to-flow-cyan rounded-lg text-white font-medium hover:opacity-90 transition-opacity mt-6"
                >
                  <Navigation size={18} />
                  Cómo llegar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
