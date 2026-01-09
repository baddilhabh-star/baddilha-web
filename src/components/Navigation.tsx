import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import baddilhaLogo from '@/assets/baddilha-logo.jpeg';

const navItems = [
  { label: 'Abstract', id: 'abstract' },
  { label: 'Objectives', id: 'objectives' },
  { label: 'Methodology', id: 'methodology' },
  { label: 'Technologies', id: 'technologies' },
  { label: 'Results', id: 'results' },
  { label: 'Demo', id: 'demo' },
  { label: 'Conclusion', id: 'conclusion' },
  { label: 'Team', id: 'team' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('abstract')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={baddilhaLogo}
              alt="Baddilha Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-heading font-bold text-xl gradient-text">
              Baddilha
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-mint-light rounded-lg transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
