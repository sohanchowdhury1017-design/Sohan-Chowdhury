import React from 'react';
import { ArrowUpRight, Briefcase, UserCheck, ShieldCheck, Scale, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-100/60 border-t border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold block mb-1">
              ০১. পরিচিতি ও দৃষ্টিভঙ্গি &middot; Profile &amp; Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              আমার সম্পর্কে | About Me
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans">
            জ্ঞান, পর্যবেক্ষণ ও বাস্তব অভিজ্ঞতাকে সমন্বিত করে একটি শক্তিশালী পেশাগত ক্যারিয়ার বিনির্মাণ।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column with User's Exact Bengali Text */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-base font-sans">
            
            <p className="text-lg font-medium text-stone-900 leading-relaxed border-l-4 border-[#FA812F] pl-4 py-1 bg-white/60 rounded-r-md">
              {PERSONAL_INFO.aboutMeParagraphs[0]}
            </p>

            <p>
              {PERSONAL_INFO.aboutMeParagraphs[1]}
            </p>

            <p>
              {PERSONAL_INFO.aboutMeParagraphs[2]}
            </p>

            {/* Core Working Values Box */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs my-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
                কাজের মূল ভিত্তি &middot; Core Values of Practice
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {['Creativity', 'Critical Thinking', 'Observation', 'Logical Reasoning', 'Professional Communication'].map((val) => (
                  <div key={val} className="flex items-center gap-2 text-xs font-semibold text-stone-800 bg-stone-50 px-3 py-2 rounded-lg border border-stone-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FA812F]" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.sifriUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl text-xs font-semibold tracking-wide uppercase hover:bg-stone-800 transition-colors shadow-xs"
              >
                <span>সিফরি স্টোর পরিদর্শন করুন</span>
                <ArrowUpRight className="w-4 h-4 text-[#FA812F]" />
              </a>

              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 bg-white text-stone-800 rounded-xl text-xs font-semibold tracking-wide hover:bg-stone-50 transition-colors"
              >
                <span>Facebook Profile</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </a>
            </div>

          </div>

          {/* Dossier Card: পেশাগত পরিচয় | Professional Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200 shadow-xs relative">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FA812F] font-bold">
                  পেশাগত পরিচয় | Profile
                </span>
                <span className="text-xs font-mono text-stone-400">Official</span>
              </div>

              <dl className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start justify-between py-1.5 border-b border-stone-100">
                  <dt className="text-stone-500 font-medium">নাম (Full Name)</dt>
                  <dd className="font-serif font-bold text-stone-900 text-right">{PERSONAL_INFO.fullName}</dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100">
                  <dt className="text-stone-500 font-medium">Working Category</dt>
                  <dd className="font-semibold text-stone-800 text-right">{PERSONAL_INFO.workingCategory}</dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100">
                  <dt className="text-stone-500 font-medium">Current Role</dt>
                  <dd className="font-bold text-[#FA812F] text-right">
                    {PERSONAL_INFO.currentRole}
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100">
                  <dt className="text-stone-500 font-medium">Professional Identity</dt>
                  <dd className="font-medium text-stone-800 text-right">
                    {PERSONAL_INFO.headline}
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100">
                  <dt className="text-stone-500 font-medium">আইন শিক্ষা (Education)</dt>
                  <dd className="font-medium text-stone-800 text-right">
                    {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.year})
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100">
                  <dt className="text-stone-500 font-medium">মোবাইল (Phone)</dt>
                  <dd className="font-mono text-stone-800 text-right">{PERSONAL_INFO.phone1}, {PERSONAL_INFO.phone2}</dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-stone-100">
                  <dt className="text-stone-500 font-medium">ইমেইল (Email)</dt>
                  <dd className="font-mono text-stone-800 text-right">{PERSONAL_INFO.email}</dd>
                </div>

                <div className="flex items-start justify-between py-1.5">
                  <dt className="text-stone-500 font-medium">অফিসিয়াল ডোমেইন</dt>
                  <dd className="font-mono text-[#FA812F] font-bold text-right">{PERSONAL_INFO.domain}</dd>
                </div>

              </dl>
            </div>

            {/* Quick Banner Action */}
            <div className="bg-stone-900 text-white p-6 rounded-2xl shadow-xs space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FA812F]">
                ব্যবসায়িক ও পেশাগত লক্ষ্য
              </span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                উদ্ভাবনী বিজনেস প্ল্যানিং, ব্র্যান্ডিং এবং লিগ্যাল নলেজের সমন্বয়ে ডিজিটাল ই-কমার্স ও ফ্যাশন ইন্ডাস্ট্রিতে দীর্ঘমেয়াদি ভ্যালু তৈরি করা।
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
