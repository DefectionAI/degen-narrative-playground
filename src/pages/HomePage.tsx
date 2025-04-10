
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Zap, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) - 0.5,
          y: ((e.clientY - rect.top) / rect.height) - 0.5
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Immersive Hero Section with 3D elements */}
      <section 
        ref={heroRef}
        className="h-screen relative overflow-hidden flex items-center justify-center"
        style={{ perspective: '1000px' }}
      >
        {/* Dynamic 3D Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          
          {/* 3D Animated Elements */}
          <div className="absolute inset-0">
            {/* Geometric Shapes */}
            <div 
              className="absolute w-[60vw] h-[60vh] rounded-full blur-3xl opacity-20 bg-crypto-purple"
              style={{ 
                left: `calc(50% + ${mousePosition.x * -50}px)`, 
                top: `calc(30% + ${mousePosition.y * -50}px)`,
                transform: `translateZ(${100 - scrollY * 0.15}px) rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * -15}deg)`,
                filter: 'blur(80px)'
              }}
            ></div>
            
            <div 
              className="absolute w-[70vw] h-[70vh] rounded-full blur-3xl opacity-20 bg-crypto-blue"
              style={{ 
                left: `calc(30% + ${mousePosition.x * 60}px)`, 
                top: `calc(60% + ${mousePosition.y * 60}px)`,
                transform: `translateZ(${120 - scrollY * 0.2}px) rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * -20}deg)`,
                filter: 'blur(100px)'
              }}
            ></div>
            
            <div 
              className="absolute w-[50vw] h-[50vh] rounded-full blur-3xl opacity-15 bg-crypto-pink"
              style={{ 
                right: `calc(30% + ${mousePosition.x * 40}px)`, 
                bottom: `calc(30% + ${mousePosition.y * 40}px)`,
                transform: `translateZ(${80 - scrollY * 0.1}px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * -10}deg)`,
                filter: 'blur(90px)'
              }}
            ></div>
            
            {/* Animated Grid Overlay */}
            <div 
              className="absolute inset-0 bg-cyber-grid opacity-10"
              style={{ 
                transform: `translateZ(30px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * -2}deg)`,
                backgroundSize: '40px 40px',
                backgroundPosition: `calc(50% + ${mousePosition.x * 10}px) calc(50% + ${mousePosition.y * 10}px)`
              }}
            ></div>
            
            {/* Particles/Stars Effect */}
            <div 
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at calc(50% + ${mousePosition.x * 30}px) calc(50% + ${mousePosition.y * 30}px), rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)`,
                mixBlendMode: 'screen'
              }}
            ></div>
            
            {/* Horizontal Light Beams */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(176, 38, 255, 0.4) 20%, 
                  rgba(0, 255, 255, 0.4) 50%,
                  rgba(255, 20, 147, 0.4) 80%, 
                  transparent 100%)`,
                transform: `translateY(${mousePosition.y * 50}px)`,
                filter: 'blur(40px)'
              }}
            ></div>
          </div>
        </div>
        
        {/* Content with Enhanced Parallax Effect */}
        <div 
          className="relative z-10 container mx-auto px-4 text-center"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) 
                      rotateX(${mousePosition.y * 8}deg) 
                      rotateY(${mousePosition.x * -8}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h1 
            className="text-5xl md:text-7xl xl:text-9xl font-display font-bold mb-8 leading-tight"
            style={{ transform: 'translateZ(60px)' }}
          >
            <span className="gradient-text shine">DEFECTION</span>
          </h1>
          
          <p 
            className="text-xl md:text-3xl mb-10 text-foreground/90 max-w-3xl mx-auto animate-fade-in"
            style={{ transform: 'translateZ(40px)' }}
          >
            The ultimate degen playground where the crypto universe meets an ever-evolving narrative shaped by real-world events.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
            style={{ transform: 'translateZ(50px)' }}
          >
            <Button 
              size="lg" 
              className="bg-transparent hover:bg-crypto-purple/20 border border-crypto-purple text-crypto-purple hover:text-white px-8 py-6 text-lg rounded-full group transition-all duration-300"
            >
              <Link to="/scripts" className="flex items-center">
                Get Started 
                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent hover:bg-crypto-blue/20 border border-crypto-blue text-crypto-blue hover:text-white px-8 py-6 text-lg rounded-full group transition-all duration-300"
            >
              <Link to="/role-playing" className="flex items-center">
                Learn More
                <ArrowRight size={20} className="ml-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Enhanced Glowing Borders */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[2px]"
          style={{ 
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(176, 38, 255, 0.7) 20%, 
              rgba(0, 255, 255, 0.7) 50%, 
              rgba(255, 20, 147, 0.7) 80%, 
              transparent 100%)`,
            boxShadow: '0 0 20px rgba(176, 38, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3), 0 0 60px rgba(255, 20, 147, 0.2)',
            transform: `translateX(${mousePosition.x * -30}px)`
          }}
        ></div>
      </section>
      
      {/* Features Section with updated styling */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">Core Gameplay: Be the Degen Hero</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Choose your character, ape into the storyline, and make moves on social platforms. Your responses can pump or dump future plotlines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl hover:border-crypto-purple/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_-15px_rgba(176,38,255,0.5)]">
              <div className="w-16 h-16 mb-6 rounded-lg bg-crypto-purple/20 flex items-center justify-center group-hover:bg-crypto-purple/30 transition-colors">
                <Zap size={32} className="text-crypto-purple" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Daily Script Drops</h3>
              <p className="text-foreground/70 text-lg">
                Every day, you'll receive fresh, spicy script fragments featuring characters and events ripped straight from the crypto headlines.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl hover:border-crypto-blue/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_-15px_rgba(0,255,255,0.5)]">
              <div className="w-16 h-16 mb-6 rounded-lg bg-crypto-blue/20 flex items-center justify-center">
                <Users size={32} className="text-crypto-blue" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Role-Playing with Real Impact</h3>
              <p className="text-foreground/70 text-lg">
                Choose your character and make moves that influence the narrative. Your choices affect future storylines and community events.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl hover:border-crypto-pink/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_-15px_rgba(255,20,147,0.5)]">
              <div className="w-16 h-16 mb-6 rounded-lg bg-crypto-pink/20 flex items-center justify-center">
                <Award size={32} className="text-crypto-pink" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Unlock Hidden Endings</h3>
              <p className="text-foreground/70 text-lg">
                Predict the market—or at least the script—accurately, and you'll unlock secret endings. It's like finding that low-cap gem before it moons.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-transparent hover:bg-gradient-to-r from-crypto-purple to-crypto-blue border border-crypto-blue/50 hover:border-transparent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]">
              <Link to="/role-playing" className="flex items-center">
                Start Role Playing
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-crypto-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-crypto-blue/20 rounded-full blur-3xl"></div>
      </section>
      
      {/* Live Stats Section - Updated */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 gradient-text">Live Community Stats</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
              Watch the Defection ecosystem grow in real-time. These stats are based on actual community participation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-xl text-center border-t-4 border-crypto-purple animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-4xl font-display font-bold text-crypto-purple mb-4">28.5K</div>
              <div className="text-foreground/70 text-lg">Active Users</div>
            </div>
            
            <div className="glass-card p-8 rounded-xl text-center border-t-4 border-crypto-blue animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-display font-bold text-crypto-blue mb-4">143</div>
              <div className="text-foreground/70 text-lg">Scripts Created</div>
            </div>
            
            <div className="glass-card p-8 rounded-xl text-center border-t-4 border-crypto-pink animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl font-display font-bold text-crypto-pink mb-4">12.7K</div>
              <div className="text-foreground/70 text-lg">Role Play Sessions</div>
            </div>
            
            <div className="glass-card p-8 rounded-xl text-center border-t-4 border-crypto-green animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-4xl font-display font-bold text-crypto-green mb-4">74%</div>
              <div className="text-foreground/70 text-lg">Prediction Accuracy</div>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute inset-0 bg-cyber-dots opacity-20"></div>
      </section>
      
      {/* Tokenomics Preview */}
      <section className="py-20 px-4 bg-black/30 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card p-12 rounded-2xl relative overflow-hidden group hover:border-crypto-purple/30 transition-all duration-500">
            {/* Dynamic glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#B026FF_0%,#00FFFF_25%,#FF1493_50%,#B026FF_75%,#00FFFF_100%)] animate-[spin_10s_linear_infinite] blur-[80px] opacity-30"></div>
            </div>
            
            <div className="text-center mb-10 relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">Tokenomics: Fair Distribution for the People</h2>
              <p className="text-foreground/80 text-lg">
                Our approach ensures everyone has a fair opportunity to participate in the Defection ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 relative z-10">
              <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-crypto-green/30 transition-all duration-300">
                <div className="text-3xl font-display font-bold text-crypto-green mb-4">95%</div>
                <div className="text-foreground/90 text-xl mb-2">Fair Launch</div>
                <p className="text-foreground/70">Ensuring everyone has a fair shot at getting in—no whale games here</p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-crypto-purple/30 transition-all duration-300">
                <div className="text-3xl font-display font-bold text-crypto-purple mb-4">5%</div>
                <div className="text-foreground/90 text-xl mb-2">Dev Fund (Locked)</div>
                <p className="text-foreground/70">Developer allocation locked for 12 months, ensuring long-term commitment</p>
              </div>
            </div>
            
            <div className="text-center relative z-10">
              <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/5 text-lg px-8 py-6 rounded-full hover:border-crypto-blue/50 transition-all duration-300">
                <Link to="/tokenomics" className="flex items-center">
                  Learn More About Tokenomics
                  <ArrowRight size={20} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-crypto-purple/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-crypto-blue/30 to-transparent"></div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text animate-float">Ready to Ape In?</h2>
            <p className="text-xl text-foreground/80 mb-10">
              Join the Defection community today and start shaping the narrative of this ever-evolving crypto universe. Let's WAGMI! 🚀
            </p>
            <Button size="lg" className="bg-transparent hover:bg-gradient-to-r from-crypto-purple to-crypto-blue border-2 border-crypto-purple/50 hover:border-transparent text-white text-lg px-10 py-8 rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(176,38,255,0.4)] group">
              <Link to="/scripts" className="flex items-center">
                Join The Journey
                <ArrowRight size={24} className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-crypto-purple/10 blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-crypto-blue/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-2/3 w-40 h-40 rounded-full bg-crypto-pink/10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
