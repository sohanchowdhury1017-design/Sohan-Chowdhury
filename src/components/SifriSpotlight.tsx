import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Truck, Sparkles, Layers, ShoppingBag } from 'lucide-react';
import { SIFRI_DETAILS } from '../data/portfolioData';
import sifriShowcaseImg from '../assets/images/sifri_brand_hero_1791052457373.jpg';

export const SifriSpotlight: React.FC = () => {
  return (
    <section id="sifri" className="py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative hairline grid background */}
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

        {/* Hero Visual Card with Showcase Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Image Showcase */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-stone-200 shadow-sm relative group bg-stone-900">
            <img
              src={sifriShowcaseImg}
              alt="Sifri BD - Founded by Sohan Chowdhury (NBN Sohan / Sohans)"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover min-h-[320px] max-h-[460px] group-hover:scale-102 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="flex items-center gap-2 text-white/80 text-xs font-mono mb-1">
                <ShoppingBag className="w-4 h-4 text-[#FA812F]" />
                <span>FOUNDED BY SOHAN CHOWDHURY (NBN SOHAN) · SIFRI BD</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Elevating Consumer Commerce in Bangladesh
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                Combining minimal aesthetics, genuine materials, and swift fulfillment across all 64 districts.
              </p>
            </div>
          </div>

          {/* Mission & Narrative */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold block mb-2">
                The Sifri Thesis
              </span>
              <h4 className="text-xl font-serif font-bold text-stone-900 mb-3">
                Restoring Trust Through Thoughtful Design
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {SIFRI_DETAILS.mission}
              </p>

              <div className="space-y-3.5 border-t border-stone-100 pt-5 text-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Curated lifestyle catalog with verified specifications.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Transparent tracking with prompt customer-first support.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct founder oversight on brand presentation and customer satisfaction.</span>
                </div>
              </div>
            </div>

            {/* Live Link Callout */}
            <div className="mt-8 pt-5 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="block text-[11px] font-mono text-stone-400">Official Store</span>
                <span className="text-sm font-bold font-mono text-stone-900">https://sifribd.com</span>
              </div>
              <a
                href="https://sifribd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#FA812F] hover:text-[#d46618] inline-flex items-center gap-1"
              >
                <span>Open Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIFRI_DETAILS.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white p-6 rounded-lg border border-stone-200/80 hover:border-stone-400 hover:shadow-xs transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-stone-400 font-semibold">
                  0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FA812F]/40 group-hover:bg-[#FA812F] transition-colors" />
              </div>
              <h5 className="text-base font-serif font-bold text-stone-900 mb-2">
                {pillar.title}
              </h5>
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
