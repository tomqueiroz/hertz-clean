import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PoliticaPrivacidade() {
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

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-['Playfair_Display'] font-bold mb-6 text-black">
          Política de Privacidade
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">
            <strong>Última atualização:</strong> Dezembro de 2024
          </p>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              1. Informações que Coletamos
            </h2>
            <p>
              A Hertz Esquadrias coleta informações que você fornece diretamente através do nosso formulário de contato, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nome completo:</strong> Para identificação e comunicação personalizada</li>
              <li><strong>Telefone/WhatsApp:</strong> Para contato direto sobre seu projeto</li>
              <li><strong>E-mail:</strong> Para envio de orçamentos e comunicações</li>
              <li><strong>Cidade e Estado:</strong> Para verificar disponibilidade de atendimento na sua região</li>
              <li><strong>Mensagem:</strong> Detalhes sobre seu projeto ou necessidade</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              2. Como Usamos suas Informações
            </h2>
            <p>
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder suas solicitações de orçamento e informações</li>
              <li>Entrar em contato sobre projetos e serviços</li>
              <li>Enviar atualizações sobre nossos produtos e promoções (com seu consentimento)</li>
              <li>Melhorar nossos serviços e experiência do cliente</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              3. Compartilhamento de Informações
            </h2>
            <p>
              A Hertz Esquadrias <strong>não vende, aluga ou comercializa</strong> suas informações pessoais para terceiros.
            </p>
            <p>
              Podemos compartilhar suas informações apenas com:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Prestadores de serviços:</strong> Como plataformas de e-mail marketing e CRM (LeadLovers) que nos auxiliam no atendimento</li>
              <li><strong>Parceiros comerciais:</strong> Quando necessário para execução do projeto contratado</li>
              <li><strong>Autoridades legais:</strong> Quando exigido por lei ou para proteção de direitos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              4. Segurança dos Dados
            </h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, perda, destruição ou alteração, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Criptografia SSL/HTTPS em todas as transmissões de dados</li>
              <li>Armazenamento seguro em servidores protegidos</li>
              <li>Acesso restrito apenas a funcionários autorizados</li>
              <li>Monitoramento constante de segurança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              5. Seus Direitos (LGPD)
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acesso:</strong> Confirmar se tratamos seus dados e acessá-los</li>
              <li><strong>Correção:</strong> Solicitar correção de dados incompletos ou desatualizados</li>
              <li><strong>Exclusão:</strong> Solicitar eliminação de dados pessoais</li>
              <li><strong>Portabilidade:</strong> Solicitar transferência de dados para outro fornecedor</li>
              <li><strong>Revogação:</strong> Revogar consentimento a qualquer momento</li>
              <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
            </ul>
            <p className="mt-4">
              Para exercer seus direitos, entre em contato através do e-mail: <a href="mailto:privacidade@hertzeesquadrias.com.br" className="text-[#c9a961] hover:underline">privacidade@hertzeesquadrias.com.br</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              6. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Tag Manager:</strong> Para análise de tráfego e comportamento no site</li>
              <li><strong>LeadLovers Pixel:</strong> Para rastreamento de conversões e remarketing</li>
              <li><strong>Cookies essenciais:</strong> Para funcionamento básico do site</li>
            </ul>
            <p className="mt-4">
              Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              7. Retenção de Dados
            </h2>
            <p>
              Mantemos suas informações pessoais pelo tempo necessário para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cumprir as finalidades descritas nesta política</li>
              <li>Atender requisitos legais e regulatórios</li>
              <li>Resolver disputas e fazer cumprir acordos</li>
            </ul>
            <p className="mt-4">
              Após esse período, seus dados serão excluídos ou anonimizados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              8. Links para Sites de Terceiros
            </h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de cada site que visitar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              9. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através do site ou por e-mail. A data da última atualização estará sempre indicada no topo desta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-['Playfair_Display'] font-semibold mt-8 mb-4 text-black">
              10. Contato
            </h2>
            <p>
              Para dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Hertz Esquadrias</strong></p>
              <p>E-mail: <a href="mailto:contato@hertzeesquadrias.com.br" className="text-[#c9a961] hover:underline">contato@hertzeesquadrias.com.br</a></p>
              <p>WhatsApp: <a href="https://wa.me/5511999999999" className="text-[#c9a961] hover:underline">(11) 99999-9999</a></p>
              <p>Endereço: São Paulo - SP</p>
            </div>
          </section>

          <section className="border-t pt-8 mt-12">
            <p className="text-sm text-gray-500">
              Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e outras legislações aplicáveis de proteção de dados.
            </p>
          </section>
        </div>

        {/* Back to top */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-[#c9a961] hover:bg-[#b89851] text-white px-8 py-4 rounded-md transition-colors duration-300 font-['Montserrat'] font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-['Montserrat']">
            © {new Date().getFullYear()} Hertz Esquadrias. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
