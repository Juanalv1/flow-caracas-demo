'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  title?: string;
  showFilters?: boolean;
}

export default function ProductGrid({ products, title, showFilters = false }: ProductGridProps) {
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    return product.league === filter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || showFilters) && (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
            )}

            {showFilters && (
              <div className="flex flex-wrap gap-3">
                {/* League filters */}
                <div className="flex gap-2">
                  {[
                    { id: 'all', label: 'Todos' },
                    { id: 'MLB', label: '⚾ MLB' },
                    { id: 'NBA', label: '🏀 NBA' },
                    { id: 'NFL', label: '🏈 NFL' },
                    { id: 'ACCESORIO', label: '👕 Acc' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setFilter(item.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filter === item.id
                          ? 'bg-gradient-to-r from-flow-pink to-flow-cyan text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm border border-white/10 focus:outline-none focus:border-flow-cyan"
                >
                  <option value="default">Ordenar por</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="name">Nombre A-Z</option>
                </select>
              </div>
            )}
          </div>
        )}

        {/* Products grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {sortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No se encontraron productos</p>
          </div>
        )}
      </div>
    </section>
  );
}
