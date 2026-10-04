import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  ShoppingBag, 
  GraduationCap, 
  Award, 
  PhoneCall 
} from 'lucide-react';
import { NAV_ROUTES, navigateTo } from '../utils/navigation';

export const MobileBottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    // 1. Initial check from URL
    const checkCurrentPath = () => {
      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      const matched = NAV_ROUTES.find(r => r.path.replace(/\/$/, '') === currentPath);
      if (matched) {
        setActiveSection(matched.sectionId);
      } else {
        setActiveSection('home');
      }
    };

    checkCurrentPath();

    // 2. ScrollSpy listener to update active tab in real time as user scrolls
    const sections = NAV_ROUTES.map(r => document.getElementById(r.sectionId)).filter(Boolean) as HTMLElement[];

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 220;

          if (window.scrollY < 200) {
            setActiveSection('home');
            ticking = false;
            return;
          }

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.offsetTop <= scrollPosition) {
              setActiveSection(section.id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', checkCurrentPath);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', checkCurrentPath);
    };
  }, []);

  const getRouteIcon = (sectionId: string, isActive: boolean) => {
    const iconClass = `w-5 h-5 transition-transform duration-200 ${
      isActive ? 'scale-110 text-[#FA812F]' : 'text-stone-500 group-hover:text-stone-800'
    }`;

    switch (sectionId) {
      case 'home':
        return <Home className={iconClass} />;
      case 'about':
        return <User className={iconClass} />;
      case 'areas':
        return <Briefcase className={iconClass} />;
      case 'sifri':
        return <ShoppingBag className={iconClass} />;
      case 'education':
        return <GraduationCap className={iconClass} />;
      case 'skills':
        return <Award className={iconClass} />;
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
      case 'areas':
        return 'ক্ষেত্র';
      case 'sifri':
        return 'SIFRI';
      case 'education':
        return 'শিক্ষা';
      case 'skills':
        return 'দক্ষতা';
      case 'contact':
        return 'যোগাযোগ';
      default:
        return 'মেনু';
    }
  };

  return (
    <nav 
      aria-label="মোবাইল অ্যাপ নেভিগেশন"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-stone-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] px-1 sm:px-3 pt-1.5 pb-2 transition-transform duration-300"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 8px) + 4px)' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-7 gap-0.5 items-center">
        {NAV_ROUTES.map((route) => {
          const isActive = activeSection === route.sectionId;
          const shortLabel = getShortLabel(route.sectionId);

          return (
            <a
              key={route.sectionId}
              href={route.path}
              onClick={(e) => {
                setActiveSection(route.sectionId);
                navigateTo(route.path, route.sectionId, e);
              }}
              className={`group flex flex-col items-center justify-center py-1 px-0.5 rounded-xl transition-all relative select-none cursor-pointer ${
                isActive 
                  ? 'text-[#FA812F]' 
                  : 'text-stone-600 hover:text-stone-900 active:bg-stone-100/80'
              }`}
            >
              {/* Active Indicator Top Pill */}
              {isActive && (
                <span className="absolute -top-1.5 w-6 h-0.5 bg-[#FA812F] rounded-full shadow-xs" />
              )}

              {/* Icon Container with subtle active pill on click */}
              <div className={`p-1 rounded-xl transition-all duration-200 ${
                isActive ? 'bg-orange-50/80' : 'group-hover:bg-stone-50'
              }`}>
                {getRouteIcon(route.sectionId, isActive)}
              </div>

              {/* Short Label */}
              <span className={`text-[10px] sm:text-[11px] font-sans tracking-tight leading-tight mt-0.5 truncate max-w-full font-medium ${
                isActive ? 'font-bold text-[#FA812F]' : 'text-stone-600'
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
