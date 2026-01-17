'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'José M.',
    text: 'Compro al mayor hace 1 año, excelente calidad y variedad.',
    rating: 5,
    type: 'Mayorista'
  },
  {
    name: 'María G.',
    text: 'La tienda tiene de todo, siempre encuentro lo que busco.',
    rating: 5,
    type: 'Cliente'
  },
  {
    name: 'Carlos R.',
    text: 'Delivery rápido en Caracas, muy recomendado.',
    rating: 5,
    type: 'Cliente'
  },
  {
    name: 'Ana V.',
    text: 'Precios mayoristas inmejorables, excelente atención.',
    rating: 5,
    type: 'Mayorista'
  }
];

export default function Testimonials() {
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
          <span className="inline-block px-4 py-1 bg-flow-pink/20 text-flow-pink rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Más de 122K clientes satisfechos nos respaldan
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-charcoal rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-flow-yellow text-flow-yellow" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 text-sm mb-4">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-flow-pink to-flow-cyan rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="text-white font-medium">{testimonial.name}</span>
                </div>
                <span className="text-xs px-2 py-1 bg-white/10 text-white/60 rounded">
                  {testimonial.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
