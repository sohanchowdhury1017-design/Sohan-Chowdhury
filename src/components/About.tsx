import React from 'react';
import { ArrowUpRight, Briefcase, UserCheck, ShieldCheck, Scale, Compass, CheckCircle2, Calendar, Building, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0B0C10] border-t border-b border-[#1F242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 scroll-reveal">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              ০১. পরিচিতি ও দৃষ্টিভঙ্গি &middot; Profile &amp; Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8FAFC] tracking-tight">
              আমার সম্পর্কে | About Me
            </h2>
          </div>
          <p className="text-sm text-[#94A3B8] max-w-md font-sans">
            জ্ঞান, পর্যবেক্ষণ ও বাস্তব অভিজ্ঞতাকে সমন্বিত করে একটি শক্তিশালী পেশাগত ক্যারিয়ার বিনির্মাণ।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column with User's Exact Bengali Text */}
          <div className="lg:col-span-7 space-y-6 text-[#94A3B8] leading-relaxed text-base font-sans scroll-reveal-left">
            
            <p className="text-lg font-medium text-[#F8FAFC] leading-relaxed border-l-4 border-[#D4AF37] pl-4 py-2 bg-[#13161C] rounded-r-xl border border-[#1F242E] shadow-2xs">
              {PERSONAL_INFO.aboutMeParagraphs[0]}
            </p>

            <p>
              {PERSONAL_INFO.aboutMeParagraphs[1]}
            </p>

            <p>
              {PERSONAL_INFO.aboutMeParagraphs[2]}
            </p>

            {PERSONAL_INFO.aboutMeParagraphs[3] && (
              <div className="bg-[#13161C] border border-[#1F242E] p-4 rounded-xl flex items-start gap-3 my-3 text-[#F8FAFC] shadow-2xs">
                <span className="text-2xl shrink-0">🎸</span>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold block mb-0.5">
                    সৃজনশীল শিল্পচর্চা &middot; Acoustic Guitar Artistry
                  </span>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                    {PERSONAL_INFO.aboutMeParagraphs[3]}
                  </p>
                </div>
              </div>
            )}

            {/* Core Working Values Box */}
            <div className="bg-[#13161C] p-6 rounded-2xl border border-[#1F242E] shadow-xs my-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                কাজের মূল ভিত্তি &middot; Core Values of Practice
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {['Creativity', 'Critical Thinking', 'Observation', 'Logical Reasoning', 'Professional Communication'].map((val) => (
                  <div key={val} className="flex items-center gap-2 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-50 dark:bg-stone-800/80 px-3 py-2 rounded-lg border border-stone-100 dark:border-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FA812F]" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= PERSONAL & FAMILY BACKGROUND CARD ================= */}
            <div className="bg-white dark:bg-[#1a1815] p-6 sm:p-7 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs my-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#FA812F]" />
                  <h3 className="text-sm font-serif font-bold text-stone-900 dark:text-stone-100">
                    ব্যক্তিগত ও পারিবারিক পরিচয় | Personal &amp; Family Profile
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full font-semibold border border-emerald-200 dark:border-emerald-900/60">
                  Verified Bio
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Birth Info */}
                <div className="p-3.5 bg-stone-50/80 dark:bg-stone-800/70 rounded-xl border border-stone-100 dark:border-stone-700/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-[#FA812F] flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider block">
                      জন্ম তারিখ &middot; Date of Birth
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#FA812F] block font-mono">
                      19 July 2006
                    </span>
                    <span className="text-xs text-stone-600 dark:text-stone-400 font-medium block">
                      Wednesday &middot; ১৯ জুলাই ২০০৬, বুধবার
                    </span>
                  </div>
                </div>

                {/* Business Journey Since 2021 */}
                <div className="p-3.5 bg-stone-50/80 dark:bg-stone-800/70 rounded-xl border border-stone-100 dark:border-stone-700/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider block">
                      ব্যবসায়িক পথচলা &middot; Journey Since
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 block">
                      {PERSONAL_INFO.businessJourneyStartYear} সাল থেকে
                    </span>
                    <span className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                      Business Journey Started in {PERSONAL_INFO.businessJourneyStartYearEn}
                    </span>
                  </div>
                </div>

                {/* Father Info */}
                <div className="p-3.5 bg-stone-50/80 dark:bg-stone-800/70 rounded-xl border border-stone-100 dark:border-stone-700/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider block">
                      পিতার পরিচয় &middot; Father
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 block">
                      {PERSONAL_INFO.family.father.name}
                    </span>
                    <span className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                      {PERSONAL_INFO.family.father.role} ({PERSONAL_INFO.family.father.roleBn})
                    </span>
                  </div>
                </div>

                {/* Mother Info */}
                <div className="p-3.5 bg-stone-50/80 dark:bg-stone-800/70 rounded-xl border border-stone-100 dark:border-stone-700/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider block">
                      মাতার পরিচয় &middot; Mother
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 block">
                      {PERSONAL_INFO.family.mother.name}
                    </span>
                    <span className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                      {PERSONAL_INFO.family.mother.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.sifriUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FA812F] hover:bg-[#e07124] text-white rounded-xl text-xs font-bold tracking-wide uppercase transition-all shadow-xs cursor-pointer"
              >
                <span>সিফরি স্টোর পরিদর্শন করুন</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>

              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-orange-200/80 dark:border-stone-700 bg-white dark:bg-[#131926] text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold tracking-wide hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shadow-2xs"
              >
                <span>Facebook Profile</span>
                <ArrowUpRight className="w-4 h-4 text-sky-500" />
              </a>
            </div>

          </div>

          {/* Dossier Card: পেশাগত পরিচয় | Professional Profile */}
          <div className="lg:col-span-5 space-y-6 scroll-reveal-right delay-100">
            <div className="bg-white dark:bg-[#1a1815] p-7 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs relative">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800 mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FA812F] font-bold">
                  ব্যক্তিগত ও পেশাগত তথ্য &middot; Dossier
                </span>
                <span className="text-xs font-mono text-stone-400 dark:text-stone-500">Official</span>
              </div>

              <dl className="space-y-3.5 text-xs sm:text-sm">
                
                <div className="flex items-start justify-between py-1.5 border-b border-stone-100 dark:border-stone-800/80">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">নাম (Full Name)</dt>
                  <dd className="font-serif font-bold text-stone-900 dark:text-stone-100 text-right">{PERSONAL_INFO.fullName}</dd>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-stone-100 dark:border-stone-800/80">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">জন্ম তারিখ (Birth Date)</dt>
                  <dd className="text-right">
                    <span className="font-mono font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 block">
                      19 July 2006
                    </span>
                    <span className="text-[11px] text-stone-500 dark:text-stone-400 font-medium block">
                      Wednesday (১৯ জুলাই ২০০৬, বুধবার)
                    </span>
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100 dark:border-stone-800/80">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">পিতার পরিচয় (Father)</dt>
                  <dd className="font-medium text-stone-800 dark:text-stone-200 text-right">
                    {PERSONAL_INFO.family.father.name} <span className="text-stone-500 dark:text-stone-400">({PERSONAL_INFO.family.father.role})</span>
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100 dark:border-stone-800/80">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">মাতার পরিচয় (Mother)</dt>
                  <dd className="font-medium text-stone-800 dark:text-stone-200 text-right">
                    {PERSONAL_INFO.family.mother.name} <span className="text-stone-500 dark:text-stone-400">({PERSONAL_INFO.family.mother.role})</span>
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100 dark:border-stone-800/80">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">ব্যবসায়িক সূচনা (Journey)</dt>
                  <dd className="font-semibold text-emerald-700 dark:text-emerald-400 text-right">
                    {PERSONAL_INFO.businessJourneyStartYear} সাল থেকে ({PERSONAL_INFO.businessJourneyStartYearEn})
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100 dark:border-stone-800/80">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">বর্তমান ভূমিকা (Current Role)</dt>
                  <dd className="font-bold text-[#FA812F] text-right">
                    {PERSONAL_INFO.currentRole}
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100 dark:border-stone-800/80">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">প্রাতিষ্ঠানিক শিক্ষা (Education)</dt>
                  <dd className="font-medium text-stone-800 dark:text-stone-200 text-right">
                    LLB ১ম বর্ষ &middot; HSC (রংপুর) &middot; SSC (Nurjahanpur RMC High School)
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100 dark:border-stone-800/80">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">মোবাইল (Phone)</dt>
                  <dd className="font-mono text-stone-800 dark:text-stone-200 text-right">{PERSONAL_INFO.phone1}, {PERSONAL_INFO.phone2}</dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100 dark:border-stone-800/80">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">ইমেইল (Email)</dt>
                  <dd className="font-mono text-stone-800 dark:text-stone-200 text-right">{PERSONAL_INFO.email}</dd>
                </div>

                <div className="flex items-start justify-between py-1.5">
                  <dt className="text-stone-500 dark:text-stone-400 font-medium">অফিসিয়াল ডোমেইন</dt>
                  <dd className="font-mono text-[#FA812F] font-bold text-right">{PERSONAL_INFO.domain}</dd>
                </div>

              </dl>
            </div>

            {/* Quick Banner Action */}
            <div className="bg-stone-900 dark:bg-[#141210] text-white p-6 rounded-2xl border dark:border-stone-800 shadow-xs space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FA812F]">
                ব্যবসায়িক ও পেশাগত লক্ষ্য
              </span>
              <p className="text-xs sm:text-sm text-stone-300 dark:text-stone-400 leading-relaxed">
                উদ্ভাবনী বিজনেস প্ল্যানিং, ব্র্যান্ডিং এবং লিগ্যাল নলেজের সমন্বয়ে ডিজিটাল ই-কমার্স ও ফ্যাশন ইন্ডাস্ট্রিতে দীর্ঘমেয়াদি ভ্যালু তৈরি করা।
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
