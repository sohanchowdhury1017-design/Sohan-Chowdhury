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
          
          {/* Brand Info with Custom Hand-drawn S Icon */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img 
                src="https://res.cloudinary.com/b5z0n3sl/image/upload/v1791103462/Hand-drawn_letter_S_icon_2K_20261004121610.jpg" 
                alt="S" 
                className="w-7 h-7 rounded-full object-cover border border-stone-700 shadow-xs"
              />
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
              <li><a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); window.history.pushState(null, '', '/'); }} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about/" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '/about/'); }} className="hover:text-white transition-colors">About &amp; Background</a></li>
              <li><a href="/sifri/" onClick={(e) => { e.preventDefault(); document.getElementById('sifri')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '/sifri/'); }} className="hover:text-white transition-colors">Sifri (sifribd.com)</a></li>
              <li><a href="/education/" onClick={(e) => { e.preventDefault(); document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '/education/'); }} className="hover:text-white transition-colors">East West University</a></li>
              <li><a href="/writing/" onClick={(e) => { e.preventDefault(); document.getElementById('writing')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '/writing/'); }} className="hover:text-white transition-colors">Essays &amp; Perspectives</a></li>
              <li><a href="/contact/" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '/contact/'); }} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* External Links */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="font-mono uppercase tracking-wider text-stone-400 font-semibold mb-3">
              Ventures &amp; Setup
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://sifribd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>Sifri E-Commerce (sifribd.com)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/nbn.sohan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>Facebook Profile (@nbn.sohan)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801312815029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>WhatsApp: +880 1312-815029</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:sohanchowdhury1017@gmail.com"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>sohanchowdhury1017@gmail.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} N B N Sohan Chowdhury (Sohans). All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
