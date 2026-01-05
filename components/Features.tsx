
import React from 'react';
import { ShieldCheck, CameraOff, MapPin, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18nContext';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-[#f6eabe] transition-all"
  >
    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-[#f6eabe] mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-light">{desc}</p>
  </motion.div>
);

export const Features: React.FC = () => {
  const { t } = useI18n();

  const iconMap = [
    <ShieldCheck size={28} />,
    <CameraOff size={28} />,
    <MapPin size={28} />,
    <BarChart3 size={28} />
  ];

  return (
    <section id="assurance" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] mb-4 text-gray-400">{t.features.tag}</h2>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{t.features.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.features.description}
            </p>
            <div className="space-y-4">
               {t.features.points.map((item, i) => (
                 <div key={i} className="flex items-center space-x-3">
                   <div className="w-2 h-2 rounded-full bg-[#f6eabe]" />
                   <span className="font-medium text-gray-800">{item}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/realestate/800/800" alt="Inspection" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#f6eabe] p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <p className="text-sm font-bold text-black uppercase tracking-widest leading-loose">
                {t.features.quote}
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
