import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const LinhaAntirruido = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const whatsappLink = 'https://wa.me/5511987790294';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Linha Antirruído - Hertz Esquadrias';
  }, []);

  const galleryImages = [
    'https://customer-assets.emergentagent.com/job_hertz-luxury/artifacts/ul3ziumb_IMG_2807.JPG',
    'https://customer-assets.emergentagent.com/job_hertz-luxury/artifacts/se9o46tl_IMG_2806.JPG',
    'https://customer-assets.emergentagent.com/job_hertz-luxury/artifacts/i9pjdwmc_IMG_2808.JPG',
    'https://customer-assets.emergentagent.com/job_hertz-luxury/artifacts/n2a9zrpu_C%C3%B3pia%20de%2029f3bede-76a6-4530-a864-c09ec174f821.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/')} className="text-white hover:text-[#c9a961] transition-colors">
              <ArrowLeft size={24} />
            </button>
            <img 
              src="https://customer-assets.emergentagent.com/job_hertz-luxury/artifacts/lgxl1a2j_logo%20hertz%20alta.png" 
              alt="Hertz Esquadrias" 
              className="h-10 object-contain cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:11987790294`} className="text-sm font-medium text-white hover:text-[#c9a961] transition-colors">(11) 98779-0294</a>
            <Button onClick={() => window.open(whatsappLink, '_blank')} className="bg-[#c9a961] hover:bg-[#b89851] text-white">
              ORÇAMENTO GRÁTIS
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Product */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#c9a961] text-white px-4 py-2 rounded-full text-sm font-['Montserrat'] font-semibold mb-4">
              MAIS VENDIDA
            </div>
            <h1 className="font-['Playfair_Display'] font-normal italic text-5xl md:text-7xl mb-6 text-[#1a1a1a]">
              Linha Antirruído
            </h1>
            <p className="font-['Montserrat'] text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia termoacústica premium que reduz até 80% dos ruídos externos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_hertz-luxury/artifacts/ul3ziumb_IMG_2807.JPG"
                alt="Linha Antirruído"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl mb-6">O Silêncio que Você Merece</h2>
              <p className="font-['Open_Sans'] text-lg text-gray-700 mb-6 leading-relaxed">
                Nossa Linha Antirruído é a escolha ideal para quem busca tranquilidade absoluta em meio urbano. Com tecnologia de isolamento acústico de última geração, garantimos o máximo conforto para seu ambiente.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-['Montserrat'] font-semibold">Redução de até 80dB</p>
                    <p className="font-['Open_Sans'] text-gray-600 text-sm">Bloqueio efetivo de ruídos externos intensos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-['Montserrat'] font-semibold">Certificação Pro Acústica</p>
                    <p className="font-['Open_Sans'] text-gray-600 text-sm">Qualidade comprovada por associação brasileira</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-['Montserrat'] font-semibold">Isolamento térmico superior</p>
                    <p className="font-['Open_Sans'] text-gray-600 text-sm">Mantém a temperatura ideal do ambiente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#c9a961] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-['Montserrat'] font-semibold">Design minimalista e elegante</p>
                    <p className="font-['Open_Sans'] text-gray-600 text-sm">Integra perfeitamente com projetos modernos</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => window.open(whatsappLink, '_blank')} size="lg" className="bg-[#c9a961] hover:bg-[#b89851] text-white font-['Montserrat'] font-semibold uppercase w-full md:w-auto">
                SOLICITAR ORÇAMENTO <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Características Técnicas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Montserrat'] font-bold text-4xl text-center mb-12">Características Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#c9a961]">Vidro Termoacústico</h3>
              <p className="font-['Open_Sans'] text-gray-700 leading-relaxed">
                Vidro laminado com PVB acústico, proporcionando máxima redução de ruídos e segurança.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#c9a961]">Perfis Especiais</h3>
              <p className="font-['Open_Sans'] text-gray-700 leading-relaxed">
                Perfis de alumínio com câmaras de isolamento projetados especificamente para bloqueio acústico.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-[#c9a961]">Vedação Premium</h3>
              <p className="font-['Open_Sans'] text-gray-700 leading-relaxed">
                Sistema de vedação multicâmara que garante estanqueidade total contra ruídos e infiltrações.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Montserrat'] font-bold text-4xl text-center mb-12">Aplicações Recomendadas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-['Montserrat'] font-bold text-2xl mb-4">Residências Urbanas</h3>
              <p className="font-['Open_Sans'] text-gray-700 mb-4 leading-relaxed">
                Ideal para apartamentos e casas próximas a avenidas movimentadas, aeroportos ou áreas com alto fluxo de tráfego.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#c9a961]" />
                  <span className="font-['Open_Sans'] text-sm">Quartos e dormitórios</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#c9a961]" />
                  <span className="font-['Open_Sans'] text-sm">Home offices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#c9a961]" />
                  <span className="font-['Open_Sans'] text-sm">Salas de estar</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-['Montserrat'] font-bold text-2xl mb-4">Espaços Comerciais</h3>
              <p className="font-['Open_Sans'] text-gray-700 mb-4 leading-relaxed">
                Perfeito para ambientes corporativos que exigem concentração e privacidade acústica.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#c9a961]" />
                  <span className="font-['Open_Sans'] text-sm">Salas de reunião</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#c9a961]" />
                  <span className="font-['Open_Sans'] text-sm">Escritórios executivos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#c9a961]" />
                  <span className="font-['Open_Sans'] text-sm">Consultórios médicos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Montserrat'] font-bold text-4xl text-center mb-12">Projetos Realizados</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Projeto ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Montserrat'] font-bold text-4xl mb-6">Pronto Para Ter Silêncio Na Sua Casa?</h2>
          <p className="font-['Open_Sans'] text-lg text-gray-300 mb-8">
            Agende agora uma visita técnica gratuita e descubra como a Linha Antirruído pode transformar seu ambiente.
          </p>
          <Button onClick={() => window.open(whatsappLink, '_blank')} size="lg" className="bg-[#25D366] hover:bg-[#1fb855] text-white text-lg py-8 px-12 font-['Montserrat'] font-semibold">
            <Phone className="mr-2" /> FALAR NO WHATSAPP AGORA
          </Button>
          <p className="text-gray-400 text-sm mt-6">Resposta em até 2 horas | Orçamento gratuito sem compromisso</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-['Montserrat'] font-bold text-xl mb-4">HERTZ ESQUADRIAS</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="font-['Open_Sans'] text-sm">R. Marcello Müller, 259 - Jardim Independência, São Paulo - SP</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <a href="tel:11987790294" className="font-['Open_Sans'] text-sm hover:text-[#c9a961]">(11) 98779-0294</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:contato@hertzesquadrias.com.br" className="font-['Open_Sans'] text-sm hover:text-[#c9a961]">contato@hertzesquadrias.com.br</a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-['Montserrat'] font-bold text-xl mb-4">PRODUTOS</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => navigate('/linha-antirruido')} className="hover:text-[#c9a961] font-['Open_Sans'] text-sm">Linha Antirruído</button></li>
              <li><button onClick={() => navigate('/linha-alto-padrao')} className="hover:text-[#c9a961] font-['Open_Sans'] text-sm">Linha Alto Padrão</button></li>
              <li><button onClick={() => navigate('/')} className="hover:text-[#c9a961] font-['Open_Sans'] text-sm">Voltar à Home</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Montserrat'] font-bold text-xl mb-4">HORÁRIO</h4>
            <p className="text-gray-300 text-sm">Seg-Sex: 8h-18h<br />Sáb: 9h-13h</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">© 2024 Hertz Esquadrias | Todos os direitos reservados</p>
        </div>
      </footer>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Projeto" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default LinhaAntirruido;