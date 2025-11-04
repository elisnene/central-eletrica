import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, ShoppingCart, Zap } from "lucide-react";
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
    
    // Enviar para email via mailto
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Central Elétrica</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo à Central Elétrica</h2>
          <p className="text-lg text-gray-600 mb-8">
            Serviços elétricos profissionais e materiais de qualidade para sua loja física e online
          </p>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
              <MessageCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contato via WhatsApp</h3>
              <p className="text-gray-600 mb-4">Fale conosco direto pelo WhatsApp</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white">Enviar Mensagem</Button>
            </a>
          </Card>

          {/* Loja Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <a href={lojaLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
              <ShoppingCart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Loja de Materiais</h3>
              <p className="text-gray-600 mb-4">Acesse nossa loja online de materiais elétricos</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Ir para Loja</Button>
            </a>
          </Card>
        </section>

        {/* Orçamento Form */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-600" />
            Solicitar Orçamento
          </h3>
          <p className="text-gray-600 mb-6">Descreva seu projeto e entraremos em contato para fornecer um orçamento personalizado</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(34) 99908-6399"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição do Serviço</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Descreva o serviço ou material que você precisa..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {submitted ? "✓ Orçamento Enviado!" : "Enviar Orçamento"}
            </Button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-8 border-t border-gray-200">
          <p className="mb-2">Central Elétrica - Serviços e Materiais Elétricos</p>
          <p className="text-sm">Desenvolvido com ❤️ para sua loja física e online</p>
        </footer>
      </main>
    </div>
  );
}
