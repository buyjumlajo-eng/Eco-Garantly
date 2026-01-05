
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemVisualization } from './components/EcosystemVisualization';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { I18nProvider, useI18n } from './i18nContext';

const AppContent = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#f6eabe] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* Statistics Strip */}
        <section className="bg-black py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[#f6eabe] text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision Statement Section */}
        <section id="vision" className="py-24 px-6 bg-white border-y border-gray-100">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">
               {t.vision.title} <br />
               <span className="text-[#f6eabe] italic">{t.vision.accent}</span>
             </h2>
             <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light mb-12">
               {t.vision.quote}
             </p>
             <div className="h-1 w-24 bg-[#f6eabe] mx-auto" />
           </div>
        </section>

        <EcosystemVisualization />
        
        <Features />

        {/* CTA Section */}
        <section id="invest" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#f6eabe] opacity-5 z-0" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8">{t.cta.title}</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <button className="px-12 py-5 bg-black text-[#f6eabe] text-xl font-black rounded-full hover:scale-105 transition-transform shadow-2xl">
              {t.cta.button}
            </button>
          </div>
        </section>
      </main>
      <Footer />
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
