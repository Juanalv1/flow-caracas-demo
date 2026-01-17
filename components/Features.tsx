'use client';

import { motion } from 'framer-motion';
import { Store, Package, Truck, DollarSign, Star, ShoppingBag } from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: 'Catálogo Amplio',
    description: 'Miles de diseños disponibles',
    color: 'from-flow-pink to-flow-pink/50'
  },
  {
    icon: Store,
    title: 'Tienda Física',
    description: 'Visítanos en La Hoyada, Caracas',
    color: 'from-flow-cyan to-flow-cyan/50'
  },
  {
    icon: Package,
    title: 'Envíos Nacionales',
    description: 'Llegamos a toda Venezuela',
    color: 'from-flow-yellow to-flow-yellow/50'
  },
  {
    icon: Truck,
    title: 'Delivery Caracas',
    description: 'Entrega el mismo día',
    color: 'from-green-500 to-green-500/50'
  },
  {
    icon: DollarSign,
    title: 'Precios Mayoristas',
    description: 'Descuentos por volumen',
    color: 'from-purple-500 to-purple-500/50'
  },
  {
    icon: Star,
    title: 'Calidad Garantizada',
    description: 'Productos originales',
    color: 'from-orange-500 to-orange-500/50'
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-dark-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Por qué Flow Caracas?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Somos la tienda de gorras más grande de Venezuela con más de 122K seguidores satisfechos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-charcoal rounded-xl p-6 text-center h-full border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{feature.title}</h3>
                <p className="text-white/50 text-xs">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
