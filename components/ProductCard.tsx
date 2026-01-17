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
        <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Badge */}
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 bg-black text-white text-xs font-medium rounded-full">
                {product.league}
              </span>
            </div>

            {/* Stock badge */}
            <div className="absolute top-3 right-3">
              {product.stock === 'low_stock' && (
                <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                  Pocas unidades
                </span>
              )}
            </div>

            {/* Quick actions overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                className={`p-3 rounded-full transition-colors ${
                  isAdded
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-900 hover:bg-black hover:text-white'
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
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
              {product.team}
            </p>

            {/* Product name */}
            <h3 className="text-gray-900 font-bold text-sm md:text-base mb-2 line-clamp-1 group-hover:text-gray-600 transition-colors">
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
                      ? 'border-gray-900 scale-110'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Price and action */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-gray-900">
                ${product.price}
              </span>
              <button
                onClick={handleAddToCart}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isAdded
                    ? 'bg-green-500 text-white'
                    : 'bg-black text-white hover:bg-gray-800'
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
