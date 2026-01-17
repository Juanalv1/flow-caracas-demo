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
      <div className="min-h-screen bg-white pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link href="/catalogo" className="text-black hover:underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  const leagueColors: Record<string, { bg: string; text: string }> = {
    MLB: { bg: 'bg-mlb-blue/10', text: 'text-mlb-blue' },
    NBA: { bg: 'bg-nba-orange/10', text: 'text-nba-orange' },
    NFL: { bg: 'bg-nfl-red/10', text: 'text-nfl-red' },
    ACCESORIO: { bg: 'bg-gray-100', text: 'text-gray-700' },
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
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
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
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
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
                <span className="px-3 py-1 bg-black/80 text-white text-sm font-medium rounded backdrop-blur-sm">
                  ORIGINAL
                </span>
              </div>

              {/* Stock badge */}
              <div className="absolute top-4 right-4">
                {product.stock === 'in_stock' && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded">
                    En stock
                  </span>
                )}
                {product.stock === 'low_stock' && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded">
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
                    i === 0 ? 'border-black' : 'border-transparent hover:border-gray-300'
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
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
              {product.team}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-black text-gray-900">${product.price}</span>
              <span className="text-gray-400">USD</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-gray-500 text-sm mb-3">Colores disponibles:</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-black scale-110'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm mb-3">Cantidad:</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Minus size={18} className="text-gray-700" />
                </button>
                <span className="text-gray-900 text-xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Plus size={18} className="text-gray-700" />
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
                    : 'bg-black text-white hover:bg-gray-800'
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
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
              <Share2 size={18} />
              Compartir producto
            </button>

            {/* Mayorista info */}
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-700 font-medium mb-1">¿Compras al mayor?</p>
              <p className="text-gray-600 text-sm">
                A partir de 6 unidades obtienes descuentos especiales.{' '}
                <Link href="/mayorista" className="text-black font-medium hover:underline">
                  Ver precios mayoristas
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
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
