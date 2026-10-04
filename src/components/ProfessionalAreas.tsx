import React from 'react';
import { Briefcase, TrendingUp, Sparkles, CheckCircle2, Layers, Target, Compass, Store } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProfessionalAreas: React.FC = () => {
  return (
    <section id="areas" className="py-20 bg-[#FAF9F5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold block mb-1">
              ০২. কাজের পরিধি &middot; Expertise &amp; Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              পেশাগত ক্ষেত্র | Professional Areas
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans">
            উদ্যোক্তা হিসেবে ব্যবসা সম্প্রসারণ, ব্র্যান্ড ম্যানেজমেন্ট, ডিজিটাল মার্কেটিং এবং আধুনিক ই-কমার্স ডেভেলপমেন্ট।
          </p>
        </div>

        {/* Core Professional Focus Banner */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white p-6 sm:p-8 rounded-2xl shadow-sm mb-12 border border-stone-800">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FA812F] uppercase tracking-wider mb-3 font-semibold">
            <Target className="w-4 h-4" />
            <span>Core Professional Focus</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {PERSONAL_INFO.coreFocus.map((focus) => (
              <span
                key={focus}
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#FA812F] text-white text-xs sm:text-sm font-medium transition-colors border border-white/10"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>

        {/* Professional Areas Grid: 15 Core Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PERSONAL_INFO.professionalAreas.map((area, idx) => (
            <div
              key={area}
              className="bg-white p-5 sm:p-6 rounded-xl border border-stone-200/80 hover:border-[#FA812F] hover:shadow-xs transition-all group flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#FA812F] flex items-center justify-center shrink-0 font-mono text-xs font-bold group-hover:bg-[#FA812F] group-hover:text-white transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#FA812F] transition-colors leading-snug">
                  {area}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
