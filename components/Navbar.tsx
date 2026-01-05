
import React, { useState, useEffect } from 'react';
import { LOGOS } from '../constants';
import { useI18n } from '../i18nContext';
import { Language } from '../translations';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, setLanguage, language } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer">
            <img src={LOGOS.GARANTLY} alt="Garantly" className="h-10 md:h-12 w-auto object-contain" />
          </a>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
          <a href="#vision" onClick={(e) => scrollToSection(e, 'vision')} className="hover:opacity-60 transition-opacity uppercase tracking-widest">{t.nav.vision}</a>
          <a href="#ecosystem" onClick={(e) => scrollToSection(e, 'ecosystem')} className="hover:opacity-60 transition-opacity uppercase tracking-widest">{t.nav.ecosystem}</a>
          <a href="#assurance" onClick={(e) => scrollToSection(e, 'assurance')} className="hover:opacity-60 transition-opacity uppercase tracking-widest">{t.nav.quality}</a>
          
          <div className="flex items-center space-x-2 border-l border-gray-200 pl-8">
            {(['en', 'sq', 'it', 'ar'] as Language[]).map((lang) => (
              <button 
                key={lang} 
                onClick={() => setLanguage(lang)}
                className={`uppercase text-[10px] font-bold px-2 py-1 rounded ${language === lang ? 'bg-black text-[#f6eabe]' : 'text-gray-400 hover:text-black'}`}
              >
                {lang}
              </button>
            ))}
          </div>

          <a href="#invest" onClick={(e) => scrollToSection(e, 'invest')} className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors uppercase tracking-widest text-xs">{t.nav.invest}</a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
           <select 
             value={language} 
             onChange={(e) => setLanguage(e.target.value as Language)}
             className="bg-transparent border border-black/10 rounded px-2 py-1 text-xs font-bold uppercase"
           >
             <option value="en">EN</option>
             <option value="sq">SQ</option>
             <option value="it">IT</option>
             <option value="ar">AR</option>
           </select>
           <button className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
