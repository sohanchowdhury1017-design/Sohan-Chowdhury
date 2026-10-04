import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Globe, Github, CheckCircle2, Sparkles } from 'lucide-react';

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
      title: 'ধাপ ১: এই ৩টি কমান্ড রান করে কোড পুশ করুন',
      badge: 'মেইন ব্রাঞ্চ',
      desc: 'আমরা সরাসরি রুট ফোল্ডারে কম্পাইল্ড প্রোডাকশন কোড ও অ্যাসেটস যুক্ত করে দিয়েছি। টার্মিনালে শুধু এই ৩টি কমান্ড দিয়ে পুশ করুন:',
      code: `git add .\ngit commit -m "fix: static assets for main root deployment"\ngit push origin main`,
    },
    {
      title: 'ধাপ ২: GitHub Settings নিশ্চিতকরণ',
      badge: 'সেটিংস',
      desc: 'আপনার স্ক্রিনশটের সেটিংস হুবহু থাকবে—কোনো কিছু পরিবর্তন করার প্রয়োজন নেই:',
      actionDetails: [
        '✔ Branch: "main" থাকবে',
        '✔ Folder: "/ (root)" থাকবে',
        '✔ Save বাটনে প্রেস করা থাকলেই হবে',
      ],
      code: `# আর কোনো অতিরিক্ত সেটিংস পরিবর্তনের প্রয়োজন নেই`,
    },
    {
      title: 'ধাপ ৩: কাস্টম ডোমেইন (sohans.site)',
      badge: 'ডোমেইন',
      desc: 'রুট CNAME ফাইলে "sohans.site" রাখা আছে, ফলে ২ মিনিটের মধ্যেই সাইট লাইভ হয়ে যাবে:',
      code: `# ডোমেইন DNS রেকর্ড:\n@     A     185.199.108.153\n@     A     185.199.109.153\n@     A     185.199.110.153\n@     A     185.199.111.153\nwww   CNAME <YOUR-USERNAME>.github.io`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF9F5] border border-stone-300 w-full max-w-2xl max-h-[90vh] rounded-xl shadow-2xl overflow-y-auto relative flex flex-col p-6 sm:p-8"
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
              Branch: <span className="text-[#FA812F]">main</span> / (root) সেটআপ গাইড
            </h2>
          </div>
        </div>

        {/* Info Box */}
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
          <div className="font-bold text-sm text-emerald-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>সরাসরি main ব্রাঞ্চ থেকেই কাজ করবে!</span>
          </div>
          <p className="leading-relaxed">
            কোনো ব্রাঞ্চ পাল্টাতে হবে না। আমরা রুট ফোল্ডারেই <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">/assets/</code> ডিরেক্টরি এবং <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">index.html</code> তৈরি করে দিয়েছি। কোড পুশ করলেই GitHub Pages সরাসরি এই ফাইলগুলো চালিয়ে আপনার ওয়েবসাইট লাইভ করে দেবে।
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-5">
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
                      <span>কপি</span>
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
            <span>main / (root) ব্রাঞ্চের জন্য সব ফাইল রেডি</span>
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
