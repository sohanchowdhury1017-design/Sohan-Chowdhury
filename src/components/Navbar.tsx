import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NAV_ROUTES, navigateTo } from '../utils/navigation';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string, sectionId: string, e: React.MouseEvent) => {
    navigateTo(path, sectionId, e);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram with Custom Hand-drawn S Icon & Bengali Name */}
          <div className="flex items-center gap-3">
            <a 
              href="/" 
              onClick={(e) => handleNavClick('/', 'home', e)}
              className="group flex items-center gap-2.5 text-stone-900 transition-colors"
            >
              <img 
                src={PERSONAL_INFO.siteIcon} 
                alt="S" 
                className="w-9 h-9 rounded-full object-cover shadow-xs border border-stone-200/80 group-hover:border-[#FA812F] transition-colors"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight font-sans text-stone-900 group-hover:text-[#FA812F] transition-colors">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="text-[11px] text-stone-500 font-medium hidden sm:block">
                  {PERSONAL_INFO.headlineBn}
                </span>
              </div>
            </a>
          </div>

          {/* Bengali Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
            {NAV_ROUTES.map((route) => (
              <a
                key={route.label}
                href={route.path}
                onClick={(e) => handleNavClick(route.path, route.sectionId, e)}
                className="relative py-1 hover:text-[#FA812F] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FA812F] hover:after:w-full after:transition-all after:duration-200"
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Actions: Facebook profile and WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Facebook Profile Link */}
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-1.5 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center"
              title="Facebook: facebook.com/nbn.sohan"
              aria-label="Facebook Profile"
            >
              <div className="relative">
                <img 
                  src={PERSONAL_INFO.siteIcon} 
                  alt="Facebook" 
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#1877F2] shadow-xs group-hover:scale-105 transition-transform" 
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
              </div>
            </a>

            {/* Direct Connect / WhatsApp */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FA812F] hover:bg-[#e07124] text-white rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>যোগাযোগ করুন</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#FA812F] text-white rounded-full text-xs font-medium"
            >
              হোয়াটসঅ্যাপ
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 focus:outline-hidden"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-stone-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {NAV_ROUTES.map((route) => (
              <a
                key={route.label}
                href={route.path}
                onClick={(e) => handleNavClick(route.path, route.sectionId, e)}
                className="text-base font-medium text-stone-800 hover:text-[#FA812F] py-2 border-b border-stone-200/50 flex items-center justify-between"
              >
                <span>{route.label}</span>
                <span className="text-stone-400 font-mono text-xs">→</span>
              </a>
            ))}
          </nav>
          
          <div className="pt-2 flex flex-col gap-2.5 text-xs">
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full border border-stone-300 text-stone-900 font-semibold"
            >
              Facebook: facebook.com/nbn.sohan
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-[#FA812F] text-white font-semibold"
            >
              WhatsApp: {PERSONAL_INFO.phone1}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
