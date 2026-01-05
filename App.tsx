
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemVisualization } from './components/EcosystemVisualization';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { I18nProvider, useI18n } from './i18nContext';

const AppContent = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#f6eabe] selection:text-black relative">
      <Navbar />
      <main>
        <Hero />
        
        {/* Refined Statistics Strip */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
              {t.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="relative mb-2">
                    <div className="text-black text-3xl md:text-4xl font-black tracking-tighter transition-transform group-hover:scale-105 duration-300">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-black/70 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-tight max-w-[140px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Statement Section - Professional Case */}
        <section id="vision" className="py-32 md:py-48 px-6 bg-white">
           <div className="max-w-5xl mx-auto text-center">
             <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight leading-[1.15] text-black">
               From Balkan pilot to <br />
               <span className="text-gray-400 italic font-light">Regional dominance.</span>
             </h2>
             <div className="relative inline-block max-w-2xl px-4">
               <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-bold italic">
                 {t.vision.quote}
               </p>
             </div>
             <div className="mt-20 h-[2px] w-16 bg-black mx-auto opacity-10" />
           </div>
        </section>

        <EcosystemVisualization />
        
        <Features />

        {/* CTA Section - Professional & Clear */}
        <section id="invest" className="py-32 md:py-48 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center bg-black rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white">Secure the future.</h2>
              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                {t.cta.description}
              </p>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(246, 234, 190, 0.4)"
                }}
                whileTap={{ scale: 0.96 }}
                className="px-10 md:px-16 py-5 md:py-6 bg-[#f6eabe] text-black text-base md:text-lg font-black rounded-full shadow-[0_10px_30px_rgba(246,234,190,0.2)] uppercase tracking-[0.2em] relative group overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  {t.cta.button}
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 translate-x-full group-hover:-translate-x-full duration-[1.5s]" />
              </motion.button>
            </div>
            
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f6eabe]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(246,234,190,0.05)_0%,_transparent_70%)] pointer-events-none" />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}

export default App;
