import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, MessageCircle, ArrowUpRight, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const copyToClipboard = (text: string, type: 'phone1' | 'phone2' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(type);
      setTimeout(() => setCopiedPhone(null), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0C10] border-t border-[#1F242E] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 scroll-reveal">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              ০৬. সরাসরি যোগাযোগ &middot; Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F8FAFC] tracking-tight">
              যোগাযোগ | Contact
            </h2>
          </div>
          <p className="text-sm text-[#94A3B8] max-w-md font-sans">
            ব্যবসায়িক পার্টনারশিপ, ব্র্যান্ড কনসালটেন্সি, আইনি গবেষণা বা যে কোনো প্রয়োজনে নির্দ্বিধায় যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Phone, Email, Facebook, Website Cards */}
          <div className="lg:col-span-5 space-y-5 scroll-reveal-left">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-[#13161C] p-6 sm:p-7 rounded-2xl border border-[#1F242E] shadow-xl space-y-4 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-[#1F242E]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>ফোন নম্বর &middot; Phone</span>
                </span>
                <span className="text-xs font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                  সরাসরি কল বা মেসেজ
                </span>
              </div>

              {/* Phone 1 (WhatsApp) */}
              <div className="flex items-center justify-between gap-3 p-3 bg-[#0B0C10] border border-[#1F242E] rounded-xl">
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8]">প্রাইমারি / WhatsApp</div>
                  <div className="text-base font-bold text-[#F8FAFC] font-mono">{PERSONAL_INFO.phone1}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone1, 'phone1')}
                    className="p-2 bg-[#13161C] hover:bg-[#1F242E] text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg text-xs transition-colors cursor-pointer border border-[#1F242E]"
                    title="কপি করুন"
                  >
                    {copiedPhone === 'phone1' ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`tel:${PERSONAL_INFO.phone1}`}
                    className="p-2 bg-[#0B0C10] hover:bg-[#D4AF37] text-[#F8FAFC] hover:text-[#0B0C10] rounded-lg text-xs transition-colors border border-[#1F242E]"
                    title="কল করুন"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center justify-between gap-3 p-3 bg-[#0B0C10] border border-[#1F242E] rounded-xl">
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8]">বিকল্প নম্বর / Alt Phone</div>
                  <div className="text-base font-bold text-[#F8FAFC] font-mono">{PERSONAL_INFO.phone2}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone2, 'phone2')}
                    className="p-2 bg-[#13161C] hover:bg-[#1F242E] text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg text-xs transition-colors cursor-pointer border border-[#1F242E]"
                    title="কপি করুন"
                  >
                    {copiedPhone === 'phone2' ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`tel:${PERSONAL_INFO.phone2}`}
                    className="p-2 bg-[#0B0C10] hover:bg-[#D4AF37] text-[#F8FAFC] hover:text-[#0B0C10] rounded-lg text-xs transition-colors border border-[#1F242E]"
                    title="কল করুন"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Fast WhatsApp Connect Button - Champagne Gold with soft glow */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#0B0C10]" />
                <span>সরাসরি হোয়াটসঅ্যাপে কথা বলুন</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-[#13161C] p-6 sm:p-7 rounded-2xl border border-[#1F242E] shadow-xl space-y-3 transition-colors">
              <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold block flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>ইমেইল &middot; Email</span>
              </span>
              <div className="text-base sm:text-lg font-mono font-bold text-stone-900 dark:text-stone-100 break-all">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="px-3.5 py-2 bg-[#0B0C10] hover:bg-[#1F242E] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1F242E] rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />}
                  <span>{copiedEmail ? 'কপি হয়েছে' : 'ইমেইল কপি করুন'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3.5 py-2 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] font-bold rounded-lg text-xs transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center gap-1.5"
                >
                  <span>মেইল পাঠান</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Facebook & Website Link Card */}
            <div className="bg-[#13161C] p-6 rounded-2xl border border-[#1F242E] shadow-xl space-y-3 transition-colors">
              <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold block">
                অনলাইন প্রোফাইল ও ডোমেইন
              </span>
              
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                <a
                  href={PERSONAL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0B0C10] border border-[#1F242E] hover:border-[#D4AF37] transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#F8FAFC] group-hover:text-[#D4AF37]">Facebook:</span>
                    <span className="text-[#94A3B8]">facebook.com/nbn.sohan</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#D4AF37]" />
                </a>

                <a
                  href={`https://${PERSONAL_INFO.domain}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0B0C10] border border-[#1F242E] hover:border-[#D4AF37] transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-semibold text-[#F8FAFC]">Website:</span>
                    <span className="text-[#D4AF37] font-mono font-bold">{PERSONAL_INFO.domain}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#D4AF37]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Bengali Contact Form in Graphite Sheet */}
          <div className="lg:col-span-7 bg-[#13161C] p-8 sm:p-10 rounded-3xl border border-[#1F242E] shadow-2xl scroll-reveal-right delay-100 transition-colors">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F8FAFC] mb-2">
              বার্তা পাঠান &middot; Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mb-8 font-sans">
              নিচের ফর্মটি পূরণ করে সরাসরি সোহান চৌধুরীর কাছে মেসেজ পাঠান। দ্রুততম সময়ের মধ্যে রিপ্লাই দেওয়া হবে।
            </p>

            {status === 'success' ? (
              <div className="p-6 bg-[#0B0C10] border border-[#D4AF37] rounded-2xl text-[#F8FAFC] my-6 animate-in fade-in shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <h4 className="font-bold text-sm mb-1 text-[#D4AF37]">বার্তা সফলভাবে পাঠানো হয়েছে!</h4>
                <p className="text-xs text-[#94A3B8]">
                  ধন্যবাদ। সোহান চৌধুরী আপনার ইমেইলে দ্রুত যোগাযোগ করবেন।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="নাম লিখুন"
                      className="w-full px-4 py-3 bg-[#0B0C10] border border-[#1F242E] rounded-xl text-sm text-[#F8FAFC] placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                      আপনার ইমেইল *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 bg-[#0B0C10] border border-[#1F242E] rounded-xl text-sm text-[#F8FAFC] placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                    বিষয় / বিষয়বস্তু
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="ব্র্যান্ডিং / সিফরি পার্টনারশিপ / লিগ্যাল রিসার্চ"
                    className="w-full px-4 py-3 bg-[#0B0C10] border border-[#1F242E] rounded-xl text-sm text-[#F8FAFC] placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                    আপনার বার্তা *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="আপনার বার্তা বা প্রশ্ন বিস্তারিত লিখুন..."
                    className="w-full px-4 py-3 bg-[#0B0C10] border border-[#1F242E] rounded-xl text-sm text-[#F8FAFC] placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0B0C10] rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === 'sending' ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
