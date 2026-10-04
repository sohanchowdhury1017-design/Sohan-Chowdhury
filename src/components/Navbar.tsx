import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NAV_ROUTES, navigateTo } from '../utils/navigation';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string, sectionId: string, e: React.MouseEvent) => {
    navigateTo(path, sectionId, e);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/70 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram with Custom Hand-drawn S Icon */}
          <div className="flex items-center gap-3">
            <a 
              href="/" 
              onClick={(e) => handleNavClick('/', 'home', e)}
              className="group flex items-center gap-2.5 text-stone-900 transition-colors"
            >
              <img 
                src="https://res.cloudinary.com/b5z0n3sl/image/upload/v1791103462/Hand-drawn_letter_S_icon_2K_20261004121610.jpg" 
                alt="S" 
                className="w-8 h-8 rounded-full object-cover shadow-xs border border-stone-200/80 group-hover:border-[#FA812F] transition-colors"
              />
              <span className="text-lg sm:text-xl font-bold tracking-tight uppercase font-sans text-stone-900 group-hover:text-[#FA812F] transition-colors">
                N B N Sohan Chowdhury
              </span>
            </a>
          </div>

          {/* Clean Text Navigation Links without Hashes */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            {NAV_ROUTES.filter(r => r.sectionId !== 'philosophy').map((route) => (
              <a
                key={route.label}
                href={route.path}
                onClick={(e) => handleNavClick(route.path, route.sectionId, e)}
                className="relative py-1 text-stone-700 hover:text-stone-950 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FA812F] hover:after:w-full after:transition-all after:duration-200"
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Actions: Facebook profile and WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Animated Facebook PP Profile Link */}
            <a
              href="https://facebook.com/nbn.sohan"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-1.5 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center text-[#1877F2]"
              title="Facebook: facebook.com/nbn.sohan"
              aria-label="Facebook Profile"
            >
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/b5z0n3sl/image/upload/v1791103462/Hand-drawn_letter_S_icon_2K_20261004121610.jpg" 
                  alt="Facebook Profile" 
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#1877F2] shadow-xs group-hover:scale-110 transition-transform" 
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
              </div>
            </a>

            {/* Direct Connect / WhatsApp */}
            <a
              href="https://wa.me/8801312815029"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FA812F] hover:bg-[#e07124] text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:scale-105 active:scale-95"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://facebook.com/nbn.sohan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1"
              aria-label="Facebook Profile"
            >
              <img 
                src="https://res.cloudinary.com/b5z0n3sl/image/upload/v1791103462/Hand-drawn_letter_S_icon_2K_20261004121610.jpg" 
                alt="Facebook" 
                className="w-7 h-7 rounded-full object-cover border border-[#1877F2]" 
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-stone-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {NAV_ROUTES.map((route) => (
              <a
                key={route.label}
                href={route.path}
                onClick={(e) => handleNavClick(route.path, route.sectionId, e)}
                className="text-base font-medium text-stone-700 hover:text-[#FA812F] py-2 border-b border-stone-200/50 flex items-center justify-between"
              >
                <span>{route.label}</span>
                <span className="text-stone-400 font-mono text-xs">→</span>
              </a>
            ))}
          </nav>
          
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://facebook.com/nbn.sohan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full border border-stone-300 text-stone-900 font-semibold text-xs uppercase tracking-wider"
            >
              Facebook: facebook.com/nbn.sohan
            </a>
            <a
              href="https://wa.me/8801312815029"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-[#FA812F] text-white font-semibold text-xs uppercase tracking-wider"
            >
              WhatsApp (+880 1312-815029)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
