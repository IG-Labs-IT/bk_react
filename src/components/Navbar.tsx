
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-10",
        scrolled ? "py-4 bg-background/95 backdrop-blur-sm border-b border-gold/20" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl md:text-3xl font-bold font-playfair">
          <span className="gold-gradient">BLACK NIGGA</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[
              { name: 'Sobre', id: 'about' },
              { name: 'Missão', id: 'mission' },
              { name: 'Projetos', id: 'projects' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)} 
                  className="text-sm uppercase tracking-wider text-foreground/80 hover:text-gold transition-colors font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={mobileMenuOpen 
                ? "M6 18L18 6M6 6l12 12" 
                : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              }
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-b border-gold/20 py-4 animate-fade-in">
          <ul className="flex flex-col space-y-4 px-6">
            {[
              { name: 'Sobre', id: 'about' },
              { name: 'Missão', id: 'mission' },
              { name: 'Projetos', id: 'projects' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)} 
                  className="text-sm uppercase tracking-wider text-foreground/80 hover:text-gold transition-colors font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
