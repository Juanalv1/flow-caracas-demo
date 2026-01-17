'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle, Check } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const leagueColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    MLB: {
      bg: 'bg-mlb-blue/20',
      border: 'border-mlb-blue',
      text: 'text-mlb-blue',
      glow: 'shadow-mlb-blue/40'
    },
    NBA: {
      bg: 'bg-nba-orange/20',
      border: 'border-nba-orange',
      text: 'text-nba-orange',
      glow: 'shadow-nba-orange/40'
    },
    NFL: {
      bg: 'bg-nfl-red/20',
      border: 'border-nfl-red',
      text: 'text-nfl-red',
      glow: 'shadow-nfl-red/40'
    },
    ACCESORIO: {
      bg: 'bg-flow-cyan/20',
      border: 'border-flow-cyan',
      text: 'text-flow-cyan',
      glow: 'shadow-flow-cyan/40'
    }
  };

  const colors = leagueColors[product.league];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(`Hola! Me interesa la ${product.name} ($${product.price})`);
    window.open(`https://wa.me/584241582672?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/catalogo/${product.slug}`}>
        <div
          className={`relative bg-dark-gray rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-t-4 ${colors.border} hover:shadow-lg ${colors.glow} hover:-translate-y-1`}
        >
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-charcoal">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              <span className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs font-bold rounded`}>
                {product.league}
              </span>
              <span className="px-2 py-1 bg-white/10 text-white text-xs font-medium rounded backdrop-blur-sm">
                ORIGINAL
              </span>
            </div>

            {/* Stock badge */}
            <div className="absolute top-3 right-3">
              {product.stock === 'in_stock' && (
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded backdrop-blur-sm">
                  En stock
                </span>
              )}
              {product.stock === 'low_stock' && (
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded backdrop-blur-sm">
                  Pocas unidades
                </span>
              )}
            </div>

            {/* Quick actions overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                className={`p-3 rounded-full transition-colors ${
                  isAdded
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-black hover:bg-flow-pink hover:text-white'
                }`}
              >
                {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleWhatsApp}
                className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Team name */}
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
              {product.team}
            </p>

            {/* Product name */}
            <h3 className="text-white font-bold text-sm md:text-base mb-2 line-clamp-1 group-hover:text-flow-cyan transition-colors">
              {product.name}
            </h3>

            {/* Colors */}
            <div className="flex items-center gap-2 mb-3">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedColor(color);
                  }}
                  className={`w-5 h-5 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? 'border-white scale-110'
                      : 'border-transparent hover:border-white/50'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Price and action */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-white">
                ${product.price}
              </span>
              <button
                onClick={handleAddToCart}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isAdded
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-flow-pink to-flow-cyan text-white hover:opacity-90'
                }`}
              >
                {isAdded ? 'Agregado!' : 'Agregar'}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
