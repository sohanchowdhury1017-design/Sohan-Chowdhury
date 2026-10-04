import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, ExternalLink, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
              06. Direct Connection
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              Start a Conversation
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Whether for business partnerships with Sifri, literary discourse, or collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Fast Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold block mb-2">
                Primary Direct Channel
              </span>
              <div className="flex items-center justify-between p-3.5 bg-stone-50 border border-stone-200 rounded-lg mb-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#FA812F] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-stone-800 font-medium truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-md transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <div className="text-[11px] font-mono text-emerald-700 font-medium mb-3 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                </div>
              )}

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry via sohans.site`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 text-white rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-xs"
              >
                <span>Compose in Email Client</span>
                <ArrowUpRight className="w-4 h-4 text-[#FA812F]" />
              </a>
            </div>

            {/* Structured Location & Social Links */}
            <div className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-xs space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold mb-2">
                Coordinates & Presence
              </h3>

              <div className="flex items-start gap-3 text-xs text-stone-600 pb-3 border-b border-stone-100">
                <MapPin className="w-4 h-4 text-[#FA812F] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Aftabnagar / East West University Area</div>
                  <div className="text-stone-500">Dhaka, Bangladesh · 23.7688° N, 90.4255° E</div>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs font-medium text-stone-700 mb-2">Digital Profiles</div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://facebook.com/nbn.sohan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-[#1877F2] font-semibold hover:bg-[#1877F2] hover:text-white rounded-md transition-all shadow-2xs group"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook (@nbn.sohan)</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href="https://wa.me/8801312815029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-[#008069] font-semibold hover:bg-[#008069] hover:text-white rounded-md transition-all shadow-2xs group"
                  >
                    <span>WhatsApp (+8801312815029)</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href="https://sifribd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-50 border border-orange-200/80 text-stone-800 hover:text-[#FA812F] rounded-md transition-colors"
                  >
                    <span>Sifri (sifribd.com)</span>
                    <ArrowUpRight className="w-3 h-3 text-[#FA812F]" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-400" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-400" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Working Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-9 rounded-xl border border-stone-200/90 shadow-xs">
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Messages are routed directly to N B N Sohan Chowdhury ({PERSONAL_INFO.email}).
            </p>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Message noted!</div>
                  <div>Thank you for reaching out. Sohan will review and respond directly to your provided email address.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Tanvir Ahmed"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-md bg-stone-50/50 focus:bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="tanvir@example.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-md bg-stone-50/50 focus:bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Sifri Partnership / Literary Writing / General"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-md bg-stone-50/50 focus:bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your note or proposal here..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-md bg-stone-50/50 focus:bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-400">
                  Response within 24-48 hours
                </span>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-white rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 disabled:opacity-50 transition-colors shadow-xs"
                >
                  {status === 'sending' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5 text-[#FA812F]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
