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
              Education & Literary Discipline
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
                <span>·</span>
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

          {/* Academic Synthesis & Humanities Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-xs">
              <h4 className="text-base font-serif font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FA812F]" />
                <span>How Literary Training Translates to Startup Leadership</span>
              </h4>
              
              <div className="space-y-4">
                {EDUCATION_DATA.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-stone-400 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reflection on East West University */}
            <div className="bg-[#FAF9F5] p-6 rounded-xl border border-stone-200 text-stone-700">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
                <Scroll className="w-4 h-4 text-[#2DA8D8]" />
                <span>Scholarly Inquiry</span>
              </div>
              <p className="text-xs sm:text-sm italic leading-relaxed text-stone-700 font-serif">
                &ldquo;Studying at East West University gave me a lifelong reverence for precise language. In an age of automated noise, someone who can write with clarity and empathy possesses the ultimate unfair advantage in enterprise building.&rdquo;
              </p>
              <div className="mt-3 text-[11px] font-mono text-stone-500">
                — N B N Sohan Chowdhury
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
