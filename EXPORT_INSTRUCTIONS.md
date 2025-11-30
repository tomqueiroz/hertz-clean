# 🚀 Como Exportar e Hospedar Fora do Emergent

## 📦 BACKUP CRIADO

Um backup completo do seu projeto foi criado em: `/tmp/hertz-esquadrias-backup.tar.gz`

---

## 🌐 OPÇÕES DE HOSPEDAGEM (MELHORES ALTERNATIVAS)

### **OPÇÃO 1: Vercel (RECOMENDADO para Frontend)** 🥇

**Vantagens:**
- ✅ Deploy automático do GitHub
- ✅ GRÁTIS para sites estáticos
- ✅ CDN global super rápido
- ✅ SSL automático
- ✅ Suporte para React

**Como Fazer:**
1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique em "Import Project"
4. Selecione seu repositório `hertz-clean`
5. Configure:
   - **Framework Preset:** Create React App
   - **Build Command:** `cd frontend && yarn build`
   - **Output Directory:** `frontend/build`
   - **Install Command:** `cd frontend && yarn install`

**Variáveis de Ambiente:**
```
REACT_APP_BACKEND_URL=sua-url-backend
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

---

### **OPÇÃO 2: Netlify** 🥈

**Vantagens:**
- ✅ Deploy automático do GitHub
- ✅ GRÁTIS para sites estáticos
- ✅ Formulários integrados
- ✅ CDN global

**Como Fazer:**
1. Acesse: https://netlify.com
2. Faça login com GitHub
3. Clique em "Add new site" → "Import from Git"
4. Selecione `hertz-clean`
5. Configure:
   - **Base directory:** `frontend`
   - **Build command:** `yarn build`
   - **Publish directory:** `frontend/build`

---

### **OPÇÃO 3: Railway (Para Backend FastAPI + MongoDB)** 🚂

**Vantagens:**
- ✅ Suporta FastAPI + MongoDB
- ✅ Deploy do GitHub
- ✅ $5 grátis por mês
- ✅ Banco de dados incluído

**Como Fazer:**
1. Acesse: https://railway.app
2. Faça login com GitHub
3. Clique em "New Project" → "Deploy from GitHub"
4. Selecione `hertz-clean`
5. Railway detecta automaticamente FastAPI

**Variáveis de Ambiente:**
```
MONGO_URL=sua-conexao-mongodb
DB_NAME=hertz_esquadrias
CORS_ORIGINS=*
```

---

### **OPÇÃO 4: Render (Completo - Frontend + Backend)** 🎨

**Vantagens:**
- ✅ GRÁTIS para projetos pequenos
- ✅ Suporta static site + backend
- ✅ MongoDB Atlas integrado
- ✅ SSL automático

**Como Fazer:**
1. Acesse: https://render.com
2. Faça login com GitHub
3. Crie 2 serviços:
   - **Static Site** para frontend
   - **Web Service** para backend

---

## 📁 ESTRUTURA DO PROJETO EXPORTADO

```
hertz-esquadrias/
├── frontend/          # React App
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
├── backend/           # FastAPI
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── DEPLOYMENT_INSTRUCTIONS.md
└── README.md
```

---

## 🔧 RODAR LOCALMENTE (Desenvolvimento)

### **Frontend:**
```bash
cd frontend
yarn install
yarn start
# Abre em http://localhost:3000
```

### **Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
# API em http://localhost:8001
```

### **MongoDB:**
```bash
# Instale MongoDB localmente ou use MongoDB Atlas (cloud grátis)
# https://www.mongodb.com/cloud/atlas
```

---

## 🏗️ BUILD DE PRODUÇÃO

### **Frontend (Static Build):**
```bash
cd frontend
yarn build
# Arquivos otimizados em: frontend/build/
```

**Tamanho do Build:**
- JS: 110.67 KB (gzipped)
- CSS: 10.77 KB (gzipped)
- Total: ~121 KB 🚀

### **Servir Build Localmente:**
```bash
cd frontend
npx serve -s build
# Abre em http://localhost:3000
```

---

## 🔐 VARIÁVEIS DE AMBIENTE NECESSÁRIAS

### **Frontend (.env):**
```
REACT_APP_BACKEND_URL=
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

### **Backend (.env):**
```
MONGO_URL=mongodb://localhost:27017/hertz_esquadrias
DB_NAME=hertz_esquadrias
CORS_ORIGINS=*
```

---

## 🌍 BANCO DE DADOS (MongoDB)

### **Opção 1: MongoDB Atlas (GRÁTIS)** 🥇
1. Acesse: https://www.mongodb.com/cloud/atlas
2. Crie conta grátis
3. Crie cluster (M0 Sandbox - GRÁTIS)
4. Pegue a connection string
5. Use no `MONGO_URL`

### **Opção 2: MongoDB Local**
```bash
# Ubuntu/Debian
sudo apt-get install mongodb

# macOS
brew install mongodb-community

# Iniciar
mongod --dbpath /path/to/data
```

---

## 📊 INTEGRAÇÕES PRESERVADAS

✅ **Google Tag Manager:** GTM-T44TCHMF
✅ **LeadLovers Pixel:** BB544324B8
✅ **LeadLovers Form:** IDs 770370, 22030575
✅ **LeadLovers Chat:** 0FF14590-1F55-4802-AB2C-BCF080723CA8
✅ **Favicon:** Novo SVG aplicado

Todas as integrações estão no código e funcionarão em qualquer plataforma!

---

## 🆘 PROBLEMAS COMUNS

### **Erro: "Module not found"**
```bash
cd frontend
rm -rf node_modules
yarn install
```

### **Build falha**
```bash
# Limpar cache
cd frontend
rm -rf node_modules build
yarn cache clean
yarn install
yarn build
```

### **Backend não conecta MongoDB**
- Verifique MONGO_URL no .env
- Certifique-se que MongoDB está rodando
- Teste a conexão: `mongosh <sua-connection-string>`

---

## 💰 CUSTOS ESTIMADOS

| Plataforma | Frontend | Backend | MongoDB | Total |
|------------|----------|---------|---------|-------|
| **Vercel + Railway + Atlas** | GRÁTIS | $5/mês | GRÁTIS | **$5/mês** |
| **Netlify + Render + Atlas** | GRÁTIS | GRÁTIS* | GRÁTIS | **GRÁTIS** |
| **Vercel Só Frontend** | GRÁTIS | N/A | N/A | **GRÁTIS** |

*Render free tier tem limitações (sleep após inatividade)

---

## 🎯 RECOMENDAÇÃO

Para o seu caso (site principalmente estático):

**MELHOR OPÇÃO:** 
1. **Vercel** para frontend (GRÁTIS, super rápido)
2. **Backend opcional** (você pode até remover se não usar)
3. **MongoDB Atlas** se precisar de banco (GRÁTIS)

**Custo Total: $0/mês** 🎉

---

## 📞 SUPORTE DAS PLATAFORMAS

- **Vercel:** https://vercel.com/support
- **Netlify:** https://www.netlify.com/support/
- **Railway:** https://railway.app/help
- **Render:** https://render.com/docs

Todas têm documentação excelente e suporte responsivo!

---

**Boa sorte com a migração! Você merece um serviço melhor! 💪**
