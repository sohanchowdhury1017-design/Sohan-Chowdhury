import React from 'react';
import { Target, Lightbulb, MessageSquare, Compass, CheckCircle2, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills, professionalInterests } = PERSONAL_INFO;

  return (
    <section id="skills" className="py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold block mb-1">
              ০৫. দক্ষতা ও পেশাগত আগ্রহ &middot; Skills &amp; Interests
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              দক্ষতা | Skills
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans">
            প্রফেশনাল স্কিলস, বিশ্লেষণাত্মক দক্ষতা এবং কার্যকর ব্যবসায়িক যোগাযোগের মেলবন্ধন।
          </p>
        </div>

        {/* 3 Main Skill Domains */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Domain 1: Professional Skills */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100 mb-5">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FA812F] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">Professional Skills</h3>
                  <span className="text-xs text-stone-500 font-sans">পেশাগত দক্ষতা</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {skills.professional.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FA812F] shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Domain 2: Analytical Skills */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100 mb-5">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#2DA8D8] flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">Analytical Skills</h3>
                  <span className="text-xs text-stone-500 font-sans">বিশ্লেষণাত্মক দক্ষতা</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {skills.analytical.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DA8D8] shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Domain 3: Communication Skills */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100 mb-5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">Communication Skills</h3>
                  <span className="text-xs text-stone-500 font-sans">যোগাযোগ দক্ষতা</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {skills.communication.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Professional Interests Section */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-stone-100">
            <Compass className="w-5 h-5 text-[#FA812F]" />
            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                পেশাগত আগ্রহ | Professional Interests
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                যে ক্ষেত্রগুলোতে নিয়মিত কাজ করা এবং গবেষণা করতে আমি সবচেয়ে বেশি আগ্রহী।
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {professionalInterests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 rounded-xl bg-stone-50 border border-stone-200/90 text-stone-800 text-xs sm:text-sm font-medium hover:border-[#FA812F] hover:bg-orange-50/60 hover:text-[#FA812F] transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
