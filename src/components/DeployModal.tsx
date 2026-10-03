import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Globe, Github, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployModal: React.FC<DeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: 'ধাপ ১: কোড পুশ করুন (স্বয়ংক্রিয় gh-pages তৈরি হবে)',
      badge: 'অটোমেটেড',
      desc: 'আমরা আপনার রিপোজিটরিতে নতুন অ্যাকশন দিয়েছি যা কোড পুশ করলেই tự động "gh-pages" নামের প্রোডাকশন ব্রাঞ্চ তৈরি করে দেবে:',
      actionDetails: [
        'টার্মিনালে নিচের কমান্ডগুলো রান করে কোড পুশ করুন:',
      ],
      code: `git add .\ngit commit -m "fix: build and deploy to gh-pages branch"\ngit push origin main`,
    },
    {
      title: 'ধাপ ২: GitHub Settings-এ "gh-pages" ব্রাঞ্চ সিলেক্ট করুন',
      badge: 'Deploy from a branch',
      desc: 'আপনার "Deploy from a branch" অপশনই থাকবে, শুধু ব্রাঞ্চটি সিলেক্ট করুন:',
      actionDetails: [
        '১. আপনার GitHub রিপোজিটরিতে যান (যেমন github.com/sohanchowdhury/...)',
        '২. Settings ট্যাবে ক্লিক করুন -> বাম পাশের Pages মেনুতে যান।',
        '৩. Source থাকবে: "Deploy from a branch"',
        '৪. Branch ড্রপডাউনে "main"-এর জায়গায় "gh-pages" সিলেক্ট করুন এবং Save বাটনে ক্লিক করুন!',
      ],
      code: `# টার্মিনাল থেকেও চাইলে সরাসরি gh-pages ব্রাঞ্চে পুশ করতে পারেন:\nnpm run deploy`,
    },
    {
      title: 'ধাপ ৩: কাস্টম ডোমেইন (sohans.site) চেক',
      badge: 'DNS',
      desc: 'আপনার ডোমেইন প্রোভাইডারে DNS ঠিকঠাক সেট থাকলে মুহূর্তের মধ্যে sohans.site লাইভ হবে:',
      actionDetails: [
        'public/CNAME ও রুট CNAME ফাইলে "sohans.site" সংরক্ষিত আছে।',
      ],
      code: `# Apex domain @ A Records:\n185.199.108.153\n185.199.109.153\n185.199.110.153\n185.199.111.153\n\n# www CNAME Record:\nwww  ->  <YOUR-GITHUB-USERNAME>.github.io`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF9F5] border border-stone-300 w-full max-w-3xl max-h-[90vh] rounded-xl shadow-2xl overflow-y-auto relative flex flex-col p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md text-stone-500 hover:text-stone-950 hover:bg-stone-200 transition-colors"
          aria-label="Close guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center">
            <Github className="w-4 h-4 text-[#FA812F]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              &ldquo;Deploy from a branch&rdquo; সেটআপ গাইড (<span className="text-[#FA812F]">sohans.site</span>)
            </h2>
          </div>
        </div>

        {/* Info Box */}
        <div className="mb-6 p-4 rounded-lg bg-sky-50 border border-sky-200 text-xs text-sky-950 space-y-1.5">
          <div className="font-bold text-sm text-sky-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            <span>&ldquo;Deploy from a branch&rdquo; দিয়ে যেভাবে সমাধান হলো:</span>
          </div>
          <p className="leading-relaxed">
            <code className="bg-sky-100 px-1 py-0.5 rounded font-mono">main</code> ব্রাঞ্চে থাকে আনকম্পাইল্ড TypeScript কোড, যা ব্রাউজার সরাসরি চালাতে পারে না (এজন্য সাইট সাদা দেখায়)। 
            আমরা নতুন অ্যাকশন কনফিগার করেছি যা স্বয়ংক্রিয়ভাবে কম্পাইল করা বিল্ড ফাইলগুলোকে <code className="bg-sky-100 px-1 py-0.5 rounded font-mono">gh-pages</code> ব্রাঞ্চে পুশ করে দেবে।
          </p>
          <p className="font-semibold text-sky-900">
            👉 ফলে আপনার GitHub Settings-এ &ldquo;Deploy from a branch&rdquo; অপশন রেখেই শুধু Branch-এ <code className="bg-sky-200 px-1 py-0.5 rounded font-mono">gh-pages</code> সিলেক্ট করলেই সাইট সম্পূর্ণ সচল হয়ে যাবে!
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-stone-900 font-sans">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-orange-100 text-[#FA812F] rounded-full font-semibold">
                    {step.badge}
                  </span>
                </div>

                <button
                  onClick={() => copyCode(step.code, idx)}
                  className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                  title="Copy command"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>কপি করুন</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-stone-600 mb-2">
                {step.desc}
              </p>

              {step.actionDetails && (
                <ul className="text-xs text-stone-600 space-y-1 mb-3 pl-2 border-l-2 border-stone-200">
                  {step.actionDetails.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}

              <pre className="p-3 bg-stone-900 text-stone-100 rounded-md text-xs font-mono overflow-x-auto leading-relaxed selection:bg-[#FA812F] selection:text-white">
                {step.code}
              </pre>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>&ldquo;Deploy from a branch&rdquo; মোড সম্পূর্ণ কনফিগার করা হয়েছে</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-white rounded-md text-xs font-semibold uppercase hover:bg-stone-800 transition-colors"
          >
            বুঝেছি / বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
