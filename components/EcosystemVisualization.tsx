
import React from 'react';
import { motion } from 'framer-motion';
import { LOGOS } from '../constants';
import { useI18n } from '../i18nContext';

const Node: React.FC<{ logo: string; title: string; desc: string; className?: string }> = ({ logo, title, desc, className }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    className={`bg-white border-2 border-gray-100 p-8 rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)] flex flex-col items-center text-center ${className}`}
  >
    <div className="h-12 flex items-center justify-center mb-6">
      <img src={logo} alt={title} className="max-h-full max-w-full object-contain" />
    </div>
    <h4 className="text-lg font-bold mb-3 text-black border-b-2 border-[#f6eabe] pb-1 inline-block">
      {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
    </h4>
    <p className="text-sm md:text-base text-gray-800 leading-relaxed font-semibold">
      {desc}
    </p>
  </motion.div>
);

export const EcosystemVisualization: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="ecosystem" className="py-24 md:py-32 px-6 bg-gray-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-black">
            The nexus of trust
          </h2>
          <p className="text-gray-900 max-w-3xl mx-auto text-lg md:text-xl font-bold leading-relaxed opacity-80">
            {t.ecosystem.description}
          </p>
        </div>

        {/* Desktop Matrix Layout */}
        <div className="hidden lg:flex relative h-[800px] items-center justify-center">
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
            <path d="M 250,150 Q 512,150 512,400" fill="none" stroke="black" strokeWidth="2" strokeDasharray="8,8" />
            <path d="M 774,150 Q 512,150 512,400" fill="none" stroke="black" strokeWidth="2" strokeDasharray="8,8" />
            <path d="M 512,700 L 512,550" fill="none" stroke="black" strokeWidth="2" strokeDasharray="8,8" />
          </svg>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-10 w-64 h-64 bg-black rounded-full flex flex-col items-center justify-center text-center p-8 shadow-2xl border-[10px] border-white ring-1 ring-black/5"
          >
            <span className="text-[#f6eabe] text-[10px] uppercase tracking-[0.4em] font-black mb-2 opacity-80">{t.ecosystem.core}</span>
            <h3 className="text-xl font-black text-white leading-tight uppercase tracking-tighter">
              {t.ecosystem.quality}
            </h3>
            <div className="absolute inset-0 bg-[#f6eabe]/10 rounded-full animate-ping -z-10" />
          </motion.div>

          <div className="absolute top-0 left-[12%] w-[320px]">
            <Node logo={LOGOS.GARANTLY} title={t.ecosystem.inventory.title} desc={t.ecosystem.inventory.desc} />
          </div>
          <div className="absolute top-0 right-[12%] w-[320px]">
            <Node logo={LOGOS.BNBELLO} title={t.ecosystem.management.title} desc={t.ecosystem.management.desc} />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px]">
            <Node logo={LOGOS.KAFEELY} title={t.ecosystem.insurance.title} desc={t.ecosystem.insurance.desc} />
          </div>
        </div>

        {/* Mobile/Tablet Stacked Layout */}
        <div className="lg:hidden flex flex-col items-center gap-10">
          <div className="w-48 h-48 bg-black rounded-full flex flex-col items-center justify-center text-center p-6 shadow-xl border-8 border-white">
            <span className="text-[#f6eabe] text-[8px] uppercase tracking-[0.4em] font-black">{t.ecosystem.core}</span>
            <h3 className="text-lg font-black text-white leading-tight uppercase tracking-tighter mt-1">{t.ecosystem.quality}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 w-full">
            <Node logo={LOGOS.GARANTLY} title={t.ecosystem.inventory.title} desc={t.ecosystem.inventory.desc} />
            <Node logo={LOGOS.BNBELLO} title={t.ecosystem.management.title} desc={t.ecosystem.management.desc} />
            <Node logo={LOGOS.KAFEELY} title={t.ecosystem.insurance.title} desc={t.ecosystem.insurance.desc} className="md:col-span-2 md:max-w-lg md:mx-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
