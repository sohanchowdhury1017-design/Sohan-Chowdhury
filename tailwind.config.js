/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ফাইনাল এক্সক্লুসিভ কালার প্যালেট (Final Exclusive Palette)
        deepObsidian: '#0B0C10',
        graphiteSheet: '#13161C',
        mutedSlate: '#1F242E',
        champagneGold: '#D4AF37',
        champagneGoldHover: '#E5C07B',
        amberGlow: '#F59E0B',
        platinumWhite: '#F8FAFC',
        coolSilver: '#94A3B8',

        // ১. দ্য সাইবার বস (Cyber Boss Theme)
        cyberBg: '#0B0C10',
        cyberPrimary: '#D4AF37',
        cyberSecondary: '#F59E0B',
        cyberText: '#F8FAFC',

        // ২. প্রিমিয়াম মিনিমালিস্ট (Premium Minimalist Theme)
        minimalBg: '#0B0C10',
        minimalPrimary: '#D4AF37',
        minimalSecondary: '#F59E0B',
        minimalText: '#F8FAFC',
      },
    },
  },
  plugins: [],
};
