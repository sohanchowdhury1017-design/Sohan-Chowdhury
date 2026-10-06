import React from 'react';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';
import { CORE_PAGES, navigateTo } from '../utils/navigation';

interface PageHeaderBannerProps {
  currentId: string;
  titleBn: string;
  titleEn: string;
  subtitle: string;
}

export const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  currentId,
  titleBn,
  titleEn,
  subtitle,
}) => {
  return (
    <div className="bg-[#FAF8F5] dark:bg-[#0b0f17] pt-6 pb-6 border-b border-orange-100/70 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Return to Home Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <button
            type="button"
            onClick={(e) => navigateTo('/', 'home', e)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#131926] border border-orange-200/80 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400 text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-sky-500 group-hover:-translate-x-1 transition-transform" />
            <span>হোম পেজে ফিরে যান (Back to Home)</span>
          </button>

          {/* Breadcrumb Trail */}
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            <button
              onClick={(e) => navigateTo('/', 'home', e)}
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5 text-[#FA812F]" />
              <span>হোম</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-semibold text-stone-900 dark:text-stone-100">{titleBn}</span>
          </div>
        </div>

        {/* 5 Page Navigation Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
          <span className="text-[11px] font-mono uppercase text-sky-700/80 dark:text-sky-400 shrink-0 font-semibold mr-1 hidden sm:inline">
            অন্যান্য পেজ:
          </span>
          {CORE_PAGES.map((page) => {
            const isActive = page.id === currentId;
            return (
              <button
                key={page.id}
                onClick={(e) => navigateTo(page.path, page.id, e)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FA812F] text-white shadow-xs'
                    : 'bg-white dark:bg-[#131926] text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-[#FA812F] hover:text-[#FA812F]'
                }`}
              >
                {page.label}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
