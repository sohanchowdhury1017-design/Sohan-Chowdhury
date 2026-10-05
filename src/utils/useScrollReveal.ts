import { useEffect } from 'react';

/**
 * Ensures all elements are instantly revealed with 100% opacity
 * and never left blank or hidden across all page routes.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealAll = () => {
      const elements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
      );
      elements.forEach((el) => {
        el.classList.add('is-revealed');
      });
    };

    revealAll();
    window.addEventListener('app:navigate', revealAll);
    window.addEventListener('popstate', revealAll);

    return () => {
      window.removeEventListener('app:navigate', revealAll);
      window.removeEventListener('popstate', revealAll);
    };
  }, []);
};
