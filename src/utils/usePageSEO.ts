import { useEffect } from 'react';
import { getPageSEO, PageSEO } from '../data/seoData';

function setMetaTag(selector: string, attr: string, value: string) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    if (selector.startsWith('meta[name=')) {
      const name = selector.match(/meta\[name="?([^"\]]+)"?\]/)?.[1];
      if (name) element.setAttribute('name', name);
    } else if (selector.startsWith('meta[property=')) {
      const property = selector.match(/meta\[property="?([^"\]]+)"?\]/)?.[1];
      if (property) element.setAttribute('property', property);
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attr, value);
}

function setCanonical(url: string) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

export function applyPageSEO(seo: PageSEO) {
  if (typeof document === 'undefined') return;

  // Title
  document.title = seo.title;

  // Meta description & keywords
  setMetaTag('meta[name="description"]', 'content', seo.description);
  setMetaTag('meta[name="keywords"]', 'content', seo.keywords.join(', '));

  // Canonical
  setCanonical(seo.canonical);

  // OpenGraph Tags
  setMetaTag('meta[property="og:title"]', 'content', seo.title);
  setMetaTag('meta[property="og:description"]', 'content', seo.description);
  setMetaTag('meta[property="og:url"]', 'content', seo.canonical);
  setMetaTag('meta[property="og:type"]', 'content', seo.ogType);

  // Twitter Tags
  setMetaTag('meta[name="twitter:title"]', 'content', seo.title);
  setMetaTag('meta[name="twitter:description"]', 'content', seo.description);
}

/**
 * Hook to keep page meta title and description tags synced with clean URL routes
 */
export function usePageSEO() {
  useEffect(() => {
    // Initial sync based on current path
    const updateSEO = () => {
      const seo = getPageSEO(window.location.pathname);
      applyPageSEO(seo);
    };

    updateSEO();

    // Listen to pushState / replaceState / popState and app:navigate
    window.addEventListener('popstate', updateSEO);
    window.addEventListener('app:navigate', updateSEO);

    // Observer or timer to check URL changes if pushState was called
    const interval = setInterval(() => {
      const expectedSEO = getPageSEO(window.location.pathname);
      if (document.title !== expectedSEO.title) {
        applyPageSEO(expectedSEO);
      }
    }, 500);

    return () => {
      window.removeEventListener('popstate', updateSEO);
      window.removeEventListener('app:navigate', updateSEO);
      clearInterval(interval);
    };
  }, []);
}
