import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Search, 
  Sparkles, 
  Tag, 
  X, 
  Share2, 
  Check, 
  Layers, 
  RefreshCw,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Article, INITIAL_ARTICLES } from '../data/articlesData';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Fetch articles from endpoint with graceful fallback
  const fetchArticlesData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/data/articles.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch articles (${response.status})`);
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setArticles(data);
      } else {
        setArticles(INITIAL_ARTICLES);
      }
    } catch (err) {
      console.warn('Network fetch fallback used for articles:', err);
      // Seamlessly fallback to pre-bundled initial articles
      setArticles(INITIAL_ARTICLES);
    } finally {
      // Gentle brief delay for smooth UI transition
      setTimeout(() => setLoading(false), 200);
    }
  };

  useEffect(() => {
    fetchArticlesData();
  }, []);

  // Unique categories list
  const categories = [
    { id: 'all', label: 'সকল প্রবন্ধ', labelEn: 'All Articles' },
    { id: 'আইন ও বিচারব্যবস্থা', label: 'আইন ও বিচারব্যবস্থা', labelEn: 'Law & Jurisprudence' },
    { id: 'ব্যবসা ও উদ্যোক্তা', label: 'ব্যবসা ও উদ্যোক্তা', labelEn: 'Business & Entrepreneurship' },
    { id: 'মার্কেটিং ও ব্র্যান্ডিং', label: 'মার্কেটিং ও ব্র্যান্ডিং', labelEn: 'Marketing Strategy' },
    { id: 'চিন্তা ও বিশ্লেষণ', label: 'চিন্তা ও বিশ্লেষণ', labelEn: 'Critical Thinking' },
    { id: 'শিল্প ও সৃজনশীলতা', label: 'শিল্প ও সৃজনশীলতা', labelEn: 'Creative Arts' },
  ];

  // Filtered articles based on search & category
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.titleEn.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const getCategoryBadgeClass = (categoryColor: string) => {
    switch (categoryColor) {
      case 'orange':
        return 'bg-orange-100 text-[#c2410c] dark:bg-orange-950/70 dark:text-orange-300 border-orange-300 dark:border-orange-800';
      case 'sky':
        return 'bg-sky-100 text-[#0369a1] dark:bg-sky-950/70 dark:text-sky-300 border-sky-300 dark:border-sky-800';
      case 'emerald':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';
      case 'purple':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-300 dark:border-purple-800';
      case 'amber':
      default:
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-800';
    }
  };

  const handleCopyShare = (slug: string) => {
    if (typeof window !== 'undefined') {
      const shareUrl = `${window.location.origin}/writing/#${slug}`;
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="articles" className="py-20 bg-[#0B0C10] transition-colors duration-300 relative border-t border-[#1F242E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 scroll-reveal">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>প্রবন্ধ, বিশ্লেষণ ও দৃষ্টিভঙ্গি &middot; Articles &amp; Insights</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8FAFC] tracking-tight">
              লেখালেখি ও চিন্তাভাবনা
            </h2>
            <p className="text-xs sm:text-sm text-[#D4AF37] font-semibold mt-1">
              আইন, ই-কমার্স ব্র্যান্ডিং, ডিজিটাল মার্কেটিং ও মননশীলতার গভীর বিশ্লেষণ
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="আর্টিকেল অনুসন্ধান করুন..."
              className="w-full bg-[#13161C] border border-[#1F242E] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#F8FAFC] placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all shadow-xl"
            />
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3.5 pointer-events-none" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = cat.id === 'all' 
              ? articles.length 
              : articles.filter(a => a.category === cat.id).length;
            
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-[#FA812F] text-white shadow-xs scale-102'
                    : 'bg-white dark:bg-[#131926] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:border-[#FA812F] hover:text-[#FA812F]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= LOADING SKELETON STATE ================= */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white dark:bg-[#131926] rounded-2xl p-6 border border-stone-200 dark:border-stone-800 space-y-4">
                <div className="h-44 bg-stone-200 dark:bg-stone-800 rounded-xl" />
                <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded-md w-1/3" />
                <div className="h-6 bg-stone-200 dark:bg-stone-800 rounded-md w-3/4" />
                <div className="h-16 bg-stone-100 dark:bg-stone-850 rounded-md" />
              </div>
            ))}
          </div>
        )}

        {/* ================= ERROR RETRY STATE ================= */}
        {!loading && error && (
          <div className="bg-white dark:bg-[#131926] border-2 border-red-200 dark:border-red-900/50 rounded-2xl p-8 text-center max-w-lg mx-auto space-y-3">
            <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
            <button
              onClick={fetchArticlesData}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FA812F] text-white rounded-xl text-xs font-bold shadow-xs hover:bg-[#e07124] transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>পুনরায় চেষ্টা করুন</span>
            </button>
          </div>
        )}

        {/* ================= EMPTY SEARCH STATE ================= */}
        {!loading && !error && filteredArticles.length === 0 && (
          <div className="bg-white dark:bg-[#131926] rounded-3xl p-12 border border-stone-200 dark:border-stone-800 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center mx-auto text-stone-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
              কোনো আর্টিকেল পাওয়া যায়নি
            </h3>
            <p className="text-xs text-stone-500 font-sans">
              আপনার অনুসন্ধান কিওয়ার্ড বা ক্যাটাগরি পরিবর্তন করে আবার চেষ্টা করুন।
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-stone-100 dark:bg-stone-800 hover:bg-[#FA812F] hover:text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              সকল আর্টিকেল প্রদর্শন করুন
            </button>
          </div>
        )}

        {/* ================= ARTICLES GRID ================= */}
        {!loading && !error && filteredArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredArticles.map((article, index) => {
              const isFirstFeatured = article.featured && index === 0 && selectedCategory === 'all' && !searchQuery;

              return (
                <article
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className={`group bg-white dark:bg-[#131926] rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1.5 ${
                    isFirstFeatured 
                      ? 'md:col-span-2 lg:col-span-2 border-[#FA812F] ring-1 ring-[#FA812F]/20'
                      : 'border-stone-200 dark:border-stone-800 hover:border-[#FA812F]'
                  }`}
                >
                  <div>
                    {/* Cover Photo */}
                    {article.coverImage && (
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
                        <img 
                          src={article.coverImage} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Featured Tag */}
                        {article.featured && (
                          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FA812F] text-white text-[11px] font-bold shadow-md">
                            <Sparkles className="w-3 h-3" />
                            <span>স্পটলাইট</span>
                          </div>
                        )}
                        
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs">
                          <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold backdrop-blur-md ${getCategoryBadgeClass(article.categoryColor)}`}>
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-mono bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md">
                            <Clock className="w-3 h-3 text-[#FA812F]" />
                            <span>{article.readTime}</span>
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-6 sm:p-7">
                      {/* Meta Information row without image */}
                      {!article.coverImage && (
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${getCategoryBadgeClass(article.categoryColor)}`}>
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-mono text-stone-500">
                            <Clock className="w-3.5 h-3.5 text-[#FA812F]" />
                            <span>{article.readTime}</span>
                          </span>
                        </div>
                      )}

                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-stone-400 dark:text-stone-500 mb-2.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className={`font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#FA812F] transition-colors line-clamp-2 mb-2 leading-snug ${
                        isFirstFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'
                      }`}>
                        {article.title}
                      </h3>
                      <div className="text-xs font-mono text-stone-500 dark:text-stone-400 mb-3.5 line-clamp-1">
                        {article.titleEn}
                      </div>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans leading-relaxed line-clamp-3 mb-5">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {article.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-6 pb-6 pt-4 border-t border-stone-100 dark:border-stone-850 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img 
                        src={PERSONAL_INFO.siteIcon} 
                        alt="N.B.N Sohan Chowdhury"
                        className="w-6 h-6 rounded-full object-cover border border-stone-300 dark:border-stone-700" 
                      />
                      <span className="text-xs font-medium text-stone-600 dark:text-stone-400">
                        {PERSONAL_INFO.fullName}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-bold text-[#FA812F] group-hover:translate-x-1 transition-transform">
                      <span>সম্পূর্ণ পড়ুন</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* ================= FULL ARTICLE READING MODAL ================= */}
        {activeArticle && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
            onClick={() => setActiveArticle(null)}
          >
            <div 
              className="relative w-full max-w-3xl bg-white dark:bg-[#121622] rounded-3xl border-2 border-stone-300 dark:border-stone-700 shadow-2xl my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-white/95 dark:bg-[#121622]/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${getCategoryBadgeClass(activeArticle.categoryColor)}`}>
                    {activeArticle.category}
                  </span>
                  <span className="text-xs font-mono text-stone-500 hidden sm:inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FA812F]" />
                    <span>{activeArticle.readTime}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyShare(activeArticle.slug)}
                    className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    title="লিংক কপি করুন"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    title="বন্ধ করুন"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-6">
                
                {/* Hero Header in Modal */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeArticle.date}</span>
                    <span>&middot;</span>
                    <span>{activeArticle.categoryEn}</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 leading-tight">
                    {activeArticle.title}
                  </h2>
                  <div className="text-sm font-mono text-stone-500 dark:text-stone-400 mt-2">
                    {activeArticle.titleEn}
                  </div>
                </div>

                {/* Cover Image */}
                {activeArticle.coverImage && (
                  <div className="rounded-2xl overflow-hidden aspect-[16/9] w-full border border-stone-200 dark:border-stone-800">
                    <img 
                      src={activeArticle.coverImage} 
                      alt={activeArticle.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                )}

                {/* Excerpt callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FA812F] text-stone-800 dark:text-stone-200 text-sm sm:text-base font-sans italic">
                  &ldquo;{activeArticle.excerpt}&rdquo;
                </div>

                {/* Full Paragraphs */}
                <div className="space-y-4 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                  {activeArticle.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags and Metadata */}
                <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-2">
                  {activeArticle.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-3 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author Card Box */}
                <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={PERSONAL_INFO.siteIcon} 
                      alt="N.B.N Sohan Chowdhury" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#FA812F]"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                        {PERSONAL_INFO.fullName}
                      </h4>
                      <p className="text-xs text-stone-500 font-sans">
                        {PERSONAL_INFO.headline}
                      </p>
                    </div>
                  </div>

                  <a 
                    href="/contact/" 
                    onClick={() => setActiveArticle(null)}
                    className="px-4 py-2 bg-[#FA812F] hover:bg-[#e07124] text-white text-xs font-bold rounded-xl transition-colors shrink-0"
                  >
                    মতামত জানান
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
