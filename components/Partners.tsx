
import React from 'react';

const partners = [
  {
    name: 'Dr. Noel Nunes de Andrade',
    oab: 'OAB/RO 1586',
    image: 'https://raw.githubusercontent.com/petubb/Site-Abastos/main/Dr_Noel.png',
    description: 'Com 38 anos de experiência, o advogado sócio possui diploma técnico em Contabilidade, é pós-graduado em Direito Civil pelo Instituto de Ensino Superior da Amazônia (IESA) e completa o seu currículo com duas novas pós-graduações em Processo Civil e Metodologia de Ensino Superior na UNISUL em Convênio com IELF e Direito Cooperativo na I.COOP em parceria com a Faculdade de Ensino e Pesquisa do Cooperativismo (FEPCOOP). É certificado pela OAB e foi juiz do Tribunal Regional Eleitoral de Rondônia.',
    linkedin: 'https://br.linkedin.com/in/noel-andrade-a125a8123?trk=people-guest_people_search-card'
  },
  {
    name: 'Dr. Éder Timótio Pereira Bastos',
    oab: 'OAB/RO 2930',
    image: 'https://raw.githubusercontent.com/petubb/Site-Abastos/main/Eder%20055.JPG?raw=true',
    description: 'Há mais de 18 anos Dr. Éder Bastos atua na área do Direito Cívil, com atuação destacada no Direito Cooperativo. Graduado em Direito pela AESA/FARO – Faculdade de Ciências Humanas, Exatas e Letras de Rondônia, Pós Graduado em Direito Cooperativo, mestrando em Ciência Jurídica – Pela Universidade do vale do Itajaí – UNIVALI. Atuou como Presidente da Associação Comercial e Industrial de Pimenta Bueno – ACIPB, Conselheiro Estadual da OAB/RO e Presidente da Câmara de Dirigentes Lojista de Pimenta Bueno – CDL, atualmente é conselheiro no Conselho Deliberativo do SEBRAE de Rondônia.',
    linkedin: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://br.linkedin.com/in/dr-eder-tim%25C3%25B3tio-pereira-bastos-91482084&ved=2ahUKEwirwYzJz4iSAxV0ppUCHcOUFBoQFnoECBwQAQ&usg=AOvVaw2ibmJ9dZu6E2otormVGoRk'
  }
];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Liderança</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Sócios-Fundadores</h3>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 shrink-0 h-80 md:h-auto overflow-hidden">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-slate-900">{partner.name}</h4>
                  <span className="text-amber-600 font-semibold text-sm tracking-widest">{partner.oab}</span>
                </div>
                <div className="w-12 h-1 bg-amber-200 mb-6"></div>
                <p className="text-slate-600 font-light leading-relaxed text-sm lg:text-base italic">
                  "{partner.description}"
                </p>
                <div className="mt-8 flex gap-4">
                   <a href={partner.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-600 transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
                   <a href="#contact" className="text-slate-400 hover:text-amber-600 transition-colors"><i className="fas fa-envelope text-xl"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

