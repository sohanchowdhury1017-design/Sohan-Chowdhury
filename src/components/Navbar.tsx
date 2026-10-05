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
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/95 dark:bg-[#0d0c0a]/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram with Custom Hand-drawn S Icon & English Subtitle */}
          <div className="flex items-center gap-3">
            <a 
              href="/" 
              onClick={(e) => handleNavClick('/', 'home', e)}
              className="group flex items-center gap-2.5 text-stone-900 dark:text-stone-100 transition-colors cursor-pointer"
            >
              <img 
                src={PERSONAL_INFO.siteIcon} 
                alt="S" 
                className="w-9 h-9 rounded-full object-cover shadow-xs border border-stone-200/80 dark:border-stone-700 group-hover:border-[#FA812F] transition-colors"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight font-sans text-stone-900 dark:text-stone-100 group-hover:text-[#FA812F] dark:group-hover:text-[#FA812F] transition-colors">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="text-[11px] text-stone-500 dark:text-stone-400 font-medium hidden sm:block">
                  {PERSONAL_INFO.headline}
                </span>
              </div>
            </a>
          </div>

          {/* Bengali Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {NAV_ROUTES.map((route) => {
              const isActive = currentPage === route.sectionId;
              return (
                <a
                  key={route.label}
                  href={route.path}
                  onClick={(e) => handleNavClick(route.path, route.sectionId, e)}
                  className={`relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#FA812F] after:transition-all after:duration-200 ${
                    isActive
                      ? 'text-[#FA812F] font-bold after:w-full'
                      : 'text-stone-700 dark:text-stone-300 hover:text-[#FA812F] dark:hover:text-[#FA812F] after:w-0 hover:after:w-full'
                  }`}
                >
                  {route.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, Facebook profile and WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Facebook Profile Link */}
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-1.5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors flex items-center justify-center cursor-pointer"
              title="Facebook: facebook.com/nbn.sohan"
              aria-label="Facebook Profile"
            >
              <div className="relative">
                <img 
                  src={PERSONAL_INFO.siteIcon} 
                  alt="Facebook" 
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#1877F2] shadow-xs group-hover:scale-105 transition-transform" 
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-stone-900 rounded-full" />
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

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
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
              className="p-2 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 focus:outline-hidden cursor-pointer"
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
