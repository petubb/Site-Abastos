
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Nossa Equipe" 
                className="w-full h-auto"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-10 bg-amber-600 p-8 rounded-xl shadow-2xl z-20 hidden md:block">
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">+20</p>
                <p className="text-xs uppercase tracking-widest font-bold">Anos de Experiência</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Nossa História</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">Comprometimento em cada detalhe jurídico</h3>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              Fundado com a missão de oferecer uma advocacia consultiva e contenciosa de alta qualidade, o escritório Andrade & Bastos consolidou-se como referência pela sua atuação técnica e ética.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">Desde 2001 no mercado e com mais de 4 mil processos ativos, a nossa banca foi fundada pelo Dr. Noel Andrade, que atua de forma ativa em nossos processos. Em 2005, o escritório agrega a experiência de um novo sócio, Dr. Éder Bastos, que traz uma visão expansionista ao escritório.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Entendemos que cada caso é único. Por isso, investimos em uma estrutura tecnológica moderna e em uma equipe constantemente atualizada para garantir os melhores resultados e uma comunicação transparente com nossos clientes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-amber-600/20 p-2 rounded">
                  <i className="fas fa-check text-amber-500"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ética Inabalável</h4>
                  <p className="text-sm text-slate-500">Conduzimos todos os processos com total transparência e respeito à lei.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-600/20 p-2 rounded">
                  <i className="fas fa-check text-amber-500"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Foco no Cliente</h4>
                  <p className="text-sm text-slate-500">Nossas estratégias são desenhadas sob medida para suas necessidades específicas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default About;
