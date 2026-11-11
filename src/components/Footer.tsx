import React from 'react';
import { 
  ArrowUp, 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  Calendar, 
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { navigateTo } from '../utils/navigation';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C10] text-[#94A3B8] relative border-t border-[#1F242E] font-sans transition-colors duration-300">
      {/* Top Stripe in Champagne Gold with Soft Glow */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* ================= 1. TOP BRAND & BIO ROW ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1F242E]">
          
          {/* Brand Info with Custom Hand-drawn S Icon & Bengali Profile */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={PERSONAL_INFO.siteIcon} 
                alt="S" 
                className="w-10 h-10 rounded-full object-cover border border-[#1F242E] shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#F8FAFC] tracking-tight uppercase font-sans">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="text-xs font-mono text-[#D4AF37]">
                  {PERSONAL_INFO.preferredCall} &middot; Official Portfolio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-md">
              {PERSONAL_INFO.headlineBn}। প্রধান নির্বাহী ও প্রতিষ্ঠাতা — SIFRI (<a href={PERSONAL_INFO.sifriUrl} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline font-semibold">sifribd.com</a>) এবং আইন শিক্ষার্থী (LL.B.)।
            </p>

            <div className="p-3.5 bg-[#13161C] rounded-xl border border-[#1F242E] space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-[#F8FAFC]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-semibold">অফিসিয়াল ও ভেরিফাইড প্ল্যাটফর্ম:</span>
              </div>
              <div className="text-[11px] font-mono text-[#94A3B8]">
                ডোমেইন: <span className="text-[#D4AF37] font-bold">{PERSONAL_INFO.domain}</span> &middot; অবস্থান: <span className="text-[#F8FAFC]">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav in Bengali */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="font-mono uppercase tracking-wider text-[#D4AF37] font-semibold mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>মূল সেকশনসমূহ &middot; Navigation</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="/" onClick={(e) => navigateTo('/', 'home', e)} className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>হোম পেইজ (Home)</span>
                </a>
              </li>
              <li>
                <a href="/about/" onClick={(e) => navigateTo('/about/', 'about', e)} className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F242E]" />
                  <span>আমার সম্পর্কে ও পরিবার (About Me)</span>
                </a>
              </li>
              <li>
                <a href="/sifri/" onClick={(e) => navigateTo('/sifri/', 'sifri', e)} className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F242E]" />
                  <span>সিফরি ভেঞ্চার (SIFRI Venture)</span>
                </a>
              </li>
              <li>
                <a href="/education/" onClick={(e) => navigateTo('/education/', 'education', e)} className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F242E]" />
                  <span>শিক্ষাজীবন ও আইন (LL.B. Education)</span>
                </a>
              </li>
              <li>
                <a href="/skills/" onClick={(e) => navigateTo('/skills/', 'skills', e)} className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F242E]" />
                  <span>সার্টিফিকেশন ও দক্ষতা (Skills)</span>
                </a>
              </li>
              <li>
                <a href="/writing/" onClick={(e) => navigateTo('/writing/', 'writing', e)} className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F242E]" />
                  <span>প্রবন্ধ ও লেখালেখি (Articles)</span>
                </a>
              </li>
              <li>
                <a href="/contact/" onClick={(e) => navigateTo('/contact/', 'contact', e)} className="hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F242E]" />
                  <span>সরাসরি যোগাযোগ (Contact)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* External & Direct Contact Links */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="font-mono uppercase tracking-wider text-[#D4AF37] font-semibold mb-3 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>সরাসরি যোগাযোগ ও হটলাইন</span>
            </div>
            
            <ul className="space-y-3">
              <li>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#13161C] hover:bg-[#1F242E] rounded-xl border border-[#1F242E] hover:border-[#D4AF37] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">💬</span>
                    <div>
                      <div className="text-[10px] text-[#94A3B8]">WhatsApp ও প্রাইমারি ফোন</div>
                      <div className="text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-[#D4AF37]">{PERSONAL_INFO.phone1}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#D4AF37]" />
                </a>
              </li>

              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone2}`}
                  className="p-3 bg-[#13161C] hover:bg-[#1F242E] rounded-xl border border-[#1F242E] hover:border-[#D4AF37] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <div className="text-[10px] text-[#94A3B8]">বিকল্প মোবাইল নম্বর</div>
                      <div className="text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-[#D4AF37]">{PERSONAL_INFO.phone2}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#D4AF37]" />
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 bg-[#13161C] hover:bg-[#1F242E] rounded-xl border border-[#1F242E] hover:border-[#D4AF37] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <div className="text-[10px] text-[#94A3B8]">অফিসিয়াল ইমেইল</div>
                      <div className="text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] break-all">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#D4AF37]" />
                </a>
              </li>

              <li>
                <a
                  href={PERSONAL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#13161C] hover:bg-[#1F242E] rounded-xl border border-[#1F242E] hover:border-[#D4AF37] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <div className="text-[10px] text-[#94A3B8]">অফিসিয়াল ফেসবুক প্রোফাইল</div>
                      <div className="text-xs font-mono font-bold text-[#F8FAFC] group-hover:text-[#D4AF37]">facebook.com/nbn.sohan</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#D4AF37]" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= 2. VERIFIED DOSSIER & PROFILE HIGHLIGHTS SUMMARY ================= */}
        <div className="py-10 border-b border-[#1F242E]">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-bold">
              ভেরিফাইড অফিসিয়াল তথ্য বিবরণী &middot; Verified Dossier Highlights
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            <div className="p-3 bg-[#13161C] rounded-xl border border-[#1F242E]">
              <span className="text-[10px] text-[#94A3B8] block">জন্ম তারিখ</span>
              <span className="font-bold text-[#F8FAFC] block font-mono">19 July 2006</span>
              <span className="text-[10px] text-[#D4AF37]">বুধবার (Wednesday)</span>
            </div>

            <div className="p-3 bg-[#13161C] rounded-xl border border-[#1F242E]">
              <span className="text-[10px] text-[#94A3B8] block">পিতার পরিচয়</span>
              <span className="font-bold text-[#F8FAFC] block">{PERSONAL_INFO.family.father.name}</span>
              <span className="text-[10px] text-[#94A3B8]">{PERSONAL_INFO.family.father.roleBn}</span>
            </div>

            <div className="p-3 bg-[#13161C] rounded-xl border border-[#1F242E]">
              <span className="text-[10px] text-[#94A3B8] block">মাতার পরিচয়</span>
              <span className="font-bold text-[#F8FAFC] block">{PERSONAL_INFO.family.mother.name}</span>
              <span className="text-[10px] text-[#94A3B8]">{PERSONAL_INFO.family.mother.roleBn}</span>
            </div>

            <div className="p-3 bg-[#13161C] rounded-xl border border-[#1F242E]">
              <span className="text-[10px] text-[#94A3B8] block">প্রাতিষ্ঠানিক ডিগ্রি</span>
              <span className="font-bold text-[#F8FAFC] block">LLB ১ম বর্ষ</span>
              <span className="text-[10px] text-[#D4AF37]">আইন শিক্ষা (Law)</span>
            </div>

            <div className="p-3 bg-[#13161C] rounded-xl border border-[#1F242E]">
              <span className="text-[10px] text-[#94A3B8] block">প্রধান ভেঞ্চার</span>
              <span className="font-bold text-[#F8FAFC] block">CEO — SIFRI</span>
              <span className="text-[10px] text-[#94A3B8]">sifribd.com</span>
            </div>

            <div className="p-3 bg-[#13161C] rounded-xl border border-[#1F242E]">
              <span className="text-[10px] text-[#94A3B8] block">শিল্পচর্চা ও শখ</span>
              <span className="font-bold text-[#F8FAFC] block">অ্যাকোস্টিক গিটার</span>
              <span className="text-[10px] text-[#D4AF37]">Acoustic Guitar</span>
            </div>
          </div>
        </div>

        {/* ================= 3. 15 PROFESSIONAL AREAS MINI-TAGS ================= */}
        <div className="py-8 border-b border-[#1F242E]">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-[#D4AF37]" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold">
              ১৫টি প্রফেশনাল কাজের ক্ষেত্র &middot; 15 Core Practice Areas
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {PERSONAL_INFO.professionalAreas.map((area, idx) => (
              <span 
                key={area}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-[#13161C] border border-[#1F242E] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#D4AF37] transition-colors"
              >
                <span className="text-[#D4AF37] mr-1.5 font-mono">{idx + 1}.</span>
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* ================= 4. BOTTOM COPYRIGHT & BACK TO TOP ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#94A3B8] gap-4">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName} ({PERSONAL_INFO.preferredCall}). সর্বস্বত্ব সংরক্ষিত &middot; All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#13161C] border border-[#1F242E] hover:border-[#D4AF37] hover:text-[#F8FAFC] transition-colors cursor-pointer"
          >
            <span>উপরে যান &middot; Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
