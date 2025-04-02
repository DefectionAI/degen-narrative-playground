
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, Sparkles, Users, BarChart2, Newspaper, 
  CircleDollarSign, Menu, X, Github, Twitter
} from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: <Home className="h-5 w-5" /> },
  { name: 'Daily Scripts', path: '/scripts', icon: <Sparkles className="h-5 w-5" /> },
  { name: 'Role Playing', path: '/role-playing', icon: <Users className="h-5 w-5" /> },
  { name: 'Dashboard', path: '/dashboard', icon: <BarChart2 className="h-5 w-5" /> },
  { name: 'News', path: '/news', icon: <Newspaper className="h-5 w-5" /> },
  { name: 'Tokenomics', path: '/tokenomics', icon: <CircleDollarSign className="h-5 w-5" /> },
];

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 bg-gradient-to-r from-crypto-purple to-crypto-blue rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-background rounded-full m-0.5 flex items-center justify-center text-lg font-display font-bold">D</div>
          </div>
          <span className="text-xl font-display font-bold gradient-text">Defection</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={cn(
                "flex items-center space-x-1 px-3 py-2 rounded-md transition-colors",
                location.pathname === item.path 
                  ? "bg-primary/20 text-primary" 
                  : "text-foreground/80 hover:text-foreground hover:bg-white/5"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <Github size={20} />
            </a>
            <Button className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
              Connect Wallet
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-md transition-colors text-lg",
                  location.pathname === item.path 
                    ? "bg-primary/20 text-primary" 
                    : "text-foreground/80 hover:text-foreground hover:bg-white/5"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-white/10">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
            
            <Button className="mt-4 w-full bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90 transition-opacity">
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
