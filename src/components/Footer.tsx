import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { navigateTo } from '../utils/navigation';
import { ThemeToggle } from './ThemeToggle';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c111c] dark:bg-[#070a10] text-stone-300 relative border-t border-sky-950/70 font-sans transition-colors duration-300">
      {/* Top Stripe in Signature Komla Orange */}
      <div className="h-[3px] bg-[#FA812F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800 dark:border-stone-800/80">
          
          {/* Brand Info with Custom Hand-drawn S Icon & Bengali Profile */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <img 
                src={PERSONAL_INFO.siteIcon} 
                alt="S" 
                className="w-8 h-8 rounded-full object-cover border border-stone-700 shadow-xs"
              />
              <span className="text-base font-bold text-white tracking-tight uppercase font-sans">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {PERSONAL_INFO.headlineBn}। CEO &amp; Founder — SIFRI (<a href={PERSONAL_INFO.sifriUrl} target="_blank" rel="noopener noreferrer" className="text-[#FA812F] hover:underline">sifribd.com</a>) এবং আইন শিক্ষার্থী (LL.B.)।
            </p>
            <div className="text-xs font-mono text-stone-500">
              অফিসিয়াল ডোমেইন: <span className="text-stone-300">{PERSONAL_INFO.domain}</span>
            </div>
          </div>

          {/* Quick Nav in Bengali */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <div className="font-mono uppercase tracking-wider text-stone-400 font-semibold mb-3">
              ন্যাভিগেশন &middot; Navigation
            </div>
            <ul className="space-y-2">
              <li><a href="/" onClick={(e) => navigateTo('/', 'home', e)} className="hover:text-white transition-colors cursor-pointer">হোম (Home)</a></li>
              <li><a href="/about/" onClick={(e) => navigateTo('/about/', 'about', e)} className="hover:text-white transition-colors cursor-pointer">আমার সম্পর্কে (About Me)</a></li>
              <li><a href="/sifri/" onClick={(e) => navigateTo('/sifri/', 'sifri', e)} className="hover:text-white transition-colors cursor-pointer">সিফরি (SIFRI)</a></li>
              <li><a href="/education/" onClick={(e) => navigateTo('/education/', 'education', e)} className="hover:text-white transition-colors cursor-pointer">শিক্ষাজীবন (LL.B.)</a></li>
              <li><a href="/skills/" onClick={(e) => navigateTo('/skills/', 'skills', e)} className="hover:text-white transition-colors cursor-pointer">দক্ষতা ও কাজের ক্ষেত্র (Skills)</a></li>
              <li><a href="/contact/" onClick={(e) => navigateTo('/contact/', 'contact', e)} className="hover:text-white transition-colors cursor-pointer">যোগাযোগ (Contact)</a></li>
            </ul>
          </div>

          {/* External & Contact Links */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="font-mono uppercase tracking-wider text-stone-400 font-semibold mb-3">
              যোগাযোগ ও প্ল্যাটফর্ম
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={PERSONAL_INFO.sifriUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>SIFRI স্টোর: sifribd.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>Facebook: facebook.com/nbn.sohan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>WhatsApp: {PERSONAL_INFO.phone1}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone2}`}
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>বিকল্প ফোন: {PERSONAL_INFO.phone2}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#FA812F] transition-colors"
                >
                  <span>ইমেইল: {PERSONAL_INFO.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName} (NBN Sohan). সর্বস্বত্ব সংরক্ষিত &middot; All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle showLabel />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
            >
              <span>উপরে যান &middot; Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
