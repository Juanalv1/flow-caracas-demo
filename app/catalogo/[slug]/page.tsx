'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, MessageCircle, Check, Minus, Plus, Share2 } from 'lucide-react';
import { products, getProductBySlug, getRelatedProducts, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-black pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Producto no encontrado</h1>
          <Link href="/catalogo" className="text-flow-cyan hover:underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  const leagueColors: Record<string, { bg: string; text: string }> = {
    MLB: { bg: 'bg-mlb-blue/20', text: 'text-mlb-blue' },
    NBA: { bg: 'bg-nba-orange/20', text: 'text-nba-orange' },
    NFL: { bg: 'bg-nfl-red/20', text: 'text-nfl-red' },
    ACCESORIO: { bg: 'bg-flow-cyan/20', text: 'text-flow-cyan' },
  };

  const colors = leagueColors[product.league];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedColor);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa la ${product.name} ($${product.price}) x${quantity} unidades`
    );
    window.open(`https://wa.me/584241582672?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Volver al catálogo
        </Link>

        {/* Product details */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-gray mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm font-bold rounded`}>
                  {product.league}
                </span>
                <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded backdrop-blur-sm">
                  ORIGINAL
                </span>
              </div>

              {/* Stock badge */}
              <div className="absolute top-4 right-4">
                {product.stock === 'in_stock' && (
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded backdrop-blur-sm">
                    En stock
                  </span>
                )}
                {product.stock === 'low_stock' && (
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded backdrop-blur-sm">
                    Pocas unidades
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail gallery placeholder */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${
                    i === 0 ? 'border-flow-cyan' : 'border-transparent hover:border-white/30'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/50 text-sm uppercase tracking-wider mb-2">
              {product.team}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-black text-white">${product.price}</span>
              <span className="text-white/50">USD</span>
            </div>

            {/* Description */}
            <p className="text-white/70 mb-8">{product.description}</p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-white/60 text-sm mb-3">Colores disponibles:</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-white scale-110'
                        : 'border-transparent hover:border-white/50'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-white/60 text-sm mb-3">Cantidad:</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Minus size={18} className="text-white" />
                </button>
                <span className="text-white text-xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Plus size={18} className="text-white" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                  isAdded
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-flow-pink to-flow-cyan text-white hover:opacity-90'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={20} />
                    Agregado!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Agregar al carrito
                  </>
                )}
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>

            {/* Share */}
            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Share2 size={18} />
              Compartir producto
            </button>

            {/* Mayorista info */}
            <div className="mt-8 p-4 bg-flow-yellow/10 border border-flow-yellow/30 rounded-xl">
              <p className="text-flow-yellow font-medium mb-1">¿Compras al mayor?</p>
              <p className="text-white/60 text-sm">
                A partir de 6 unidades obtienes descuentos especiales.{' '}
                <Link href="/mayorista" className="text-flow-cyan hover:underline">
                  Ver precios mayoristas
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Otras gorras de {product.league}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
