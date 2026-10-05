import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, ArrowUpRight, MessageCircle, Phone, Briefcase, Scale, ShoppingBag, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import sohanBannerImg from '../assets/images/sohan_banner.jpg';
import sohanBanner2Img from '../assets/images/sohan_banner_2_opt.jpg';
import { navigateTo } from '../utils/navigation';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const bannerSlides = [
    {
      id: 1,
      url: PERSONAL_INFO.coverPhoto,
      fallback: sohanBannerImg,
      alt: 'N.B.N Sohan Chowdhury - Official Brand Banner 1',
      badge: 'Official Brand Identity',
    },
    {
      id: 2,
      url: PERSONAL_INFO.coverPhoto2,
      fallback: sohanBanner2Img,
      alt: 'N.B.N Sohan Chowdhury - Official Brand Banner 2',
      badge: 'Executive Vision & Leadership',
    },
  ];

  // Automatic 3-second slider interval as requested ("otometic hoy and time 3 second nibe")
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, bannerSlides.length]);

  const quickTopics = [
    { label: 'আমার সম্পর্কে', path: '/about/', targetId: 'about' },
    { label: 'সিফরি (SIFRI)', path: '/sifri/', targetId: 'sifri' },
    { label: 'শিক্ষাজীবন (LL.B.)', path: '/education/', targetId: 'education' },
    { label: 'দক্ষতা ও ক্ষেত্র', path: '/skills/', targetId: 'skills' },
    { label: 'সরাসরি যোগাযোগ', path: '/contact/', targetId: 'contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    if (!query) return;

    if (query.includes('sifri') || query.includes('সিফরি') || query.includes('ব্যবসা') || query.includes('commerce') || query.includes('মার্কেটিং')) {
      navigateTo('/sifri/', 'sifri');
    } else if (query.includes('আইন') || query.includes('law') || query.includes('llb') || query.includes('শিক্ষা')) {
      navigateTo('/education/', 'education');
    } else if (query.includes('দক্ষতা') || query.includes('skill') || query.includes('interest')) {
      navigateTo('/skills/', 'skills');
    } else if (query.includes('ক্ষেত্র') || query.includes('area') || query.includes('professional')) {
      navigateTo('/areas/', 'areas');
    } else if (query.includes('যোগাযোগ') || query.includes('contact') || query.includes('phone') || query.includes('email')) {
      navigateTo('/contact/', 'contact');
    } else {
      navigateTo('/about/', 'about');
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 bg-[#FAF9F5] dark:bg-[#0d0c0a] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ================= OFFICIAL CLOUDINARY BRAND BANNER SLIDER WITH ROTATING BORDER BEAM ================= */}
        <div className="relative p-[2.5px] sm:p-[3px] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 shadow-xl hover:shadow-2xl transition-all duration-500 group">
          {/* Static Ambient Border Track */}
          <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 rounded-2xl sm:rounded-3xl" />

          {/* Layer 1: Ambient Blurred Rotating Glow (Aura) */}
          <div className="absolute inset-[-160%] animate-border-beam banner-glow-beam blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Layer 2: Focused Sharp Rotating Light Beam */}
          <div className="absolute inset-[-160%] animate-border-beam banner-glow-beam opacity-95 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Inner Content Container holding the interactive 3s auto slider */}
          <div 
            className="relative aspect-[1024/346] w-full overflow-hidden rounded-[calc(1rem-2.5px)] sm:rounded-[calc(1.5rem-3px)] bg-stone-900 flex items-center justify-center select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Banner Slides */}
            {bannerSlides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isActive 
                      ? 'opacity-100 scale-100 pointer-events-auto z-10' 
                      : 'opacity-0 scale-[1.02] pointer-events-none z-0'
                  }`}
                >
                  <img
                    src={slide.url}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = slide.fallback;
                    }}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  />
                  {/* Direct interactive click to explore */}
                  <a
                    href="/about/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('/about/', 'about');
                    }}
                    aria-label={`Explore Portfolio - ${slide.badge}`}
                    className="absolute inset-0 cursor-pointer"
                  >
                    <span className="sr-only">Explore Portfolio</span>
                  </a>
                </div>
              );
            })}

            {/* Left Chevron Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
              }}
              aria-label="Previous Banner Slide"
              className="absolute left-2 sm:left-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-lg border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Chevron Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
              }}
              aria-label="Next Banner Slide"
              className="absolute right-2 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-lg border border-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Slider Dots */}
            <div className="absolute bottom-2.5 sm:bottom-4 z-20 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-lg">
              {bannerSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(idx);
                  }}
                  aria-label={`Go to banner slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide 
                      ? 'w-6 bg-[#FA812F]' 
                      : 'w-2 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= EXECUTIVE PROFILE INTRO CARD ================= */}
        <div className="bg-white/80 dark:bg-[#161411]/90 backdrop-blur-xs rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/90 dark:border-stone-800/90 shadow-xs transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Bengali Identity, Tagline, Bio & Search */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Status Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/60 text-[#FA812F] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#FA812F] animate-pulse" />
                  <span>অফিসিয়াল পোর্টফোলিও &middot; official profile</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium">
                  {PERSONAL_INFO.workingCategory}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
                  {PERSONAL_INFO.fullName}
                </h1>
                <p className="text-base sm:text-xl font-medium text-[#FA812F] mt-2 font-sans">
                  {PERSONAL_INFO.headline}
                </p>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-sans mt-0.5">
                  ({PERSONAL_INFO.headlineBn})
                </p>
              </div>

              {/* Bengali Introductory Summary */}
              <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-sans max-w-2xl">
                {PERSONAL_INFO.aboutMeParagraphs[0]} {PERSONAL_INFO.aboutMeParagraphs[2]}
              </p>

              {/* Quick Search Bar */}
              <form onSubmit={handleSearchSubmit} className="relative max-w-lg pt-1">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="অনুসন্ধান করুন: সিফরি, আইন শিক্ষা, মার্কেটিং, দক্ষতা..."
                    className="w-full bg-white dark:bg-[#1f1d19] border-2 border-stone-200 dark:border-stone-700 rounded-xl pl-10 pr-24 py-3 text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-hidden focus:border-[#FA812F] shadow-xs transition-colors"
                  />
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                  <button
                    type="submit"
                    className="absolute right-2 px-4 py-1.5 bg-stone-900 dark:bg-stone-800 hover:bg-[#FA812F] dark:hover:bg-[#FA812F] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    খুঁজুন
                  </button>
                </div>
              </form>

              {/* Quick Topic Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {quickTopics.map((topic) => (
                  <button
                    key={topic.label}
                    onClick={() => navigateTo(topic.path, topic.targetId)}
                    className="text-xs font-medium bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {topic.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Right Column: 3 Key Pillars of Identity */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Role 1: CEO & Founder at SIFRI & Entrepreneur Since 2021 */}
              <div 
                onClick={(e) => navigateTo('/sifri/', 'sifri', e)}
                className="bg-stone-50 dark:bg-[#1b1916] p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 hover:border-[#FA812F] dark:hover:border-[#FA812F] transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-[#FA812F] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider block">বর্তমান দায়িত্ব &middot; {PERSONAL_INFO.businessJourneyStartYear} থেকে</span>
                      <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#FA812F] transition-colors">CEO &amp; Founder — SIFRI</h3>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  ২০২১ সালে শুরু হয় ব্যবসায়িক পথচলা। ফ্যাশন ও লাইফস্টাইল ই-কমার্স প্ল্যাটফর্ম <strong>SIFRI</strong>-এর বিস্তারিত তথ্য দেখতে ক্লিক করুন →
                </p>
              </div>

              {/* Role 2: Law Student — 1st Year */}
              <div 
                onClick={(e) => navigateTo('/education/', 'education', e)}
                className="bg-stone-50 dark:bg-[#1b1916] p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 hover:border-[#2DA8D8] dark:hover:border-[#2DA8D8] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-[#2DA8D8] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider block">শিক্ষাজীবন &middot; ১ম বর্ষ</span>
                    <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#2DA8D8] transition-colors">Bachelor of Laws — LL.B.</h3>
                  </div>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  বর্তমানে LLB-এর ১ম বর্ষে অধ্যয়নরত। নূরজাহানপুর আরএমসি হাই স্কুল (SSC) ও রংপুর (HSC)-এর অ্যাকাডেমিক বিবরণ দেখতে ক্লিক করুন →
                </p>
              </div>

              {/* Role 3: Fast Contact Links */}
              <div className="bg-stone-900 text-white p-5 rounded-2xl shadow-xs space-y-3">
                <div className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  সরাসরি যোগাযোগ
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${PERSONAL_INFO.phone1}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-800 hover:bg-stone-700 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FA812F]" />
                    <span>{PERSONAL_INFO.phone1}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
