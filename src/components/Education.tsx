import React from 'react';
import { GraduationCap, BookOpen, Scroll, Award, CheckCircle, Compass } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#2DA8D8] font-semibold block mb-1">
              03. Academic Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Education &amp; Literary Discipline
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            The intellectual rigor of literary theory and linguistic semiotics shaping entrepreneurial vision.
          </p>
        </div>

        {/* Main Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Institution Spotlight */}
          <div className="lg:col-span-6 bg-white p-8 rounded-xl border border-stone-200/90 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-0" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#2DA8D8] flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-stone-500 mb-2">
                <span>EAST WEST UNIVERSITY</span>
                <span>&middot;</span>
                <span>DHAKA, BANGLADESH</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-2">
                Department of English
              </h3>
              
              <div className="text-sm font-medium text-[#FA812F] mb-4">
                Bachelor of Arts in English Studies
              </div>

              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {EDUCATION_DATA.description}
              </p>

              {/* Core Academic Focus Areas */}
              <div className="border-t border-stone-100 pt-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold mb-3">
                  Core Scholarly Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EDUCATION_DATA.focusAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-xs text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DA8D8]" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Theoretical Foundations & Interdisciplinary Edge */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The Literary Advantage Card */}
            <div className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
                <BookOpen className="w-4 h-4 text-[#FA812F]" />
                <span>The Humanities &amp; Enterprise Synthesis</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-stone-900 mb-2">
                Why Literature Powers Leadership
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Reading complex texts builds stamina for navigating ambiguous business landscapes. The ability to articulate nuanced ideas clearly creates alignment across teams and earns enduring customer trust.
              </p>
            </div>

            {/* Academic Heritage Quote */}
            <div className="bg-stone-900 text-white p-7 rounded-xl shadow-xs">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2DA8D8] font-semibold block mb-2">
                Academic Heritage
              </span>
              <p className="text-sm text-stone-300 leading-relaxed mb-4">
                East West University (EWU) is accredited as one of Bangladesh&rsquo;s leading private institutions. The Department of English instills analytical precision, rhetorical sensitivity, and high standards of written discourse.
              </p>
              <div className="text-xs font-mono text-stone-400">
                A/2, Jahurul Islam Avenue, Jahurul Islam City, Aftabnagar, Dhaka-1212
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
