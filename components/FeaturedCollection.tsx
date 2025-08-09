import { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const collections = [
  {
    id: 1,
    title: "ETHEREAL NIGHTS",
    subtitle: "Evening Collection",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "From $2,400",
    featured: true
  },
  {
    id: 2,
    title: "URBAN MINIMALISM",
    subtitle: "Street Collection",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "From $890",
    featured: false
  },
  {
    id: 3,
    title: "AVANT-GARDE",
    subtitle: "Experimental Line",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "From $1,200",
    featured: true
  }
];

export default function FeaturedCollection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="collection" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-white/30" />
            <Star className="w-6 h-6 mx-4 text-white/60" />
            <div className="w-12 h-px bg-white/30" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-wider mb-6">
            FEATURED
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              COLLECTIONS
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Curated pieces that embody the essence of contemporary luxury and timeless elegance.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`group animate-on-scroll ${
                collection.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden bg-gray-900 rounded-lg aspect-[4/5] lg:aspect-[3/4]">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${collection.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">
                      {collection.subtitle}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-wider mb-4">
                      {collection.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      {collection.price}
                    </p>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                    >
                      View Collection
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Featured Badge */}
                {collection.featured && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-white text-black px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                      Featured
                    </div>
                  </div>
                )}

                {/* 3D Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-ping" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-24 animate-on-scroll">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold tracking-wider"
          >
            VIEW ALL COLLECTIONS
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
