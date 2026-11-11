import React from 'react';
import { 
  ArrowUpRight, 
  Briefcase, 
  UserCheck, 
  ShieldCheck, 
  Scale, 
  Compass, 
  CheckCircle2, 
  Calendar, 
  Building, 
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Globe,
  Sparkles,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import sohanPortraitImg from '../assets/images/sohan_official_portrait.jpg';
import sohanGuitarImg from '../assets/images/sohan_avatar.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#0B0C10] border-t border-[#1F242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                ০১. পরিচিতি, বায়ো ও পারিবারিক তথ্য &middot; Profile &amp; Dossier
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8FAFC] tracking-tight">
              আমার সম্পর্কে | About Me
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md font-sans">
            জ্ঞান, পর্যবেক্ষণ ও বাস্তব অভিজ্ঞতাকে সমন্বিত করে একটি শক্তিশালী পেশাগত ক্যারিয়ার বিনির্মাণ।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#94A3B8] leading-relaxed text-sm sm:text-base font-sans scroll-reveal-left">
            
            {/* Lead Statement */}
            <p className="text-base sm:text-lg font-medium text-[#F8FAFC] leading-relaxed border-l-4 border-[#D4AF37] pl-4 py-3 bg-[#13161C] rounded-r-xl border border-[#1F242E] shadow-sm">
              {PERSONAL_INFO.aboutMeParagraphs[0]}
            </p>

            <p>
              {PERSONAL_INFO.aboutMeParagraphs[1]}
            </p>

            <p>
              {PERSONAL_INFO.aboutMeParagraphs[2]}
            </p>

            {/* Guitar Artistry Box with Authentic Acoustic Performance Photo */}
            {PERSONAL_INFO.aboutMeParagraphs[3] && (
              <div className="bg-[#13161C] border border-[#1F242E] hover:border-[#D4AF37]/50 p-5 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 my-4 text-[#F8FAFC] shadow-sm transition-colors group">
                <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-[#1F242E] group-hover:border-[#D4AF37]/60 shadow-md">
                  <img
                    src={sohanGuitarImg}
                    alt="NBN Sohan Acoustic Guitar Performance"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-1 right-1 text-xs">🎸</span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-bold block mb-1">
                    সৃজনশীল শিল্পচর্চা &middot; Acoustic Guitar Artistry
                  </span>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                    {PERSONAL_INFO.aboutMeParagraphs[3]}
                  </p>
                </div>
              </div>
            )}

            {/* Core Working Values Box */}
            <div className="bg-[#13161C] p-6 rounded-2xl border border-[#1F242E] shadow-sm my-6 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>কাজের মূল ভিত্তি &middot; Core Values of Practice</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {['Creativity', 'Critical Thinking', 'Observation', 'Logical Reasoning', 'Professional Communication', 'Strategic Planning'].map((val) => (
                  <div key={val} className="flex items-center gap-2 text-xs font-semibold text-[#F8FAFC] bg-[#0B0C10] px-3 py-2 rounded-xl border border-[#1F242E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= PERSONAL & FAMILY BACKGROUND CARD ================= */}
            <div className="bg-[#13161C] p-6 sm:p-7 rounded-2xl border border-[#1F242E] shadow-sm my-6 space-y-4">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#1F242E]">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#F8FAFC]">
                    ব্যক্তিগত ও পারিবারিক পরিচয় | Personal &amp; Family Profile
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full font-bold border border-[#D4AF37]/30">
                  Verified Bio
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Birth Info */}
                <div className="p-3.5 bg-[#0B0C10] rounded-xl border border-[#1F242E] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block">
                      জন্ম তারিখ &middot; Date of Birth
                    </span>
                    <span className="text-sm font-bold text-[#D4AF37] block font-mono">
                      19 July 2006
                    </span>
                    <span className="text-xs text-[#94A3B8] font-medium block">
                      Wednesday (১৯ জুলাই ২০০৬, বুধবার)
                    </span>
                  </div>
                </div>

                {/* Business Journey Since 2021 */}
                <div className="p-3.5 bg-[#0B0C10] rounded-xl border border-[#1F242E] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block">
                      ব্যবসায়িক পথচলা &middot; Journey Since
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#F8FAFC] block">
                      {PERSONAL_INFO.businessJourneyStartYear} সাল থেকে সক্রিয়
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono">
                      Started in {PERSONAL_INFO.businessJourneyStartYearEn} (SIFRI)
                    </span>
                  </div>
                </div>

                {/* Father Info */}
                <div className="p-3.5 bg-[#0B0C10] rounded-xl border border-[#1F242E] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#13161C] text-[#D4AF37] border border-[#1F242E] flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block">
                      পিতার পরিচয় &middot; Father
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#F8FAFC] block">
                      {PERSONAL_INFO.family.father.name}
                    </span>
                    <span className="text-xs text-[#94A3B8]">
                      {PERSONAL_INFO.family.father.role} ({PERSONAL_INFO.family.father.roleBn})
                    </span>
                  </div>
                </div>

                {/* Mother Info */}
                <div className="p-3.5 bg-[#0B0C10] rounded-xl border border-[#1F242E] flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#13161C] text-[#D4AF37] border border-[#1F242E] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block">
                      মাতার পরিচয় &middot; Mother
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#F8FAFC] block">
                      {PERSONAL_INFO.family.mother.name}
                    </span>
                    <span className="text-xs text-[#94A3B8]">
                      {PERSONAL_INFO.family.mother.role} ({PERSONAL_INFO.family.mother.roleBn})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.sifriUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] rounded-xl text-xs font-bold tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                <span>সিফরি স্টোর পরিদর্শন করুন</span>
                <ArrowUpRight className="w-4 h-4 text-[#0B0C10]" />
              </a>

              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#1F242E] bg-[#13161C] text-[#F8FAFC] hover:border-[#D4AF37] rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                <span>Facebook Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone1}`}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#1F242E] bg-[#13161C] text-[#F8FAFC] hover:border-[#D4AF37] rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>সরাসরি কল: {PERSONAL_INFO.phone1}</span>
              </a>
            </div>

          </div>

          {/* Dossier Card: পেশাগত পরিচয় | Professional Profile */}
          <div className="lg:col-span-5 space-y-6 scroll-reveal-right delay-100">
            <div className="bg-[#13161C] p-7 sm:p-8 rounded-2xl border border-[#1F242E] shadow-xl relative">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#1F242E] mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>ব্যক্তিগত ও পেশাগত তথ্য &middot; Dossier</span>
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8] bg-[#0B0C10] px-2 py-0.5 rounded border border-[#1F242E]">
                  Official 2026
                </span>
              </div>

              {/* Authentic Photo Profile Badge - High-end Portrait Card */}
              <div className="mb-6 p-4 bg-[#0B0C10] rounded-2xl border border-[#1F242E] flex flex-col sm:flex-row items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={sohanPortraitImg}
                    alt={PERSONAL_INFO.fullName}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                  />
                  <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-[#D4AF37] border-2 border-[#0B0C10] text-[10px] text-[#0B0C10] font-bold flex items-center gap-1 shadow-md">
                    <span>✓</span>
                    <span>VERIFIED</span>
                  </span>
                </div>
                <div className="min-w-0 text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-mono font-bold uppercase mb-1">
                    অফিসিয়াল প্রোফাইল ছবি
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#F8FAFC] truncate">{PERSONAL_INFO.fullName}</h3>
                  <p className="text-xs font-mono text-[#D4AF37] font-semibold">{PERSONAL_INFO.preferredCall}</p>
                  <p className="text-xs text-[#94A3B8] mt-1">{PERSONAL_INFO.currentRole}</p>
                </div>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                
                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">পূর্ণ নাম (Full Legal Name)</dt>
                  <dd className="font-serif font-bold text-[#F8FAFC] text-right">{PERSONAL_INFO.fullName}</dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">পরিচিত নাম (Known As)</dt>
                  <dd className="font-mono font-bold text-[#D4AF37] text-right">{PERSONAL_INFO.preferredCall}</dd>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">জন্ম তারিখ (Birth Date)</dt>
                  <dd className="text-right">
                    <span className="font-mono font-bold text-sm text-[#F8FAFC] block">
                      19 July 2006 (বুধবার)
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-medium block">
                      Wednesday &middot; ১৯ জুলাই ২০০৬
                    </span>
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">পিতার পরিচয় (Father)</dt>
                  <dd className="font-medium text-[#F8FAFC] text-right">
                    {PERSONAL_INFO.family.father.name} <span className="text-[#94A3B8]">({PERSONAL_INFO.family.father.roleBn})</span>
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">মাতার পরিচয় (Mother)</dt>
                  <dd className="font-medium text-[#F8FAFC] text-right">
                    {PERSONAL_INFO.family.mother.name} <span className="text-[#94A3B8]">({PERSONAL_INFO.family.mother.roleBn})</span>
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">উদ্যোগের শুরু (Journey)</dt>
                  <dd className="font-semibold text-[#D4AF37] text-right">
                    {PERSONAL_INFO.businessJourneyStartYear} সাল থেকে ({PERSONAL_INFO.businessJourneyStartYearEn})
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">বর্তমান ভূমিকা (Current Role)</dt>
                  <dd className="font-bold text-[#F8FAFC] text-right">
                    {PERSONAL_INFO.currentRole}
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">প্রাতিষ্ঠানিক শিক্ষা (Education)</dt>
                  <dd className="font-medium text-[#F8FAFC] text-right text-xs">
                    LLB ১ম বর্ষ &bull; HSC (রংপুর) &bull; SSC (নূরজাহানপুর আরএমসি হাই স্কুল)
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">মোবাইল নম্বর (Phone)</dt>
                  <dd className="font-mono text-[#F8FAFC] text-right">
                    {PERSONAL_INFO.phone1}, {PERSONAL_INFO.phone2}
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">ইমেইল (Email)</dt>
                  <dd className="font-mono text-[#F8FAFC] text-right">{PERSONAL_INFO.email}</dd>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-[#1F242E]">
                  <dt className="text-[#94A3B8] font-medium">লোকেশন (Location)</dt>
                  <dd className="text-[#F8FAFC] text-right flex items-center justify-end gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{PERSONAL_INFO.location}</span>
                  </dd>
                </div>

                <div className="flex items-start justify-between py-1.5">
                  <dt className="text-[#94A3B8] font-medium">অফিসিয়াল ডোমেইন</dt>
                  <dd className="font-mono text-[#D4AF37] font-bold text-right">{PERSONAL_INFO.domain}</dd>
                </div>

              </dl>
            </div>

            {/* Quick Vision Card */}
            <div className="bg-[#13161C] p-6 rounded-2xl border border-[#1F242E] shadow-sm space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>ব্যবসায়িক ও পেশাগত লক্ষ্য &middot; Mission</span>
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                উদ্ভাবনী বিজনেস প্ল্যানিং, প্রিমিয়াম ব্র্যান্ডিং এবং আইনি প্রজ্ঞার সমন্বয়ে ডিজিটাল ই-কমার্স ও ফ্যাশন ইন্ডাস্ট্রিতে দীর্ঘমেয়াদি নির্ভরযোগ্য ভ্যালু তৈরি করা।
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
