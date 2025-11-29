# 🚀 Guia de Migração - Hertz Esquadrias para Novo Projeto

## ⚠️ IMPORTANTE
Este guia foi criado para migrar o projeto Hertz Esquadrias para um ambiente limpo e resolver problemas recorrentes de memória no deploy.

---

## 📋 PREPARAÇÃO (JÁ FEITA)

✅ Código otimizado e limpo
✅ Dependências reduzidas de 654MB para 593MB
✅ Scripts problemáticos removidos/otimizados
✅ Build testado localmente (476KB, funciona perfeitamente)
✅ Formulário LeadLovers configurado
✅ Favicon e meta tags atualizados

---

## 🔄 PROCESSO DE MIGRAÇÃO (VOCÊ VAI FAZER)

### PASSO 1: Salvar Código no GitHub
1. Na interface do Emergent, clique em **"Save to GitHub"** (ícone do GitHub no topo)
2. Escolha um nome para o repositório: `hertz-esquadrias-clean`
3. Aguarde a confirmação de que o código foi salvo

### PASSO 2: Criar Novo Projeto
1. Vá para o dashboard da Emergent
2. Clique em **"New Task"** ou **"Start New Project"**
3. Nome do projeto: `Hertz Esquadrias - Clean Deploy`
4. Selecione o template: **FastAPI + React + MongoDB** (mesmo que o atual)

### PASSO 3: Importar Código do GitHub
1. No novo projeto, clique em **"Pull from GitHub"**
2. Selecione o repositório: `hertz-esquadrias-clean` (que você acabou de criar)
3. Aguarde a importação completar
4. O agente E1 vai inicializar o ambiente automaticamente

### PASSO 4: Verificar e Testar
1. Aguarde o agente configurar o ambiente (instalar dependências, etc.)
2. Teste o site localmente (preview) para confirmar que está funcionando
3. Verifique se o formulário está funcionando

### PASSO 5: Deploy
1. Clique em **"Deploy"** na interface do Emergent
2. Aguarde o processo de deploy (deve funcionar sem erros de memória)
3. Teste o site deployado

### PASSO 6: Configurar Domínio Customizado (Opcional)
1. Após deploy bem-sucedido, vá em **"Link domain"**
2. Siga as instruções para obter os registros DNS (CNAME/A)
3. Configure no seu provedor de DNS

---

## 🛠️ OTIMIZAÇÕES APLICADAS

### Dependências Removidas (package.json):
- ❌ react-hook-form, zod (não utilizados)
- ❌ date-fns, react-day-picker (não utilizados)
- ❌ ~25 componentes @radix-ui não utilizados
- ❌ embla-carousel-react, vaul, cmdk, input-otp

### Dependências Mantidas (essenciais):
- ✅ @radix-ui/react-accordion (usado no FAQ)
- ✅ @radix-ui/react-slot (usado no Button)
- ✅ axios, lucide-react, sonner, next-themes
- ✅ react, react-dom, react-router-dom
- ✅ TailwindCSS e utilitários

### Scripts Otimizados (index.html):
- ✅ PostHog mantido mas otimizado
- ✅ LeadLovers Pixel mantido
- ✅ Google Tag Manager mantido
- ✅ Formulário LeadLovers mantido
- ✅ Chat Widget LeadLovers mantido

### Configurações Corrigidas:
- ✅ Favicon com logo Hertz
- ✅ Meta tags otimizadas para SEO
- ✅ Title correto: "Hertz Esquadrias - Silêncio é o Novo Luxo"
- ✅ URL do backend configurado corretamente (vazio para usar URLs relativas)

---

## 📊 RESULTADOS ESPERADOS

**Build Local (Testado):**
- ✅ Tempo: 7-8 segundos
- ✅ Tamanho: 476KB total
- ✅ JS: 384KB (110KB gzip)
- ✅ CSS: 59KB (10KB gzip)

**Deploy:**
- ✅ Deve completar sem erros de memória
- ✅ Site deve carregar rapidamente
- ✅ Todas as funcionalidades preservadas

---

## 🆘 SE ALGO DER ERRADO

### No Novo Projeto:
1. **Erro durante importação do GitHub**: Verifique se o repositório foi criado corretamente
2. **Dependências não instalando**: O agente vai resolver automaticamente (aguarde)
3. **Deploy falha novamente**: Contate suporte Emergent (Discord/Email)

### Contatos de Suporte:
- **Discord**: https://discord.gg/VzKfwCXC4A
- **Email**: support@emergent.sh
- **Mencione**: Job ID do projeto antigo + "migração devido a problemas de memória recorrentes"

---

## ✅ CHECKLIST FINAL

Antes de considerar a migração concluída:

- [ ] Código salvo no GitHub
- [ ] Novo projeto criado
- [ ] Código importado do GitHub
- [ ] Site funciona no preview local
- [ ] Formulário LeadLovers testado
- [ ] Deploy realizado com sucesso
- [ ] Site deployado está acessível
- [ ] Todas as páginas carregam (Home, Linha Antirruído, Linha Alto Padrão)
- [ ] Chat widget aparece no canto inferior direito
- [ ] Favicon correto aparece na aba do navegador

---

## 📞 PRÓXIMOS PASSOS APÓS MIGRAÇÃO

1. **Testar formulário LeadLovers** em produção (enviar teste real)
2. **Configurar domínio customizado** (se desejar)
3. **Verificar analytics** (GTM, LeadLovers Pixel)
4. **Monitorar performance** nos primeiros dias

---

**Última atualização**: {{DATE}}
**Preparado por**: E1 Agent - Emergent Labs
