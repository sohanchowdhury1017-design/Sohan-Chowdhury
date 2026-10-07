import React from 'react';
import { Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProfessionalAreas: React.FC = () => {
  return (
    <section id="areas" className="py-20 bg-[#0B0C10] border-t border-[#1F242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 scroll-reveal">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              ০২. কাজের পরিধি &middot; Expertise &amp; Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8FAFC] tracking-tight">
              পেশাগত ক্ষেত্র | Professional Areas
            </h2>
          </div>
          <p className="text-sm text-[#94A3B8] max-w-md font-sans">
            উদ্যোক্তা হিসেবে ব্যবসা সম্প্রসারণ, ব্র্যান্ড ম্যানেজমেন্ট, ডিজিটাল মার্কেটিং এবং আধুনিক ই-কমার্স ডেভেলপমেন্ট।
          </p>
        </div>

        {/* Core Professional Focus Banner */}
        <div className="bg-[#13161C] text-white p-6 sm:p-8 rounded-2xl shadow-xl mb-12 border border-[#1F242E] scroll-reveal delay-100">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-3 font-semibold">
            <Target className="w-4 h-4 text-[#D4AF37]" />
            <span>Core Professional Focus</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {PERSONAL_INFO.coreFocus.map((focus) => (
              <span
                key={focus}
                className="px-3.5 py-1.5 rounded-full bg-[#0B0C10] hover:bg-[#D4AF37] hover:text-[#0B0C10] text-[#F8FAFC] text-xs sm:text-sm font-medium transition-colors border border-[#1F242E]"
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
              className={`bg-[#13161C] p-5 sm:p-6 rounded-xl border border-[#1F242E] hover:border-[#D4AF37] hover:shadow-lg transition-all group flex items-start gap-4 scroll-reveal ${
                idx % 3 === 1 ? 'delay-75' : idx % 3 === 2 ? 'delay-150' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#0B0C10] border border-[#1F242E] text-[#D4AF37] flex items-center justify-center shrink-0 font-mono text-xs font-bold group-hover:bg-[#D4AF37] group-hover:text-[#0B0C10] transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors leading-snug">
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
