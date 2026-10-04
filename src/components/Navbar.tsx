import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Sifri', href: '#sifri' },
    { label: 'Education', href: '#education' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/70 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single Wordmark with subtle organic accent */}
          <div className="flex items-center gap-3">
            <a 
              href="#home" 
              className="group flex items-center gap-2.5 text-stone-900 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-[#FA812F] flex items-center justify-center text-white text-xs font-serif font-bold shadow-xs">
                S
              </span>
              <span className="text-lg sm:text-xl font-bold tracking-tight uppercase font-sans text-stone-900 group-hover:text-[#FA812F] transition-colors">
                N B N Sohan Chowdhury
              </span>
            </a>
          </div>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-stone-700 hover:text-stone-950 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FA812F] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
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
              <span className="absolute -inset-1 rounded-full bg-[#1877F2]/20 animate-ping opacity-60 group-hover:opacity-100" />
              <svg className="w-6 h-6 fill-current relative z-10 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href={PERSONAL_INFO.sifriUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-stone-900 rounded-md hover:bg-stone-800 transition-all shadow-xs whitespace-nowrap group cursor-pointer"
            >
              <span>Visit Sifri</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FA812F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-200/50 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAF9F5] px-6 py-5 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col gap-4 text-base font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FA812F] transition-colors py-1 border-b border-stone-100"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <a
                href="https://facebook.com/nbn.sohan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/30 rounded-md hover:bg-[#1877F2] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook · @nbn.sohan</span>
              </a>
              <a
                href={PERSONAL_INFO.sifriUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase bg-stone-900 text-white rounded-md hover:bg-stone-800 transition-colors"
              >
                <span>Explore Sifribd.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FA812F]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
