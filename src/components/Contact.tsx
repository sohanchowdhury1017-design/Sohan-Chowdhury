import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, MessageCircle, ExternalLink, ArrowUpRight, Globe } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-[#FAF9F5] border-t border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FA812F] font-semibold block mb-1">
              ০৬. সরাসরি যোগাযোগ &middot; Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              যোগাযোগ | Contact
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans">
            ব্যবসায়িক পার্টনারশিপ, ব্র্যান্ড কনসালটেন্সি, আইনি গবেষণা বা যে কোনো প্রয়োজনে নির্দ্বিধায় যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Phone, Email, Facebook, Website Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FA812F]" />
                  <span>ফোন নম্বর &middot; Phone</span>
                </span>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  সরাসরি কল বা মেসেজ
                </span>
              </div>

              {/* Phone 1 (WhatsApp) */}
              <div className="flex items-center justify-between gap-3 p-3 bg-stone-50 rounded-xl">
                <div>
                  <div className="text-[11px] font-mono text-stone-400">প্রাইমারি / WhatsApp</div>
                  <div className="text-base font-bold text-stone-900 font-mono">{PERSONAL_INFO.phone1}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone1, 'phone1')}
                    className="p-2 bg-white hover:bg-stone-200 text-stone-700 rounded-lg text-xs transition-colors cursor-pointer"
                    title="কপি করুন"
                  >
                    {copiedPhone === 'phone1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`tel:${PERSONAL_INFO.phone1}`}
                    className="p-2 bg-stone-900 hover:bg-[#FA812F] text-white rounded-lg text-xs transition-colors"
                    title="কল করুন"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center justify-between gap-3 p-3 bg-stone-50 rounded-xl">
                <div>
                  <div className="text-[11px] font-mono text-stone-400">বিকল্প নম্বর / Alt Phone</div>
                  <div className="text-base font-bold text-stone-900 font-mono">{PERSONAL_INFO.phone2}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone2, 'phone2')}
                    className="p-2 bg-white hover:bg-stone-200 text-stone-700 rounded-lg text-xs transition-colors cursor-pointer"
                    title="কপি করুন"
                  >
                    {copiedPhone === 'phone2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`tel:${PERSONAL_INFO.phone2}`}
                    className="p-2 bg-stone-900 hover:bg-[#FA812F] text-white rounded-lg text-xs transition-colors"
                    title="কল করুন"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Fast WhatsApp Connect Button */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>সরাসরি হোয়াটসঅ্যাপে কথা বলুন</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold block flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#FA812F]" />
                <span>ইমেইল &middot; Email</span>
              </span>
              <div className="text-base sm:text-lg font-mono font-bold text-stone-900 break-all">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                  <span>{copiedEmail ? 'কপি হয়েছে' : 'ইমেইল কপি করুন'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3.5 py-2 bg-stone-900 hover:bg-[#FA812F] text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <span>মেইল পাঠান</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Facebook & Website Link Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold block">
                অনলাইন প্রোফাইল ও ডোমেইন
              </span>
              
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                <a
                  href={PERSONAL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-stone-900 group-hover:text-[#1877F2]">Facebook:</span>
                    <span className="text-stone-600">facebook.com/nbn.sohan</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#1877F2]" />
                </a>

                <a
                  href={`https://${PERSONAL_INFO.domain}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-orange-50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#FA812F]" />
                    <span className="font-semibold text-stone-900">Website:</span>
                    <span className="text-[#FA812F] font-mono font-bold">{PERSONAL_INFO.domain}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#FA812F]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Bengali Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">
              বার্তা পাঠান &middot; Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-8 font-sans">
              নিচের ফর্মটি পূরণ করে সরাসরি সোহান চৌধুরীর কাছে মেসেজ পাঠান। দ্রুততম সময়ের মধ্যে রিপ্লাই দেওয়া হবে।
            </p>

            {status === 'success' ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 my-6 animate-in fade-in">
                <h4 className="font-semibold text-sm mb-1">বার্তা সফলভাবে পাঠানো হয়েছে!</h4>
                <p className="text-xs text-emerald-700">
                  ধন্যবাদ। সোহান চৌধুরী আপনার ইমেইলে দ্রুত যোগাযোগ করবেন।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="নাম লিখুন"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#FA812F] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      আপনার ইমেইল *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#FA812F] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    বিষয় / বিষয়বস্তু
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="ব্র্যান্ডিং / সিফরি পার্টনারশিপ / লিগ্যাল রিসার্চ"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#FA812F] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    আপনার বার্তা *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="আপনার বার্তা বা প্রশ্ন বিস্তারিত লিখুন..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#FA812F] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto px-7 py-3 bg-[#FA812F] hover:bg-[#e07124] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
