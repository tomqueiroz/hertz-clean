# 🚀 DEPLOY PRONTO - Siga Estes Passos

## ✅ STATUS: TUDO PRONTO!

- ✅ Emergent branding removido
- ✅ Favicon corrigido
- ✅ Build testado (110.7 KB JS + 10.77 KB CSS)
- ✅ Chat LeadLovers funcionando
- ✅ Formulário LeadLovers funcionando
- ✅ Commits prontos para push

---

## 📤 PASSO 1: PUSH PARA GITHUB

### **Opção A: Usar botão "Save to GitHub" do Emergent**
Se você vê um botão "Save to GitHub" no topo da interface:
1. Clique nele
2. Confirme
3. Pronto! ✅

### **Opção B: Via GitHub Personal Access Token**

1. **Criar Token:**
   - Vá em: https://github.com/settings/tokens
   - Clique **"Generate new token"** → **"Classic"**
   - Nome: "Hertz Deploy"
   - Marque: **"repo"** (todas as opções)
   - Clique **"Generate token"**
   - **COPIE O TOKEN** (aparece só uma vez!)

2. **No terminal do Emergent (ou chat):**
   
   Cole este comando substituindo `SEU_TOKEN`:
   ```bash
   cd /app && git push https://SEU_TOKEN@github.com/tomqueiroz/hertz-clean.git main
   ```

3. **Verificar se deu certo:**
   - Vá em: https://github.com/tomqueiroz/hertz-clean
   - Veja se tem commit recente: "Fix favicon URL typo"

---

## 🚀 PASSO 2: DEPLOY NA VERCEL

### **2.1 - Limpar Deploy Antigo (se existir)**

1. Acesse: https://vercel.com/dashboard
2. Encontre projeto `hertz-clean` (se existir)
3. **Settings** → Role até o final → **"Delete Project"**
4. Confirme a exclusão

### **2.2 - Novo Deploy (CONFIGURAÇÃO CORRETA)**

1. Vá em: https://vercel.com
2. Clique **"Add New..."** → **"Project"**
3. Encontre **"hertz-clean"** nos seus repositórios
4. Clique **"Import"**

### **2.3 - CONFIGURAÇÃO CRÍTICA** ⚠️

**NA TELA DE CONFIGURAÇÃO, PREENCHA EXATAMENTE ASSIM:**

```
Framework Preset: Create React App
```

**⚠️ ROOT DIRECTORY (MUITO IMPORTANTE!):**
- Clique em **"Edit"** ao lado de "Root Directory"
- Digite: `frontend`
- Pressione Enter
- ✅ Certifique-se que aparece "frontend" selecionado

**Build & Development Settings:**
```
Build Command: yarn build (deixe como está)
Output Directory: build (deixe como está)
Install Command: yarn install (deixe como está)
```

**Environment Variables (opcional mas recomendado):**
Clique em **"Add"** e adicione:
```
REACT_APP_BACKEND_URL=
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

### **2.4 - DEPLOY!**

1. Clique no botão azul **"Deploy"**
2. Aguarde 2-3 minutos
3. ✅ **PRONTO!**

Você vai receber uma URL tipo:
`https://hertz-clean.vercel.app`

---

## ✅ PASSO 3: TESTAR O SITE

Após deploy, teste:

1. ✅ Abra a URL da Vercel
2. ✅ Verifique se carrega a homepage
3. ✅ Navegue para `/linha-antirruido`
4. ✅ Navegue para `/linha-alto-padrao`
5. ✅ Verifique se o chat aparece no canto direito
6. ✅ Teste preencher o formulário (não precisa enviar)
7. ✅ Teste no celular

---

## 🆘 SE DER ERRO 404 NA VERCEL

### **Causa:** Root Directory não foi configurado

### **Solução:**

1. Na Vercel, vá em **Settings** → **General**
2. Em **Root Directory**, clique em **"Edit"**
3. Digite: `frontend`
4. Salve
5. Vá em **Deployments** → Clique nos 3 pontos do último deploy → **"Redeploy"**

---

## 🎯 CHECKLIST FINAL

Antes de compartilhar com cliente:

- [ ] Push feito para GitHub
- [ ] Commit "Fix favicon URL typo" aparece no GitHub
- [ ] Deploy na Vercel com Root Directory = frontend
- [ ] Site abre sem erro 404
- [ ] Todas as páginas funcionam (Home, Linha Antirruído, Alto Padrão)
- [ ] Chat LeadLovers aparece no canto direito
- [ ] Formulário está visível e estilizado
- [ ] Nenhuma referência à Emergent visível
- [ ] Favicon aparece corretamente

---

## 📊 O QUE ESTÁ NO SITE AGORA:

✅ **Integrações:**
- LeadLovers Form (ID: 770370)
- LeadLovers Chat (ID: 0FF14590-1F55-4802-AB2C-BCF080723CA8)
- LeadLovers Pixel (Key: BB544324B8)
- Google Tag Manager (ID: GTM-T44TCHMF)

✅ **Performance:**
- JS: 110.7 KB (gzipped)
- CSS: 10.77 KB (gzipped)
- Total: ~121 KB

✅ **Páginas:**
- Homepage (/)
- Linha Antirruído (/linha-antirruido)
- Linha Alto Padrão (/linha-alto-padrao)

❌ **Removido:**
- Badge Emergent
- Scripts Emergent
- Todos links/referências Emergent

---

## 💰 CUSTO

**Vercel:** R$ 0,00/mês
- 100 GB bandwidth/mês
- Builds ilimitados
- SSL automático
- Domínio customizado grátis

---

## 🎉 DEPOIS DO DEPLOY

1. **Pegue a URL final** (ex: hertz-clean.vercel.app)
2. **Teste tudo** (checklist acima)
3. **Compartilhe com o cliente**
4. **Configure domínio próprio** (opcional):
   - Na Vercel: Settings → Domains
   - Adicione seu domínio
   - Configure DNS

---

## 📞 DOMÍNIO PRÓPRIO (Opcional)

Se você tem domínio (ex: hertzeesquadrias.com.br):

1. Na Vercel: **Settings** → **Domains**
2. Clique **"Add"**
3. Digite seu domínio
4. Siga as instruções para configurar DNS
5. Aguarde propagação (até 48h, geralmente ~1h)
6. ✅ Pronto! SSL automático incluído

---

## 🔄 ATUALIZAÇÕES FUTURAS

Para fazer mudanças no site:

1. Faça as alterações no código
2. Commit e push para GitHub
3. **Vercel atualiza AUTOMATICAMENTE!** 🎉

Sem precisar fazer nada manualmente.

---

## ✨ RESUMO RÁPIDO

```
1. Push para GitHub (botão ou token)
2. Vercel → Import → hertz-clean
3. Configure Root Directory = frontend
4. Deploy!
5. Teste
6. Compartilhe com cliente
```

**Tempo total: 5-10 minutos**

---

**TUDO PRONTO! AGORA É SÓ SEGUIR OS PASSOS! 🚀**

**Repositório:** https://github.com/tomqueiroz/hertz-clean
**Commits prontos:** ✅ (3 commits aguardando push)
**Build testado:** ✅ (121 KB, otimizado)
**Emergent removido:** ✅ (100% limpo)
