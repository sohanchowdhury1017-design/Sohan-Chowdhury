/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SifriSpotlight } from './components/SifriSpotlight';
import { Education } from './components/Education';
import { Writings } from './components/Writings';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-[#FA812F] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching exact reference collage */}
        <Hero />

        {/* Section 01: About N B N Sohan Chowdhury */}
        <About />

        {/* Section 02: Flagship Venture - Sifri (sifribd.com) */}
        <SifriSpotlight />

        {/* Section 03: Academic Foundations - East West University Dept of English */}
        <Education />

        {/* Section 04: Essays & Thought Leadership */}
        <Writings />

        {/* Section 05: Philosophy & Operating Code */}
        <Philosophy />

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
