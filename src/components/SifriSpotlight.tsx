import React from 'react';
import { ArrowUpRight, ShoppingBag, Globe, Truck, ShieldCheck, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SifriSpotlight: React.FC = () => {
  const sifri = PERSONAL_INFO.sifriDetails;

  return (
    <section id="sifri" className="py-24 bg-stone-100/50 relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FA812F]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold">
                ০৩. বর্তমান পেশাগত দায়িত্ব &middot; Current Professional Role
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              {sifri.role}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={sifri.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FA812F] text-white rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-[#e07124] transition-all shadow-md group"
            >
              <span>sifribd.com পরিদর্শন করুন</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Venture Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Venture Narrative Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between scroll-reveal-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FA812F] uppercase tracking-wider mb-3 font-semibold">
                <ShoppingBag className="w-4 h-4" />
                <span>SIFRI &middot; FASHION &amp; CLOTHING E-COMMERCE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4 leading-snug">
                আধুনিক লাইফস্টাইল ও ফ্যাশন ভিত্তিক ই-কমার্স
              </h3>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {sifri.description}
              </p>

              {/* Tagline Card */}
              <div className="border-l-4 border-[#FA812F] pl-4 py-2 bg-stone-50 rounded-r-lg mb-6">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block mb-1">
                  ব্র্যান্ড স্লোগান &middot; Brand Tagline
                </span>
                <p className="text-stone-800 font-semibold text-sm sm:text-base">
                  &ldquo;{sifri.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-stone-100">
              {sifri.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-sm sm:text-base font-serif font-bold text-stone-900">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-stone-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Platform Destination & Direct Action */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 scroll-reveal-right delay-100">
            
            <div className="bg-stone-900 text-white p-7 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xs relative overflow-hidden">
              <div>
                <div className="text-xs font-mono text-[#FA812F] uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <Globe className="w-4 h-4" />
                  <span>অফিসিয়াল ই-কমার্স প্ল্যাটফর্ম</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-white">
                  sifribd.com
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-sans">
                  বাংলাদেশের ক্রেতাদের জন্য মানসম্মত ফ্যাশন ও লাইফস্টাইল পণ্যের নির্ভরযোগ্য অনলাইন শপিং অভিজ্ঞতা।
                </p>
              </div>

              <div>
                <a
                  href={sifri.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-[#FA812F] hover:bg-[#e07124] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-xs group"
                >
                  <span>সরাসরি স্টোরে যান (sifribd.com)</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Core Commitments */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                অপারেশনাল অগ্রাধিকার
              </span>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>কোয়ালিটি ফার্স্ট ফ্যাশন ও লাইফস্টাইল সিলেকশন</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                <Truck className="w-4 h-4 text-[#FA812F] shrink-0" />
                <span>সারাদেশে ৬৪ জেলায় দ্রুত ও নিরাপদ ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                <ShieldCheck className="w-4 h-4 text-[#2DA8D8] shrink-0" />
                <span>স্বচ্ছ বিজনেস পলিসি ও বিশ্বস্ত কাস্টমার সাপোর্ট</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sifri.pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-white p-6 rounded-xl border border-stone-200 hover:border-[#FA812F] hover:shadow-xs transition-all relative group"
            >
              <div className="text-xs font-mono text-[#FA812F] font-bold mb-2">
                ০{index + 1}
              </div>
              <h4 className="text-base font-serif font-bold text-stone-900 mb-2 group-hover:text-[#FA812F] transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
