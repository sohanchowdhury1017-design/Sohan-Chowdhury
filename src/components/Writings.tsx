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
              04. Essays &amp; Thought Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Writings &amp; Observations
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Essays on narrative theory, venture building in South Asia, and the philosophy of human-centered commerce.
          </p>
        </div>

        {/* Category Filter Bar */}
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
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span className="text-[#FA812F] font-medium">{article.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-[#FA812F] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-sans">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-500">
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#FA812F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white max-w-2xl w-full p-6 sm:p-8 rounded-2xl shadow-xl border border-stone-200 relative my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
              aria-label="Close essay"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#FA812F] uppercase tracking-wider mb-2 font-semibold">
              <span>{activeArticle.category}</span>
              <span>&middot;</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-3 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="text-xs text-stone-500 mb-6 pb-4 border-b border-stone-100 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Published {activeArticle.date}</span>
              <span>&middot;</span>
              <span>By Sohan Chowdhury</span>
            </div>

            <div className="text-stone-700 leading-relaxed text-sm sm:text-base space-y-4 font-sans">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-[#FA812F]">
                {activeArticle.excerpt}
              </p>
              <p>
                In the context of the contemporary Bangladeshi digital ecosystem, brand loyalty is rarely forged through price cuts alone. When an organization speaks with consistent voice, honest fulfillment promises, and aesthetic clarity, customers intuitively respond.
              </p>
              <p>
                Literature teaches us that human actions are driven by unstated needs for recognition and belonging. Designing an e-commerce platform like Sifri (sifribd.com) requires treating every transactional touchpoint as part of a larger narrative arc.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Author: N B N Sohan Chowdhury</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-md font-medium transition-colors"
              >
                Close Essay
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
