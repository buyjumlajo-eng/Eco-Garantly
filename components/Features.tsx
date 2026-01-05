
import React from 'react';
import { ShieldCheck, CameraOff, MapPin, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18nContext';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -12 }}
    className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.18)] transition-all duration-500 h-full flex flex-col"
  >
    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-black mb-6 border border-gray-100 shadow-sm shrink-0">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 tracking-tight text-black leading-tight">
      {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
    </h3>
    <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
      {desc}
    </p>
  </motion.div>
);

export const Features: React.FC = () => {
  const { t, language } = useI18n();

  const iconMap = [
    <ShieldCheck size={24} strokeWidth={2} />,
    <CameraOff size={24} strokeWidth={2} />,
    <MapPin size={24} strokeWidth={2} />,
    <BarChart3 size={24} strokeWidth={2} />
  ];

  const isRtl = language === 'ar';

  return (
    <section id="assurance" className="py-24 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="lg:sticky lg:top-32">
            <div className="inline-block px-4 py-1 rounded-full bg-black/5 text-black/60 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              {t.features.tag}
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-black ${isRtl ? 'tracking-normal leading-[1.3]' : 'tracking-tighter leading-[1.1]'}`}>
              {t.features.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8 md:mb-10 leading-relaxed font-semibold opacity-90">
              {t.features.description}
            </p>
            <div className={`flex flex-col ${isRtl ? 'space-y-1 md:space-y-6' : 'space-y-6'}`}>
               {t.features.points.map((item, i) => (
                 <div key={i} className={`flex items-center gap-3 md:gap-5 group`}>
                   <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-[#f6eabe] text-sm font-black shrink-0 transition-transform group-hover:rotate-6">
                     {i + 1}
                   </div>
                   <span className={`text-lg font-bold text-gray-900 transition-transform ${isRtl ? 'leading-[1.2] group-hover:-translate-x-1' : 'leading-snug group-hover:translate-x-1'}`}>
                     {item}
                   </span>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1546" 
                alt="Professional Inspection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-xl border border-white"
              >
                <p className={`text-base md:text-lg font-bold text-black italic ${isRtl ? 'leading-[1.5]' : 'leading-snug'}`}>
                  "{t.features.quote}"
                </p>
              </motion.div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f6eabe]/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.cards.map((card, idx) => (
            <FeatureCard 
              key={idx}
              icon={iconMap[idx]}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
