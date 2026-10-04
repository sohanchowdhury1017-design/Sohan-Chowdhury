import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Truck, Sparkles, Layers, ShoppingBag, Globe, Compass } from 'lucide-react';
import { SIFRI_DETAILS } from '../data/portfolioData';

export const SifriSpotlight: React.FC = () => {
  return (
    <section id="sifri" className="py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative subtle hairline grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FA812F]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold">
                02. Flagship Venture
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              Sifri <span className="text-stone-400 font-sans font-light text-2xl sm:text-3xl">(sifribd.com)</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SIFRI_DETAILS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FA812F] text-white rounded-md text-xs font-bold tracking-wider uppercase hover:bg-[#e07124] transition-all shadow-md group"
            >
              <span>Visit sifribd.com</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Clean Editorial Venture Overview (No artificial mock product images) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Main Venture Narrative Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FA812F] uppercase tracking-wider mb-3 font-semibold">
                <ShoppingBag className="w-4 h-4" />
                <span>FOUNDED BY SOHAN CHOWDHURY (NBN SOHAN) &middot; SIFRI BD</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4 leading-snug">
                Redefining Contemporary Lifestyle Retail in Bangladesh
              </h3>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {SIFRI_DETAILS.tagline}. Rooted in genuine customer care, transparent inventory, and dependable nationwide logistics across all 64 districts.
              </p>

              {/* Founder Quote */}
              <div className="border-l-2 border-[#FA812F] pl-5 py-2 my-4 bg-stone-50 rounded-r-md">
                <blockquote className="font-serif italic text-stone-800 text-base sm:text-lg">
                  &ldquo;Curation is an act of respect for the consumer&rsquo;s attention.&rdquo;
                </blockquote>
                <cite className="block text-xs font-mono uppercase tracking-wider text-stone-500 mt-1 not-italic">
                  &mdash; Sohan Chowdhury, Founder
                </cite>
              </div>
            </div>

            {/* Key Platform Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-100 mt-6">
              {SIFRI_DETAILS.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg sm:text-xl font-serif font-bold text-stone-900">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Platform Details & Trust Markers */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Link Banner */}
            <div className="bg-stone-900 text-white p-7 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xs relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-xs font-mono text-[#FA812F] uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Official E-Commerce Platform</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-white">
                  sifribd.com
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-sans">
                  Explore carefully curated products with streamlined ordering, verified availability, and dedicated support.
                </p>
              </div>

              <div className="relative z-10 pt-2">
                <a
                  href={SIFRI_DETAILS.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#FA812F] hover:bg-[#e07124] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs group"
                >
                  <span>Open sifribd.com</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Operational Commitments */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold mb-2">
                Core Operating Commitments
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Genuine, Hand-Curated Selections</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                <Truck className="w-4 h-4 text-[#FA812F] shrink-0" />
                <span>Fast Dispatch &amp; Nationwide Delivery Network</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                <ShieldCheck className="w-4 h-4 text-[#2DA8D8] shrink-0" />
                <span>Hassle-Free Customer Dialogue &amp; Support</span>
              </div>
            </div>

          </div>

        </div>

        {/* Four Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIFRI_DETAILS.pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-white p-6 rounded-xl border border-stone-200/80 hover:border-stone-400 hover:shadow-xs transition-all relative group"
            >
              <div className="text-xs font-mono text-stone-400 font-bold mb-3">
                0{index + 1}
              </div>
              <h4 className="text-base font-serif font-bold text-stone-900 mb-2 group-hover:text-[#FA812F] transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
