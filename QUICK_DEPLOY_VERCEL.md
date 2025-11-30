# ⚡ Deploy RÁPIDO na Vercel (5 minutos)

## 🎯 PASSOS RÁPIDOS

### 1️⃣ **Prepare o Repositório**

Se ainda não fez push para GitHub:
```bash
cd /app
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

---

### 2️⃣ **Configure na Vercel**

1. Acesse: **https://vercel.com**
2. Clique em **"Sign up"** → Login com GitHub
3. Clique em **"Add New..."** → **"Project"**
4. Procure por **"hertz-clean"** (ou nome do seu repo)
5. Clique em **"Import"**

---

### 3️⃣ **Configurações de Build**

Na tela de configuração, preencha:

**Framework Preset:** `Create React App`

**Root Directory:** `frontend` 

**Build Command:**
```bash
yarn build
```

**Output Directory:**
```bash
build
```

**Install Command:**
```bash
yarn install
```

---

### 4️⃣ **Variáveis de Ambiente (Opcional)**

Clique em **"Environment Variables"** e adicione:

```
REACT_APP_BACKEND_URL=
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

---

### 5️⃣ **Deploy!**

Clique em **"Deploy"** e aguarde ~2 minutos

✅ Seu site estará no ar em uma URL tipo:
`https://hertz-clean.vercel.app`

---

## 🔗 DOMÍNIO CUSTOMIZADO (Opcional)

1. Na Vercel, vá em **"Settings"** → **"Domains"**
2. Adicione seu domínio (ex: `hertzeesquadrias.com.br`)
3. Configure os DNS conforme instruções da Vercel
4. Pronto! SSL automático incluído

---

## 🚀 DEPLOY AUTOMÁTICO

Cada vez que você fizer push no GitHub:
```bash
git push origin main
```

**A Vercel faz deploy automático!** 🎉

---

## 📊 RESULTADO ESPERADO

- ✅ Site carregando em 2-3 segundos
- ✅ CDN global (rápido no mundo todo)
- ✅ SSL automático (HTTPS)
- ✅ Todas as integrações funcionando
- ✅ LeadLovers form funcionando
- ✅ Chat widget funcionando
- ✅ Zero crashs de memória

---

## 💰 CUSTO

**$0/mês** (100% GRÁTIS)

Vercel oferece:
- 100 GB bandwidth/mês
- Builds ilimitados
- Domínio customizado grátis

---

## 🆘 PROBLEMAS?

### Build falha:
1. Verifique Root Directory: `frontend`
2. Verifique Build Command: `yarn build`
3. Verifique se package.json está em /frontend

### Site não carrega:
1. Verifique Output Directory: `build`
2. Veja logs do build na Vercel
3. Teste build local: `cd frontend && yarn build`

---

**Total: 5 minutos e seu site está no ar! 🚀**
