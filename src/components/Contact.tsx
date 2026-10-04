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
              <div className="text-lg sm:text-xl font-serif font-bold text-stone-900 mb-3 break-all">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3.5 py-1.5 bg-[#FA812F] hover:bg-[#e07124] text-white rounded-md text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <span>Compose Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Fast WhatsApp Card */}
            <div className="bg-white p-7 rounded-xl border border-stone-200/90 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold block mb-2">
                Instant Messaging (WhatsApp)
              </span>
              <div className="text-lg font-serif font-bold text-stone-900 mb-2">
                {PERSONAL_INFO.whatsapp}
              </div>
              <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                Direct phone &amp; messaging for time-sensitive collaboration or urgent Sifri inquiries.
              </p>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Social Network Links */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold block mb-3">
                Digital Presence &amp; Socials
              </span>
              <div className="flex flex-col gap-2 text-xs">
                <a
                  href="https://facebook.com/nbn.sohan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-md hover:bg-stone-50 transition-colors"
                >
                  <span className="text-stone-700 font-medium">Facebook: facebook.com/nbn.sohan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
                <a
                  href="https://sifribd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-md hover:bg-stone-50 transition-colors"
                >
                  <span className="text-stone-700 font-medium">Sifri E-Commerce: sifribd.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200/90 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">
              Send a Direct Note
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-8">
              Fill out this form to send a message directly to Sohan Chowdhury. Responses are typically sent within 24 hours.
            </p>

            {status === 'success' ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 my-6 animate-in fade-in">
                <h4 className="font-semibold text-sm mb-1">Message Dispatched Successfully</h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out. Sohan Chowdhury will reply to your email address promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Abrar Hasan"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#FA812F] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#FA812F] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Sifri Collaboration / Literary Essay / Consultation"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#FA812F] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your query, project, or thoughts..."
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#FA812F] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#FA812F] hover:bg-[#e07124] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === 'sending' ? 'Transmitting...' : 'Send Message'}</span>
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
