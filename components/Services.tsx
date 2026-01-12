
import React from 'react';

const services = [
  {
    icon: 'fa-building',
    title: 'Direito Empresarial',
    description: 'Assessoria jurídica estratégica para empresas de todos os portes, focando em redução de riscos e crescimento sustentável.'
  },
  {
    icon: 'fa-users',
    title: 'Direito de Família',
    description: 'Atendimento humanizado em questões de divórcio, guarda de filhos, inventários e partilha de bens com total sigilo.'
  },
  {
    icon: 'fa-briefcase',
    title: 'Direito do Trabalho',
    description: 'Defesa de direitos trabalhistas tanto para empregados quanto para empregadores, com foco em conciliação e justiça.'
  },
  {
    icon: 'fa-gavel',
    title: 'Direito Civil',
    description: 'Atuação em contratos, responsabilidade civil, indenizações e litígios diversos da esfera cível.'
  },
  {
    icon: 'fa-home',
    title: 'Direito Imobiliário',
    description: 'Segurança jurídica em transações de compra, venda, locação e regularização de imóveis urbanos e rurais.'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Direito Previdenciário',
    description: 'Auxílio especializado na obtenção de aposentadorias, benefícios e revisões junto ao INSS.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Especialidades</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Áreas de Atuação</h3>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-slate-100 rounded-xl hover:shadow-2xl transition-all hover:border-amber-200 group bg-slate-50"
            >
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-600 transition-colors">
                <i className={`fas ${service.icon} text-2xl text-amber-600 group-hover:text-white`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed font-light">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center mt-6 text-sm font-bold text-amber-600 hover:text-amber-700">
                Saiba mais <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
