import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, ArrowUpRight, MessageCircle, Phone, Briefcase, Scale, ShoppingBag, Sparkles, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import sohanBanner1Img from '../assets/images/banner_new_1_opt.jpg';
import sohanBanner2Img from '../assets/images/banner_new_2_opt.jpg';
import sohanOfficialPortraitImg from '../assets/images/sohan_official_portrait.jpg';
import sohanGuitarAvatarImg from '../assets/images/sohan_avatar.jpg';
import { navigateTo } from '../utils/navigation';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Instantly visible so elements are never blank or hidden
  const [bannerInView, setBannerInView] = useState(true);
  const [cardInView, setCardInView] = useState(true);
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
      fallback: sohanBanner1Img,
      alt: 'N.B.N Sohan Chowdhury - Stage Keynote & Leadership Vision Banner',
      badge: 'Visionary Leadership',
    },
    {
      id: 2,
      url: PERSONAL_INFO.coverPhoto2,
      fallback: sohanBanner2Img,
      alt: 'Sohan Chowdhury - Official Brand Banner',
      badge: 'Official Executive Brand',
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
    <section id="home" className="relative pt-6 pb-16 bg-[#0B0C10] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ================= COMPACT LUXURY BRAND BANNER SLIDER WITH ROTATING BORDER BEAM ================= */}
        <div 
          ref={bannerRef}
          className={`relative p-[2px] rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8 shadow-2xl group transition-all duration-700 ease-out will-change-transform max-w-5xl mx-auto ${
            bannerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* Static Ambient Border Track in Muted Slate */}
          <div className="absolute inset-0 bg-[#1F242E] rounded-2xl sm:rounded-3xl" />

          {/* Layer 1: Ambient Blurred Rotating Glow (Champagne Gold + Amber Glow) */}
          <div className="absolute inset-[-160%] animate-border-beam banner-glow-beam blur-xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

          {/* Layer 2: Focused Sharp Rotating Light Beam */}
          <div className="absolute inset-[-160%] animate-border-beam banner-glow-beam opacity-85 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Inner Content Container holding the interactive 3s auto slider - Complete Full Picture Display */}
          <div 
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.8/1] overflow-hidden rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] bg-[#0B0C10] flex items-center justify-center select-none"
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
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                    isActive 
                      ? 'opacity-100 scale-100 pointer-events-auto z-10' 
                      : 'opacity-0 scale-[1.02] pointer-events-none z-0'
                  }`}
                >
                  {/* Subtle ambient blurred background glow using the banner's own colors */}
                  <img
                    src={slide.url}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = slide.fallback;
                    }}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none"
                  />

                  {/* Main Full Uncropped Banner Picture (object-contain ensures 100% full image is visible) */}
                  <img
                    src={slide.url}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = slide.fallback;
                    }}
                    alt={slide.alt}
                    className="relative z-10 w-full h-full object-contain object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  />

                  {/* Direct interactive click to explore */}
                  <a
                    href="/about/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('/about/', 'about');
                    }}
                    aria-label={`Explore Portfolio - ${slide.badge}`}
                    className="absolute inset-0 z-10 cursor-pointer"
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
              className="absolute left-2 sm:left-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0B0C10]/75 hover:bg-[#0B0C10] text-[#F8FAFC] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-lg border border-[#1F242E]"
            >
              <ChevronLeft className="w-5 h-5 text-[#F8FAFC]" />
            </button>

            {/* Right Chevron Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
              }}
              aria-label="Next Banner Slide"
              className="absolute right-2 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0B0C10]/75 hover:bg-[#0B0C10] text-[#F8FAFC] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-lg border border-[#1F242E]"
            >
              <ChevronRight className="w-5 h-5 text-[#F8FAFC]" />
            </button>

            {/* Top Right: Full Picture Lightbox trigger button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenImage(bannerSlides[currentSlide].url);
              }}
              title="সম্পূর্ণ ছবি জুম করে দেখুন (View Full Image)"
              className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-20 px-2.5 py-1.5 rounded-full bg-[#0B0C10]/80 hover:bg-[#0B0C10] border border-[#1F242E] hover:border-[#D4AF37] text-stone-300 hover:text-[#D4AF37] text-[11px] font-mono flex items-center gap-1.5 shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">সম্পূর্ণ ছবি</span>
              <span className="sm:hidden">Full</span>
            </button>

            {/* Bottom Slider Dots (Strictly centered at bottom) */}
            <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0C10]/85 backdrop-blur-md border border-[#1F242E] shadow-lg">
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
                      ? 'w-6 bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.7)]' 
                      : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= EXECUTIVE PROFILE INTRO CARD (Graphite Sheet #13161C + Muted Slate Border #1F242E) ================= */}
        <div 
          ref={cardRef}
          className={`bg-[#13161C] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#1F242E] shadow-2xl transition-all duration-700 ease-out will-change-transform relative ${
            cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >

          {/* Modern Editorial 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
            
            {/* Left Column (5 Cols on LG): Big, Stunning Official Portrait Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div 
                className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.25)] bg-[#0B0C10] group aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full"
                title="NBN Sohan (N.B.N Sohan Chowdhury) - Official Portrait"
              >
                <img
                  src={sohanOfficialPortraitImg}
                  alt={PERSONAL_INFO.fullName}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Cinematic Vignette / Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/20 to-transparent pointer-events-none" />

                {/* Top Corner Official Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0B0C10]/85 backdrop-blur-md border border-[#D4AF37]/50 text-[#D4AF37] font-mono text-xs font-bold shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span>OFFICIAL PORTFOLIO</span>
                  </span>
                </div>

                {/* Bottom Overlay Label inside the photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0B0C10]/80 backdrop-blur-md border border-[#1F242E] flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#F8FAFC]">
                      {PERSONAL_INFO.fullName}
                    </h3>
                    <p className="text-xs font-mono text-[#D4AF37] font-semibold">
                      {PERSONAL_INFO.preferredCall} &middot; {PERSONAL_INFO.workingCategory}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0B0C10] flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols on LG): Executive Title, Badges, Search & Primary Roles */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Top Row: Direct Search Keywords Tag */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <span className="px-3 py-1 rounded-full bg-[#0B0C10] border border-[#1F242E] text-[#D4AF37] font-semibold">
                  Google Search Verified
                </span>
                <span className="text-stone-500">·</span>
                <span>nbn sohan</span>
                <span className="text-[#D4AF37]">·</span>
                <span>n b n sohan</span>
                <span className="text-[#D4AF37]">·</span>
                <span>nbn sohan chowdhury</span>
              </div>

              {/* Title & Headline in Platinum White & Champagne Gold */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F8FAFC] tracking-tight leading-tight">
                  NBN Sohan <span className="text-xl sm:text-2xl lg:text-3xl font-sans font-medium text-[#94A3B8]">({PERSONAL_INFO.fullName})</span>
                </h1>
                <p className="text-base sm:text-xl font-bold text-[#D4AF37] font-sans">
                  {PERSONAL_INFO.headline}
                </p>
                <p className="text-xs sm:text-sm text-[#94A3B8] font-sans font-medium">
                  ({PERSONAL_INFO.headlineBn})
                </p>
              </div>

              {/* Bengali Introductory Summary in Cool Silver Gray */}
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-sans">
                {PERSONAL_INFO.aboutMeParagraphs[0]} {PERSONAL_INFO.aboutMeParagraphs[2]}
              </p>

              {/* 2 Key Executive Cards: SIFRI CEO & Law Student */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {/* Role 1: CEO & Founder at SIFRI */}
                <div 
                  onClick={(e) => navigateTo('/sifri/', 'sifri', e)}
                  className="bg-[#0B0C10] p-4 rounded-2xl border border-[#1F242E] hover:border-[#D4AF37] transition-all cursor-pointer group shadow-xs"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#D4AF37] text-[#0B0C10] flex items-center justify-center font-bold shadow-[0_0_12px_rgba(212,175,55,0.25)] shrink-0">
                      <ShoppingBag className="w-4 h-4 text-[#0B0C10]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block font-bold">
                        {PERSONAL_INFO.businessJourneyStartYear} সাল থেকে
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors">
                        CEO &amp; Founder — SIFRI
                      </h4>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    সফল ফ্যাশন ও লাইফস্টাইল ই-কমার্স প্ল্যাটফর্ম sifribd.com &rarr;
                  </p>
                </div>

                {/* Role 2: Law Student — 1st Year */}
                <div 
                  onClick={(e) => navigateTo('/education/', 'education', e)}
                  className="bg-[#0B0C10] p-4 rounded-2xl border border-[#1F242E] hover:border-[#F59E0B] transition-all cursor-pointer group shadow-xs"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#13161C] border border-[#1F242E] text-[#F59E0B] flex items-center justify-center shrink-0">
                      <Scale className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#F59E0B] uppercase tracking-wider block font-bold">
                        আইন শিক্ষার্থী
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-[#F8FAFC] group-hover:text-[#F59E0B] transition-colors">
                        Bachelor of Laws (LL.B.)
                      </h4>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    ১ম বর্ষ &middot; এসএসসি (নূরজাহানপুর) ও এইচএসসি (রংপুর) &rarr;
                  </p>
                </div>
              </div>

              {/* Quick Search Bar with Graphite & Gold Accent */}
              <form onSubmit={handleSearchSubmit} className="relative pt-1">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="অনুসন্ধান করুন: সিফরি, আইন শিক্ষা, মার্কেটিং, দক্ষতা..."
                    className="w-full bg-[#0B0C10] border border-[#1F242E] rounded-xl pl-10 pr-28 py-3 text-xs sm:text-sm text-[#F8FAFC] placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                  />
                  <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 pointer-events-none" />
                  <button
                    type="submit"
                    className="absolute right-2 px-4 py-1.5 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] text-xs font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer"
                  >
                    খুঁজুন
                  </button>
                </div>
              </form>

              {/* Quick Topic Chips & Fast Contact CTA */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#1F242E]">
                <div className="flex flex-wrap gap-2">
                  {quickTopics.slice(0, 4).map((topic) => (
                    <button
                      key={topic.label}
                      onClick={() => navigateTo(topic.path, topic.targetId)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#1F242E] bg-[#0B0C10] text-[#94A3B8] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all cursor-pointer"
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] text-xs font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#0B0C10]" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${PERSONAL_INFO.phone1}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0B0C10] hover:bg-[#1a1f29] text-[#F8FAFC] text-xs font-semibold rounded-xl transition-colors border border-[#1F242E] hover:border-[#D4AF37]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{PERSONAL_INFO.phone1}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ================= FULL PICTURE LIGHTBOX MODAL (100% UNCROPPED VIEW) ================= */}
      {fullscreenImage && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="সম্পূর্ণ ব্যানার ছবি ভিউয়ার"
          className="fixed inset-0 z-50 bg-[#0B0C10]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setFullscreenImage(null)}
        >
          {/* Close & Action Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between mb-3 px-2 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs sm:text-sm font-mono text-[#F8FAFC] font-semibold">
                সম্পূর্ণ ব্যানার ও ব্র্যান্ড ডিজাইন (১০০% ফুল ভিউ)
              </span>
            </div>
            <button
              type="button"
              onClick={() => setFullscreenImage(null)}
              className="p-2 rounded-full bg-[#13161C] border border-[#1F242E] hover:border-[#D4AF37] text-[#F8FAFC] hover:text-[#D4AF37] transition-all cursor-pointer shadow-lg hover:scale-105"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full Image Display Container with Luxury Gold Glow & Slate Border */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.25)] bg-[#0B0C10]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={fullscreenImage} 
              alt="NBN Sohan Full Banner"
              className="max-h-[82vh] w-auto max-w-full object-contain select-none"
            />
          </div>

          <p className="mt-3 text-xs font-mono text-[#94A3B8] text-center">
            স্ক্রিনে যেকোনো স্থানে ক্লিক করে বা উপরে ডানপাশের ক্লোজ বাটনে ক্লিক করে বন্ধ করতে পারবেন
          </p>
        </div>
      )}
    </section>
  );
};
