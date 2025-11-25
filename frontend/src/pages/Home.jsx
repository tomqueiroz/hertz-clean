import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Star, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { toast } from 'sonner';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipoProjeto: '',
    prazo: '',
    mensagem: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Solicitação enviada! Entraremos em contato em até 2 horas.');
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      tipoProjeto: '',
      prazo: '',
      mensagem: ''
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const whatsappLink = 'https://wa.me/5511987790294?text=Olá! Vi o site e gostaria de um orçamento para esquadrias.';

  return (
    <div className="relative bg-white text-[#1a1a1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_hertz-luxury/artifacts/lgxl1a2j_logo%20hertz%20alta.png" 
              alt="Hertz Esquadrias" 
              className="h-12 object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('produtos')} className="text-sm font-medium text-white hover:text-[#c9a961] transition-colors">Produtos</button>
            <button onClick={() => scrollToSection('projetos')} className="text-sm font-medium text-white hover:text-[#c9a961] transition-colors">Projetos</button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-sm font-medium text-white hover:text-[#c9a961] transition-colors">Depoimentos</button>
            <button onClick={() => scrollToSection('contato')} className="text-sm font-medium text-white hover:text-[#c9a961] transition-colors">Contato</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:11987790294`} className="text-sm font-medium text-white hover:text-[#c9a961] transition-colors">(11) 98779-0294</a>
            <Button onClick={() => window.open(whatsappLink, '_blank')} className="bg-[#c9a961] hover:bg-[#b89851] text-white">
              ORÇAMENTO GRÁTIS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <nav className="flex flex-col px-6 py-4 space-y-3">
              <button onClick={() => scrollToSection('produtos')} className="text-left text-sm font-medium text-white hover:text-[#c9a961]">Produtos</button>
              <button onClick={() => scrollToSection('projetos')} className="text-left text-sm font-medium text-white hover:text-[#c9a961]">Projetos</button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-left text-sm font-medium text-white hover:text-[#c9a961]">Depoimentos</button>
              <button onClick={() => scrollToSection('contato')} className="text-left text-sm font-medium text-white hover:text-[#c9a961]">Contato</button>
              <a href={`tel:11987790294`} className="text-left text-sm font-medium text-white hover:text-[#c9a961]">(11) 98779-0294</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1684778522663-be47e3cbbb2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aW5kb3dzfGVufDB8fHx8MTc2NDAzNjQ3MXww&ixlib=rb-4.1.0&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-['Montserrat'] font-bold text-white text-5xl md:text-7xl mb-6 tracking-tight leading-tight">
            SILÊNCIO É O NOVO LUXO
          </h1>
          <p className="font-['Montserrat'] font-light text-white text-xl md:text-2xl mb-12 leading-relaxed">
            Esquadrias sob medida para projetos que <br className="hidden md:block" />exigem excelência absoluta
          </p>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white">
              <CheckCircle className="w-5 h-5 mb-2 mx-auto text-[#c9a961]" />
              <p className="text-sm font-['Open_Sans']">Garantia <br />10 Anos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white">
              <CheckCircle className="w-5 h-5 mb-2 mx-auto text-[#c9a961]" />
              <p className="text-sm font-['Open_Sans']">Atendimento <br />Exclusivo SP</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white">
              <CheckCircle className="w-5 h-5 mb-2 mx-auto text-[#c9a961]" />
              <p className="text-sm font-['Open_Sans']">+500 Projetos <br />Entregues</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white">
              <CheckCircle className="w-5 h-5 mb-2 mx-auto text-[#c9a961]" />
              <p className="text-sm font-['Open_Sans']">Nota <br />4.9/5.0</p>
            </div>
          </div>

          <Button onClick={() => scrollToSection('contato')} size="lg" className="bg-[#c9a961] hover:bg-[#b89851] text-white text-lg px-8 py-6 font-['Montserrat'] font-semibold uppercase">
            SOLICITE ORÇAMENTO GRATUITO <ArrowRight className="ml-2" />
          </Button>
          <p className="text-white/80 text-sm mt-4">Especialistas disponíveis para consulta imediata</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c9a961] text-sm font-['Montserrat'] uppercase tracking-wider mb-4">POR QUE HERTZ ESQUADRIAS?</p>
            <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Customização Absoluta.<br />
              Qualidade Incomparável.
            </h2>
            <p className="font-['Open_Sans'] text-lg leading-relaxed mb-6 text-gray-700">
              Há 25 anos transformamos projetos arquitetônicos em realidade. Cada esquadria é única, pensada para seu projeto específico.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <p className="font-['Open_Sans']">Fila de espera por demanda crescente</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <p className="font-['Open_Sans']">Nota 5.0 no Reclame Aqui (zero reclamações)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <p className="font-['Open_Sans']">Parceria com as maiores associações do setor</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <p className="font-['Open_Sans']">Escolha dos principais arquitetos do Brasil</p>
              </div>
            </div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1583329550487-0fa300a4cd1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzY0MDM2NDgzfDA&ixlib=rb-4.1.0&q=85" 
              alt="Detalhes de craftmanship" 
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-['Montserrat'] text-lg">Cada detalhe é perfeito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section id="produtos" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-center mb-16">Nossas Linhas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Linha Antirruído */}
            <Card className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 bg-[#c9a961] text-white px-4 py-2 rounded-full text-sm font-['Montserrat'] font-semibold z-10">
                MAIS VENDIDA
              </div>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1696986324679-dad26261d579?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjB3aW5kb3dzfGVufDB8fHx8MTc2NDAzNjQ3MXww&ixlib=rb-4.1.0&q=85" 
                  alt="Linha Antirruído" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Montserrat'] font-bold text-2xl mb-3">Linha Antirruído</h3>
                <p className="font-['Montserrat'] text-lg text-gray-600 mb-4">Silêncio é o Novo Luxo</p>
                <p className="font-['Open_Sans'] text-gray-700 mb-6 leading-relaxed">
                  Tecnologia de isolamento acústico premium. Ideal para quem valoriza tranquilidade absoluta em meio urbano.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                    <span className="font-['Open_Sans']">Redução de até 80dB</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                    <span className="font-['Open_Sans']">Perfeito para grandes centros</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                    <span className="font-['Open_Sans']">Isolamento térmico superior</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                    <span className="font-['Open_Sans']">Design minimalista</span>
                  </div>
                </div>
                <Button className="w-full bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white">
                  CONHECER LINHA ANTIRRUÍDO <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </Card>

            {/* Linha Alto Padrão */}
            <Card className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-4 right-4 bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-sm font-['Montserrat'] font-semibold z-10">
                LANÇAMENTO
              </div>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1617326021886-53d6be1d7154?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzY0MDM2NDgzfDA&ixlib=rb-4.1.0&q=85" 
                  alt="Linha Alto Padrão" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Montserrat'] font-bold text-2xl mb-3">Linha Alto Padrão</h3>
                <p className="font-['Montserrat'] text-lg text-gray-600 mb-4">Design Exclusivo + Garantia 10 Anos</p>
                <p className="font-['Open_Sans'] text-gray-700 mb-6 leading-relaxed">
                  Qualidade Hertz com design atemporal. Garantia muito acima do mercado para sua tranquilidade total.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                    <span className="font-['Open_Sans']">Design exclusivo customizável</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                    <span className="font-['Open_Sans']">Entrega 30% mais rápida</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                    <span className="font-['Open_Sans']">Acabamento premium</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                    <span className="font-['Open_Sans']">Garantia estendida 10 anos</span>
                  </div>
                </div>
                <Button className="w-full bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white">
                  CONHECER ALTO PADRÃO <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof - Architects */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-center mb-6">
            RECONHECIDA PELOS MAIORES<br />ARQUITETOS DO BRASIL
          </h2>
          <p className="text-center text-gray-400 mb-16 font-['Open_Sans'] text-lg">Projetos que exigem perfeição escolhem Hertz</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Trabalho com Hertz há 8 anos. Nunca tive problemas. A qualidade é consistente em todos os projetos.",
                name: "Arq. Ana Paula Mendes",
                credential: "Prêmio APCA 2023"
              },
              {
                quote: "Quando o cliente quer o melhor, especifico Hertz. Silêncio absoluto na linha Antirruído.",
                name: "Arq. Roberto Migotto",
                credential: "+120 projetos high-end"
              },
              {
                quote: "Customização sem limites. Isso faz toda diferença em projetos exclusivos.",
                name: "Arq. Fernanda Neiva",
                credential: "Casa Cor SP 2022-2024"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c9a961] text-[#c9a961]" />
                  ))}
                </div>
                <p className="font-['Open_Sans'] text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-['Montserrat'] font-semibold text-white">{testimonial.name}</p>
                  <p className="text-[#c9a961] text-sm">{testimonial.credential}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="depoimentos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-center mb-16">O Que Nossos Clientes Dizem</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Melhor investimento que fiz na minha casa. O silêncio é impressionante!",
                author: "Roberto M.",
                location: "Cobertura Jardins, SP"
              },
              {
                text: "Atendimento impecável do início ao fim. Equipe super profissional.",
                author: "Claudia S.",
                location: "Casa Alphaville"
              },
              {
                text: "Entregaram antes do prazo e a qualidade superou expectativas.",
                author: "Paulo G.",
                location: "Retrofit Vila Madalena"
              },
              {
                text: "Recomendo de olhos fechados. Garantia de 10 anos me deu total segurança.",
                author: "Marina L.",
                location: "Apartamento Pinheiros"
              },
              {
                text: "Esquadrias lindas e funcionais. Elevaram meu projeto.",
                author: "Fernando R.",
                location: "Casa Contemporânea"
              },
              {
                text: "A linha antirruído realmente funciona. Não ouço mais barulho da rua!",
                author: "Juliana P.",
                location: "Cobertura Moema"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c9a961] text-[#c9a961]" />
                  ))}
                </div>
                <p className="font-['Open_Sans'] text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-['Montserrat'] font-semibold text-sm text-[#1a1a1a]">{testimonial.author} | {testimonial.location}</p>
                  <p className="text-[#c9a961] text-xs mt-2 flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" /> Cliente Verificado
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#c9a961] text-sm font-['Montserrat'] uppercase tracking-wider mb-8">CREDENCIAIS & PARCERIAS</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
            <div className="text-center">
              <p className="font-['Montserrat'] font-bold text-2xl text-[#c9a961]">10/10</p>
              <p className="text-sm text-gray-600">Reclame Aqui</p>
            </div>
            <div className="text-center">
              <p className="font-['Montserrat'] font-bold text-2xl text-[#c9a961]">4.9/5.0</p>
              <p className="text-sm text-gray-600">Google</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-[#c9a961] mx-auto mb-2" />
              <p className="text-sm text-gray-600">Associação<br />Brasileira</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-[#c9a961] mx-auto mb-2" />
              <p className="text-sm text-gray-600">ISO 9001<br />Certificado</p>
            </div>
            <div className="text-center">
              <p className="font-['Montserrat'] font-bold text-2xl text-[#c9a961]">10 Anos</p>
              <p className="text-sm text-gray-600">Garantia</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-[#c9a961] mx-auto mb-2" />
              <p className="text-sm text-gray-600">100%<br />Nacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Offer */}
      <section className="py-20 px-6 bg-white border-t-2 border-b-2 border-[#c9a961]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-['Montserrat'] font-semibold mb-6 animate-pulse">
            🔥 OFERTA LIMITADA
          </div>
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-5xl mb-6">
            FECHE NESTA SEMANA E GANHE<br />
            GARANTIA ESTENDIDA DE 10 ANOS
          </h2>
          <p className="font-['Open_Sans'] text-lg text-gray-700 mb-8">
            Normalmente oferecemos 5 anos. Mas para quem decidir agora, dobramos a garantia.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="font-['Montserrat'] text-sm mb-4">⏰ Válido somente até o final desta semana</p>
            <p className="font-['Montserrat'] text-sm mb-6">📍 Apenas 12 vagas disponíveis para instalação</p>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                <span className="text-sm">Garantia estendida: 10 anos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                <span className="text-sm">Orçamento gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                <span className="text-sm">Consultoria técnica incluída</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#c9a961]" />
                <span className="text-sm">Projeto 3D sem custo</span>
              </div>
            </div>
          </div>
          <Button onClick={() => window.open(whatsappLink, '_blank')} size="lg" className="bg-[#c9a961] hover:bg-[#b89851] text-white text-lg px-10 py-6 font-['Montserrat'] font-semibold uppercase">
            SOLICITAR AGORA E GARANTIR BENEFÍCIO <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-['Montserrat'] font-bold text-4xl mb-6">
              ATENDIMENTO PERSONALIZADO<br />
              NA GRANDE SÃO PAULO
            </h2>
            <p className="font-['Open_Sans'] text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa equipe de especialistas atende toda região metropolitana com acompanhamento dedicado do início ao fim do projeto.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <p className="font-['Open_Sans']">Visita técnica gratuita</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <p className="font-['Open_Sans']">Acompanhamento por especialista dedicado</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <p className="font-['Open_Sans']">Instalação com equipe própria (não terceirizada)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <p className="font-['Open_Sans']">Suporte pós-venda garantido</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="font-['Montserrat'] font-semibold mb-2 flex items-center">
                <MapPin className="w-5 h-5 text-[#c9a961] mr-2" />
                Atendemos:
              </p>
              <p className="font-['Open_Sans'] text-gray-700">Zona Sul, Zona Oeste, Alphaville, ABC Paulista, Região Metropolitana</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1574848296471-28f79a036f79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MDM2NDc3fDA&ixlib=rb-4.1.0&q=85" 
              alt="Área de atendimento" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="projetos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-center mb-16">Nossos Projetos</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: 'https://images.unsplash.com/photo-1696986324679-dad26261d579?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjB3aW5kb3dzfGVufDB8fHx8MTc2NDAzNjQ3MXww&ixlib=rb-4.1.0&q=85', title: 'Living Room Moderno', desc: 'Linha Antirruído' },
              { img: 'https://images.unsplash.com/photo-1574848296471-28f79a036f79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0MDM2NDc3fDA&ixlib=rb-4.1.0&q=85', title: 'Fachada Moderna', desc: '450m² de silêncio' },
              { img: 'https://images.unsplash.com/photo-1583329550487-0fa300a4cd1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzY0MDM2NDgzfDA&ixlib=rb-4.1.0&q=85', title: 'Detalhes Arquitetônicos', desc: 'Alto Padrão' },
              { img: 'https://images.unsplash.com/photo-1662624914003-9bb2095ca7a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjB3aW5kb3dzfGVufDB8fHx8MTc2NDAzNjQ3MXww&ixlib=rb-4.1.0&q=85', title: 'Design Sofisticado', desc: 'Ambientes Premium' },
              { img: 'https://images.unsplash.com/photo-1617326021886-53d6be1d7154?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzY0MDM2NDgzfDA&ixlib=rb-4.1.0&q=85', title: 'Espaço Minimalista', desc: 'Projeto Exclusivo' },
              { img: 'https://images.unsplash.com/photo-1684778522663-be47e3cbbb2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aW5kb3dzfGVufDB8fHx8MTc2NDAzNjQ3MXww&ixlib=rb-4.1.0&q=85', title: 'Arquitetura Contemporânea', desc: 'Vista Integrada' }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-['Montserrat'] font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-300 font-['Open_Sans']">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-center mb-16">Perguntas Frequentes</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border border-gray-200">
              <AccordionTrigger className="font-['Montserrat'] font-semibold text-left">
                Qual a diferença entre as linhas Antirruído e Alto Padrão?
              </AccordionTrigger>
              <AccordionContent className="font-['Open_Sans'] text-gray-700 leading-relaxed">
                A Linha Antirruído possui tecnologia termoacústica que reduz até 80% dos ruídos externos, ideal para quem busca máximo isolamento. A Linha Alto Padrão oferece design exclusivo com garantia estendida de 10 anos, perfeita para projetos que exigem estética refinada e durabilidade superior.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border border-gray-200">
              <AccordionTrigger className="font-['Montserrat'] font-semibold text-left">
                Como funciona a garantia de 10 anos?
              </AccordionTrigger>
              <AccordionContent className="font-['Open_Sans'] text-gray-700 leading-relaxed">
                Nossa garantia estendida cobre defeitos de fabricação, problemas estruturais e funcionamento dos mecanismos. Inclui suporte técnico dedicado e visitas de manutenção preventiva sem custo adicional durante todo o período.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border border-gray-200">
              <AccordionTrigger className="font-['Montserrat'] font-semibold text-left">
                Vocês atendem fora da Grande São Paulo?
              </AccordionTrigger>
              <AccordionContent className="font-['Open_Sans'] text-gray-700 leading-relaxed">
                Atualmente nosso atendimento é exclusivo para a Grande São Paulo, incluindo Zona Sul, Zona Oeste, Alphaville, ABC Paulista e região metropolitana. Isso nos permite manter o padrão de qualidade e acompanhamento personalizado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border border-gray-200">
              <AccordionTrigger className="font-['Montserrat'] font-semibold text-left">
                Qual o prazo médio de entrega e instalação?
              </AccordionTrigger>
              <AccordionContent className="font-['Open_Sans'] text-gray-700 leading-relaxed">
                O prazo varia conforme a complexidade do projeto, mas em média são 30 a 45 dias para produção e 2 a 5 dias para instalação. Projetos da Linha Alto Padrão têm entrega 30% mais rápida.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border border-gray-200">
              <AccordionTrigger className="font-['Montserrat'] font-semibold text-left">
                É possível personalizar cores e acabamentos?
              </AccordionTrigger>
              <AccordionContent className="font-['Open_Sans'] text-gray-700 leading-relaxed">
                Sim! Oferecemos customização total. Você pode escolher cores, acabamentos, texturas e detalhes específicos. Nossa equipe trabalha junto com seu arquiteto para garantir que o resultado seja exatamente o que você imaginou.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border border-gray-200">
              <AccordionTrigger className="font-['Montserrat'] font-semibold text-left">
                Como é feito o orçamento? Tem custo?
              </AccordionTrigger>
              <AccordionContent className="font-['Open_Sans'] text-gray-700 leading-relaxed">
                O orçamento é 100% gratuito e sem compromisso. Agendamos uma visita técnica, fazemos as medições, entendemos suas necessidades e em até 48 horas você recebe uma proposta detalhada. Também oferecemos projeto 3D sem custo adicional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">
            PRONTO PARA TRANSFORMAR SEU PROJETO?
          </h2>
          <p className="font-['Open_Sans'] text-lg text-gray-300 mb-12">
            Agende agora uma consulta gratuita com nossos especialistas e descubra como podemos elevar seu projeto ao próximo nível.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Button onClick={() => window.open(whatsappLink, '_blank')} size="lg" className="bg-[#25D366] hover:bg-[#1fb855] text-white text-lg py-8 font-['Montserrat'] font-semibold">
              <Phone className="mr-2" /> FALAR NO WHATSAPP AGORA
            </Button>
            <Button onClick={() => scrollToSection('formulario')} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1a1a] text-lg py-8 font-['Montserrat'] font-semibold">
              📋 PREENCHER FORMULÁRIO RÁPIDO
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#c9a961]" />
              <span>Resposta em até 2 horas</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#c9a961]" />
              <span>Orçamento gratuito</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#c9a961]" />
              <span>Especialistas disponíveis</span>
            </div>
          </div>

          <p className="text-gray-500 text-xs">🔒 Seus dados estão seguros conosco</p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="formulario" className="py-24 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="font-['Montserrat'] font-bold text-3xl mb-6 text-center">SOLICITE SEU ORÇAMENTO GRATUITO</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-['Montserrat'] font-medium mb-2">Nome Completo *</label>
                <Input 
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  placeholder="Digite seu nome"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block font-['Montserrat'] font-medium mb-2">Telefone/WhatsApp *</label>
                <Input 
                  required
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  placeholder="(11) 99999-9999"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block font-['Montserrat'] font-medium mb-2">Email *</label>
                <Input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="seu@email.com"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block font-['Montserrat'] font-medium mb-2">Tipo de Projeto *</label>
                <Select required value={formData.tipoProjeto} onValueChange={(value) => setFormData({...formData, tipoProjeto: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residencia">Residência Nova</SelectItem>
                    <SelectItem value="reforma">Reforma/Retrofit</SelectItem>
                    <SelectItem value="cobertura">Cobertura/Duplex</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block font-['Montserrat'] font-medium mb-2">Quando pretende iniciar?</label>
                <Select value={formData.prazo} onValueChange={(value) => setFormData({...formData, prazo: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione o prazo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="imediato">Imediato (até 30 dias)</SelectItem>
                    <SelectItem value="1-3">1-3 meses</SelectItem>
                    <SelectItem value="3-6">3-6 meses</SelectItem>
                    <SelectItem value="planejando">Ainda planejando</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block font-['Montserrat'] font-medium mb-2">Mensagem (opcional)</label>
                <Textarea 
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  placeholder="Conte-nos mais sobre seu projeto..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full bg-[#c9a961] hover:bg-[#b89851] text-white h-14 text-lg font-['Montserrat'] font-semibold uppercase">
                ENVIAR SOLICITAÇÃO <ArrowRight className="ml-2" />
              </Button>

              <p className="text-center text-sm text-gray-500">
                🔒 Seus dados estão protegidos<br />
                Responderemos em até 2 horas
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-['Montserrat'] font-bold text-xl mb-4">HERTZ ESQUADRIAS</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="font-['Open_Sans'] text-sm">R. Marcello Müller, 259 - Jardim Independência, São Paulo - SP, 03223-060</span>
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
            <div className="mt-6">
              <p className="font-['Montserrat'] text-sm mb-2">Horário de Atendimento:</p>
              <p className="text-gray-300 text-sm">Seg-Sex: 8h-18h | Sáb: 9h-13h</p>
            </div>
          </div>

          <div>
            <h4 className="font-['Montserrat'] font-bold text-xl mb-4">LINKS RÁPIDOS</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('produtos')} className="hover:text-[#c9a961] font-['Open_Sans'] text-sm">Linha Antirruído</button></li>
              <li><button onClick={() => scrollToSection('produtos')} className="hover:text-[#c9a961] font-['Open_Sans'] text-sm">Linha Alto Padrão</button></li>
              <li><button onClick={() => scrollToSection('projetos')} className="hover:text-[#c9a961] font-['Open_Sans'] text-sm">Projetos Realizados</button></li>
              <li><button onClick={() => scrollToSection('contato')} className="hover:text-[#c9a961] font-['Open_Sans'] text-sm">Contato</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Montserrat'] font-bold text-xl mb-4">AVALIAÇÕES</h4>
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c9a961] text-[#c9a961]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm">10/10 Reclame Aqui</p>
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c9a961] text-[#c9a961]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm">4.9/5.0 Google (500+ avaliações)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm font-['Open_Sans']">
            © 2024 Hertz Esquadrias | Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1fb855] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Home;