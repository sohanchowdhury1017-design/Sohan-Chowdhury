import React from 'react';
import { ArrowUpRight, GraduationCap, Building2, Feather, Globe, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-100/50 border-t border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold block mb-1">
              01. Background & Perspective
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              About N B N Sohan Chowdhury
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Bridging the classical rigor of literary studies with high-conviction digital venture building in Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-base">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#FA812F]">
              I am an entrepreneur, writer, and researcher driven by the conviction that modern commerce is fundamentally a discipline of human empathy. Rooted in the Department of English at East West University, my work sits at the intersection of narrative design, semiotics, and consumer systems.
            </p>

            <p>
              As the founder of <a href={PERSONAL_INFO.sifriUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-stone-900 hover:text-[#FA812F] underline decoration-[#FA812F] underline-offset-4 transition-colors">Sifri (sifribd.com)</a>, I lead the venture’s strategic direction, brand ethos, and operational development. We build for Bangladeshi consumers who value aesthetic simplicity, genuine transparency, and prompt nationwide delivery.
            </p>

            <p>
              Rather than treating business and the humanities as opposites, I believe an education in literature is an unmatched foundation for leadership. Reading great literature teaches one to understand underlying motives, decipher subtext, and communicate with clarity. When applied to commerce, this translates into respectful advertising, intuitive digital interfaces, and lasting customer loyalty.
            </p>

            {/* Editorial Quote Box */}
            <div className="border-l-2 border-[#FA812F] pl-5 py-2 my-6 bg-white/70 rounded-r-md">
              <blockquote className="font-serif italic text-stone-800 text-lg sm:text-xl">
                &ldquo;Words structure human reality. When an entrepreneur masters syntax and narrative theory, customer trust ceases to be an algorithmic mystery.&rdquo;
              </blockquote>
              <cite className="block text-xs font-mono uppercase tracking-wider text-stone-500 mt-2 not-italic">
                — N B N Sohan Chowdhury
              </cite>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.sifriUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-md text-xs font-semibold tracking-wide uppercase hover:bg-stone-800 transition-colors shadow-xs"
              >
                <span>Visit Sifri</span>
                <ArrowUpRight className="w-4 h-4 text-[#FA812F]" />
              </a>
              <a
                href="#writing"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 text-stone-800 rounded-md text-xs font-semibold tracking-wide uppercase hover:bg-white transition-colors"
              >
                <span>Explore Essays</span>
              </a>
            </div>
          </div>

          {/* Structured Profile Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs">
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-semibold mb-4">
                Core Roles & Anchors
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
                  <div className="w-8 h-8 rounded-md bg-orange-50 text-[#FA812F] flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Founder & Managing Director</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Sifri (<a href="https://sifribd.com" target="_blank" rel="noopener noreferrer" className="text-[#FA812F] hover:underline font-mono">sifribd.com</a>)</p>
                    <p className="text-xs text-stone-500 mt-1">Driving company vision, digital store architecture, and curated lifestyle merchandise.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
                  <div className="w-8 h-8 rounded-md bg-sky-50 text-[#2DA8D8] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Department of English</h4>
                    <p className="text-xs text-stone-600 mt-0.5">East West University (EWU), Dhaka</p>
                    <p className="text-xs text-stone-500 mt-1">Focusing on literary theory, semiotics, rhetoric, and modern textual analysis.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-md bg-rose-50 text-[#F43F5E] flex items-center justify-center shrink-0">
                    <Feather className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Writer & Brand Stylist</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Essays on commerce, linguistics & culture</p>
                    <p className="text-xs text-stone-500 mt-1">Authoring reflections on entrepreneurship, semiotics, and customer psychology.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Metadata Box */}
            <div className="bg-[#FAF9F5] p-5 rounded-lg border border-stone-200 text-xs text-stone-600 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-stone-400">Personal Domain</span>
                <span className="font-mono font-bold text-stone-900">sohans.site</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-stone-400">Primary Email</span>
                <a href="mailto:sohanchowdhury1017@gmail.com" className="text-stone-800 hover:text-[#FA812F] font-mono transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-stone-400">Geographic Base</span>
                <span className="text-stone-800">Aftabnagar, Dhaka, BD</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
