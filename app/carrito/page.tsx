'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Trash2, Minus, Plus, ShoppingBag, Truck, Store, Package, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CarritoPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    getSubtotal,
    getDiscount,
    getDiscountPercentage,
    getTotal,
    getTotalItems,
    deliveryMethod,
    setDeliveryMethod,
    getDeliveryCost,
    generateWhatsAppMessage,
  } = useCart();

  const deliveryOptions = [
    {
      id: 'pickup' as const,
      icon: Store,
      title: 'Retiro en Tienda',
      description: 'La Hoyada, Caracas',
      price: 0,
    },
    {
      id: 'delivery' as const,
      icon: Truck,
      title: 'Delivery Caracas',
      description: 'Entrega el mismo día',
      price: 3,
    },
    {
      id: 'national' as const,
      icon: Package,
      title: 'Envío Nacional',
      description: '24-72 horas',
      price: 8,
    },
  ];

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/584241582672?text=${message}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
            <p className="text-gray-500 mb-8">
              Agrega productos a tu carrito para continuar con tu compra
            </p>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Ver catálogo
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-4 transition-colors"
            >
              <ArrowLeft size={18} />
              Continuar comprando
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tu Carrito ({getTotalItems()} items)
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-600 text-sm transition-colors"
          >
            Vaciar carrito
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 md:p-6 border border-gray-200"
              >
                <div className="flex gap-4 md:gap-6">
                  {/* Image */}
                  <Link href={`/catalogo/${item.product.slug}`} className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4">
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          {item.product.team}
                        </span>
                        <Link href={`/catalogo/${item.product.slug}`}>
                          <h3 className="text-gray-900 font-bold hover:text-gray-600 transition-colors line-clamp-1">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-gray-500 text-sm">{item.product.league}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Color */}
                    <div className="flex items-center gap-2 mt-2">
                      <div
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                      <span className="text-gray-400 text-xs">Color seleccionado</span>
                    </div>

                    {/* Quantity and price */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Minus size={14} className="text-gray-700" />
                        </button>
                        <span className="text-gray-900 font-bold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Plus size={14} className="text-gray-700" />
                        </button>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Discount info */}
            {getDiscountPercentage() > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 text-center"
              >
                <p className="text-green-600 font-medium">
                  Descuento mayorista aplicado: {getDiscountPercentage()}% de descuento
                </p>
              </motion.div>
            )}

            {getTotalItems() < 6 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-700 font-medium text-center">
                  ¡Agrega {6 - getTotalItems()} productos más para obtener 10% de descuento!
                </p>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-6 border border-gray-200 sticky top-32"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen del pedido</h2>

              {/* Delivery options */}
              <div className="mb-6">
                <p className="text-gray-500 text-sm mb-3">Método de entrega:</p>
                <div className="space-y-2">
                  {deliveryOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setDeliveryMethod(option.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                        deliveryMethod === option.id
                          ? 'border-black bg-gray-50'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <option.icon
                        size={20}
                        className={
                          deliveryMethod === option.id
                            ? 'text-black'
                            : 'text-gray-400'
                        }
                      />
                      <div className="flex-1 text-left">
                        <p className="text-gray-900 text-sm font-medium">{option.title}</p>
                        <p className="text-gray-400 text-xs">{option.description}</p>
                      </div>
                      <span className="text-gray-900 font-bold">
                        {option.price === 0 ? 'Gratis' : `$${option.price}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>${getSubtotal().toFixed(2)}</span>
                </div>
                {getDiscountPercentage() > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Descuento ({getDiscountPercentage()}%)</span>
                    <span>-${getDiscount().toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-500">
                  <span>Envío</span>
                  <span>
                    {getDeliveryCost() === 0 ? 'Gratis' : `$${getDeliveryCost().toFixed(2)}`}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-900 font-medium">Total</span>
                <span className="text-3xl font-black text-gray-900">${getTotal().toFixed(2)}</span>
              </div>

              {/* Checkout button */}
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-colors"
              >
                <MessageCircle size={20} />
                Hacer Pedido por WhatsApp
              </button>

              {/* Discount tiers */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm mb-3">Descuentos por volumen:</p>
                <div className="space-y-2 text-sm">
                  <div className={`flex justify-between ${getTotalItems() >= 6 && getTotalItems() < 12 ? 'text-green-600' : 'text-gray-400'}`}>
                    <span>6-11 unidades</span>
                    <span>10% descuento</span>
                  </div>
                  <div className={`flex justify-between ${getTotalItems() >= 12 && getTotalItems() < 24 ? 'text-green-600' : 'text-gray-400'}`}>
                    <span>12-23 unidades</span>
                    <span>15% descuento</span>
                  </div>
                  <div className={`flex justify-between ${getTotalItems() >= 24 ? 'text-green-600' : 'text-gray-400'}`}>
                    <span>24+ unidades</span>
                    <span>20% descuento</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
