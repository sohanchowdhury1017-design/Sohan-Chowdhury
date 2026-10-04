import React from 'react';
import { Scale, BookOpen, Search, ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const edu = PERSONAL_INFO.education;

  return (
    <section id="education" className="py-20 bg-[#FAF9F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 scroll-reveal">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#2DA8D8] font-semibold block mb-1">
              ০৪. শিক্ষাজীবন &middot; Legal Studies &amp; Academia
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              শিক্ষাজীবন | Education
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans">
            আইনি জ্ঞান, প্রাতিষ্ঠানিক গবেষণা, বিশ্লেষণধর্মী দৃষ্টিভঙ্গি ও পেশাগত দক্ষতা উন্নয়ন।
          </p>
        </div>

        {/* Main Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degree Spotlight */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-stone-200 shadow-xs relative overflow-hidden scroll-reveal-left">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#2DA8D8] flex items-center justify-center mb-6">
              <Scale className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-[#2DA8D8] font-semibold">
                {edu.year}
              </span>
              <span>&middot;</span>
              <span>আইন বিভাগ</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-2">
              {edu.degree}
            </h3>
            
            <div className="text-sm font-semibold text-[#FA812F] mb-4 font-sans">
              Law Student — 1st Year (প্রথম বর্ষ)
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {edu.description}
            </p>

            {/* Core Values in Legal Studies */}
            <div className="border-t border-stone-100 pt-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold mb-3">
                পড়াশোনার মূল স্তম্ভ &middot; Academic Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
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
            
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2DA8D8] font-bold mb-4">
                <BookOpen className="w-4 h-4" />
                <span>একাডেমিক আগ্রহ | Academic Interests</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.academicInterests.map((interest) => (
                  <div
                    key={interest}
                    className="p-3 bg-stone-50 rounded-xl border border-stone-100 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-stone-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#2DA8D8]" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Law & Business Synthesize */}
            <div className="bg-stone-900 text-white p-7 rounded-2xl shadow-xs space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2DA8D8] font-semibold block">
                আইন ও ব্যবসার মেলবন্ধন &middot; Law &amp; Commerce Synergy
              </span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                আইনি শিক্ষা জটিল ব্যবসায়িক চুক্তি, কর্পোরেট কমপ্লায়েন্স, নিরপেক্ষ অনুসন্ধান এবং যৌক্তিক সিদ্ধান্ত গ্রহণের ক্ষেত্রে অসাধারণ দূরদর্শিতা প্রদান করে।
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
