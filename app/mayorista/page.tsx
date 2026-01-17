'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Package, TrendingUp, Truck, Users, FileText, RotateCcw, CheckCircle, MessageCircle } from 'lucide-react';

const benefits = [
  { icon: TrendingUp, title: 'Descuentos desde 6 unidades', description: 'Accede a precios especiales desde tu primera compra mayorista' },
  { icon: FileText, title: 'Catálogo completo', description: 'Más de 500 modelos de gorras disponibles para tu negocio' },
  { icon: Truck, title: 'Envíos especiales', description: 'Tarifas preferenciales en envíos para mayoristas' },
  { icon: Users, title: 'Asesoría personalizada', description: 'Te ayudamos a elegir los productos más vendidos' },
  { icon: RotateCcw, title: 'Reposición constante', description: 'Inventario actualizado semanalmente con las últimas tendencias' },
  { icon: Package, title: 'Embalaje especial', description: 'Productos empacados para reventa con etiquetas incluidas' },
];

const discountTiers = [
  { min: 6, max: 11, discount: 10, color: 'from-green-400 to-green-600' },
  { min: 12, max: 23, discount: 15, color: 'from-flow-cyan to-blue-500' },
  { min: 24, max: null, discount: 20, color: 'from-flow-pink to-purple-500' },
];

export default function MayoristaPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    negocio: '',
    telefono: '',
    ciudad: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `¡Hola Flow Caracas! Quiero información sobre precios mayoristas.\n\n` +
      `Nombre: ${formData.nombre}\n` +
      `Negocio: ${formData.negocio}\n` +
      `Teléfono: ${formData.telefono}\n` +
      `Ciudad: ${formData.ciudad}\n` +
      `Mensaje: ${formData.mensaje}`
    );
    window.open(`https://wa.me/584241582672?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-flow-yellow/20 via-black to-flow-pink/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-flow-yellow/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-flow-pink/10 rounded-full blur-[128px]" />

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
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-flow-yellow/20 text-flow-yellow rounded-full text-sm font-medium mb-4">
              Programa Mayorista
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              ¿Revendes Gorras?
              <br />
              <span className="bg-gradient-to-r from-flow-yellow to-flow-pink bg-clip-text text-transparent">
                Tenemos Precios Especiales
              </span>
            </h1>
            <p className="text-white/60 text-lg mb-8">
              Únete a cientos de emprendedores que ya revenden nuestros productos
              con excelentes márgenes de ganancia. Descuentos de hasta 20% en compras por volumen.
            </p>

            <a
              href="#formulario"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-flow-pink to-flow-cyan text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Solicitar Catálogo Mayorista
            </a>
          </motion.div>
        </div>
      </section>

      {/* Discount tiers */}
      <section className="py-16 md:py-24 bg-dark-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Descuentos por Volumen
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Mientras más compres, más ahorras. Los descuentos se aplican automáticamente en tu carrito.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {discountTiers.map((tier, index) => (
              <motion.div
                key={tier.min}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tier.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-charcoal rounded-2xl p-8 text-center border border-white/10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mb-4`}>
                    <Package size={28} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {tier.min}-{tier.max || '+'} unidades
                  </h3>
                  <p className={`text-5xl font-black bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}>
                    {tier.discount}%
                  </p>
                  <p className="text-white/50">de descuento</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Beneficios para Mayoristas
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Todo lo que necesitas para hacer crecer tu negocio de gorras
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-gray rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-flow-pink to-flow-cyan rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-dark-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lo que dicen nuestros mayoristas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Carlos M.', city: 'Valencia', text: 'Llevo 2 años comprando al mayor, excelente calidad y los mejores precios de Venezuela.' },
              { name: 'María P.', city: 'Maracaibo', text: 'Empecé con 12 gorras y ahora compro 50 cada semana. Los clientes aman la variedad.' },
              { name: 'José R.', city: 'Barquisimeto', text: 'El envío siempre llega rápido y bien empacado. El margen de ganancia es muy bueno.' },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-charcoal rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} size={16} className="text-flow-yellow" />
                  ))}
                </div>
                <p className="text-white/80 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-flow-pink to-flow-cyan rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="formulario" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Solicita el Catálogo Mayorista
              </h2>
              <p className="text-white/60">
                Completa el formulario y te contactamos por WhatsApp con toda la información
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-dark-gray rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Tu nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-lg text-white focus:border-flow-cyan focus:outline-none"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Nombre del negocio</label>
                  <input
                    type="text"
                    required
                    value={formData.negocio}
                    onChange={(e) => setFormData({ ...formData, negocio: e.target.value })}
                    className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-lg text-white focus:border-flow-cyan focus:outline-none"
                    placeholder="Mi Tienda de Gorras"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-lg text-white focus:border-flow-cyan focus:outline-none"
                    placeholder="0424-123-4567"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Ciudad</label>
                  <input
                    type="text"
                    required
                    value={formData.ciudad}
                    onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                    className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-lg text-white focus:border-flow-cyan focus:outline-none"
                    placeholder="Caracas"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white/60 text-sm mb-2">Mensaje (opcional)</label>
                <textarea
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-lg text-white focus:border-flow-cyan focus:outline-none resize-none"
                  placeholder="Cuéntanos más sobre tu negocio o qué productos te interesan..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-colors"
              >
                <MessageCircle size={20} />
                Enviar por WhatsApp
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
