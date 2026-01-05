
import React from 'react';
import { motion } from 'framer-motion';
import { LOGOS } from '../constants';
import { useI18n } from '../i18nContext';

const Node: React.FC<{ logo: string; title: string; desc: string; pos: string }> = ({ logo, title, desc, pos }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className={`absolute ${pos} w-72 p-6 bg-white border border-[#f6eabe] rounded-2xl shadow-xl z-20`}
  >
    <img src={logo} alt={title} className="h-10 mb-4 object-contain" />
    <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">{title}</h4>
    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
  </motion.div>
);

export const EcosystemVisualization: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="ecosystem" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.ecosystem.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t.ecosystem.description}
          </p>
        </div>

        <div className="relative h-[600px] md:h-[800px] flex items-center justify-center">
          {/* Central Core */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-black rounded-full flex items-center justify-center text-center p-8 shadow-[0_0_50px_rgba(246,234,190,0.5)] border-4 border-[#f6eabe]"
          >
            <div className="text-white">
              <span className="text-[#f6eabe] text-xs uppercase tracking-[0.3em] font-bold">{t.ecosystem.core}</span>
              <h3 className="text-xl md:text-2xl font-black mt-2 leading-none">{t.ecosystem.quality}</h3>
            </div>
            
            <div className="absolute inset-0 bg-[#f6eabe]/20 rounded-full animate-ping -z-10" />
            <div className="absolute inset-0 bg-[#f6eabe]/10 rounded-full animate-pulse -z-10 scale-125" />
          </motion.div>

          {/* Nodes */}
          <div className="hidden md:block">
            <Node 
              logo={LOGOS.GARANTLY} 
              title={t.ecosystem.inventory.title} 
              desc={t.ecosystem.inventory.desc}
              pos="top-[10%] left-[10%]" 
            />
            <Node 
              logo={LOGOS.BNBELLO} 
              title={t.ecosystem.management.title} 
              desc={t.ecosystem.management.desc}
              pos="top-[10%] right-[10%]" 
            />
            <Node 
              logo={LOGOS.KAFEELY} 
              title={t.ecosystem.insurance.title} 
              desc={t.ecosystem.insurance.desc}
              pos="bottom-[5%] left-1/2 -translate-x-1/2" 
            />
          </div>

          <div className="md:hidden flex flex-col gap-6 mt-[450px]">
             <div className="bg-white p-4 border border-[#f6eabe] rounded-xl flex items-center gap-4">
                <img src={LOGOS.GARANTLY} className="h-6" alt="Garantly" />
                <div><h5 className="font-bold text-sm uppercase">{t.ecosystem.inventory.title}</h5></div>
             </div>
             <div className="bg-white p-4 border border-[#f6eabe] rounded-xl flex items-center gap-4">
                <img src={LOGOS.BNBELLO} className="h-6" alt="Bnbello" />
                <div><h5 className="font-bold text-sm uppercase">{t.ecosystem.management.title}</h5></div>
             </div>
             <div className="bg-white p-4 border border-[#f6eabe] rounded-xl flex items-center gap-4">
                <img src={LOGOS.KAFEELY} className="h-6" alt="Kafeely" />
                <div><h5 className="font-bold text-sm uppercase">{t.ecosystem.insurance.title}</h5></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
