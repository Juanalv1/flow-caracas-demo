'use client';

import { motion } from 'framer-motion';
import { Instagram, Users, Heart } from 'lucide-react';

const instagramImages = [
  'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1620231109648-302d034cb29b?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1622445275576-721325763afe?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop',
];

export default function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-dark-gray overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="text-flow-pink" size={24} />
            <span className="text-white/60">@flowcaracas23</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Síguenos en Instagram
          </h2>
          <div className="flex items-center justify-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <Users size={18} />
              <span className="font-bold text-white">122K</span>
              <span>seguidores</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={18} />
              <span className="font-bold text-white">676</span>
              <span>publicaciones</span>
            </div>
          </div>
        </motion.div>

        {/* Instagram grid */}
        <div className="grid grid-cols-3 md:grid-cols-9 gap-2 mb-8">
          {instagramImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/flowcaracas23"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="aspect-square overflow-hidden rounded-lg group relative"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart size={24} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow button */}
        <div className="text-center">
          <a
            href="https://instagram.com/flowcaracas23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Instagram size={20} />
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
