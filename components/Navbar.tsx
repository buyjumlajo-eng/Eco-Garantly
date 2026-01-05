
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGOS } from '../constants';
import { useI18n } from '../i18nContext';
import { Language } from '../translations';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, setLanguage, language } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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

  const navLinks = [
    { id: 'vision', label: t.nav.vision },
    { id: 'ecosystem', label: t.nav.ecosystem },
    { id: 'assurance', label: t.nav.quality },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-black/5 py-4 shadow-sm' : 'bg-white py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center relative z-[160]">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}>
              <img src={LOGOS.GARANTLY} alt="Garantly" className="h-10 md:h-20 w-auto transition-all duration-300 object-contain" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(e, link.id)} 
                  className="hover:text-gray-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-1 px-3 py-1 bg-gray-50 rounded-full border border-black/5">
              {(['en', 'sq', 'it', 'ar'] as Language[]).map((lang) => (
                <button 
                  key={lang} 
                  onClick={() => setLanguage(lang)}
                  className={`uppercase text-[9px] font-black px-2.5 py-1 rounded-full transition-all ${language === lang ? 'bg-black text-[#f6eabe]' : 'text-gray-400 hover:text-black'}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <a href="#invest" onClick={(e) => scrollToSection(e, 'invest')} className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.25em] hover:bg-[#f6eabe] hover:text-black transition-all duration-300">
              {t.nav.invest}
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-[160] w-12 h-12 flex items-center justify-center bg-black text-white rounded-full transition-transform active:scale-90 shadow-lg"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block origin-center transition-all"
              />
              <motion.span 
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white block transition-all"
              />
              <motion.span 
                animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block origin-center transition-all"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside the nav inner container for absolute positioning control */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#f9f9f9] z-[150] flex flex-col p-8 pt-40 lg:hidden opacity-100"
          >
            {/* Subtle background texture or detail */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none overflow-hidden">
               <div className="absolute -top-20 -right-20 w-80 h-80 bg-black rounded-full blur-[100px]" />
            </div>

            <div className="flex flex-col space-y-8 mb-12 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (i + 1) }}
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-4xl font-black uppercase tracking-tighter text-black"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto border-t border-black/10 pt-8 relative z-10"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Select Language</p>
              <div className="flex flex-wrap gap-3 mb-12">
                {(['en', 'sq', 'it', 'ar'] as Language[]).map((lang) => (
                  <button 
                    key={lang} 
                    onClick={() => setLanguage(lang)}
                    className={`uppercase text-xs font-black px-6 py-3 rounded-full transition-all border ${language === lang ? 'bg-black text-[#f6eabe] border-black' : 'text-black border-black/10'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <a 
                href="#invest" 
                onClick={(e) => scrollToSection(e, 'invest')}
                className="block w-full text-center bg-black text-white py-6 rounded-full text-sm font-black uppercase tracking-[0.3em] active:scale-[0.98] transition-transform shadow-2xl"
              >
                {t.nav.invest}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
