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
    <div className="bg-[#FAF9F5] dark:bg-[#0d0c0a] pt-6 pb-6 border-b border-stone-200/80 dark:border-stone-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Return to Home Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <button
            type="button"
            onClick={(e) => navigateTo('/', 'home', e)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#1a1815] border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:text-[#FA812F] dark:hover:text-[#FA812F] hover:border-[#FA812F] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>হোম পেজে ফিরে যান (Back to Home)</span>
          </button>

          {/* Breadcrumb Trail */}
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            <button
              onClick={(e) => navigateTo('/', 'home', e)}
              className="hover:text-[#FA812F] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span>হোম</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-semibold text-stone-900 dark:text-stone-100">{titleBn}</span>
          </div>
        </div>

        {/* 5 Page Navigation Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
          <span className="text-[11px] font-mono uppercase text-stone-400 dark:text-stone-500 shrink-0 font-semibold mr-1 hidden sm:inline">
            অন্যান্য পেজ:
          </span>
          {CORE_PAGES.map((page) => {
            const isActive = page.id === currentId;
            return (
              <button
                key={page.id}
                onClick={(e) => navigateTo(page.path, page.id, e)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FA812F] text-white font-bold shadow-xs'
                    : 'bg-white dark:bg-[#1a1815] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:border-[#FA812F] hover:text-[#FA812F]'
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
