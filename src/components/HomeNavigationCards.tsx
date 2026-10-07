import React from 'react';
import { 
  User, 
  ShoppingBag, 
  GraduationCap, 
  Award, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2,
  BookOpen
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
      badge: 'ব্যক্তিগত পরিচয়',
      badgeColor: 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30',
      icon: <User className="w-5 h-5 text-[#D4AF37]" />,
      highlights: [
        `出生/জন্ম: 19 July 2006 (Wednesday / বুধবার)`,
        `পিতা: ${PERSONAL_INFO.family.father.name} (${PERSONAL_INFO.family.father.role})`,
        `মাতা: ${PERSONAL_INFO.family.mother.name} (${PERSONAL_INFO.family.mother.role})`,
        'অ্যাকোস্টিক গিটার বাদন ও অফিসিয়াল ডসিয়ার'
      ],
      ctaLabel: 'সম্পূর্ণ পরিচয় দেখুন',
      path: '/about/',
      accentColor: '#D4AF37',
    },
    {
      id: 'sifri',
      number: '০২',
      titleBn: 'সিফরি (SIFRI) ভেঞ্চার',
      titleEn: 'Executive Role & E-Commerce',
      badge: 'প্রধান দায়িত্ব',
      badgeColor: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30',
      icon: <ShoppingBag className="w-5 h-5 text-[#F59E0B]" />,
      highlights: [
        'CEO & Founder — SIFRI (sifribd.com)',
        '২০২১ সাল থেকে শুরু হওয়া ব্যবসায়িক পথচলা',
        'ফ্যাশন ও লাইফস্টাইল ই-কমার্স প্ল্যাটফর্ম',
        'সারাদেশে ৬৪ জেলায় বিস্তৃত ডেলিভারি নেটওয়ার্ক'
      ],
      ctaLabel: 'সিফরি ভেঞ্চার দেখুন',
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
        'Bachelor of Laws (LL.B.) — ১ম বর্ষে অধ্যয়নরত',
        'উচ্চ মাধ্যমিক (HSC) — রংপুর থেকে সম্পন্ন',
        'মাধ্যমিক (SSC) — নূরজাহানপুর আরএমসি হাই স্কুল',
        'লিগ্যাল রিসার্চ, অনুসন্ধান ও ক্রিটিক্যাল থিংকিং'
      ],
      ctaLabel: 'শিক্ষাজীবন দেখুন',
      path: '/education/',
      accentColor: '#D4AF37',
    },
    {
      id: 'skills',
      number: '০৪',
      titleBn: 'দক্ষতা ও কাজের ক্ষেত্র',
      titleEn: 'Certifications & 15 Focus Areas',
      badge: 'বিশেষজ্ঞ দক্ষতা',
      badgeColor: 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30',
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
      highlights: [
        'Photoshop Expert & Graphic Design Certification',
        'Marketing & Brand Strategy Certification',
        '১৫টি প্রফেশনাল বিজনেস ও ম্যানেজমেন্ট ক্ষেত্র',
        'অবজারভেশন, অ্যানালিটিক্যাল ও লিডারশিপ স্কিলস'
      ],
      ctaLabel: 'দক্ষতা ও ক্ষেত্র দেখুন',
      path: '/skills/',
      accentColor: '#D4AF37',
    },
    {
      id: 'contact',
      number: '০৫',
      titleBn: 'সরাসরি যোগাযোগ',
      titleEn: 'Contact, Phones & Message Form',
      badge: 'সরাসরি পৌঁছান',
      badgeColor: 'bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/40 font-bold',
      icon: <PhoneCall className="w-5 h-5 text-[#D4AF37]" />,
      highlights: [
        `WhatsApp ও প্রাইমারি ফোন: ${PERSONAL_INFO.phone1}`,
        `বিকল্প যোগাযোগ নম্বর: ${PERSONAL_INFO.phone2}`,
        `অফিসিয়াল ইমেইল: ${PERSONAL_INFO.email}`,
        'সরাসরি মেসেজ পাঠানোর ফর্ম ও সোশ্যাল লিঙ্ক'
      ],
      ctaLabel: 'যোগাযোগ পেজে যান',
      path: '/contact/',
      accentColor: '#D4AF37',
      featured: true
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0B0C10] border-t border-[#1F242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5 Distinct Cards / Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={(e) => navigateTo(card.path, card.id, e)}
              className={`group relative bg-[#13161C] rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-md hover:shadow-2xl ${
                card.featured
                  ? 'border-[#D4AF37] md:col-span-2 lg:col-span-1 shadow-[0_0_25px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/30'
                  : 'border-[#1F242E] hover:border-[#D4AF37]/60'
              }`}
            >
              <div>
                {/* Header Row: Icon, Number, Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#0B0C10] border border-[#1F242E] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all">
                    {card.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#94A3B8]">
                      {card.number}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors mb-1">
                  {card.titleBn}
                </h3>
                <div className="text-xs font-mono text-[#94A3B8] mb-5">
                  {card.titleEn}
                </div>

                {/* Key Information Bullets */}
                <ul className="space-y-2.5 mb-7">
                  {card.highlights.map((item, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#D4AF37]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Button - Champagne Gold Accent */}
              <div className="pt-5 border-t border-[#1F242E]">
                <div className={`w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  card.featured
                    ? 'bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                    : 'bg-[#0B0C10] hover:bg-[#D4AF37] text-[#F8FAFC] hover:text-[#0B0C10] border border-[#1F242E] hover:border-[#D4AF37]'
                }`}>
                  <span>{card.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
