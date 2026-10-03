import React from 'react';
import { CORE_PHILOSOPHIES, SKILL_CATEGORIES } from '../data/portfolioData';
import { Compass, Sparkles, Target, Zap } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100/50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold block mb-1">
              05. Operating Code
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Philosophy & Strategic Competencies
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Guiding principles that govern Sifri, intellectual exploration, and creative execution.
          </p>
        </div>

        {/* 4 Core Philosophies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_PHILOSOPHIES.map((item) => (
            <div
              key={item.number}
              className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-serif font-bold text-stone-300 font-mono block mb-3">
                  {item.number}
                </span>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="w-6 h-0.5 bg-[#FA812F] mt-6" />
            </div>
          ))}
        </div>

        {/* Competencies Matrix */}
        <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-xs">
          <h3 className="text-sm font-mono uppercase tracking-wider text-stone-500 font-semibold mb-6 flex items-center gap-2">
            <Target className="w-4 h-4 text-[#FA812F]" />
            <span>Disciplinary Matrix</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="space-y-3">
                <h4 className="text-base font-serif font-bold text-stone-900 pb-2 border-b border-stone-100">
                  {cat.name}
                </h4>
                <ul className="space-y-2 text-xs text-stone-600">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FA812F]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
