import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import Features from '@/components/Features';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import { leagues } from '@/data/leagues';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features / About */}
      <Features />

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-sm font-medium mb-4">
              Categorías
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explora por Liga
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Encuentra tu estilo entre nuestras colecciones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {leagues.map((league, index) => (
              <CategoryCard key={league.id} league={league} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
              Catálogo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Productos
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Más de 500 modelos disponibles para ti
            </p>
          </div>
        </div>
        <ProductGrid products={products} showFilters={true} />
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Escríbenos por WhatsApp y te ayudamos a encontrar lo que buscas
          </p>
          <a
            href="https://wa.me/584241582672"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-full text-lg font-bold transition-colors"
          >
            <MessageCircle size={24} />
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
