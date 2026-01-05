
import React from 'react';
import { LOGOS } from '../constants';
import { useI18n } from '../i18nContext';

export const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src={LOGOS.GARANTLY} alt="Garantly" className="h-12 w-auto mb-8 invert" />
            <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h4 className="text-[#f6eabe] font-bold uppercase tracking-widest mb-6">{t.footer.explore}</h4>
            <ul className="space-y-4 text-gray-400">
              {t.footer.links.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#f6eabe] font-bold uppercase tracking-widest mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-gray-400">
              <li>info@garantly.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Garantly. {t.footer.rights}
          </p>
          <div className="flex space-x-6">
            {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
              <a key={social} href="#" className="text-gray-500 hover:text-[#f6eabe] transition-colors text-sm font-bold uppercase tracking-widest">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
