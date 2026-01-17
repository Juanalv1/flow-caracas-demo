'use client';

import { motion } from 'framer-motion';
import { Store, Bike, Truck, Clock, DollarSign, MapPin } from 'lucide-react';

const methods = [
  {
    icon: Store,
    title: 'Retiro en Tienda',
    location: 'La Hoyada, Caracas',
    time: 'Disponibilidad inmediata',
    price: 'Sin costo',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Bike,
    title: 'Delivery Caracas',
    location: 'Zona metropolitana',
    time: 'Entrega el mismo día',
    price: 'Desde $3',
    color: 'from-flow-cyan to-blue-500'
  },
  {
    icon: Truck,
    title: 'Envío Nacional',
    location: 'Toda Venezuela',
    time: '24-72 horas',
    price: 'Desde $8',
    color: 'from-flow-pink to-purple-500'
  }
];

export default function DeliveryMethods() {
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
            Entregas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Métodos de Entrega
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a ti
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-gray rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all h-full">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <method.icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin size={16} className="text-white/40" />
                    <span className="text-sm">{method.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Clock size={16} className="text-white/40" />
                    <span className="text-sm">{method.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <DollarSign size={16} className="text-white/40" />
                    <span className="text-sm font-medium">{method.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
