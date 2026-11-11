import React from 'react';
import { 
  User, 
  ShoppingBag, 
  GraduationCap, 
  Award, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2,
  BookOpen,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { navigateTo } from '../utils/navigation';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HomeCardProps {
  id: string;
  number: string;
  titleBn: string;
  titleEn: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  highlights: string[];
  ctaLabel: string;
  path: string;
  accentColor: string;
  featured?: boolean;
}

export const HomeNavigationCards: React.FC = () => {
  const cards: HomeCardProps[] = [
    {
      id: 'about',
      number: '০১',
      titleBn: 'আমার সম্পর্কে',
      titleEn: 'Personal & Family Background',
      badge: 'ব্যক্তিগত বায়ো ও পরিচয়',
      badgeColor: 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30',
      icon: <User className="w-5 h-5 text-[#D4AF37]" />,
      highlights: [
        'পূর্ণ নাম: N.B.N. Sohan Chowdhury (ডাকনাম: NBN Sohan)',
        'জন্ম তারিখ: ১৯ জুলাই ২০০৬ (19 July 2006, বুধবার)',
        `পিতা: ${PERSONAL_INFO.family.father.name} (${PERSONAL_INFO.family.father.roleBn})`,
        `মাতা: ${PERSONAL_INFO.family.mother.name} (${PERSONAL_INFO.family.mother.roleBn})`,
        'শৈল্পিক চর্চা: অ্যাকোস্টিক গিটার বাদন (Acoustic Guitar)',
        'কাজের মূল ভিত্তি: Creativity, Critical Thinking & Observation'
      ],
      ctaLabel: 'নিচে বায়ো ও পরিচয় দেখুন',
      path: '/about/',
      accentColor: '#D4AF37',
    },
    {
      id: 'sifri',
      number: '০২',
      titleBn: 'সিফরি (SIFRI) ভেঞ্চার',
      titleEn: 'Executive Role & E-Commerce',
      badge: 'প্রধান ব্যবসায়িক উদ্যোগ',
      badgeColor: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30',
      icon: <ShoppingBag className="w-5 h-5 text-[#F59E0B]" />,
      highlights: [
        'পদবী: CEO & Founder — SIFRI',
        'অফিসিয়াল ই-কমার্স স্টোর: sifribd.com',
        'ব্যবসায়িক সূচনা: ২০২১ সাল থেকে সক্রিয় উদ্যোগ',
        'কভারেজ: বাংলাদেশের ৬৪ জেলায় নির্ভরযোগ্য হোম ডেলিভারি',
        'ফোকাস: আধুনিক লাইফস্টাইল ও প্রিমিয়াম ফ্যাশন রিটেইল',
        'গ্রাহক আস্থা ও দীর্ঘমেয়াদি ভ্যালু আর্কিটেকচার'
      ],
      ctaLabel: 'নিচে সিফরি ভেঞ্চার দেখুন',
      path: '/sifri/',
      accentColor: '#F59E0B',
    },
    {
      id: 'education',
      number: '০৩',
      titleBn: 'শিক্ষাজীবন',
      titleEn: 'Academic Journey & Legal Studies',
      badge: 'আইন শিক্ষা (LL.B.)',
      badgeColor: 'bg-[#1F242E] text-[#F8FAFC] border-[#1F242E]',
      icon: <GraduationCap className="w-5 h-5 text-[#D4AF37]" />,
      highlights: [
        'ডিগ্রি: Bachelor of Laws (LL.B.) — ১ম বর্ষে অধ্যয়নরত',
        'উচ্চ মাধ্যমিক (HSC): রংপুর (Rangpur) থেকে সফলভাবে সম্পন্ন',
        'মাধ্যমিক (SSC): নূরজাহানপুর আরএমসি হাই স্কুল থেকে সম্পন্ন',
        'বিশেষ গবেষণা: লিগ্যাল রিসার্চ, বিচারব্যবস্থা ও তদন্ত মেথডলজি',
        'বিশ্লেষণধর্মী লিগ্যাল থিংকিং ও কর্পোরেট বাণিজ্যিক আইনি জ্ঞান'
      ],
      ctaLabel: 'নিচে শিক্ষাজীবন দেখুন',
      path: '/education/',
      accentColor: '#D4AF37',
    },
    {
      id: 'skills',
      number: '০৪',
      titleBn: 'দক্ষতা ও কাজের ক্ষেত্র',
      titleEn: 'Certifications & 15 Focus Areas',
      badge: 'বিশেষজ্ঞ ক্রেডেনশিয়ালস',
      badgeColor: 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30',
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
      highlights: [
        'ফটোশপ এক্সপার্ট: Photoshop Certification & Graphic Design',
        'মার্কেটিং এক্সপার্ট: Brand Strategy & Marketing Certification',
        'সংগীতকলা: Acoustic Guitar Performance Certification',
        '১৫টি প্রফেশনাল বিজনেস ও ম্যানেজমেন্ট কাজের ক্ষেত্র',
        'অবজারভেশন, অ্যানালিটিক্যাল ও লিডারশিপ স্ট্র্যাটেজি'
      ],
      ctaLabel: 'নিচে দক্ষতা ও ক্ষেত্র দেখুন',
      path: '/skills/',
      accentColor: '#D4AF37',
    },
    {
      id: 'writing',
      number: '০৫',
      titleBn: 'প্রবন্ধ ও লেখালেখি',
      titleEn: 'Articles & Perspectives',
      badge: 'চিন্তা ও দর্শন',
      badgeColor: 'bg-[#13161C] text-[#F8FAFC] border-[#1F242E]',
      icon: <BookOpen className="w-5 h-5 text-[#D4AF37]" />,
      highlights: [
        'আইন, উদ্যোক্তা দর্শন ও ব্যবসা বিশ্লেষণধর্মী নিবন্ধ',
        'ই-কমার্স ব্র্যান্ডিং ও ভোক্তা মনস্তত্ত্বের অন্তর্দৃষ্টি',
        'ক্রিটিক্যাল থিংকিং ও আধুনিক মিডিয়া নিয়ে দৃষ্টিভঙ্গি',
        'নিয়মিত আর্টিকেল ও প্রফেশনাল রিসার্চ পেপার্স'
      ],
      ctaLabel: 'নিচে লেখালেখি দেখুন',
      path: '/writing/',
      accentColor: '#D4AF37',
    },
    {
      id: 'contact',
      number: '০৬',
      titleBn: 'সরাসরি যোগাযোগ',
      titleEn: 'Contact, Phones & Message Form',
      badge: 'সরাসরি কানেক্ট',
      badgeColor: 'bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/40 font-bold',
      icon: <PhoneCall className="w-5 h-5 text-[#D4AF37]" />,
      highlights: [
        `WhatsApp ও সরাসরি কল: ${PERSONAL_INFO.phone1}`,
        `বিকল্প মোবাইল নম্বর: ${PERSONAL_INFO.phone2}`,
        `অফিসিয়াল ইমেইল: ${PERSONAL_INFO.email}`,
        'লোকেশন: ঢাকা, বাংলাদেশ (Dhaka, Bangladesh)',
        'ফেসবুক ও সোশ্যাল চ্যানেল কানেকশন',
        'ওয়েবসাইটে সরাসরি বার্তা পাঠানোর ইন্টারেক্টিভ ফর্ম'
      ],
      ctaLabel: 'নিচে যোগাযোগ বিভাগে যান',
      path: '/contact/',
      accentColor: '#D4AF37',
      featured: true
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#0B0C10] border-t border-[#1F242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                এক্সক্লুসিভ ডিরেক্টরি &middot; Core Navigation Hub
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F8FAFC] tracking-tight">
              এক নজরে সকল তথ্য ও ক্ষেত্র
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md font-sans">
            নিচে স্ক্রল করে প্রতিটি সেকশনের সম্পূর্ণ বিস্তারিত তথ্য দেখুন অথবা সরাসরি নির্দিষ্ট ক্যাটাগরিতে ক্লিক করুন।
          </p>
        </div>

        {/* 6 Rich Cards / Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={(e) => navigateTo(card.path, card.id, e)}
              className={`group relative bg-[#13161C] rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-md hover:shadow-2xl ${
                card.featured
                  ? 'border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/30'
                  : 'border-[#1F242E] hover:border-[#D4AF37]/60'
              }`}
            >
              <div>
                {/* Header Row: Icon, Number, Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0B0C10] border border-[#1F242E] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all">
                    {card.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#94A3B8]">
                      {card.number}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-serif font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors mb-0.5">
                  {card.titleBn}
                </h3>
                <div className="text-[11px] font-mono text-[#94A3B8] mb-4">
                  {card.titleEn}
                </div>

                {/* Key Information Bullets */}
                <ul className="space-y-2 mb-6">
                  {card.highlights.map((item, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2 text-xs text-[#94A3B8] font-sans leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#D4AF37]" />
                      <span className="group-hover:text-[#F8FAFC] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Button - Champagne Gold Accent */}
              <div className="pt-4 border-t border-[#1F242E]">
                <div className={`w-full inline-flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  card.featured
                    ? 'bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                    : 'bg-[#0B0C10] hover:bg-[#D4AF37] text-[#F8FAFC] hover:text-[#0B0C10] border border-[#1F242E] hover:border-[#D4AF37]'
                }`}>
                  <span>{card.ctaLabel}</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
