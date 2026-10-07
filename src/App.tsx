/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeNavigationCards } from './components/HomeNavigationCards';
import { PageHeaderBanner } from './components/PageHeaderBanner';
import { About } from './components/About';
import { ProfessionalAreas } from './components/ProfessionalAreas';
import { SifriSpotlight } from './components/SifriSpotlight';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Articles } from './components/Articles';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { useScrollReveal } from './utils/useScrollReveal';
import { usePageSEO } from './utils/usePageSEO';
import { useCurrentPage } from './utils/navigation';

export default function App() {
  // Activate luxury IntersectionObserver scroll animations
  useScrollReveal();

  // Dynamic meta title and description updater across all routes
  usePageSEO();

  // Current active page state ('home' | 'about' | 'sifri' | 'education' | 'skills' | 'writing' | 'contact')
  const currentPage = useCurrentPage();

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-[#E2E8F0] selection:bg-[#00F5D4] selection:text-[#0B0F19] font-sans transition-colors duration-300">
      {/* Top Thin Luxury Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {/* ================= PAGE 0: HOME PAGE (ONLY Hero + 5 Distinct Hub Buttons) ================= */}
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-300">
            <Hero />
            <HomeNavigationCards />
          </div>
        )}

        {/* ================= PAGE 1: ABOUT ME (Separate Page) ================= */}
        {currentPage === 'about' && (
          <div className="animate-in fade-in duration-300">
            <PageHeaderBanner
              currentId="about"
              titleBn="আমার সম্পর্কে"
              titleEn="Personal & Family Information"
              subtitle="ব্যক্তিগত ও পারিবারিক তথ্য, জন্ম তারিখ ও পেশাগত দৃষ্টিভঙ্গি"
            />
            <About />
          </div>
        )}

        {/* ================= PAGE 2: SIFRI VENTURE (Separate Page) ================= */}
        {currentPage === 'sifri' && (
          <div className="animate-in fade-in duration-300">
            <PageHeaderBanner
              currentId="sifri"
              titleBn="সিফরি (SIFRI) ভেঞ্চার"
              titleEn="Executive Role & E-Commerce"
              subtitle="সিইও ও প্রতিষ্ঠাতা হিসেবে ফ্যাশন ই-কমার্স প্ল্যাটফর্ম sifribd.com"
            />
            <SifriSpotlight />
          </div>
        )}

        {/* ================= PAGE 3: EDUCATION (Separate Page) ================= */}
        {currentPage === 'education' && (
          <div className="animate-in fade-in duration-300">
            <PageHeaderBanner
              currentId="education"
              titleBn="শিক্ষাজীবন"
              titleEn="Legal Education & Academic Journey"
              subtitle="LLB ১ম বর্ষ, রংপুর থেকে HSC ও নূরজাহানপুর আরএমসি হাই স্কুল থেকে SSC সম্পন্ন"
            />
            <Education />
          </div>
        )}

        {/* ================= PAGE 4: SKILLS & AREAS (Separate Page) ================= */}
        {currentPage === 'skills' && (
          <div className="animate-in fade-in duration-300">
            <PageHeaderBanner
              currentId="skills"
              titleBn="সার্টিফিকেশন ও কাজের পরিধি"
              titleEn="Certifications, Skills & 15 Professional Areas"
              subtitle="ফটোশপ ও মার্কেটিং সার্টিফিকেশন এবং ১৫টি মূল কাজের ক্ষেত্র"
            />
            <Skills />
            <ProfessionalAreas />
          </div>
        )}

        {/* ================= PAGE 5: ARTICLES & WRITING (Separate Page) ================= */}
        {currentPage === 'writing' && (
          <div className="animate-in fade-in duration-300">
            <PageHeaderBanner
              currentId="writing"
              titleBn="প্রবন্ধ ও লেখালেখি"
              titleEn="Articles, Research & Perspectives"
              subtitle="আইন, ব্যবসা, ই-কমার্স ব্র্যান্ডিং ও মননশীলতার বিভিন্ন বিশ্লেষণধর্মী লেখা"
            />
            <Articles />
          </div>
        )}

        {/* ================= PAGE 6: CONTACT (Separate Page) ================= */}
        {currentPage === 'contact' && (
          <div className="animate-in fade-in duration-300">
            <PageHeaderBanner
              currentId="contact"
              titleBn="সরাসরি যোগাযোগ"
              titleEn="Contact, Phones & Direct Message"
              subtitle="ফোন নম্বর, হোয়াটসঅ্যাপ সরাসরি চ্যাট ও মেসেজ ফর্ম"
            />
            <Contact />
          </div>
        )}

        {/* ================= SAFE FALLBACK (Prevents any blank view) ================= */}
        {!['home', 'about', 'sifri', 'education', 'skills', 'writing', 'contact'].includes(currentPage) && (
          <div className="animate-in fade-in duration-300">
            <Hero />
            <HomeNavigationCards />
          </div>
        )}
      </main>

      {/* Footer */}
      <div className="pb-16 lg:pb-0">
        <Footer />
      </div>

      {/* Floating Interactive WhatsApp Widget (wa.me/+8801312815029) */}
      <WhatsAppWidget />

      {/* Pinned Mobile Bottom App Bar (Mobile View Navigation) */}
      <MobileBottomNav />
    </div>
  );
}
