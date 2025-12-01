import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle, Phone } from 'lucide-react';

export default function RegiaoAtendida() {
  const regioes = [
    {
      titulo: "Grande São Paulo",
      cidades: [
        "São Paulo (Capital)",
        "Santo André",
        "São Bernardo do Campo",
        "São Caetano do Sul",
        "Diadema",
        "Mauá",
        "Ribeirão Pires",
        "Rio Grande da Serra",
        "Guarulhos",
        "Osasco",
        "Barueri",
        "Carapicuíba",
        "Cotia",
        "Taboão da Serra",
        "Embu das Artes"
      ]
    },
    {
      titulo: "Região Metropolitana",
      cidades: [
        "Campinas",
        "Jundiaí",
        "Sorocaba",
        "Santos",
        "São José dos Campos",
        "Guarujá",
        "Praia Grande",
        "Itanhaém"
      ]
    },
    {
      titulo: "Interior de São Paulo",
      cidades: [
        "Ribeirão Preto",
        "Piracicaba",
        "Americana",
        "Limeira",
        "Indaiatuba",
        "Itu",
        "Valinhos",
        "Vinhedo"
      ]
    }
  ];

  const diferenciais = [
    {
      icon: <CheckCircle className="w-6 h-6 text-[#c9a961]" />,
      titulo: "Atendimento Personalizado",
      descricao: "Consultoria gratuita no local para entender suas necessidades"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#c9a961]" />,
      titulo: "Instalação Profissional",
      descricao: "Equipe técnica especializada e treinada"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#c9a961]" />,
      titulo: "Garantia Estendida",
      descricao: "Cobertura total em toda nossa região de atuação"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#c9a961]" />,
      titulo: "Pós-venda Dedicado",
      descricao: "Suporte técnico rápido e eficiente"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <Link to="/" className="flex items-center gap-2 hover:text-[#c9a961] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <MapPin className="w-16 h-16 text-[#c9a961] mx-auto mb-6" />
          <h1 className="text-5xl font-['Playfair_Display'] font-bold mb-6">
            Região Atendida
          </h1>
          <p className="text-xl font-['Montserrat'] max-w-3xl mx-auto text-gray-300">
            A Hertz Esquadrias atende toda a região metropolitana de São Paulo e cidades do interior, 
            levando qualidade premium e isolamento acústico para seu projeto.
          </p>
        </div>
      </section>

      {/* Regiões */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-['Playfair_Display'] font-bold mb-4 text-black">
              Onde Atendemos
            </h2>
            <p className="text-lg text-gray-600 font-['Montserrat']">
              Presença em mais de 50 cidades do estado de São Paulo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {regioes.map((regiao, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold mb-6 text-black border-b-2 border-[#c9a961] pb-3">
                  {regiao.titulo}
                </h3>
                <ul className="space-y-3">
                  {regiao.cidades.map((cidade, cidadeIndex) => (
                    <li key={cidadeIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-['Montserrat']">{cidade}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-yellow-50 border-l-4 border-[#c9a961] p-6 rounded-lg max-w-3xl mx-auto">
              <p className="text-lg text-gray-800 font-['Montserrat']">
                <strong>Sua cidade não está na lista?</strong><br />
                Entre em contato conosco! Avaliamos atendimento em outras regiões mediante consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-['Playfair_Display'] font-bold mb-4 text-black">
              Por Que Escolher a Hertz
            </h2>
            <p className="text-lg text-gray-600 font-['Montserrat']">
              Diferenciais que fazem a diferença em toda nossa área de atuação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {diferenciais.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-3 text-black">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 font-['Montserrat']">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa/Contato */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold mb-4 text-black">
                Consulte Disponibilidade na Sua Região
              </h2>
              <p className="text-lg text-gray-600 font-['Montserrat']">
                Nossa equipe comercial está pronta para atendê-lo
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-['Montserrat'] font-semibold mb-4 text-black">
                  Entre em Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <a href="https://wa.me/5511999999999" className="text-[#c9a961] hover:underline">
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Endereço</p>
                      <p className="text-gray-600">São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-['Montserrat'] font-semibold mb-4 text-black">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-gray-700 font-['Montserrat']">
                  <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                  <p><strong>Sábado:</strong> 8h às 12h</p>
                  <p><strong>Domingo:</strong> Fechado</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                to="/#formulario"
                className="inline-flex items-center gap-2 bg-[#c9a961] hover:bg-[#b89851] text-white px-8 py-4 rounded-md transition-colors duration-300 font-['Montserrat'] font-semibold"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="py-8 text-center bg-white">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#c9a961] transition-colors font-['Montserrat']"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Home
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-['Montserrat'] mb-2">
            © {new Date().getFullYear()} Hertz Esquadrias. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/politica-privacidade" className="hover:text-[#c9a961] transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/regiao-atendida" className="hover:text-[#c9a961] transition-colors">
              Região Atendida
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
