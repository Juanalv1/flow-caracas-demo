'use client';

import Link from 'next/link';
import { MessageCircle, Instagram, MapPin, Clock, CreditCard, Smartphone, DollarSign, Building } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <span className="text-black font-black text-sm leading-none text-center">
                  23<br />FLOW
                </span>
              </div>
              <span className="text-white font-bold text-xl">FLOW CARACAS</span>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Tu tienda de gorras originales MLB, NBA y NFL. Mayorista y detal con envíos a toda Venezuela.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/flowcaracas23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://wa.me/584241582672"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-all"
              >
                <MessageCircle size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Categorías</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/mlb" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <span>⚾</span> Gorras MLB
                </Link>
              </li>
              <li>
                <Link href="/nba" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <span>🏀</span> Gorras NBA
                </Link>
              </li>
              <li>
                <Link href="/nfl" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <span>🏈</span> Gorras NFL
                </Link>
              </li>
              <li>
                <Link href="/accesorios" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <span>👕</span> Accesorios
                </Link>
              </li>
              <li>
                <Link href="/mayorista" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <span>📦</span> Mayorista
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-white/60 flex items-center gap-2">
                <Building size={16} className="text-flow-cyan" />
                Tienda Física
              </li>
              <li className="text-white/60 flex items-center gap-2">
                <MapPin size={16} className="text-flow-pink" />
                Delivery en Caracas
              </li>
              <li className="text-white/60 flex items-center gap-2">
                <svg className="w-4 h-4 text-flow-yellow" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 14H4v-8h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h6v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v8z"/>
                </svg>
                Envíos Nacionales
              </li>
              <li className="text-white/60 flex items-center gap-2">
                <DollarSign size={16} className="text-green-500" />
                Precios Mayoristas
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/584241582672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={16} className="text-green-500" />
                  </div>
                  <span>0424-158-2672</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/flowcaracas23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <Instagram size={16} className="text-pink-500" />
                  </div>
                  <span>@flowcaracas23</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <div className="w-8 h-8 bg-flow-cyan/20 rounded-full flex items-center justify-center">
                  <MapPin size={16} className="text-flow-cyan" />
                </div>
                <span>La Hoyada, Caracas 1030</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <div className="w-8 h-8 bg-flow-yellow/20 rounded-full flex items-center justify-center">
                  <Clock size={16} className="text-flow-yellow" />
                </div>
                <span>Lun-Sáb 9am-6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-white/60 text-sm mb-4 text-center">Métodos de Pago</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
              <CreditCard size={18} className="text-white/60" />
              <span className="text-white/60 text-sm">Transferencia</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
              <Smartphone size={18} className="text-white/60" />
              <span className="text-white/60 text-sm">Pago Móvil</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
              <DollarSign size={18} className="text-white/60" />
              <span className="text-white/60 text-sm">Zelle</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
              <Building size={18} className="text-white/60" />
              <span className="text-white/60 text-sm">Efectivo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {currentYear} Flow Caracas. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
