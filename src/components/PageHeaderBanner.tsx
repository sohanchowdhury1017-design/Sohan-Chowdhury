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
    <div className="bg-[#0B0C10] pt-6 pb-6 border-b border-[#1F242E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Return to Home Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <button
            type="button"
            onClick={(e) => navigateTo('/', 'home', e)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#13161C] border border-[#1F242E] text-[#94A3B8] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF37] group-hover:-translate-x-1 transition-transform" />
            <span>হোম পেজে ফিরে যান (Back to Home)</span>
          </button>

          {/* Breadcrumb Trail */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <button
              onClick={(e) => navigateTo('/', 'home', e)}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>হোম</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span className="font-semibold text-[#F8FAFC]">{titleBn}</span>
          </div>
        </div>

        {/* 5 Page Navigation Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
          <span className="text-[11px] font-mono uppercase text-[#94A3B8] shrink-0 font-semibold mr-1 hidden sm:inline">
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
                    ? 'bg-[#D4AF37] text-[#0B0C10] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                    : 'bg-[#13161C] text-[#94A3B8] border border-[#1F242E] hover:border-[#D4AF37] hover:text-[#D4AF37]'
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
