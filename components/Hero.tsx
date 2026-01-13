
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 mb-6 border-l-4 border-amber-600 bg-slate-800/50 text-amber-500 text-xs font-bold uppercase tracking-widest">
            Excelência em Direito
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{fontFamily: "'EB Garamond', serif", fontWeight: 700}}>
            Defendendo seus <span className="text-amber-500 underline decoration-amber-600/30 underline-offset-8">interesses</span> com integridade e rigor.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
            O escritório Andrade & Bastos oferece soluções jurídicas personalizadas para empresas e indivíduos, combinando tradição e inovação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-center font-bold rounded shadow-xl transition-all transform hover:-translate-y-1"
            >
              Consulta Jurídica Gratuita
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border border-white/30 bg-white/10 backdrop-blur-sm text-white text-center font-bold rounded hover:bg-white/20 transition-all"
            >
              Conheça Nossas Áreas
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#services" className="text-white/50 hover:text-white transition-colors">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
