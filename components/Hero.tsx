import { useEffect, useRef } from 'react';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      imageRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(1.1)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with 3D Effect */}
      <div 
        ref={imageRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-bounce" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-wider leading-tight">
            <span className="block opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              REDEFINE
            </span>
            <span className="block opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              YOUR
            </span>
            <span className="block opacity-0 animate-slide-up text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              STYLE
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Step into a world where fashion meets innovation. Discover collections that transcend boundaries and redefine luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold tracking-wider"
            >
              EXPLORE COLLECTION
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold tracking-wider flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              WATCH FILM
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
    </section>
  );
}
