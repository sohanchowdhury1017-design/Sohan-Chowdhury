import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar, X, Quote } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES_DATA } from '../data/portfolioData';

export const Writings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['All', 'Brand & Narrative', 'Entrepreneurship', 'Digital Commerce', 'Literature & Culture'];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.category === selectedCategory);

  return (
    <section id="writing" className="py-20 bg-[#FAF9F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold block mb-1">
              04. Essays & Thought Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Writings & Observations
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Essays on narrative theory, venture building in South Asia, and the philosophy of human-centered commerce.
          </p>
        </div>

        {/* Category Filter Bar (Functional Buttons with click handlers) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:text-stone-950 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-white p-7 rounded-lg border border-stone-200/80 hover:border-stone-900/40 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Zero-Pill unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3 font-mono">
                  <span className="text-[#FA812F] font-medium">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-[#FA812F] transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-900">
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Essay <ArrowUpRight className="w-3.5 h-3.5 text-[#FA812F]" />
                </span>
                <span className="font-mono text-stone-400 font-normal">N B N SOHAN</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Article Lightbox / Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-[#FAF9F5] border border-stone-300 w-full max-w-2xl max-h-[90vh] rounded-xl shadow-2xl overflow-y-auto relative flex flex-col p-6 sm:p-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-md text-stone-500 hover:text-stone-950 hover:bg-stone-200 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-3">
              <span className="text-[#FA812F] font-semibold">{activeArticle.category}</span>
              <span>·</span>
              <span>{activeArticle.date}</span>
              <span>·</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight mb-6">
              {activeArticle.title}
            </h2>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-stone-200 text-xs text-stone-600">
              <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-serif font-bold text-xs">
                S
              </div>
              <div>
                <div className="font-semibold text-stone-900">N B N Sohan Chowdhury</div>
                <div>Founder of Sifri & East West University English Scholar</div>
              </div>
            </div>

            {/* Pull Quote */}
            {activeArticle.quote && (
              <div className="my-4 p-4 bg-orange-50/60 border-l-3 border-[#FA812F] rounded-r-md">
                <p className="font-serif italic text-stone-800 text-base sm:text-lg">
                  &ldquo;{activeArticle.quote}&rdquo;
                </p>
              </div>
            )}

            {/* Article Content */}
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
              {activeArticle.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Footer Modal Actions */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-stone-500">
                Published on sohans.site
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-stone-900 text-white rounded-md text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
