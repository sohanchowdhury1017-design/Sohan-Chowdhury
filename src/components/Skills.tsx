import React from 'react';
import { 
  Palette, 
  Megaphone, 
  Music, 
  Award, 
  Target, 
  Lightbulb, 
  MessageSquare, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills, professionalInterests, certifications } = PERSONAL_INFO;

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <Palette className="w-6 h-6 text-[#FA812F]" />;
      case 'megaphone':
        return <Megaphone className="w-6 h-6 text-[#2DA8D8]" />;
      case 'music':
        return <Music className="w-6 h-6 text-purple-500" />;
      case 'award':
      default:
        return <Award className="w-6 h-6 text-amber-500" />;
    }
  };

  const getBadgeColor = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return 'bg-orange-50 text-[#FA812F] border-orange-200';
      case 'megaphone':
        return 'bg-sky-50 text-[#2DA8D8] border-sky-200';
      case 'music':
        return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'award':
      default:
        return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  return (
    <section id="skills" className="py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 scroll-reveal">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold block mb-1">
              ০৫. সার্টিফিকেশন ও বিশেষ দক্ষতা &middot; Certifications &amp; Skills
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              Certifications &amp; Skills
            </h2>
            <p className="text-xs sm:text-sm text-[#FA812F] font-medium mt-1">
              সার্টিফিকেশন, পেশাগত দক্ষতা ও বিশেষ পারদর্শিতা
            </p>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans">
            ফটোশপ ও গ্রাফিক ডিজাইন, আধুনিক ডিজিটাল মার্কেটিং, অ্যাকোস্টিক গিটার বাদন এবং আইনি ও ব্যবসায়িক গবেষণার সমন্বিত ক্রেডেনশিয়ালস।
          </p>
        </div>

        {/* ================= PRIMARY CERTIFICATIONS SPOTLIGHT ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6 scroll-reveal">
            <Sparkles className="w-4 h-4 text-[#FA812F]" />
            <h3 className="text-lg font-serif font-bold text-stone-900">
              সার্টিফিকেশন ও বিশেষজ্ঞ ক্ষেত্র &middot; Verified Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={cert.id}
                className={`bg-white p-7 sm:p-8 rounded-2xl border border-stone-200 shadow-xs hover:border-[#FA812F] hover:shadow-md transition-all group flex flex-col justify-between scroll-reveal ${
                  idx % 2 === 1 ? 'delay-100' : ''
                }`}
              >
                <div>
                  {/* Top Category & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getCertIcon(cert.icon)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                          {cert.category}
                        </span>
                        <span className="text-xs font-semibold text-stone-700">
                          {cert.categoryBn}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${getBadgeColor(cert.icon)}`}>
                      {cert.credentialBadge}
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-stone-900 mb-1 group-hover:text-[#FA812F] transition-colors">
                    {cert.title}
                  </h4>
                  <div className="text-xs text-stone-500 font-sans mb-3">
                    {cert.titleBn}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans mb-5">
                    {cert.description}
                  </p>
                </div>

                {/* Key Skills Pills */}
                <div className="pt-4 border-t border-stone-100">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium bg-stone-50 text-stone-700 px-2.5 py-1 rounded-md border border-stone-200/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ================= 3 CORE SKILL DOMAINS ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-4 h-4 text-[#FA812F]" />
            <h3 className="text-lg font-serif font-bold text-stone-900">
              দক্ষতার ক্ষেত্রসমূহ &middot; Core Skill Domains
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Domain 1: Professional Skills */}
            <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FA812F] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900">Professional Skills</h4>
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
                    <h4 className="text-base font-bold text-stone-900">Analytical Skills</h4>
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
                    <h4 className="text-base font-bold text-stone-900">Communication Skills</h4>
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
        </div>

        {/* ================= PROFESSIONAL INTERESTS ================= */}
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
