import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'লাইট মোডে পরিবর্তন করুন (Switch to Light Mode)' : 'ডার্ক মোডে পরিবর্তন করুন (Switch to Dark Mode)'}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl border transition-all duration-300 cursor-pointer active:scale-95 ${
        isDark
          ? 'bg-stone-800/90 text-amber-300 border-stone-700/80 hover:bg-stone-700 hover:text-amber-200 shadow-inner'
          : 'bg-stone-100/90 text-stone-700 border-stone-200 hover:bg-stone-200/90 hover:text-stone-900 shadow-xs'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={`w-4 h-4 transition-all duration-500 transform ${
            isDark
              ? 'opacity-100 rotate-0 scale-100 text-amber-300'
              : 'opacity-0 -rotate-90 scale-0 absolute'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`w-4 h-4 transition-all duration-500 transform ${
            isDark
              ? 'opacity-0 rotate-90 scale-0 absolute'
              : 'opacity-100 rotate-0 scale-100 text-stone-700'
          }`}
        />
      </div>

      {showLabel && (
        <span className="ml-2 text-xs font-medium font-sans select-none">
          {isDark ? 'লাইট মোড' : 'ডার্ক মোড'}
        </span>
      )}
    </button>
  );
};
