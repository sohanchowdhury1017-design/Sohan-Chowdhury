import React from 'react';
import { 
  User, 
  ShoppingBag, 
  GraduationCap, 
  Award, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2
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
      badgeColor: 'bg-orange-50 dark:bg-orange-950/50 text-[#FA812F] border-orange-200 dark:border-orange-900/60',
      icon: <User className="w-5 h-5 text-[#FA812F]" />,
      highlights: [
        `জন্ম: 19 July 2006 (Wednesday / বুধবার)`,
        `পিতা: ${PERSONAL_INFO.family.father.name} (${PERSONAL_INFO.family.father.role})`,
        `মাতা: ${PERSONAL_INFO.family.mother.name} (${PERSONAL_INFO.family.mother.role})`,
        'অ্যাকোস্টিক গিটার বাদন ও অফিসিয়াল ডসিয়ার'
      ],
      ctaLabel: 'সম্পূর্ণ পরিচয় দেখুন',
      path: '/about/',
      accentColor: '#FA812F',
    },
    {
      id: 'sifri',
      number: '০২',
      titleBn: 'সিফরি (SIFRI) ভেঞ্চার',
      titleEn: 'Executive Role & E-Commerce',
      badge: 'প্রধান দায়িত্ব',
      badgeColor: 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/60',
      icon: <ShoppingBag className="w-5 h-5 text-amber-500" />,
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
      badgeColor: 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/80',
      icon: <GraduationCap className="w-5 h-5 text-sky-500" />,
      highlights: [
        'Bachelor of Laws (LL.B.) — ১ম বর্ষে অধ্যয়নরত',
        'উচ্চ মাধ্যমিক (HSC) — রংপুর থেকে সম্পন্ন',
        'মাধ্যমিক (SSC) — নূরজাহানপুর আরএমসি হাই স্কুল',
        'লিগ্যাল রিসার্চ, অনুসন্ধান ও ক্রিটিক্যাল থিংকিং'
      ],
      ctaLabel: 'শিক্ষাজীবন দেখুন',
      path: '/education/',
      accentColor: '#0ea5e9',
    },
    {
      id: 'skills',
      number: '০৪',
      titleBn: 'দক্ষতা ও কাজের ক্ষেত্র',
      titleEn: 'Certifications & 15 Focus Areas',
      badge: 'বিশেষজ্ঞ দক্ষতা',
      badgeColor: 'bg-gradient-to-r from-sky-50 to-orange-50 dark:from-sky-950/40 dark:to-orange-950/40 text-stone-800 dark:text-stone-200 border-sky-200/80 dark:border-sky-800/80',
      icon: <Award className="w-5 h-5 text-sky-500" />,
      highlights: [
        'Photoshop Expert & Graphic Design Certification',
        'Marketing & Brand Strategy Certification',
        '১৫টি প্রফেশনাল বিজনেস ও ম্যানেজমেন্ট ক্ষেত্র',
        'অবজারভেশন, অ্যানালিটিক্যাল ও লিডারশিপ স্কিলস'
      ],
      ctaLabel: 'দক্ষতা ও ক্ষেত্র দেখুন',
      path: '/skills/',
      accentColor: '#0284c7',
    },
    {
      id: 'contact',
      number: '০৫',
      titleBn: 'সরাসরি যোগাযোগ',
      titleEn: 'Contact, Phones & Message Form',
      badge: 'সরাসরি পৌঁছান',
      badgeColor: 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/80',
      icon: <PhoneCall className="w-5 h-5 text-[#FA812F]" />,
      highlights: [
        `WhatsApp ও প্রাইমারি ফোন: ${PERSONAL_INFO.phone1}`,
        `বিকল্প যোগাযোগ নম্বর: ${PERSONAL_INFO.phone2}`,
        `অফিসিয়াল ইমেইল: ${PERSONAL_INFO.email}`,
        'সরাসরি মেসেজ পাঠানোর ফর্ম ও সোশ্যাল লিঙ্ক'
      ],
      ctaLabel: 'যোগাযোগ পেজে যান',
      path: '/contact/',
      accentColor: '#FA812F',
      featured: true
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#FAF8F5] dark:bg-[#0b0f17] border-t border-orange-100/70 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5 Distinct Cards / Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={(e) => navigateTo(card.path, card.id, e)}
              className={`group relative bg-white dark:bg-[#131926] rounded-3xl p-7 sm:p-8 border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-sm hover:shadow-md ${
                card.featured
                  ? 'border-[#FA812F] md:col-span-2 lg:col-span-1 ring-1 ring-[#FA812F]/20'
                  : 'border-stone-200 dark:border-stone-800 hover:border-[#FA812F]'
              }`}
            >
              <div>
                {/* Header Row: Icon, Number, Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs ${
                    card.id === 'education' || card.id === 'skills'
                      ? 'bg-sky-100 dark:bg-sky-950/80 text-[#0284c7]'
                      : 'bg-orange-100 dark:bg-orange-950/80 text-[#FA812F]'
                  }`}>
                    {card.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-stone-400 dark:text-stone-500">
                      {card.number}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#FA812F] transition-colors mb-1">
                  {card.titleBn}
                </h3>
                <div className="text-xs font-mono text-stone-500 dark:text-stone-400 mb-5">
                  {card.titleEn}
                </div>

                {/* Key Information Bullets */}
                <ul className="space-y-2.5 mb-7">
                  {card.highlights.map((item, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${card.id === 'education' || card.id === 'skills' ? 'text-[#0284c7]' : 'text-[#FA812F]'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Button - Komla Orange Dominant */}
              <div className="pt-5 border-t border-stone-200 dark:border-stone-800">
                <div className={`w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xs ${
                  card.id === 'education' || card.id === 'skills'
                    ? 'bg-[#0284c7] hover:bg-[#0369a1] text-white'
                    : 'bg-[#FA812F] hover:bg-[#e07124] text-white'
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
