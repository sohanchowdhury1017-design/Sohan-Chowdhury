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
    <header className="sticky top-0 z-50 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#1F242E] transition-colors duration-300 relative shadow-sm">
      {/* 👑 Champagne Gold Subtle Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram with Custom Hand-drawn S Icon & English Subtitle */}
          <div className="flex items-center gap-3">
            <a 
              href="/" 
              onClick={(e) => handleNavClick('/', 'home', e)}
              className="group flex items-center gap-2.5 text-[#F8FAFC] transition-colors cursor-pointer"
            >
              <img 
                src={PERSONAL_INFO.siteIcon} 
                alt="S" 
                className="w-10 h-10 rounded-full object-cover shadow-xs border border-[#1F242E] group-hover:border-[#D4AF37] transition-colors"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight font-sans text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors">
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
                  className={`relative py-1.5 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-200 ${
                    isActive
                      ? 'text-[#D4AF37] font-bold after:w-full'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] after:w-0 hover:after:w-full hover:after:bg-[#D4AF37]'
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
              className="relative group p-1.5 rounded-full hover:bg-[#13161C] transition-colors flex items-center justify-center cursor-pointer border border-transparent hover:border-[#1F242E]"
              title="Facebook: facebook.com/nbn.sohan"
              aria-label="Facebook Profile"
            >
              <div className="relative">
                <img 
                  src={PERSONAL_INFO.siteIcon} 
                  alt="Facebook" 
                  className="w-8 h-8 rounded-full object-cover border border-[#1F242E] group-hover:border-[#D4AF37] shadow-xs group-hover:scale-105 transition-transform" 
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#D4AF37] border-2 border-[#0B0C10] rounded-full" />
              </div>
            </a>

            {/* Direct Connect / Hire Me CTA - Champagne Gold with Soft Glow Effect */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] rounded-xl text-xs font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_28px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#0B0C10]" />
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>যোগাযোগ</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-hidden cursor-pointer"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#13161C] border-b border-[#1F242E] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
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
                      ? 'bg-[#0B0C10] text-[#D4AF37] border-[#D4AF37]/40 font-bold shadow-xs'
                      : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC] hover:bg-[#0B0C10]/60'
                  }`}
                >
                  <span>{route.label}</span>
                  <span className="text-[#94A3B8] font-mono text-xs">→</span>
                </a>
              );
            })}
          </nav>
          
          <div className="pt-2 flex flex-col gap-2.5 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0B0C10] border border-[#1F242E]">
              <span className="text-xs font-medium text-[#94A3B8]">
                থিম পরিবর্তন &middot; Mode
              </span>
              <ThemeToggle showLabel />
            </div>

            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl border border-[#1F242E] text-[#F8FAFC] font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              Facebook: facebook.com/nbn.sohan
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all"
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
