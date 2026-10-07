import React from 'react';
import { 
  Home, 
  User, 
  ShoppingBag, 
  GraduationCap, 
  Award, 
  PhoneCall,
  BookOpen
} from 'lucide-react';
import { NAV_ROUTES, navigateTo, useCurrentPage } from '../utils/navigation';

export const MobileBottomNav: React.FC = () => {
  const activeSection = useCurrentPage();

  const getRouteIcon = (sectionId: string, isActive: boolean) => {
    const iconClass = `w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
      isActive ? 'scale-110 text-[#FA812F]' : 'text-stone-500 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200'
    }`;

    switch (sectionId) {
      case 'home':
        return <Home className={iconClass} />;
      case 'about':
        return <User className={iconClass} />;
      case 'sifri':
        return <ShoppingBag className={iconClass} />;
      case 'education':
        return <GraduationCap className={iconClass} />;
      case 'skills':
        return <Award className={iconClass} />;
      case 'writing':
        return <BookOpen className={iconClass} />;
      case 'contact':
        return <PhoneCall className={iconClass} />;
      default:
        return <Home className={iconClass} />;
    }
  };

  const getShortLabel = (sectionId: string) => {
    switch (sectionId) {
      case 'home':
        return 'হোম';
      case 'about':
        return 'পরিচিতি';
      case 'sifri':
        return 'SIFRI';
      case 'education':
        return 'শিক্ষা';
      case 'skills':
        return 'দক্ষতা';
      case 'writing':
        return 'প্রবন্ধ';
      case 'contact':
        return 'যোগাযোগ';
      default:
        return 'মেনু';
    }
  };

  return (
    <nav 
      aria-label="মোবাইল অ্যাপ নেভিগেশন"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B0C10]/95 backdrop-blur-xl border-t border-[#1F242E] shadow-[0_-4px_25px_rgba(0,0,0,0.5)] px-1 sm:px-2 pt-1.5 pb-2 transition-colors duration-300"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 8px) + 4px)' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-6 gap-0.5 items-center">
        {NAV_ROUTES.map((route) => {
          const isActive = activeSection === route.sectionId;
          const shortLabel = getShortLabel(route.sectionId);

          return (
            <a
              key={route.sectionId}
              href={route.path}
              onClick={(e) => {
                navigateTo(route.path, route.sectionId, e);
              }}
              className={`group flex flex-col items-center justify-center py-1 px-0.5 rounded-xl transition-all relative select-none cursor-pointer ${
                isActive 
                  ? 'text-[#D4AF37]' 
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] active:bg-[#13161C]'
              }`}
            >
              {/* Active Indicator Top Pill */}
              {isActive && (
                <span className="absolute -top-1.5 w-6 h-0.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              )}

              {/* Icon Container with subtle active pill on click */}
              <div className={`p-1 rounded-xl transition-all duration-200 ${
                isActive ? 'bg-[#D4AF37]/15' : 'group-hover:bg-[#13161C]'
              }`}>
                {getRouteIcon(route.sectionId, isActive)}
              </div>

              {/* Short Label */}
              <span className={`text-[10px] sm:text-[11px] font-sans tracking-tight leading-tight mt-0.5 truncate max-w-full font-medium ${
                isActive ? 'font-bold text-[#D4AF37]' : 'text-[#94A3B8]'
              }`}>
                {shortLabel}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
