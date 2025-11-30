# 🔧 Como Corrigir Erro 404 na Vercel

## ❌ PROBLEMA: Site mostra 404 após deploy

---

## ✅ SOLUÇÃO RÁPIDA (Siga exatamente):

### **PASSO 1: Delete o projeto atual na Vercel**

1. Vá em https://vercel.com/dashboard
2. Encontre o projeto `hertz-clean`
3. Clique em **"Settings"** (Configurações)
4. Role até o final da página
5. Clique em **"Delete Project"** (Deletar Projeto)
6. Confirme a exclusão

---

### **PASSO 2: Faça push das correções para GitHub**

**O que foi corrigido:**
- ✅ Adicionado `vercel.json` na raiz
- ✅ Adicionado `vercel.json` no frontend
- ✅ Configuração de rewrites para React Router

**No terminal Emergent (ou seu computador):**
```bash
cd /app
git push origin main
```

Aguarde o push completar (pode pedir usuário/senha do GitHub).

---

### **PASSO 3: Reimporte o projeto na Vercel (CORRETAMENTE)**

1. Vá em https://vercel.com
2. Clique em **"Add New..."** → **"Project"**
3. Encontre **"hertz-clean"**
4. Clique em **"Import"**

**ATENÇÃO: Configuração correta (IMPORTANTE!):**

#### **Framework Preset:**
- Selecione: **"Create React App"**

#### **Root Directory:**
- Clique em **"Edit"** 
- Digite: `frontend`
- ✅ **MUITO IMPORTANTE!** Confirme que está em `frontend`

#### **Build & Development Settings:**

Deixe assim (não mexa):
- **Build Command:** `yarn build` (já detecta automaticamente)
- **Output Directory:** `build` (já detecta automaticamente)
- **Install Command:** `yarn install` (já detecta automaticamente)

#### **Environment Variables:**
Clique em "Add" e adicione (opcional):
```
REACT_APP_BACKEND_URL=
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

---

### **PASSO 4: Deploy!**

1. Clique no botão **"Deploy"**
2. Aguarde 2-3 minutos
3. ✅ **DEVE FUNCIONAR AGORA!**

---

## 🎯 CHECKLIST DE VERIFICAÇÃO:

Antes de fazer deploy, confirme:

- [ ] Root Directory está definido como `frontend`
- [ ] Framework Preset é "Create React App"
- [ ] Build Command é `yarn build`
- [ ] Output Directory é `build`
- [ ] Arquivos `vercel.json` foram commitados e pushados

---

## 🔍 POR QUE ESTAVA DANDO 404?

### **Problema 1: Root Directory Errado**
Se você não definiu `frontend` como Root Directory, a Vercel tentava fazer build na raiz do projeto onde não existe o código React.

### **Problema 2: Rewrites faltando**
React Router precisa de configuração especial (rewrites) para funcionar corretamente. O arquivo `vercel.json` resolve isso.

### **Problema 3: Output Directory Errado**
A Vercel precisa saber que os arquivos buildados estão em `frontend/build`.

---

## 📸 COMO SABER SE ESTÁ CERTO:

### **Durante o Deploy, você deve ver:**
```
✓ Building...
✓ Compiling...
✓ Creating an optimized production build...
✓ Compiled successfully
✓ File sizes after gzip:
  110.67 kB  build/static/js/main.xxxx.js
  10.77 kB   build/static/css/main.xxxx.css
✓ Build completed
✓ Uploading...
✓ Deployment ready
```

### **NÃO deve ver:**
```
❌ Build failed
❌ No package.json found
❌ Command not found
```

---

## 🆘 AINDA DÁ ERRO?

### **Solução Alternativa 1: Fazer build manual**

1. Na Vercel, vá em **Settings** → **General**
2. Em **Build & Development Settings**, configure manualmente:

**Build Command:**
```bash
cd frontend && yarn install && yarn build
```

**Output Directory:**
```bash
frontend/build
```

**Install Command:**
```bash
cd frontend && yarn install
```

3. Salve e faça **Redeploy**

---

### **Solução Alternativa 2: Usar apenas pasta frontend**

**Opção A: Criar novo repositório só com frontend**
```bash
# No seu computador:
cd /app/frontend
git init
git add .
git commit -m "Frontend only"
git remote add origin https://github.com/seu-usuario/hertz-frontend.git
git push -u origin main
```

Depois importe este novo repo na Vercel (sem precisar de Root Directory).

---

### **Solução Alternativa 3: Netlify (mais simples)**

Se continuar com problemas, tente a Netlify:

1. Acesse: https://netlify.com
2. Login com GitHub
3. **"Add new site"** → **"Import from Git"**
4. Selecione `hertz-clean`
5. Configure:
   - **Base directory:** `frontend`
   - **Build command:** `yarn build`
   - **Publish directory:** `frontend/build`
6. Deploy!

A Netlify é mais tolerante com configurações.

---

## ✅ TESTE FINAL:

Após deploy bem-sucedido:

1. ✅ Abra a URL da Vercel
2. ✅ Navegue para `/linha-antirruido`
3. ✅ Navegue para `/linha-alto-padrao`
4. ✅ Teste o formulário
5. ✅ Verifique se o chat aparece

Se tudo funcionar = **SUCESSO!** 🎉

---

## 📊 RESUMO DA SOLUÇÃO:

| Passo | Ação | Tempo |
|-------|------|-------|
| 1 | Delete projeto Vercel | 30 seg |
| 2 | Push correções GitHub | 1 min |
| 3 | Reimporte com Root Directory correto | 2 min |
| 4 | Deploy | 2 min |
| **TOTAL** | | **5-6 min** |

---

## 🎯 CONFIGURAÇÃO CORRETA FINAL:

```json
Framework: Create React App
Root Directory: frontend
Build Command: yarn build
Output Directory: build
Install Command: yarn install
```

**Com isso, DEVE FUNCIONAR! 🚀**

---

**Última atualização:** Novembro 2024
**Problema resolvido:** Erro 404 na Vercel
