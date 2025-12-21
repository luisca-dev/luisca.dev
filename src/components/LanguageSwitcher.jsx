import React from 'react';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ lang, toggleLanguage }) => {
  return (
    <div className="absolute top-6 right-6 z-20">
      <button 
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400 hover:text-white hover:border-red-500 transition-all duration-300"
      >
        <Globe size={14} />
        <span className={lang === 'en' ? 'text-red-500 font-bold' : ''}>EN</span>
        <span className="text-neutral-700">/</span>
        <span className={lang === 'es' ? 'text-red-500 font-bold' : ''}>ES</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
