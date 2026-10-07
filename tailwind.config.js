/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ১. দ্য সাইবার বস (Cyber Boss Theme)
        cyberBg: '#0B0F19',
        cyberPrimary: '#00F5D4',
        cyberSecondary: '#7B2CBF',
        cyberText: '#E2E8F0',

        // ২. প্রিমিয়াম মিনিমালিস্ট (Premium Minimalist Theme)
        minimalBg: '#121212',
        minimalPrimary: '#FFB703',
        minimalSecondary: '#FB8500',
        minimalText: '#F8F9FA',
      },
    },
  },
  plugins: [],
};
