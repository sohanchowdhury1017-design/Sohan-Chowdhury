/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProfessionalAreas } from './components/ProfessionalAreas';
import { SifriSpotlight } from './components/SifriSpotlight';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { NAV_ROUTES, NavRoute } from './utils/navigation';

export default function App() {
  useEffect(() => {
    try {
      // 1. Convert any legacy hash URL (e.g. #about) to clean path (/about/)
      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

      // Instant redirect for /fb shortlink
      if (currentPath === '/fb' || window.location.pathname.startsWith('/fb') || window.location.hash === '#fb') {
        window.location.replace('https://www.facebook.com/nbn.sohan');
        return;
      }

      const hash = window.location.hash.replace(/^#/, '');
      const cleanPathMap: Record<string, string> = {
        about: '/about/',
        areas: '/areas/',
        sifri: '/sifri/',
        education: '/education/',
        skills: '/skills/',
        contact: '/contact/',
        home: '/',
      };

      if (hash && cleanPathMap[hash]) {
        const cleanPath = cleanPathMap[hash];
        try {
          window.history.replaceState(null, '', cleanPath);
        } catch (_) {}
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (currentPath !== '/') {
        const sectionName = currentPath.replace(/^\//, '');
        const matched = NAV_ROUTES.find(r => r.sectionId === sectionName || r.path.replace(/\/$/, '') === currentPath);
        if (matched) {
          setTimeout(() => {
            const el = document.getElementById(matched.sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      }
    } catch (e) {
      console.warn('Path navigation init error:', e);
    }

    // 2. Handle browser Back/Forward navigation
    const handlePopState = () => {
      try {
        const path = window.location.pathname.replace(/\/$/, '') || '/';
        const matched = NAV_ROUTES.find(r => r.path.replace(/\/$/, '') === path);
        if (matched) {
          const el = document.getElementById(matched.sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else if (matched.path === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      } catch (_) {}
    };

    window.addEventListener('popstate', handlePopState);

    // 3. ScrollSpy: Update address bar with clean URLs (/about/, /areas/, etc.) without hash
    const sections = NAV_ROUTES.map(r => document.getElementById(r.sectionId)).filter(Boolean) as HTMLElement[];

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          try {
            const scrollPosition = window.scrollY + 200;

            if (window.scrollY < 300) {
              if (window.location.pathname !== '/') {
                try {
                  window.history.replaceState(null, '', '/');
                } catch (_) {}
              }
              ticking = false;
              return;
            }

            let currentSection: NavRoute | null = null;
            for (let i = sections.length - 1; i >= 0; i--) {
              const section = sections[i];
              if (section.offsetTop <= scrollPosition) {
                const route = NAV_ROUTES.find(r => r.sectionId === section.id);
                if (route) {
                  currentSection = route;
                  break;
                }
              }
            }

            if (currentSection && window.location.pathname !== currentSection.path) {
              try {
                window.history.replaceState(null, '', currentSection.path);
              } catch (_) {}
            }
          } catch (_) {}
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-[#FA812F] selection:text-white font-sans">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Section 01: About N.B.N Sohan Chowdhury */}
        <About />

        {/* Section 02: Professional Areas & Core Focus */}
        <ProfessionalAreas />

        {/* Section 03: Current Role - Brand & Marketing Director at SIFRI */}
        <SifriSpotlight />

        {/* Section 04: Education - Bachelor of Laws (LL.B.) */}
        <Education />

        {/* Section 05: Skills & Professional Interests */}
        <Skills />

        {/* Section 06: Contact & Direct Message */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Widget (wa.me/+8801312815029) */}
      <WhatsAppWidget />
    </div>
  );
}
