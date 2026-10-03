import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Globe, Github, CheckCircle2 } from 'lucide-react';

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
      title: '1. Push to GitHub Repository',
      desc: 'Initialize git and push this project to your GitHub account (e.g. github.com/your-username/sohan-site):',
      code: `git init\ngit add .\ngit commit -m "feat: launch N B N Sohan Chowdhury personal site"\ngit branch -M main\ngit remote add origin https://github.com/<YOUR-USERNAME>/sohan-site.git\ngit push -u origin main`,
    },
    {
      title: '2. Build for Static Hosting',
      desc: 'Generate the production build. The custom domain file (CNAME for sohans.site) is already configured in public/CNAME and will automatically be included in dist/ :',
      code: `npm run build`,
    },
    {
      title: '3. Enable GitHub Pages & Custom Domain',
      desc: 'In your GitHub repository settings, activate GitHub Pages and enforce HTTPS for sohans.site:',
      code: `# Option A: Deploy with gh-pages package\nnpm install -D gh-pages\nnpx gh-pages -d dist\n\n# Option B: Or use GitHub Actions / Settings -> Pages -> Deploy from branch (gh-pages / dist)`,
    },
    {
      title: '4. DNS Configuration for sohans.site',
      desc: 'In your domain provider (where you bought sohans.site), add these 4 GitHub A Records and 1 CNAME record:',
      code: `# A Records for apex domain @ (sohans.site):\n185.199.108.153\n185.199.109.153\n185.199.110.153\n185.199.111.153\n\n# CNAME Record for www:\nwww  ->  <YOUR-USERNAME>.github.io`,
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
              GitHub Pages & Domain (<span className="text-[#FA812F]">sohans.site</span>) Setup
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
          Sohan, this website is 100% optimized for GitHub Pages and your custom domain <span className="font-mono font-bold text-stone-800">sohans.site</span>. The <code className="bg-stone-200 px-1.5 py-0.5 rounded text-xs font-mono">public/CNAME</code> and relative Vite asset paths are already created for you.
        </p>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-sm font-bold text-stone-900 font-sans">
                  {step.title}
                </h3>
                <button
                  onClick={() => copyCode(step.code, idx)}
                  className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                  title="Copy command"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-stone-600 mb-2.5">
                {step.desc}
              </p>

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
            <span>Ready for production deployment at sohans.site</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-white rounded-md text-xs font-semibold uppercase hover:bg-stone-800 transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
