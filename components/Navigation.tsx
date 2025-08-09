import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold tracking-wider">
              LUXE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="nav-link text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#collection" className="nav-link text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
              Collection
            </a>
            <a href="#about" className="nav-link text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#gallery" className="nav-link text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="nav-link text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-black/95 backdrop-blur-md`}>
        <div className="px-4 py-6 space-y-4">
          <a href="#home" className="block text-lg uppercase tracking-wider hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#collection" className="block text-lg uppercase tracking-wider hover:text-gray-300 transition-colors">
            Collection
          </a>
          <a href="#about" className="block text-lg uppercase tracking-wider hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="#gallery" className="block text-lg uppercase tracking-wider hover:text-gray-300 transition-colors">
            Gallery
          </a>
          <a href="#contact" className="block text-lg uppercase tracking-wider hover:text-gray-300 transition-colors">
            Contact
          </a>
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
