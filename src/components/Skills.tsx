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
  Sparkles,
  Briefcase,
  TrendingUp,
  ShoppingBag,
  Share2,
  CalendarDays,
  HeartHandshake,
  Users,
  UserCheck,
  BadgeDollarSign,
  Eye,
  Brain,
  GitBranch,
  LineChart,
  CheckCircle2,
  Search,
  Wrench,
  Headphones,
  Scale,
  MessagesSquare,
  Globe,
  Rocket,
  Building2,
  Shirt,
  Newspaper
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills, professionalInterests, certifications } = PERSONAL_INFO;

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <Palette className="w-6 h-6 text-[#D4AF37]" />;
      case 'megaphone':
        return <Megaphone className="w-6 h-6 text-[#F59E0B]" />;
      case 'music':
        return <Music className="w-6 h-6 text-[#D4AF37]" />;
      case 'award':
      default:
        return <Award className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  const getBadgeColor = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30';
      case 'megaphone':
        return 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30';
      case 'music':
        return 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30';
      case 'award':
      default:
        return 'bg-[#1F242E] text-[#F8FAFC] border-[#1F242E]';
    }
  };

  // Modern SVG icon resolver for Professional Skills
  const getProfessionalSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes('brand')) return <Award className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('marketing')) return <Megaphone className="w-3.5 h-3.5 text-[#F59E0B]" />;
    if (s.includes('development') || s.includes('business dev')) return <Rocket className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('commerce') || s.includes('e-commerce')) return <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('social media')) return <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('planning')) return <CalendarDays className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('relationship') || s.includes('crm')) return <HeartHandshake className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('team')) return <Users className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('client')) return <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('sales')) return <BadgeDollarSign className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('creative')) return <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />;
    return <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />;
  };

  // Modern SVG icon resolver for Analytical Skills
  const getAnalyticalSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes('observation')) return <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('critical')) return <Brain className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('logical')) return <GitBranch className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('analytical')) return <LineChart className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('decision')) return <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('research')) return <Search className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('problem')) return <Wrench className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('strategic')) return <Target className="w-3.5 h-3.5 text-[#D4AF37]" />;
    return <Lightbulb className="w-3.5 h-3.5 text-[#D4AF37]" />;
  };

  // Modern SVG icon resolver for Communication Skills
  const getCommunicationSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes('professional')) return <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('customer')) return <Headphones className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('client')) return <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('negotiation')) return <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('team')) return <MessagesSquare className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('social media')) return <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />;
    return <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />;
  };

  // Modern SVG icon resolver for Certification Skills pills
  const getCertSkillIcon = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes('photoshop') || s.includes('photo') || s.includes('design')) return <Palette className="w-3 h-3 text-[#D4AF37]" />;
    if (s.includes('marketing') || s.includes('ads') || s.includes('seo')) return <Megaphone className="w-3 h-3 text-[#F59E0B]" />;
    if (s.includes('guitar') || s.includes('sound') || s.includes('stage') || s.includes('music')) return <Music className="w-3 h-3 text-[#D4AF37]" />;
    if (s.includes('legal') || s.includes('law')) return <Scale className="w-3 h-3 text-[#D4AF37]" />;
    if (s.includes('commerce') || s.includes('operations')) return <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />;
    return <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />;
  };

  // Modern SVG icon resolver for Professional Interests pills
  const getInterestIcon = (interest: string) => {
    const s = interest.toLowerCase();
    if (s.includes('entrepreneur')) return <Rocket className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('brand') || s.includes('business')) return <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('fashion') || s.includes('clothing')) return <Shirt className="w-3.5 h-3.5 text-[#F59E0B]" />;
    if (s.includes('commerce')) return <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('digital')) return <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('law') || s.includes('legal')) return <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('investigation')) return <Search className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('journalism')) return <Newspaper className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('strategy')) return <Target className="w-3.5 h-3.5 text-[#D4AF37]" />;
    if (s.includes('creative')) return <Lightbulb className="w-3.5 h-3.5 text-[#F59E0B]" />;
    if (s.includes('public')) return <Users className="w-3.5 h-3.5 text-[#D4AF37]" />;
    return <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />;
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#0B0C10] border-t border-[#1F242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                ০৪. সার্টিফিকেশন ও বিশেষ দক্ষতা &middot; Certifications &amp; Skills
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8FAFC] tracking-tight">
              Certifications &amp; Skills
            </h2>
            <p className="text-xs sm:text-sm text-[#D4AF37] font-medium mt-1 font-mono">
              সার্টিফিকেশন, পেশাগত দক্ষতা ও বিশেষ পারদর্শিতা
            </p>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md font-sans">
            ফটোশপ ও গ্রাফিক ডিজাইন, আধুনিক ডিজিটাল মার্কেটিং, অ্যাকোস্টিক গিটার বাদন এবং আইনি ও ব্যবসায়িক গবেষণার সমন্বিত ক্রেডেনশিয়ালস।
          </p>
        </div>

        {/* ================= PRIMARY CERTIFICATIONS SPOTLIGHT ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6 scroll-reveal">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-lg font-serif font-bold text-[#F8FAFC]">
              সার্টিফিকেশন ও বিশেষজ্ঞ ক্ষেত্র &middot; Verified Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={cert.id}
                className={`bg-[#13161C] p-7 sm:p-8 rounded-2xl border border-[#1F242E] shadow-xl hover:border-[#D4AF37] transition-all group flex flex-col justify-between scroll-reveal ${
                  idx % 2 === 1 ? 'delay-100' : ''
                }`}
              >
                <div>
                  {/* Top Category & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0B0C10] border border-[#1F242E] flex items-center justify-center group-hover:scale-105 group-hover:border-[#D4AF37] transition-transform">
                        {getCertIcon(cert.icon)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block">
                          {cert.category}
                        </span>
                        <span className="text-xs font-semibold text-[#F8FAFC]">
                          {cert.categoryBn}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${getBadgeColor(cert.icon)}`}>
                      {cert.credentialBadge}
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-[#F8FAFC] mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {cert.title}
                  </h4>
                  <div className="text-xs text-[#94A3B8] font-sans mb-3">
                    {cert.titleBn}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans mb-5">
                    {cert.description}
                  </p>
                </div>

                {/* Key Skills Pills with Small Modern SVG Icons */}
                <div className="pt-4 border-t border-[#1F242E]">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#0B0C10] text-[#F8FAFC] px-3 py-1.5 rounded-lg border border-[#1F242E] hover:border-[#D4AF37] transition-colors"
                      >
                        {getCertSkillIcon(skill)}
                        <span>{skill}</span>
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
            <Target className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-lg font-serif font-bold text-[#F8FAFC]">
              দক্ষতার ক্ষেত্রসমূহ &middot; Core Skill Domains
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Domain 1: Professional Skills */}
            <div className="bg-[#13161C] p-7 rounded-2xl border border-[#1F242E] shadow-xl flex flex-col justify-between transition-colors">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-[#1F242E] mb-5">
                  <div className="w-9 h-9 rounded-xl bg-[#0B0C10] border border-[#1F242E] text-[#D4AF37] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F8FAFC]">Professional Skills</h4>
                    <span className="text-xs text-[#94A3B8] font-sans">পেশাগত দক্ষতা</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {skills.professional.map((skill) => (
                    <li 
                      key={skill} 
                      className="group/item flex items-center gap-3 p-2 rounded-xl bg-[#0B0C10]/60 hover:bg-[#0B0C10] transition-all border border-[#1F242E] hover:border-[#D4AF37]/50"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#13161C] border border-[#1F242E] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                        {getProfessionalSkillIcon(skill)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#F8FAFC] group-hover/item:text-[#D4AF37] transition-colors font-sans">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Domain 2: Analytical Skills */}
            <div className="bg-[#13161C] p-7 rounded-2xl border border-[#1F242E] shadow-xl flex flex-col justify-between transition-colors">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-[#1F242E] mb-5">
                  <div className="w-9 h-9 rounded-xl bg-[#0B0C10] border border-[#1F242E] text-[#D4AF37] flex items-center justify-center">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F8FAFC]">Analytical Skills</h4>
                    <span className="text-xs text-[#94A3B8] font-sans">বিশ্লেষণাত্মক দক্ষতা</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {skills.analytical.map((skill) => (
                    <li 
                      key={skill} 
                      className="group/item flex items-center gap-3 p-2 rounded-xl bg-[#0B0C10]/60 hover:bg-[#0B0C10] transition-all border border-[#1F242E] hover:border-[#D4AF37]/50"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#13161C] border border-[#1F242E] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                        {getAnalyticalSkillIcon(skill)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#F8FAFC] group-hover/item:text-[#D4AF37] transition-colors font-sans">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Domain 3: Communication Skills */}
            <div className="bg-[#13161C] p-7 rounded-2xl border border-[#1F242E] shadow-xl flex flex-col justify-between transition-colors">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-[#1F242E] mb-5">
                  <div className="w-9 h-9 rounded-xl bg-[#0B0C10] border border-[#1F242E] text-[#D4AF37] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F8FAFC]">Communication Skills</h4>
                    <span className="text-xs text-[#94A3B8] font-sans">যোগাযোগ দক্ষতা</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {skills.communication.map((skill) => (
                    <li 
                      key={skill} 
                      className="group/item flex items-center gap-3 p-2 rounded-xl bg-[#0B0C10]/60 hover:bg-[#0B0C10] transition-all border border-[#1F242E] hover:border-[#D4AF37]/50"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#13161C] border border-[#1F242E] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                        {getCommunicationSkillIcon(skill)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#F8FAFC] group-hover/item:text-[#D4AF37] transition-colors font-sans">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* ================= PROFESSIONAL INTERESTS ================= */}
        <div className="bg-[#13161C] p-7 sm:p-9 rounded-2xl border border-[#1F242E] shadow-xl transition-colors">
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-[#1F242E]">
            <Compass className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="text-lg font-serif font-bold text-[#F8FAFC]">
                পেশাগত আগ্রহ | Professional Interests
              </h3>
              <p className="text-xs text-[#94A3B8] font-sans">
                যে ক্ষেত্রগুলোতে নিয়মিত কাজ করা এবং গবেষণা করতে আমি সবচেয়ে বেশি আগ্রহী।
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {professionalInterests.map((interest) => (
              <span
                key={interest}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B0C10] border border-[#1F242E] text-[#F8FAFC] text-xs sm:text-sm font-medium hover:border-[#D4AF37] transition-all shadow-sm cursor-default"
              >
                <span>{getInterestIcon(interest)}</span>
                <span>{interest}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
