'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, color?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
  getDiscountPercentage: () => number;
  getTotalItems: () => number;
  deliveryMethod: 'pickup' | 'delivery' | 'national';
  setDeliveryMethod: (method: 'pickup' | 'delivery' | 'national') => void;
  getDeliveryCost: () => number;
  generateWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const DELIVERY_COSTS = {
  pickup: 0,
  delivery: 3,
  national: 8
};

const DELIVERY_LABELS = {
  pickup: 'Retiro en Tienda (La Hoyada)',
  delivery: 'Delivery Caracas',
  national: 'Envío Nacional'
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery' | 'national'>('pickup');
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('flowcaracas-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage when items change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('flowcaracas-cart', JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addToCart = (product: Product, color?: string) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        product,
        quantity: 1,
        selectedColor: color || product.colors[0]
      }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getSubtotal = () => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const getDiscountPercentage = () => {
    const totalItems = getTotalItems();
    if (totalItems >= 24) return 20;
    if (totalItems >= 12) return 15;
    if (totalItems >= 6) return 10;
    return 0;
  };

  const getDiscount = () => {
    const subtotal = getSubtotal();
    const discountPercent = getDiscountPercentage();
    return (subtotal * discountPercent) / 100;
  };

  const getDeliveryCost = () => {
    return DELIVERY_COSTS[deliveryMethod];
  };

  const getTotal = () => {
    return getSubtotal() - getDiscount() + getDeliveryCost();
  };

  const generateWhatsAppMessage = () => {
    const totalItems = getTotalItems();
    const subtotal = getSubtotal();
    const discount = getDiscount();
    const discountPercent = getDiscountPercentage();
    const deliveryCost = getDeliveryCost();
    const total = getTotal();

    let message = `🧢 *¡Hola Flow Caracas!* 🧢\n\n`;
    message += `Quiero hacer un pedido:\n\n`;
    message += `📦 *PRODUCTOS:*\n`;

    items.forEach(item => {
      message += `• ${item.product.name} x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n💰 Subtotal: $${subtotal.toFixed(2)}\n`;

    if (discountPercent > 0) {
      message += `📊 Descuento mayorista (${discountPercent}%): -$${discount.toFixed(2)}\n`;
    }

    message += `🚚 Envío (${DELIVERY_LABELS[deliveryMethod]}): $${deliveryCost.toFixed(2)}\n`;
    message += `━━━━━━━━━━━━━━━\n`;
    message += `💵 *TOTAL: $${total.toFixed(2)}*\n\n`;
    message += `📍 Método de entrega: ${DELIVERY_LABELS[deliveryMethod]}\n`;
    message += `📍 Dirección: _______\n\n`;
    message += `¡Gracias! ⚾🏀🏈`;

    return encodeURIComponent(message);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getSubtotal,
        getDiscount,
        getDiscountPercentage,
        getTotalItems,
        deliveryMethod,
        setDeliveryMethod,
        getDeliveryCost,
        generateWhatsAppMessage
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
