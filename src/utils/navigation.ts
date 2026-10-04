/**
 * Clean path routing utility for sohans.site
 * Eliminates hash fragments (#) in favor of clean URLs:
 * / -> Home
 * /about/ -> About section
 * /sifri/ -> Sifri section
 * /education/ -> Education section
 * /writing/ -> Writing section
 * /philosophy/ -> Philosophy section
 * /contact/ -> Contact section
 */

export interface NavRoute {
  label: string;
  path: string;
  sectionId: string;
}

export const NAV_ROUTES: NavRoute[] = [
  { label: 'Home', path: '/', sectionId: 'home' },
  { label: 'About', path: '/about/', sectionId: 'about' },
  { label: 'Sifri', path: '/sifri/', sectionId: 'sifri' },
  { label: 'Education', path: '/education/', sectionId: 'education' },
  { label: 'Writing', path: '/writing/', sectionId: 'writing' },
  { label: 'Philosophy', path: '/philosophy/', sectionId: 'philosophy' },
  { label: 'Contact', path: '/contact/', sectionId: 'contact' },
];

export function navigateTo(path: string, sectionId?: string, event?: React.MouseEvent) {
  if (event) {
    event.preventDefault();
  }

  // Update browser address bar without reload, without hash
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path);
  }

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
