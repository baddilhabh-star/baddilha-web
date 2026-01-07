import { Heart } from 'lucide-react';
import baddilhaLogo from '@/assets/baddilha-logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={baddilhaLogo}
              alt="Baddilha Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-heading font-bold text-lg">Baddilha</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-background/70">
            <span>© 2025/2026 Baddilha — UOB Senior Project</span>
            <Heart size={14} className="text-secondary fill-secondary" />
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#abstract" className="text-background/70 hover:text-background transition-colors">
              Abstract
            </a>
            <a href="#demo" className="text-background/70 hover:text-background transition-colors">
              Demo
            </a>
            <a href="#team" className="text-background/70 hover:text-background transition-colors">
              Team
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
