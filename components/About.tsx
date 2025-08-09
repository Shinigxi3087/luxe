import { useEffect, useRef } from 'react';
import { Award, Users, Globe, Sparkles } from 'lucide-react';

const stats = [
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "10K+" },
  { icon: Globe, label: "Countries", value: "50+" },
  { icon: Sparkles, label: "Collections", value: "100+" }
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-wider mb-6">
                CRAFTING
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  TOMORROW'S
                </span>
                <span className="block">FASHION</span>
              </h2>
              <div className="w-24 h-1 bg-white mb-8" />
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We are pioneers in the realm of haute couture, where artistry meets innovation. 
                Our atelier combines traditional craftsmanship with cutting-edge design philosophy 
                to create pieces that transcend time and trends.
              </p>
              <p>
                Each garment tells a story of meticulous attention to detail, sustainable practices, 
                and an unwavering commitment to excellence. We don't just create fashion; we craft 
                experiences that empower individuals to express their unique identity.
              </p>
              <p>
                From concept to creation, every step of our process is infused with passion, 
                precision, and purpose. Welcome to a new era of fashion consciousness.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div
                className="relative bg-cover bg-center rounded-lg aspect-[4/5] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 lg:mt-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold tracking-wider mb-2">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
