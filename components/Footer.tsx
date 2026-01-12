
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="brand text-2xl font-bold leading-none text-amber-500">
                ANDRADE & BASTOS
              </span>
              <span className="text-[10px] tracking-[0.2em] font-light text-slate-400">
                ADVOCACIA E CONSULTORIA
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              Soluções jurídicas integradas com excelência, transparência e agilidade para garantir a justiça em todos os âmbitos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Acesso Rápido</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">Quem Somos</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Legal Areas */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Compliance Empresarial</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Planejamento Sucessório</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Gestão de Contratos</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Defesa do Consumidor</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-bold text-lg mb-6">Horário de Atendimento</h4>
            <div className="text-sm text-slate-400 space-y-2">
              <p>Segunda a Sexta: 08:00 - 18:00</p>
              <p>Sábado: Somente com agendamento</p>
              <div className="pt-4">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Emergências Jurídicas</p>
                <p className="text-amber-500 font-bold">(69) 98447-3193</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light">
          <p>© {new Date().getFullYear()} Andrade & Bastos Advocacia. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
