import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Sun } from 'lucide-react';
import { Language, ContentData } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentData['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'cn' : 'en');
  };

  const navLinks = [
    { name: content.home, path: "/" },
    { name: content.about, path: "/about" },
    { name: content.syllabus, path: "/syllabus" },
    { name: content.contact, path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Sun className="h-8 w-8 text-sunrise-500 fill-current" />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-slate-800">SUNRISE</span>
                <span className="text-xs text-sunrise-600 font-semibold tracking-widest uppercase">Education</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-600 hover:text-sunrise-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 bg-sunrise-50 text-sunrise-700 px-3 py-1 rounded-full text-xs font-bold hover:bg-sunrise-100 transition-colors border border-sunrise-200"
            >
              <Globe className="w-3 h-3" />
              {lang === 'en' ? '中文' : 'ENG'}
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sunrise-600 hover:bg-sunrise-50"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => { toggleLang(); setIsOpen(false); }}
              className="w-full text-left px-3 py-2 text-base font-medium text-sunrise-600 hover:bg-sunrise-50"
            >
              {lang === 'en' ? 'Switch to 中文' : 'Switch to English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
