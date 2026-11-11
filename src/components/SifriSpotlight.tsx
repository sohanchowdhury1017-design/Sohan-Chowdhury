import React from 'react';
import { ArrowUpRight, ShoppingBag, Globe, Truck, ShieldCheck, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SifriSpotlight: React.FC = () => {
  const sifri = PERSONAL_INFO.sifriDetails;

  return (
    <section id="sifri" className="py-20 sm:py-24 bg-[#0B0C10] relative overflow-hidden border-t border-[#1F242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                ০২. বর্তমান ব্যবসায়িক ভূমিকা ও ভেঞ্চার &middot; Current Venture
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8FAFC] tracking-tight">
              {sifri.role}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={sifri.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] group cursor-pointer"
            >
              <span>sifribd.com পরিদর্শন করুন</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Venture Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Venture Narrative Card */}
          <div className="lg:col-span-7 bg-[#13161C] p-7 sm:p-9 rounded-2xl border border-[#1F242E] shadow-xl flex flex-col justify-between scroll-reveal-left transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-3 font-semibold">
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>SIFRI &middot; FASHION &amp; CLOTHING E-COMMERCE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F8FAFC] mb-4 leading-snug">
                আধুনিক লাইফস্টাইল ও ফ্যাশন ভিত্তিক ই-কমার্স
              </h3>

              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {sifri.description}
              </p>

              {/* Tagline Card */}
              <div className="border-l-4 border-[#D4AF37] pl-4 py-2.5 bg-[#0B0C10] rounded-r-lg mb-6 border border-[#1F242E]">
                <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-0.5">
                  ব্র্যান্ড স্লোগান &middot; Brand Tagline
                </span>
                <p className="text-[#F8FAFC] font-semibold text-sm sm:text-base">
                  &ldquo;{sifri.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#1F242E]">
              {sifri.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-sm sm:text-base font-serif font-bold text-[#F8FAFC]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#94A3B8]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Platform Destination & Direct Action */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 scroll-reveal-right delay-100">
            
            <div className="bg-[#13161C] text-[#F8FAFC] p-7 sm:p-8 rounded-2xl flex flex-col justify-between border border-[#1F242E] shadow-xl relative overflow-hidden">
              <div>
                <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <Globe className="w-4 h-4" />
                  <span>অফিসিয়াল ই-কমার্স প্ল্যাটফর্ম</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[#F8FAFC]">
                  sifribd.com
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 font-sans">
                  বাংলাদেশের ক্রেতাদের জন্য মানসম্মত ফ্যাশন ও লাইফস্টাইল পণ্যের নির্ভরযোগ্য অনলাইন শপিং অভিজ্ঞতা।
                </p>
              </div>

              <div>
                <a
                  href={sifri.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] group cursor-pointer"
                >
                  <span>সরাসরি স্টোরে যান (sifribd.com)</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Core Commitments */}
            <div className="bg-[#13161C] p-6 rounded-2xl border border-[#1F242E] shadow-xl space-y-3 transition-colors">
              <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold block mb-1">
                অপারেশনাল অগ্রাধিকার &middot; Key Commitments
              </span>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>কোয়ালিটি ফার্স্ট ফ্যাশন ও লাইফস্টাইল সিলেকশন</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#94A3B8]">
                <Truck className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>সারাদেশে ৬৪ জেলায় দ্রুত ও নিরাপদ হোম ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#94A3B8]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>স্বচ্ছ বিজনেস পলিসি ও বিশ্বস্ত সার্বক্ষণিক কাস্টমার সাপোর্ট</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sifri.pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-[#13161C] p-6 rounded-xl border border-[#1F242E] hover:border-[#D4AF37] hover:shadow-lg transition-all relative group"
            >
              <div className="text-xs font-mono text-[#D4AF37] font-bold mb-2">
                ০{index + 1}
              </div>
              <h4 className="text-base font-serif font-bold text-[#F8FAFC] mb-2 group-hover:text-[#D4AF37] transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
