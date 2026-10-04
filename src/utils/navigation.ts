/**
 * Clean path routing utility for sohans.site
 * Supports clean URL paths without hash fragments
 */

export interface NavRoute {
  label: string;
  path: string;
  sectionId: string;
}

export const NAV_ROUTES: NavRoute[] = [
  { label: 'হোম', path: '/', sectionId: 'home' },
  { label: 'আমার সম্পর্কে', path: '/about/', sectionId: 'about' },
  { label: 'পেশাগত ক্ষেত্র', path: '/areas/', sectionId: 'areas' },
  { label: 'সিফরি (SIFRI)', path: '/sifri/', sectionId: 'sifri' },
  { label: 'শিক্ষাজীবন', path: '/education/', sectionId: 'education' },
  { label: 'দক্ষতা ও আগ্রহ', path: '/skills/', sectionId: 'skills' },
  { label: 'যোগাযোগ', path: '/contact/', sectionId: 'contact' },
];

export function navigateTo(path: string, sectionId?: string, event?: React.MouseEvent) {
  if (event) {
    event.preventDefault();
  }

  // Update browser address bar without reload
  try {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
  } catch (_) {}

  // If sectionId is provided or can be found from path
  const targetId = sectionId || NAV_ROUTES.find(r => r.path === path)?.sectionId;
  if (targetId) {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }

  if (path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
