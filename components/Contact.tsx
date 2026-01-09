
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Contato</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Estamos prontos para ouvir você</h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-amber-600">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Nosso Escritório</h4>
                  <p className="text-slate-600 text-sm font-light">Av. Paulista, 1000, 10º Andar - São Paulo, SP</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-amber-600">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefone</h4>
                  <p className="text-slate-600 text-sm font-light">(11) 5555-1234</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-amber-600">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">E-mail</h4>
                  <p className="text-slate-600 text-sm font-light">contato@andradebastos.adv.br</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-amber-600 rounded-2xl text-white">
              <h4 className="font-bold mb-2">Atendimento de Urgência?</h4>
              <p className="text-sm opacity-90 mb-4">Clique no botão abaixo para falar diretamente com um advogado via WhatsApp.</p>
              <a 
                href="https://wa.me/5511999999999" 
                className="inline-block bg-white text-amber-600 px-6 py-2 rounded font-bold text-sm hover:bg-slate-100 transition-colors"
              >
                Chamar Agora
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                      placeholder="Ex: João Silva"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                      placeholder="email@exemplo.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                      placeholder="(11) 99999-9999"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Assunto</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    >
                      <option value="">Selecione uma área</option>
                      <option value="Empresarial">Direito Empresarial</option>
                      <option value="Trabalhista">Direito Trabalhista</option>
                      <option value="Familia">Direito de Família</option>
                      <option value="Civil">Direito Civil</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Sua Mensagem</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                    placeholder="Descreva brevemente sua situação..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Enviar Solicitação <i className="fas fa-paper-plane text-xs"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
