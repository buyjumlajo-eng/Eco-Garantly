
import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18nContext';

export const Hero: React.FC = () => {
  const { t } = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#f6eabe]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#f6eabe]/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-6 opacity-60">
            {t.hero.subtitle}
          </motion.h2>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            {t.hero.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-[#f6eabe]">
              {t.hero.title2}
            </span> <br />
            {t.hero.title3}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t.hero.description}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
              {t.hero.cta1}
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border-2 border-black font-bold rounded-full hover:bg-black hover:text-white transition-all">
              {t.hero.cta2}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};
