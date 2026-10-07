import React from 'react';
import { Scale, BookOpen, CheckCircle2, GraduationCap, School } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const edu = PERSONAL_INFO.education;

  return (
    <section id="education" className="py-20 bg-[#0B0C10] border-t border-[#1F242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 scroll-reveal">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              ০৪. শিক্ষাজীবন &middot; Legal Studies &amp; Academic Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8FAFC] tracking-tight">
              শিক্ষাজীবন | Education
            </h2>
          </div>
          <p className="text-sm text-[#94A3B8] max-w-md font-sans">
            আইনি জ্ঞান, প্রাতিষ্ঠানিক গবেষণা, বিশ্লেষণধর্মী দৃষ্টিভঙ্গি ও মাধ্যমিক থেকে উচ্চতর আইন শিক্ষার ধারাবাহিক অগ্রগতি।
          </p>
        </div>

        {/* ================= ACADEMIC MILESTONES (SSC, HSC, LLB) ================= */}
        <div className="mb-12 scroll-reveal">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-lg font-serif font-bold text-[#F8FAFC]">
              শিক্ষাগত পটভূমি ও অ্যাকাডেমিক পর্যায় &middot; Educational Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {edu.timeline.map((item, idx) => (
              <div
                key={item.id}
                className={`bg-[#13161C] p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  item.current
                    ? 'border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/30'
                    : 'border-[#1F242E] hover:border-[#D4AF37]/40 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${
                        item.current
                          ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                          : 'bg-[#0B0C10] text-[#94A3B8] border border-[#1F242E]'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mb-1">
                    {item.levelBn}
                  </h4>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400 mb-3">
                    {item.level}
                  </div>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-50 dark:bg-stone-800/80 p-2.5 rounded-xl border border-stone-100 dark:border-stone-700 mb-3">
                    <School className="w-4 h-4 text-[#2DA8D8] shrink-0" />
                    <span className="truncate">{item.institutionBn}</span>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-stone-800 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                    স্ট্যাটাস
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                      item.current
                        ? 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40'
                        : 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degree Spotlight: Current LLB Studies */}
          <div className="lg:col-span-6 bg-white dark:bg-[#1a1815] p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs relative overflow-hidden scroll-reveal-left">
            <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-[#2DA8D8] flex items-center justify-center mb-6">
              <Scale className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#2DA8D8] font-semibold">
                {edu.year}
              </span>
              <span>&middot;</span>
              <span>আইন বিভাগ</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
              {edu.degree}
            </h3>
            
            <div className="text-sm font-semibold text-[#FA812F] mb-4 font-sans">
              Bachelor of Laws — 1st Year (প্রথম বর্ষ)
            </div>

            <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {edu.description}
            </p>

            {/* Core Values in Legal Studies */}
            <div className="border-t border-stone-100 dark:border-stone-800 pt-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-semibold mb-3">
                পড়াশোনার মূল স্তম্ভ &middot; Academic Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DA8D8]" />
                  <span>Legal Knowledge &amp; Research</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DA8D8]" />
                  <span>Critical Thinking &amp; Reasoning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DA8D8]" />
                  <span>Investigation &amp; Inquiry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DA8D8]" />
                  <span>Professional Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Interests Grid */}
          <div className="lg:col-span-6 space-y-6 scroll-reveal-right delay-100">
            
            <div className="bg-white dark:bg-[#1a1815] p-7 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2DA8D8] font-bold mb-4">
                <BookOpen className="w-4 h-4" />
                <span>একাডেমিক আগ্রহ | Academic Interests</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.academicInterests.map((interest) => (
                  <div
                    key={interest}
                    className="p-3 bg-stone-50 dark:bg-stone-800/80 rounded-xl border border-stone-100 dark:border-stone-700 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#2DA8D8]" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Law & Business Synthesize */}
            <div className="bg-stone-900 dark:bg-[#171512] text-white p-7 rounded-2xl border dark:border-stone-800 shadow-xs space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2DA8D8] font-semibold block">
                আইন ও ব্যবসার মেলবন্ধন &middot; Law &amp; Commerce Synergy
              </span>
              <p className="text-xs sm:text-sm text-stone-300 dark:text-stone-400 leading-relaxed font-sans">
                আইনি শিক্ষা জটিল ব্যবসায়িক চুক্তি, কর্পোরেট কমপ্লায়েন্স, নিরপেক্ষ অনুসন্ধান এবং যৌক্তিক সিদ্ধান্ত গ্রহণের ক্ষেত্রে অসাধারণ দূরদর্শিতা প্রদান করে।
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
