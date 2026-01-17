'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, Package, Truck, Users, FileText, RotateCcw } from 'lucide-react';

const benefits = [
  { icon: TrendingUp, text: 'Descuentos desde 6 unidades' },
  { icon: FileText, text: 'Catálogo completo disponible' },
  { icon: Truck, text: 'Envíos especiales para mayoristas' },
  { icon: Users, text: 'Asesoría para tu negocio' },
  { icon: RotateCcw, text: 'Reposición constante de stock' },
  { icon: Package, text: 'Variedad de productos' },
];

const discountTiers = [
  { min: 6, max: 11, discount: 10, color: 'from-green-400 to-green-600' },
  { min: 12, max: 23, discount: 15, color: 'from-flow-cyan to-blue-500' },
  { min: 24, max: null, discount: 20, color: 'from-flow-pink to-purple-500' },
];

export default function MayoristaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-dark-gray via-charcoal to-dark-gray relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-flow-pink/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-flow-cyan/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-flow-yellow/20 text-flow-yellow rounded-full text-sm font-medium mb-4">
              Mayorista
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Revendes Gorras?
              <br />
              <span className="bg-gradient-to-r from-flow-pink to-flow-cyan bg-clip-text text-transparent">
                Tenemos Precios Especiales
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Únete a cientos de emprendedores que ya revenden nuestros productos
              con excelentes márgenes de ganancia.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <benefit.icon size={16} className="text-flow-cyan" />
                  </div>
                  <span className="text-white/80 text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/mayorista"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-flow-pink to-flow-cyan rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Solicitar Catálogo Mayorista
            </Link>
          </motion.div>

          {/* Discount tiers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Descuentos por Volumen
              </h3>

              <div className="space-y-4">
                {discountTiers.map((tier, index) => (
                  <motion.div
                    key={tier.min}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="relative"
                  >
                    <div
                      className={`bg-gradient-to-r ${tier.color} p-[2px] rounded-xl`}
                    >
                      <div className="bg-black rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                            <Package size={24} className="text-white" />
                          </div>
                          <div>
                            <p className="text-white font-bold">
                              {tier.min}-{tier.max || '+'} unidades
                            </p>
                            <p className="text-white/60 text-sm">
                              Compra mínima: {tier.min} gorras
                            </p>
                          </div>
                        </div>
                        <div className={`text-3xl font-black bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                          {tier.discount}%
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-white/50 text-sm text-center mt-6">
                * Los descuentos se aplican automáticamente en el carrito
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
