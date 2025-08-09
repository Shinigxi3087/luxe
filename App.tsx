import { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import FeaturedCollection from './components/FeaturedCollection';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initializeAnimations } from './utils/animations';

export default function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (appRef.current) {
      initializeAnimations();
    }
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <FeaturedCollection />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
