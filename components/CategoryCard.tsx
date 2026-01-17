'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { League } from '@/data/leagues';

interface CategoryCardProps {
  league: League;
  index?: number;
  large?: boolean;
}

export default function CategoryCard({ league, index = 0, large = false }: CategoryCardProps) {
  const images: Record<string, string> = {
    MLB: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=400&fit=crop',
    NBA: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop',
    NFL: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600&h=400&fit=crop',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/${league.id.toLowerCase()}`}>
        <div
          className={`group relative overflow-hidden rounded-2xl ${
            large ? 'aspect-[16/10]' : 'aspect-[4/3]'
          }`}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={images[league.id]}
              alt={league.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${league.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
          />

          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            {/* Emoji */}
            <span className="text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform inline-block">
              {league.emoji}
            </span>

            {/* League name */}
            <h3 className="text-3xl md:text-4xl font-black text-white mb-1">
              {league.name}
            </h3>

            {/* Description */}
            <p className="text-white/80 text-sm md:text-base mb-4">
              {league.description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
              <span>Ver colección</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight size={20} className="text-white" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
