import React, { useState } from 'react';
import { Search, ArrowRight, ArrowUpRight, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Image assets generated for the collage
import portraitImg from '../assets/images/portrait_sohan_editorial_1791052423736.jpg';
import flowerImg from '../assets/images/botanical_sunflower_art_1791052435316.jpg';
import branchImg from '../assets/images/botanical_eucalyptus_branch_1791052446773.jpg';

interface HeroProps {
  onSearchSelect?: (term: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);

  const quickTopics = [
    { label: 'Sifri (sifribd.com)', path: '/sifri/', targetId: 'sifri' },
    { label: 'East West University', path: '/education/', targetId: 'education' },
    { label: 'Literary Essays', path: '/writing/', targetId: 'writing' },
    { label: 'Contact', path: '/contact/', targetId: 'contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    if (!query) return;

    if (query.includes('sifri') || query.includes('store') || query.includes('shop') || query.includes('venture')) {
      document.getElementById('sifri')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/sifri/');
    } else if (query.includes('edu') || query.includes('east west') || query.includes('english') || query.includes('degree')) {
      document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/education/');
    } else if (query.includes('essay') || query.includes('write') || query.includes('read') || query.includes('article')) {
      document.getElementById('writing')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/writing/');
    } else if (query.includes('contact') || query.includes('email') || query.includes('hire') || query.includes('talk')) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/contact/');
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/about/');
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-20 md:py-16 overflow-hidden">
      {/* Background Micro Accents & Botanical Florals */}
      <div className="absolute top-4 left-1/3 w-8 h-8 rounded-full border border-rose-300/60 pointer-events-none" />
      <div className="absolute top-1/4 right-8 w-12 h-12 rounded-full border border-amber-300/40 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOP HERO COVER PHOTO (sohans.site) ================= */}
        <div className="mb-8 sm:mb-10 rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm relative group bg-stone-900">
          <div className="relative aspect-[16/7] sm:aspect-[21/8] md:aspect-[24/8] max-h-[360px] w-full overflow-hidden">
            <img
              src={PERSONAL_INFO.coverPhoto}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = PERSONAL_INFO.coverPhotoLocal;
              }}
              alt="Sohan Chowdhury - Founder of Sifri & Sifri BD"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient & Information Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-white/90 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#FA812F] animate-pulse" />
                    <span>Official Profile · Sohan Chowdhury (NBN Sohan)</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight drop-shadow-xs">
                    Sohan Chowdhury
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://sifribd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white text-xs font-medium transition-all shadow-xs"
                  >
                    <span>Explore Sifri (sifribd.com)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FA812F]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main 3-Column Editorial Grid matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ================= LEFT COLUMN: Bold Typography & Search ================= */}
          <div className="lg:col-span-4 z-20 flex flex-col justify-center">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FA812F]" />
              <span className="text-xs font-mono tracking-widest uppercase text-stone-500 font-semibold">
                Sohan Chowdhury · NBN Sohan
              </span>
            </div>

            {/* Massive Display Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[1.05] uppercase font-sans mb-4">
              LITERARY <br />
              <span className="text-[#FA812F]">BUILDER</span>
            </h1>

            {/* Narrative Subtitle with natural SEO phrases */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-4 max-w-sm">
              Founder of <a href="https://sifribd.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-stone-900 underline decoration-[#FA812F]/40 underline-offset-2 hover:text-[#FA812F]">Sifri (Sifri BD)</a> and East West University Department of English scholar. Official website (<span className="font-medium text-stone-900 font-mono text-xs">sohans.site</span>) showcasing entrepreneurship, literature, and essays by Sohans.
            </p>

            {/* Prominent Animated Facebook PP & WhatsApp Badges */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {/* Facebook Profile Button */}
              <a
                href="https://facebook.com/nbn.sohan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1877F2] text-white shadow-md hover:shadow-lg hover:bg-[#166fe5] hover:scale-105 active:scale-95 transition-all duration-300 font-sans group cursor-pointer"
                title="Facebook: facebook.com/nbn.sohan"
              >
                <div className="relative">
                  <img
                    src={portraitImg}
                    alt="N B N Sohan Chowdhury"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-white text-[#1877F2] rounded-full flex items-center justify-center text-[9px] font-black leading-none shadow-xs">
                    f
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-blue-100 font-medium">Facebook</span>
                  <span className="text-xs font-bold font-sans">@nbn.sohan</span>
                </div>
                {/* Live ping dot */}
                <span className="relative flex h-2 w-2 ml-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-85"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 border border-white"></span>
                </span>
              </a>

              {/* Quick Direct WhatsApp Button */}
              <a
                href="https://wa.me/8801312815029"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#008069] hover:text-white border border-[#25D366]/30 transition-all text-xs font-semibold shadow-xs group cursor-pointer"
                title="Chat on WhatsApp: +8801312815029"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] group-hover:bg-white animate-pulse" />
                <span>WhatsApp: +8801312815029</span>
              </a>
            </div>

            {/* Interactive Search Bar (Visual Match with Reference) */}
            <form onSubmit={handleSearchSubmit} className="relative mb-6 max-w-sm">
              <div className={`relative flex items-center bg-white border ${searchFocus ? 'border-stone-900 ring-2 ring-[#FA812F]/20' : 'border-stone-300'} rounded-md transition-all shadow-xs`}>
                <div className="pl-3.5 pr-2 text-stone-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setTimeout(() => setSearchFocus(false), 200)}
                  placeholder="Search Sifri, essays, education..."
                  className="w-full py-2.5 pr-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 bg-transparent focus:outline-hidden"
                />
                {searchQuery && (
                  <button
                    type="submit"
                    className="mr-2 px-2 py-1 text-[11px] font-semibold bg-stone-900 text-white rounded-sm hover:bg-[#FA812F] transition-colors"
                  >
                    Go
                  </button>
                )}
              </div>

              {/* Quick Jump Suggestions */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {quickTopics.map((topic) => (
                  <a
                    key={topic.label}
                    href={topic.path}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(topic.targetId)?.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', topic.path);
                    }}
                    className="text-[11px] px-2 py-0.5 rounded-sm bg-stone-200/60 hover:bg-[#FA812F] hover:text-white text-stone-700 transition-colors whitespace-nowrap"
                  >
                    {topic.label}
                  </a>
                ))}
              </div>
            </form>

            {/* Dot Grid Pattern & Coordinates matching reference */}
            <div className="pt-2 flex flex-col gap-3">
              {/* Dot matrix */}
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-8 gap-1.5 w-fit" aria-hidden="true">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1 h-1 rounded-full ${
                        i % 5 === 0 ? 'bg-[#F43F5E]' : i % 3 === 0 ? 'bg-[#FA812F]' : 'bg-stone-300'
                      }`}
                    />
                  ))}
                </div>
                {/* Cyan Accent Dot */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#2DA8D8] shadow-xs" />
              </div>

              {/* Location Stamp */}
              <div className="text-[11px] font-mono text-stone-500 tracking-tight flex items-center gap-2">
                <span>{PERSONAL_INFO.coordinates}</span>
                <span className="text-stone-300">/</span>
                <span>East West University, Dhaka</span>
              </div>
            </div>

          </div>

          {/* ================= CENTER: Collage Centerpiece (Exact Reference Art Direction) ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center my-6 lg:my-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[440px] sm:h-[500px] flex items-center justify-center">

              {/* 1. Geometric Shape: Vertical Orange Block (Right/Back of subject) */}
              <div 
                className="absolute right-4 sm:right-6 top-8 w-28 sm:w-36 h-64 sm:h-72 bg-[#FA812F] rounded-xs shadow-md z-0"
                aria-hidden="true" 
              />

              {/* 2. Geometric Shape: Horizontal Teal/Cyan Bar (Bottom of subject) */}
              <div 
                className="absolute left-0 bottom-12 w-44 sm:w-56 h-12 sm:h-14 bg-[#2DA8D8] rounded-xs shadow-md z-10"
                aria-hidden="true" 
              />

              {/* 3. Botanical Foliage: Watercolor Eucalyptus Leaves (Upper Left overlay) */}
              <div className="absolute -top-6 -left-6 sm:-left-10 w-32 sm:w-40 h-44 sm:h-52 z-30 pointer-events-none mix-blend-multiply opacity-95">
                <img
                  src={branchImg}
                  alt="Watercolor eucalyptus leaves"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter contrast-105"
                />
              </div>

              {/* 4. Center Portrait: B&W High-Fashion Editorial Cutout Style */}
              <div className="relative z-20 w-56 sm:w-64 h-80 sm:h-96 rounded-sm overflow-hidden shadow-2xl border-2 border-white bg-stone-900 group">
                <img
                  src={portraitImg}
                  alt="N B N Sohan Chowdhury - Founder of Sifri"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60" />
                
                {/* Monogram tag inside photo frame */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 font-mono">
                  <span className="tracking-widest uppercase">N B N SOHAN</span>
                  <span className="text-[#FA812F] font-bold">FOUNDER</span>
                </div>
              </div>

              {/* 5. Geometric Shape: Translucent Crimson/Coral Circle (Left overlap on portrait) */}
              <div 
                className="absolute left-8 sm:left-10 top-1/2 -translate-y-6 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#F43F5E]/85 shadow-lg backdrop-blur-xs z-30 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <span className="text-[10px] font-mono text-white/90 uppercase tracking-widest rotate-[-12deg] font-bold">
                  SIFRI
                </span>
              </div>

              {/* 6. Botanical Accent: Floating Small Floral / Petals */}
              <div className="absolute -bottom-2 right-12 w-8 h-8 rounded-full border border-stone-400/40 pointer-events-none z-10" />

              {/* 7. Animated Facebook Profile Pill Badge */}
              <a
                href="https://facebook.com/nbn.sohan"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-200/90 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 text-xs font-semibold text-stone-900 group"
                title="Connect on Facebook: facebook.com/nbn.sohan"
              >
                <div className="relative">
                  <img
                    src={portraitImg}
                    alt="Sohan Chowdhury"
                    className="w-6 h-6 rounded-full object-cover border-2 border-[#1877F2]"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#1877F2] rounded-full flex items-center justify-center text-[8px] text-white font-bold leading-none">
                    f
                  </span>
                </div>
                <span className="text-[#1877F2] font-mono text-[11px] group-hover:underline">
                  @nbn.sohan
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1877F2] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1877F2]"></span>
                </span>
              </a>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: Botanical Flower & Editorial Story ================= */}
          <div className="lg:col-span-3 z-20 flex flex-col justify-between h-full pt-4 lg:pt-0">
            
            {/* Golden Watercolor Sunflower Bloom (Matching Reference right side) */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 self-center lg:self-end mb-4 pointer-events-none mix-blend-multiply opacity-95">
              <img
                src={flowerImg}
                alt="Golden watercolor bloom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter contrast-110"
              />
              {/* Little floating companion petal */}
              <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-amber-400/30 blur-[1px]" />
            </div>

            {/* Editorial Story Block (Matching reference "Get your fall ready" & "Read more") */}
            <div className="bg-white/80 backdrop-blur-xs p-5 sm:p-6 rounded-lg border border-stone-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FA812F] font-semibold block mb-1">
                  Active Venture
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight mb-2">
                  Building Sifri
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  Redefining modern retail and lifestyle convenience across Bangladesh with quality curation and sincere human service.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.sifriUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase bg-stone-900 text-white rounded-md hover:bg-stone-800 transition-colors shadow-xs group"
                >
                  <span>Explore Sifribd.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FA812F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                
                <a
                  href="#about"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 hover:text-stone-950 transition-colors"
                >
                  <span>Read Biography</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Editorial Marquee Divider */}
        <div className="mt-14 pt-6 border-t border-stone-200/70 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-stone-700 font-medium">Domain: sohans.site</span>
          </div>
          <div className="flex items-center gap-6">
            <span>EAST WEST UNIVERSITY · DEPT OF ENGLISH</span>
            <span className="hidden sm:inline text-stone-300">/</span>
            <span className="hidden sm:inline">FOUNDER OF SIFRI (SIFRIBD.COM)</span>
            <span className="hidden sm:inline text-stone-300">/</span>
            <span className="hidden sm:inline">DHAKA, BANGLADESH</span>
          </div>
        </div>

      </div>
    </section>
  );
};
