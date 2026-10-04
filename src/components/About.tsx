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
              01. Background &amp; Perspective
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
              As the founder of <a href={PERSONAL_INFO.sifriUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-stone-900 hover:text-[#FA812F] underline decoration-[#FA812F] underline-offset-4 transition-colors">Sifri (Sifri BD, sifribd.com)</a>, I lead the venture’s strategic direction, brand ethos, and operational development. Known widely across Bangladesh as Sohan Chowdhury (NBN Sohan / Sohans), we build for consumers who value aesthetic simplicity, genuine transparency, and prompt nationwide delivery.
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
                &mdash; Sohan Chowdhury (NBN Sohan)
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
                href="https://facebook.com/nbn.sohan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 text-stone-800 rounded-md text-xs font-semibold tracking-wide uppercase hover:bg-white transition-colors"
              >
                <span>Facebook Profile</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Dossier Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-xs relative">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold block mb-4 border-b border-stone-100 pb-2">
                Identity &amp; Background Dossier
              </span>

              <dl className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start justify-between py-1.5 border-b border-stone-100/70">
                  <dt className="text-stone-500">Legal Name</dt>
                  <dd className="font-serif font-bold text-stone-900 text-right">{PERSONAL_INFO.fullName}</dd>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-stone-100/70">
                  <dt className="text-stone-500">Known Monikers</dt>
                  <dd className="font-medium text-stone-800 text-right">NBN Sohan &middot; Sohans</dd>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-stone-100/70">
                  <dt className="text-stone-500">Primary Venture</dt>
                  <dd className="font-medium text-stone-900 text-right">
                    <a href={PERSONAL_INFO.sifriUrl} target="_blank" rel="noopener noreferrer" className="text-[#FA812F] hover:underline font-semibold">
                      Sifri (sifribd.com)
                    </a>
                  </dd>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-stone-100/70">
                  <dt className="text-stone-500">Academic Background</dt>
                  <dd className="font-medium text-stone-800 text-right">East West University (English)</dd>
                </div>
                <div className="flex items-start justify-between py-1.5 border-b border-stone-100/70">
                  <dt className="text-stone-500">Location</dt>
                  <dd className="font-medium text-stone-800 text-right">Dhaka, Bangladesh</dd>
                </div>
                <div className="flex items-start justify-between py-1.5">
                  <dt className="text-stone-500">Primary Domain</dt>
                  <dd className="font-mono text-[#FA812F] font-semibold text-right">sohans.site</dd>
                </div>
              </dl>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border border-stone-200/80 shadow-xs">
                <Building2 className="w-5 h-5 text-[#FA812F] mb-2" />
                <h4 className="font-serif font-bold text-sm mb-1 text-stone-900">Venture Building</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Building dependable, scalable retail infrastructure for modern consumers.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-stone-200/80 shadow-xs">
                <Feather className="w-5 h-5 text-[#2DA8D8] mb-2" />
                <h4 className="font-serif font-bold text-sm mb-1 text-stone-900">Literary Semiotics</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Applying rhetorical theory and narrative design to brand communications.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
