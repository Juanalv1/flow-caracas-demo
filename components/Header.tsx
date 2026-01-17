'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, User, Menu, X, MessageCircle, Users } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false);
  const { items, getTotalItems, getSubtotal } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/mlb', label: 'MLB' },
    { href: '/nba', label: 'NBA' },
    { href: '/nfl', label: 'NFL' },
    { href: '/accesorios', label: 'Accesorios' },
    { href: '/mayorista', label: 'Mayorista' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-gradient-to-r from-flow-pink via-flow-cyan to-flow-pink bg-[length:200%_100%] animate-gradient-x py-1.5">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-xs sm:text-sm font-medium text-white">
          <span className="flex items-center gap-1">
            <Users size={14} />
            122K+ Clientes
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Envíos a toda Venezuela</span>
          <span>|</span>
          <a
            href="https://wa.me/584241582672"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center">
              <span className="text-black font-black text-xs md:text-sm leading-none text-center">
                23<br />FLOW
              </span>
            </div>
            <span className="text-white font-bold text-lg md:text-xl hidden sm:block">
              FLOW CARACAS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-flow-pink to-flow-cyan group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <Search size={20} />
            </button>

            {/* User */}
            <button className="p-2 text-white/80 hover:text-white transition-colors hidden sm:block">
              <User size={20} />
            </button>

            {/* Cart */}
            <div
              className="relative"
              onMouseEnter={() => setIsCartPreviewOpen(true)}
              onMouseLeave={() => setIsCartPreviewOpen(false)}
            >
              <Link
                href="/carrito"
                className="p-2 text-white/80 hover:text-white transition-colors relative flex items-center"
              >
                <ShoppingCart size={20} />
                {getTotalItems() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-flow-pink to-flow-cyan rounded-full text-xs font-bold flex items-center justify-center text-white"
                  >
                    {getTotalItems()}
                  </motion.span>
                )}
              </Link>

              {/* Cart Preview Dropdown */}
              <AnimatePresence>
                {isCartPreviewOpen && items.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-72 bg-dark-gray border border-white/10 rounded-lg shadow-xl overflow-hidden"
                  >
                    <div className="p-4 max-h-64 overflow-y-auto">
                      {items.slice(0, 3).map((item) => (
                        <div key={item.product.id} className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-charcoal rounded overflow-hidden">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm truncate">{item.product.name}</p>
                            <p className="text-white/60 text-xs">
                              {item.quantity} x ${item.product.price}
                            </p>
                          </div>
                        </div>
                      ))}
                      {items.length > 3 && (
                        <p className="text-white/60 text-xs text-center">
                          +{items.length - 3} productos más
                        </p>
                      )}
                    </div>
                    <div className="border-t border-white/10 p-4 bg-black/30">
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-white/60">Subtotal:</span>
                        <span className="text-white font-bold">${getSubtotal().toFixed(2)}</span>
                      </div>
                      <Link
                        href="/carrito"
                        className="block w-full py-2 bg-gradient-to-r from-flow-pink to-flow-cyan text-white text-center rounded font-medium hover:opacity-90 transition-opacity"
                      >
                        Ver Carrito
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/584241582672"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm font-medium transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white lg:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/584241582672"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-2 py-3 bg-green-500 text-white rounded-lg font-medium"
              >
                <MessageCircle size={18} />
                Contactar por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
