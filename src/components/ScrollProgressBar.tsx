import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none" 
      aria-hidden="true"
    >
      <div 
        className="h-full bg-gradient-to-r from-[#FA812F] via-[#ffaa66] to-[#2DA8D8] transition-[width] duration-150 ease-out shadow-[0_1px_8px_rgba(250,129,47,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
