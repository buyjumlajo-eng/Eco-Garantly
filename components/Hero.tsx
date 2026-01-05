
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useI18n } from '../i18nContext';

export const Hero: React.FC = () => {
  const { t, language } = useI18n();
  const { scrollY } = useScroll();
  const isAr = language === 'ar';

  // Subtle parallax for background image
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityBg = useTransform(scrollY, [0, 300], [0.06, 0.02]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white">
      {/* Striking Architectural Background with Parallax */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Architectural Lines" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        {/* Modernizing Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block px-8 py-2.5 bg-black rounded-full shadow-2xl relative overflow-hidden group">
            <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.4em] relative z-10">
              {t.hero.subtitle}
            </span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </motion.div>

        {/* Main Title Stack - Scaled down to ~60% (from 6rem/5.1rem to 3.8rem/3.2rem) */}
        <motion.div variants={itemVariants} className="mb-10">
          <h1 className={`flex flex-col items-center leading-[1] text-black ${isAr ? 'font-arabic' : 'font-black tracking-tighter'}`}>
            <motion.span 
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] uppercase"
            >
              {t.hero.title1}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extralight text-gray-400 italic py-1 md:py-2"
            >
              {t.hero.title2}
            </motion.span>
            <motion.span 
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] uppercase"
            >
              {t.hero.title3}
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
          <p className="text-base md:text-xl text-gray-600 font-medium leading-relaxed mb-12">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-auto px-12 py-5 bg-black text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-[#f6eabe] hover:text-black transition-all duration-300 shadow-lg active:scale-95">
              {t.hero.cta1}
            </button>
            <button className="w-full sm:w-auto px-12 py-5 border-2 border-black/10 rounded-full font-black text-xs uppercase tracking-[0.2em] text-black hover:border-black transition-all duration-300 active:scale-95">
              {t.hero.cta2}
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Decor Grid */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-[0.015]">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-black" />
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-black" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-black" />
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-black" />
        <div className="absolute left-2/4 top-0 w-[1px] h-full bg-black" />
        <div className="absolute left-3/4 top-0 w-[1px] h-full bg-black" />
      </div>
    </section>
  );
};
