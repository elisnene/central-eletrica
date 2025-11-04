import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, ShoppingCart, Zap, Lightbulb, Wrench, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent("Solicitação de Orçamento - Central Elétrica");
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nDescrição do Serviço:\n${formData.description}`
    );
    window.location.href = `mailto:eletricist15@gmail.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", description: "" });
      setSubmitted(false);
    }, 2000);
  };

  const whatsappLink = `https://wa.me/5534999086399?text=Olá%20Central%20Elétrica,%20gostaria%20de%20solicitar%20um%20orçamento`;
  const lojaLink = "https://loja.infinitepay.io/elisvieirann";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Central Elétrica</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4">
        {/* Highlights Section */}
        <section className="py-8 space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-gray-900">Serviços elétricos profissionais e confiáveis</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-gray-900">Materiais de qualidade com melhor preço</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-gray-900">Orçamento rápido e sem compromisso</p>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="relative rounded-2xl overflow-hidden my-12 h-96 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-40">
            <img 
              src="/banner-eletricidade.png" 
              alt="Eletricidade" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-8">
            <h2 className="text-5xl font-bold mb-4">SOLUÇÕES ELÉTRICAS</h2>
            <p className="text-2xl mb-8 font-light">Com experiência e qualidade garantida</p>
            <Button 
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-lg"
              onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          {/* WhatsApp Card */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Contato via WhatsApp</h3>
                  <p className="text-gray-700 mb-4">Fale conosco direto pelo WhatsApp para tirar dúvidas</p>
                  <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold">
                    Enviar Mensagem
                  </Button>
                </div>
              </div>
            </Card>
          </a>

          {/* Loja Card */}
          <a href={lojaLink} target="_blank" rel="noopener noreferrer">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Loja de Materiais</h3>
                  <p className="text-gray-700 mb-4">Acesse nossa loja online com amplo catálogo de produtos</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Ir para Loja
                  </Button>
                </div>
              </div>
            </Card>
          </a>
        </section>

        {/* Orçamento Form */}
        <section id="orcamento" className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-12 mb-12 border border-gray-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Solicitar Orçamento</h3>
          </div>
          <p className="text-gray-700 mb-8 text-lg">Descreva seu projeto e entraremos em contato com uma proposta personalizada</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Telefone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                placeholder="(34) 99908-6399"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Descrição do Serviço</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                placeholder="Descreva o serviço ou material que você precisa..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 rounded-lg transition-all duration-300 text-lg"
            >
              {submitted ? "✓ Orçamento Enviado!" : "Enviar Orçamento"}
            </Button>
          </form>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900 to-teal-700 rounded-2xl p-12 mb-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-xl mb-8 opacity-90">Escolha uma das opções abaixo para entrar em contato</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-3">
                WhatsApp
              </Button>
            </a>
            <a href={lojaLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3">
                Loja Online
              </Button>
            </a>
            <button 
              onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition"
            >
              Orçamento
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-12 text-center">
          <p className="text-gray-700 mb-2 text-lg font-semibold">Central Elétrica</p>
          <p className="text-gray-600 mb-4">Serviços e Materiais Elétricos de Qualidade</p>
          <div className="flex justify-center gap-4 mb-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold">
              WhatsApp
            </a>
            <span className="text-gray-400">•</span>
            <a href={lojaLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold">
              Loja
            </a>
            <span className="text-gray-400">•</span>
            <a href="mailto:eletricist15@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold">
              Email
            </a>
          </div>
          <p className="text-gray-500 text-sm">Desenvolvido com ❤️ para sua loja física e online</p>
        </footer>
      </main>
    </div>
  );
}
