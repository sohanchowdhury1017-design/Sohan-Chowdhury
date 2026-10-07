import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, ArrowUpRight, MessageCircle, Phone, Briefcase, Scale, ShoppingBag, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import sohanBannerImg from '../assets/images/sohan_banner.jpg';
import sohanBanner2Img from '../assets/images/sohan_banner_2_opt.jpg';
import { navigateTo } from '../utils/navigation';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Gentle scroll-triggered and entry fade-in animation states
  const [bannerInView, setBannerInView] = useState(false);
  const [cardInView, setCardInView] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not available, reveal immediately
    if (typeof IntersectionObserver === 'undefined') {
      setBannerInView(true);
      setCardInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === bannerRef.current) {
              setBannerInView(true);
            }
            if (entry.target === cardRef.current) {
              setCardInView(true);
            }
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);
    if (cardRef.current) observer.observe(cardRef.current);

    // Subtle fallback to guarantee presentation under all circumstances
    const fallbackTimer = setTimeout(() => {
      setBannerInView(true);
      setCardInView(true);
    }, 400);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

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
    } else if (query.includes('প্রবন্ধ') || query.includes('লেখা') || query.includes('article') || query.includes('writing') || query.includes('মতামত')) {
      navigateTo('/writing/', 'writing');
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
        <div 
          ref={bannerRef}
          className={`relative p-[2.5px] sm:p-[3px] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 shadow-xl hover:shadow-2xl group transition-all duration-700 ease-out will-change-transform ${
            bannerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
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
            <div className="absolute bottom-2.5 sm:bottom-4 z-20 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-lg">
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
                      ? 'w-6 bg-[#FA812F] shadow-[0_0_10px_#FA812F]' 
                      : 'w-2 bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= EXECUTIVE PROFILE INTRO CARD (30% Slate Night) ================= */}
        <div 
          ref={cardRef}
          className={`bg-[#161B26] rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#1E2638] shadow-xl transition-all duration-700 ease-out will-change-transform relative ${
            cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Bengali Identity, Tagline, Bio & Search */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Status Badges in Komla Orange & Electric Purple */}
              <div className={`flex flex-wrap items-center gap-2 transition-all duration-700 ease-out delay-100 ${
                cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FA812F]/10 border border-[#FA812F]/30 text-[#FA812F] text-xs font-bold shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#FA812F] animate-pulse" />
                  <span>অফিসিয়াল পোর্টফোলিও &middot; official profile</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#7B2CBF]/15 border border-[#7B2CBF]/40 text-[#c084fc] text-xs font-bold">
                  {PERSONAL_INFO.workingCategory}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className={`transition-all duration-700 ease-out delay-150 ${
                cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#E2E8F0] tracking-tight leading-tight">
                  {PERSONAL_INFO.fullName}
                </h1>
                <p className="text-base sm:text-xl font-bold text-[#FA812F] mt-2 font-sans flex items-center gap-2">
                  <span>{PERSONAL_INFO.headline}</span>
                </p>
                <p className="text-xs sm:text-sm text-[#c084fc] font-sans mt-0.5 font-semibold">
                  ({PERSONAL_INFO.headlineBn})
                </p>
              </div>

              {/* Bengali Introductory Summary */}
              <p className={`text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-sans max-w-2xl transition-all duration-700 ease-out delay-200 ${
                cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}>
                {PERSONAL_INFO.aboutMeParagraphs[0]} {PERSONAL_INFO.aboutMeParagraphs[2]}
              </p>

              {/* Quick Search Bar with Komla Orange Action */}
              <form 
                onSubmit={handleSearchSubmit} 
                className={`relative max-w-lg pt-1 transition-all duration-700 ease-out delay-250 ${
                  cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="অনুসন্ধান করুন: সিফরি, আইন শিক্ষা, মার্কেটিং, দক্ষতা..."
                    className="w-full bg-[#0B0F19] border-2 border-[#1E2638] rounded-xl pl-10 pr-28 py-3 text-xs sm:text-sm text-[#E2E8F0] placeholder-stone-500 focus:outline-hidden focus:border-[#FA812F] focus:bg-[#070b13] transition-all"
                  />
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                  <button
                    type="submit"
                    className="absolute right-2 px-4 py-1.5 bg-[#FA812F] hover:bg-[#e07124] text-white text-xs font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(250,129,47,0.3)] cursor-pointer"
                  >
                    খুঁজুন
                  </button>
                </div>
              </form>

              {/* Quick Topic Chips */}
              <div className={`flex flex-wrap gap-2 pt-1 transition-all duration-700 ease-out delay-300 ${
                cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}>
                {quickTopics.map((topic, i) => (
                  <button
                    key={topic.label}
                    onClick={() => navigateTo(topic.path, topic.targetId)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      i % 2 === 0
                        ? 'bg-[#FA812F]/10 hover:bg-[#FA812F]/20 text-[#FA812F] border-[#FA812F]/30'
                        : 'bg-[#7B2CBF]/15 hover:bg-[#7B2CBF]/25 text-[#c084fc] border-[#7B2CBF]/40'
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Right Column: 3 Key Pillars of Identity */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Role 1: CEO & Founder at SIFRI */}
              <div 
                onClick={(e) => navigateTo('/sifri/', 'sifri', e)}
                className={`bg-[#0B0F19] p-5 rounded-2xl border-2 border-[#1E2638] hover:border-[#FA812F] transition-all duration-700 ease-out delay-200 cursor-pointer group shadow-2xs ${
                  cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FA812F] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(250,129,47,0.3)] font-bold">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#FA812F] uppercase tracking-wider block font-bold">বর্তমান দায়িত্ব &middot; {PERSONAL_INFO.businessJourneyStartYear} থেকে</span>
                      <h3 className="text-sm font-bold text-[#E2E8F0] group-hover:text-[#FA812F] transition-colors">CEO &amp; Founder — SIFRI</h3>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">
                  ২০২১ সালে শুরু হয় ব্যবসায়িক পথচলা। ফ্যাশন ও লাইফস্টাইল ই-কমার্স প্ল্যাটফর্ম <strong>SIFRI</strong>-এর বিস্তারিত তথ্য দেখতে ক্লিক করুন →
                </p>
              </div>

              {/* Role 2: Law Student — 1st Year */}
              <div 
                onClick={(e) => navigateTo('/education/', 'education', e)}
                className={`bg-[#0B0F19] p-5 rounded-2xl border-2 border-[#1E2638] hover:border-[#7B2CBF] transition-all duration-700 ease-out delay-300 cursor-pointer group shadow-2xs ${
                  cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#7B2CBF] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(123,44,191,0.3)]">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#c084fc] uppercase tracking-wider block font-bold">শিক্ষাজীবন &middot; ১ম বর্ষ</span>
                    <h3 className="text-sm font-bold text-[#E2E8F0] group-hover:text-[#c084fc] transition-colors">Bachelor of Laws — LL.B.</h3>
                  </div>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">
                  বর্তমানে LLB-এর ১ম বর্ষে অধ্যয়নরত। নূরজাহানপুর আরএমসি হাই স্কুল (SSC) ও রংপুর (HSC)-এর অ্যাকাডেমিক বিবরণ দেখতে ক্লিক করুন →
                </p>
              </div>

              {/* Role 3: Fast Contact Links */}
              <div className={`bg-[#0B0F19] border-2 border-[#1E2638] text-white p-5 rounded-2xl shadow-sm space-y-3 transition-all duration-700 ease-out delay-400 ${
                cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-xs font-mono text-[#FA812F] uppercase tracking-wider font-bold">
                  সরাসরি যোগাযোগ &middot; Quick Connect
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${PERSONAL_INFO.phone1}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#161B26] hover:bg-[#1E2638] text-[#E2E8F0] text-xs font-semibold rounded-xl transition-colors border border-[#1E2638]"
                  >
                    <Phone className="w-4 h-4 text-[#FA812F]" />
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
