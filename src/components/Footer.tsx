import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#FA812F] flex items-center justify-center text-white text-xs font-serif font-bold">
                S
              </span>
              <span className="text-base font-bold text-white tracking-tight uppercase font-sans">
                N B N Sohan Chowdhury
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Founder of Sifri (<a href="https://sifribd.com" target="_blank" rel="noopener noreferrer" className="text-[#FA812F] hover:underline">sifribd.com</a>) and East West University Department of English graduate. Exploring the intersection of narrative design, linguistics, and digital commerce.
            </p>
            <div className="text-xs font-mono text-stone-500">
              Primary domain: <span className="text-stone-300">sohans.site</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <div className="font-mono uppercase tracking-wider text-stone-400 font-semibold mb-3">
              Navigation
            </div>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About & Background</a></li>
              <li><a href="#sifri" className="hover:text-white transition-colors">Sifri (sifribd.com)</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">East West University</a></li>
              <li><a href="#writing" className="hover:text-white transition-colors">Essays & Perspectives</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* External Links */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="font-mono uppercase tracking-wider text-stone-400 font-semibold mb-3">
              Ventures & Setup
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://sifribd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>Sifri Official E-Commerce</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FA812F]" />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/nbn.sohan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#1877F2] transition-colors"
                >
                  <span>Facebook Profile (@nbn.sohan)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1877F2]" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801312815029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#25D366] transition-colors"
                >
                  <span>WhatsApp (+8801312815029)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-stone-400 hover:text-white transition-colors font-mono"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Quiet Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} N B N Sohan Chowdhury. All rights reserved. Built for sohans.site.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
