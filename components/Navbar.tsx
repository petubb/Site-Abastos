import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sócios', href: '#partners' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://raw.githubusercontent.com/petubb/Site-Abastos/main/logo%20ab.png" 
            alt="Andrade & Bastos Logo" 
            className={`${scrolled ? 'h-12' : 'h-16'} transition-all duration-300`}
          />
          <div className="flex flex-col">
            <span className={`brand text-xl font-bold leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              ANDRADE & BASTOS
            </span>
            <span className={`text-[9px] tracking-[0.2em] font-light ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>
              ADVOCACIA E CONSULTORIA
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-amber-600 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition-all shadow-lg"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} ${scrolled ? 'text-slate-900' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-95 z-40 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-2xl font-light hover:text-amber-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
