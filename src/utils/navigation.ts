/**
 * Clean path routing utility for sohans.site
 * Supports true multi-page separate views without stacked clutter
 */

import { useState, useEffect } from 'react';

export interface NavRoute {
  id: string;
  label: string;
  labelEn: string;
  path: string;
  iconName: 'user' | 'shopping-bag' | 'graduation-cap' | 'award' | 'phone' | 'book-open';
  description: string;
}

export const CORE_PAGES: NavRoute[] = [
  { 
    id: 'about',
    label: 'আমার সম্পর্কে', 
    labelEn: 'About Me',
    path: '/about/', 
    iconName: 'user',
    description: 'ব্যক্তিগত পরিচয়, জন্ম তারিখ, পরিবার, শৈল্পিক গিটার চর্চা ও অফিসিয়াল ডসিয়ার।'
  },
  { 
    id: 'sifri',
    label: 'সিফরি (SIFRI)', 
    labelEn: 'SIFRI E-Commerce',
    path: '/sifri/', 
    iconName: 'shopping-bag',
    description: 'ফ্যাশন ব্র্যান্ড সিফরি (sifribd.com)-এর সিইও ও ফাউন্ডার দায়িত্ব ও ব্যবসায়িক ভিশন।'
  },
  { 
    id: 'education',
    label: 'শিক্ষাজীবন', 
    labelEn: 'Legal Education',
    path: '/education/', 
    iconName: 'graduation-cap',
    description: 'LLB ১ম বর্ষ, রংপুর থেকে HSC ও নূরজাহানপুর আরএমসি হাই স্কুল থেকে SSC সম্পন্ন।'
  },
  { 
    id: 'skills',
    label: 'দক্ষতা ও ক্ষেত্র', 
    labelEn: 'Skills & Areas',
    path: '/skills/', 
    iconName: 'award',
    description: 'ফটোশপ ও মার্কেটিং সার্টিফিকেশন, ১৫টি কাজের ক্ষেত্র এবং অ্যানালিটিক্যাল স্কিলস।'
  },
  { 
    id: 'contact',
    label: 'যোগাযোগ', 
    labelEn: 'Contact & Connect',
    path: '/contact/', 
    iconName: 'phone',
    description: 'সরাসরি ফোন ও হোয়াটসঅ্যাপ নম্বর, ইমেইল, ফেসবুক প্রোফাইল ও দ্রুত বার্তা পাঠানোর ফর্ম।'
  },
];

export const ADDITIONAL_PAGES: NavRoute[] = [
  { 
    id: 'writing',
    label: 'প্রবন্ধ ও লেখা', 
    labelEn: 'Articles & Writing',
    path: '/writing/', 
    iconName: 'book-open',
    description: 'আইন, উদ্যোক্তা দর্শন, ই-কমার্স ব্র্যান্ডিং ও মননশীলতার বিভিন্ন বিশ্লেষণধর্মী লেখা ও অন্তর্দৃষ্টি।'
  },
];

// All navigable routes for navbar & seo
export const NAV_ROUTES = [
  { label: 'হোম', path: '/', sectionId: 'home' },
  ...CORE_PAGES.map(p => ({ label: p.label, path: p.path, sectionId: p.id }))
];

export function normalizePath(path: string): string {
  if (!path || path === '/' || path === '') return '/';
  const clean = path.replace(/\/$/, '');
  if (!clean.startsWith('/')) return `/${clean}/`;
  return `${clean}/`;
}

export function getCurrentRouteKey(): string {
  if (typeof window === 'undefined') return 'home';

  // Instant redirect for /fb shortlink
  const rawPath = window.location.pathname.replace(/\/$/, '') || '/';
  if (rawPath === '/fb' || window.location.pathname.startsWith('/fb') || window.location.hash === '#fb') {
    window.location.replace('https://www.facebook.com/nbn.sohan');
    return 'home';
  }

  // Check hash first if present (e.g. /#about or #education)
  const hash = window.location.hash.replace(/^#/, '');
  if (hash) {
    if (['about', 'sifri', 'education', 'skills', 'contact', 'areas', 'writing', 'articles'].includes(hash)) {
      if (hash === 'areas') return 'skills';
      if (hash === 'articles') return 'writing';
      return hash;
    }
  }

  const p = normalizePath(window.location.pathname);
  if (p === '/') return 'home';
  if (p.includes('/about/')) return 'about';
  if (p.includes('/sifri/')) return 'sifri';
  if (p.includes('/education/')) return 'education';
  if (p.includes('/skills/') || p.includes('/areas/')) return 'skills';
  if (p.includes('/writing/') || p.includes('/articles/')) return 'writing';
  if (p.includes('/contact/')) return 'contact';
  if (p.includes('/philosophy/')) return 'about';

  return 'home';
}

export function navigateTo(path: string, _targetId?: string, event?: React.MouseEvent) {
  if (event) {
    event.preventDefault();
  }

  try {
    const targetPath = normalizePath(path);
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
      window.dispatchEvent(new Event('app:navigate'));
    }
    // Always scroll smoothly to top when switching pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (_) {
    window.location.href = path;
  }
}

export function useCurrentPage() {
  const [page, setPage] = useState<string>(() => getCurrentRouteKey());

  useEffect(() => {
    const updateRoute = () => {
      setPage(getCurrentRouteKey());
    };

    window.addEventListener('popstate', updateRoute);
    window.addEventListener('app:navigate', updateRoute);

    return () => {
      window.removeEventListener('popstate', updateRoute);
      window.removeEventListener('app:navigate', updateRoute);
    };
  }, []);

  return page;
}
