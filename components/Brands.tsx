'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'MLB', subtitle: 'Major League Baseball' },
  { name: 'NBA', subtitle: 'National Basketball Association' },
  { name: 'NFL', subtitle: 'National Football League' },
  { name: 'New Era', subtitle: 'Official Cap Partner' },
  { name: "Mitchell & Ness", subtitle: 'Throwback Jerseys & Caps' },
  { name: "'47 Brand", subtitle: 'Licensed Sports Apparel' },
];

export default function Brands() {
  return (
    <section className="py-12 md:py-16 bg-black border-y border-white/10">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/40 text-sm mb-8"
        >
          Trabajamos con las mejores marcas
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all"
            >
              <span className="text-xl font-bold text-white mb-1">{brand.name}</span>
              <span className="text-white/40 text-xs text-center">{brand.subtitle}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
