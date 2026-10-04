import { useEffect } from 'react';

/**
 * Custom hook to initialize silky smooth IntersectionObserver scroll animations
 * Automatically reveals elements with .scroll-reveal, .scroll-reveal-left, 
 * .scroll-reveal-right, and .scroll-reveal-scale as user scrolls down.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
    );

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Trigger immediate check for elements already in viewport
    const triggerInitial = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.92) {
          el.classList.add('is-revealed');
          observer.unobserve(el);
        }
      });
    };

    triggerInitial();
    const timer = setTimeout(triggerInitial, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
};
