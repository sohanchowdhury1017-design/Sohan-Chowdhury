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
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#12110f]/95 backdrop-blur-xl border-t border-stone-200/90 dark:border-stone-800/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] px-1 sm:px-2 pt-1.5 pb-2 transition-colors duration-300"
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
                  ? 'text-[#FA812F]' 
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 active:bg-stone-100/80 dark:active:bg-stone-800/80'
              }`}
            >
              {/* Active Indicator Top Pill */}
              {isActive && (
                <span className="absolute -top-1.5 w-6 h-0.5 bg-[#FA812F] rounded-full shadow-xs" />
              )}

              {/* Icon Container with subtle active pill on click */}
              <div className={`p-1 rounded-xl transition-all duration-200 ${
                isActive ? 'bg-orange-50/80 dark:bg-orange-950/40' : 'group-hover:bg-stone-50 dark:group-hover:bg-stone-800/50'
              }`}>
                {getRouteIcon(route.sectionId, isActive)}
              </div>

              {/* Short Label */}
              <span className={`text-[10px] sm:text-[11px] font-sans tracking-tight leading-tight mt-0.5 truncate max-w-full font-medium ${
                isActive ? 'font-bold text-[#FA812F]' : 'text-stone-600 dark:text-stone-400'
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
