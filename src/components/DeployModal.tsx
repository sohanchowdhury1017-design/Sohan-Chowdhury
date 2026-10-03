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
      title: 'পদ্ধতি ১ (সবচেয়ে সহজ): GitHub Actions অটো-ডিপ্লয় (রেকমেন্ডেড)',
      badge: 'স্বয়ংক্রিয়',
      desc: 'আমরা আপনার রিপোজিটরিতে .github/workflows/deploy.yml এবং .nojekyll ফাইল যুক্ত করে দিয়েছি। আপনার GitHub রিপোজিটরিতে গিয়ে শুধু এই ১টি সেটিং পরিবর্তন করুন:',
      actionDetails: [
        '১. আপনার GitHub রিপোজিটরিতে যান (যেমন github.com/your-username/sohan-site)।',
        '২. উপরে Settings ট্যাবে ক্লিক করুন -> বাম পাশের মেনু থেকে Pages-এ ক্লিক করুন।',
        '৩. "Build and deployment" সেকশনের Source ড্রপডাউনে "Deploy from a branch" এর বদলে "GitHub Actions" সিলেক্ট করুন।',
        '৪. এবার কোড পুশ করলেই GitHub Actions স্বয়ংক্রিয়ভাবে সাইট বিল্ড করে sohans.site-এ লাইভ করে দেবে!',
      ],
      code: `git add .\ngit commit -m "fix: setup GitHub Actions and .nojekyll for deployment"\ngit push origin main`,
    },
    {
      title: 'পদ্ধতি ২: ১-ক্লিক "npm run deploy" কমান্ড',
      badge: 'টার্মিনাল',
      desc: 'আপনি চাইলে আপনার লোকাল কম্পিউটার থেকেই মাত্র একটি কমান্ড দিয়ে সরাসরি ডিপ্লয় করতে পারেন। gh-pages প্যাকেজ ইতিমধ্যে কনফিগার করা হয়েছে:',
      actionDetails: [
        'টার্মিনালে এই কমান্ডটি রান করুন। এটি নিজে নিজেই `dist` বিল্ড তৈরি করবে এবং GitHub-এ `gh-pages` ব্রাঞ্চ তৈরি করে লাইভ করে দেবে।',
      ],
      code: `npm run deploy`,
    },
    {
      title: 'কাস্টম ডোমেইন (sohans.site) DNS রেকর্ড',
      badge: 'DNS সেটআপ',
      desc: 'আপনার ডোমেইন প্রোভাইডার (যেখান থেকে sohans.site কিনেছেন) ড্যাশবোর্ডে গিয়ে এই রেকর্ডগুলো যুক্ত করুন:',
      actionDetails: [
        'public/CNAME ফাইলে "sohans.site" ইতিমধ্যে সেট করা আছে, তাই বিল্ড দিলে GitHub Pages স্বয়ংক্রিয়ভাবে ডোমেইন চিনে নিবে।',
      ],
      code: `# A Records for apex domain @ (sohans.site):\n185.199.108.153\n185.199.109.153\n185.199.110.153\n185.199.111.153\n\n# CNAME Record for www:\nwww  ->  <YOUR-GITHUB-USERNAME>.github.io`,
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
              GitHub Pages & <span className="text-[#FA812F]">sohans.site</span> সমাধান গাইড
            </h2>
          </div>
        </div>

        {/* Alert explaining why it was blank */}
        <div className="mb-6 p-4 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold text-sm text-amber-950">সাইট কেন ব্ল্যাঙ্ক (Blank White) দেখাচ্ছিল?</div>
            <p className="leading-relaxed">
              GitHub Pages সাধারণত সরাসরি রুট ফোল্ডারের <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">index.html</code> রান করতে চায়। কিন্তু সেখানে <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">main.tsx</code> থাকে যা ব্রাউজার সরাসরি চেনে না। ব্রাউজার শুধু কম্পাইল হওয়া জাভাস্ক্রিপ্ট (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono">dist/</code>) চালাতে পারে।
            </p>
            <p className="font-medium text-amber-950 pt-0.5">
              ✅ আমরা আপনার জন্য <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">.github/workflows/deploy.yml</code> এবং <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">.nojekyll</code> রেডি করে দিয়েছি। নিচের যেকোনো একটি নিয়মে ডিপ্লয় করলেই সম্পূর্ণ সাইট লাইভ হয়ে যাবে!
            </p>
          </div>
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
            <span>সব ফাইল ও কনফিগারেশন রেডি করা সম্পন্ন</span>
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
