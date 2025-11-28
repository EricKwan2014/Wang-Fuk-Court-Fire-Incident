import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, title }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold text-slate-900 truncate pr-4">
          {title}
        </h1>
        <button
          onClick={() => setLang(lang === 'en' ? 'tc' : 'en')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-sm font-medium transition-colors text-slate-700"
          aria-label="Switch Language"
        >
          <Globe size={16} />
          <span>{lang === 'en' ? '中文' : 'English'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;