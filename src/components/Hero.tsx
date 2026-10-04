import React, { useState } from 'react';
import { Search, ArrowRight, ArrowUpRight, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Image assets for the botanical collage & banner
import sohanBannerImg from '../assets/images/sohan_banner.jpg';
import portraitImg from '../assets/images/portrait_sohan_editorial_1791052423736.jpg';
import flowerImg from '../assets/images/botanical_sunflower_art_1791052435316.jpg';
import branchImg from '../assets/images/botanical_eucalyptus_branch_1791052446773.jpg';

interface HeroProps {
  onSearchSelect?: (term: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
    } else if (query.includes('contact') || query.includes('email') || query.includes('talk')) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/contact/');
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/about/');
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-20 md:py-16 overflow-hidden bg-[#FAF9F5]">
      {/* Background Micro Accents & Botanical Florals */}
      <div className="absolute top-4 left-1/3 w-8 h-8 rounded-full border border-rose-300/60 pointer-events-none" />
      <div className="absolute top-1/4 right-8 w-12 h-12 rounded-full border border-amber-300/40 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ================= TOP HERO BRAND BANNER (N B N Sohan Chowdhury - Digital Solutions) ================= */}
        <div className="mb-10 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-lg relative group bg-white">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] w-full overflow-hidden">
            <img
              src={PERSONAL_INFO.coverPhoto}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = sohanBannerImg;
              }}
              alt="N B N Sohan Chowdhury - Professional Website & Digital Solutions"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
            {/* Interactive Explore Portfolio Action Overlay Link */}
            <a
              href="/about/"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '/about/');
              }}
              aria-label="Explore Portfolio of N B N Sohan Chowdhury"
              className="absolute inset-0 cursor-pointer"
            >
              <span className="sr-only">Explore Portfolio</span>
            </a>
          </div>
        </div>

        {/* ================= BESPOKE BOTANICAL COLLAGE HERO (Screenshot Match) ================= */}
        <div className="relative bg-white/70 backdrop-blur-xs rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/80 shadow-sm overflow-hidden">
          
          {/* Top Center Sun & Botanical Hanging Branch (Exact Match to Reference) */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-10">
            <div className="relative">
              {/* Warm Orange Sun Disk */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FA812F] opacity-90 shadow-sm" />
              {/* Delicate Botanical Eucalyptus Leaves cascading */}
              <div className="absolute -top-3 -right-6 w-20 h-24 overflow-hidden opacity-90 rotate-12">
                <img src={branchImg} alt="Botanical Leaf" className="w-full h-full object-contain" />
              </div>
              {/* Pink outline ring */}
              <div className="absolute -bottom-4 -left-6 w-4 h-4 rounded-full border border-rose-400 opacity-60" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-20">
            
            {/* ---------------- LEFT COLUMN: HEADLINE, SEARCH & DOT MATRIX ---------------- */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FA812F]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold">
                  Founder &amp; Literary Thinker
                </span>
              </div>

              {/* Bold Autumn Activities-Style Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-stone-900 leading-[1.08]">
                LITERARY <br />
                <span className="text-stone-900">COMMERCE</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans max-w-sm">
                Bridging English literature from East West University with high-trust digital venture building as founder of <a href="https://sifribd.com" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-semibold underline decoration-[#FA812F] decoration-2 underline-offset-2 hover:text-[#FA812F] transition-colors">Sifri (sifribd.com)</a>.
              </p>

              {/* Search Bar matching the reference screenshot */}
              <form onSubmit={handleSearchSubmit} className="relative max-w-sm pt-1">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics, Sifri, essays..."
                    className="w-full bg-white border-2 border-stone-300 rounded-lg pl-10 pr-24 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-stone-900 shadow-xs transition-colors"
                  />
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-3 py-1 bg-stone-900 hover:bg-[#FA812F] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Quick Topic Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {quickTopics.map((topic) => (
                  <button
                    key={topic.label}
                    onClick={() => {
                      document.getElementById(topic.targetId)?.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', topic.path);
                    }}
                    className="text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                  >
                    {topic.label}
                  </button>
                ))}
              </div>

              {/* Dot Matrix & Location Footer (from screenshot) */}
              <div className="pt-3 space-y-2">
                <div className="flex items-center gap-3">
                  {/* Red/Coral Dot Matrix Grid */}
                  <div className="w-28 h-12 dot-matrix-coral opacity-80" />
                  {/* Cyan Circular Accent Dot */}
                  <div className="w-3.5 h-3.5 rounded-full bg-[#2DA8D8] shadow-xs" />
                </div>
                <div className="text-xs font-mono text-stone-500">
                  Dhaka, Bangladesh &middot; 23.7688&deg; N, 90.4255&deg; E
                </div>
              </div>

            </div>

            {/* ---------------- CENTER COLUMN: THE BESPOKE COLLAGE PORTRAIT ---------------- */}
            <div className="lg:col-span-5 flex justify-center items-center py-6 lg:py-0">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex items-center justify-center">
                
                {/* 1. Turquoise / Sky-Blue Horizontal Geometric Block */}
                <div className="absolute -bottom-2 -left-6 sm:-left-10 w-48 sm:w-56 h-16 sm:h-20 bg-[#2DA8D8] rounded-xs shadow-xs z-0" />

                {/* 2. Vibrant Orange Vertical Geometric Block */}
                <div className="absolute -top-6 right-2 sm:right-6 w-24 sm:w-28 h-56 sm:h-64 bg-[#FA812F] rounded-xs shadow-xs z-0" />

                {/* 3. Botanical Eucalyptus Leaves emerging from behind left */}
                <div className="absolute -left-10 top-6 w-28 h-44 pointer-events-none z-10 opacity-95">
                  <img src={branchImg} alt="Botanical Foliage" className="w-full h-full object-contain -rotate-12" />
                </div>

                {/* 4. Center Portrait with High-End Card Cutout Frame */}
                <div className="relative z-10 w-64 sm:w-72 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-stone-900/90 shadow-xl bg-stone-900 group">
                  <img
                    src={portraitImg}
                    alt="Sohan Chowdhury (NBN Sohan)"
                    className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                      N B N SOHAN CHOWDHURY
                    </span>
                    <span className="text-white text-sm font-serif font-semibold">
                      Founder, Sifri &middot; East West Univ
                    </span>
                  </div>
                </div>

                {/* 5. Translucent Coral/Red Circle Overlapping (Signature from Screenshot) */}
                <div className="absolute bottom-12 -left-4 sm:-left-6 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#E84A5F]/85 mix-blend-multiply shadow-md z-20 pointer-events-none" />

              </div>
            </div>

            {/* ---------------- RIGHT COLUMN: SUNFLOWER & SIFRI SPOTLIGHT ---------------- */}
            <div className="lg:col-span-3 space-y-6 flex flex-col justify-between items-start">
              
              {/* Watercolor Sunflower Accent */}
              <div className="relative w-full flex justify-end">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 group">
                  <img
                    src={flowerImg}
                    alt="Botanical Sunflower Art"
                    className="w-full h-full object-contain drop-shadow-md group-hover:rotate-6 transition-transform duration-500 ease-out"
                  />
                  {/* Little companion watercolor blossom */}
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full border border-amber-400/50 bg-amber-100/50 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-[#FA812F]" />
                  </div>
                </div>
              </div>

              {/* Editorial Feature Card */}
              <div className="w-full bg-white/90 p-5 rounded-xl border border-stone-200 shadow-xs space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#FA812F] font-bold">
                  FLAGSHIP VENTURE
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  Founder of Sifri (sifribd.com)
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Curated lifestyle, contemporary aesthetics, and reliable digital shopping across Bangladesh.
                </p>

                {/* Black "Read more" Style Action Button */}
                <div className="pt-1">
                  <a
                    href="https://sifribd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-stone-900 hover:bg-[#FA812F] text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors shadow-xs group"
                  >
                    <span>Visit Sifri</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
