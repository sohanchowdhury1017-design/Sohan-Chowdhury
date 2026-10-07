import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NAV_ROUTES, navigateTo, useCurrentPage } from '../utils/navigation';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPage = useCurrentPage();

  const handleNavClick = (path: string, sectionId: string, e: React.MouseEvent) => {
    navigateTo(path, sectionId, e);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#161B26] transition-colors duration-300 relative shadow-sm">
      {/* 🍊 Signature Komla Orange Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FA812F] via-[#fb923c] to-[#FA812F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram with Custom Hand-drawn S Icon & English Subtitle */}
          <div className="flex items-center gap-3">
            <a 
              href="/" 
              onClick={(e) => handleNavClick('/', 'home', e)}
              className="group flex items-center gap-2.5 text-[#E2E8F0] transition-colors cursor-pointer"
            >
              <img 
                src={PERSONAL_INFO.siteIcon} 
                alt="S" 
                className="w-10 h-10 rounded-full object-cover shadow-xs border-2 border-[#1E2638] group-hover:border-[#FA812F] transition-colors"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight font-sans text-[#E2E8F0] group-hover:text-[#FA812F] transition-colors">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="text-[11px] text-[#94A3B8] font-medium hidden sm:block">
                  {PERSONAL_INFO.headline}
                </span>
              </div>
            </a>
          </div>

          {/* Bengali Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            {NAV_ROUTES.map((route) => {
              const isActive = currentPage === route.sectionId;
              return (
                <a
                  key={route.label}
                  href={route.path}
                  onClick={(e) => handleNavClick(route.path, route.sectionId, e)}
                  className={`relative py-1.5 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#FA812F] after:transition-all after:duration-200 ${
                    isActive
                      ? 'text-[#FA812F] font-bold after:w-full'
                      : 'text-[#CBD5E1] hover:text-[#FA812F] after:w-0 hover:after:w-full hover:after:bg-[#FA812F]'
                  }`}
                >
                  {route.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions (hidden below lg to prevent overlap/duplication with mobile bar) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Facebook Profile Link */}
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-1.5 rounded-full hover:bg-[#161B26] transition-colors flex items-center justify-center cursor-pointer"
              title="Facebook: facebook.com/nbn.sohan"
              aria-label="Facebook Profile"
            >
              <div className="relative">
                <img 
                  src={PERSONAL_INFO.siteIcon} 
                  alt="Facebook" 
                  className="w-8 h-8 rounded-full object-cover border-2 border-stone-700 group-hover:border-[#FA812F] shadow-xs group-hover:scale-105 transition-transform" 
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#FA812F] border-2 border-[#0B0F19] rounded-full" />
              </div>
            </a>

            {/* Direct Connect / WhatsApp - Vibrant Green CTA */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold tracking-wide transition-all shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:scale-102 active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>যোগাযোগ করুন</span>
            </a>
          </div>

          {/* Mobile Menu Actions (visible only below lg) */}
          <div className="flex lg:hidden items-center gap-2.5">
            <ThemeToggle />
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>হোয়াটসঅ্যাপ</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-hidden cursor-pointer"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] dark:bg-[#141210] border-b border-stone-200 dark:border-stone-800 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {NAV_ROUTES.map((route) => {
              const isActive = currentPage === route.sectionId;
              return (
                <a
                  key={route.label}
                  href={route.path}
                  onClick={(e) => handleNavClick(route.path, route.sectionId, e)}
                  className={`text-base py-2.5 px-3 rounded-xl border flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-orange-50 dark:bg-orange-950/40 text-[#FA812F] border-orange-200 dark:border-orange-900/60 font-bold'
                      : 'text-stone-800 dark:text-stone-200 border-transparent hover:text-[#FA812F] hover:bg-stone-100 dark:hover:bg-stone-800/60'
                  }`}
                >
                  <span>{route.label}</span>
                  <span className="text-stone-400 dark:text-stone-500 font-mono text-xs">→</span>
                </a>
              );
            })}
          </nav>
          
          <div className="pt-2 flex flex-col gap-2.5 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700">
              <span className="text-xs font-medium text-stone-700 dark:text-stone-300">
                থিম পরিবর্তন &middot; Mode
              </span>
              <ThemeToggle showLabel />
            </div>

            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              Facebook: facebook.com/nbn.sohan
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {PERSONAL_INFO.phone1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
