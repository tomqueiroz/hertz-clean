# 🧹 Como Remover Logo/Link Emergent Manualmente

## 🎯 3 FORMAS DE REMOVER

---

## ✅ FORMA 1: Editar Diretamente no GitHub (Mais Fácil)

### **Passo 1: Acessar o arquivo**
1. Vá em: https://github.com/tomqueiroz/hertz-clean
2. Navegue para: `frontend/public/index.html`
3. Clique no ícone de **lápis** (Edit this file)

### **Passo 2: Encontrar e remover**

**Procure por estas linhas (use Ctrl+F para buscar "emergent"):**

```html
<!-- REMOVER ISTO: -->
<script src="https://assets.emergent.sh/scripts/emergent-main.js"></script>
<script src="https://unpkg.com/rrweb@latest/dist/rrweb.min.js"></script>
<script src="https://d2adkz2s9zrlge.cloudfront.net/rrweb-recorder-20250919-1.js"></script>

<!-- Scripts de visual edits - REMOVER TUDO ISTO: -->
<script>
    if (window.self !== window.top && '%REACT_APP_ENABLE_VISUAL_EDITS%' === 'true') {
        var debugScript = document.createElement('script');
        debugScript.src = 'https://assets.emergent.sh/scripts/debug-monitor.js';
        document.head.appendChild(debugScript);
        // ... resto do código
    }
</script>

<!-- Badge "Made with Emergent" - REMOVER ISTO: -->
<a id="emergent-badge" target="_blank" href="https://app.emergent.sh/..." style="...">
    <div style="display: flex; flex-direction: row; align-items: center">
        <img style="width: 20px; height: 20px; margin-right: 8px"
            src="https://avatars.githubusercontent.com/in/1201222?..." />
        <p style="...">Made with Emergent</p>
    </div>
</a>
```

### **Passo 3: Salvar**
1. Role até o final da página
2. Em "Commit changes":
   - Escreva: `Remove Emergent branding`
3. Clique em **"Commit changes"**

### **Passo 4: Forçar redeploy na Vercel**
1. Vá em: https://vercel.com/dashboard
2. Encontre seu projeto
3. Aba **"Deployments"**
4. Clique nos **3 pontos** do último deploy
5. Clique em **"Redeploy"**
6. Aguarde 2-3 minutos
7. ✅ Pronto! Site atualizado sem Emergent!

---

## 💻 FORMA 2: Editar Localmente (Para Desenvolvedores)

### **Passo 1: Clonar o repositório**
```bash
git clone https://github.com/tomqueiroz/hertz-clean.git
cd hertz-clean
```

### **Passo 2: Abrir e editar o arquivo**
```bash
# Abra no seu editor favorito:
code frontend/public/index.html
# ou
nano frontend/public/index.html
# ou qualquer editor de texto
```

### **Passo 3: Remover as linhas**

**Procure e DELETE tudo relacionado à Emergent:**

1. **Scripts Emergent** (no `<head>`):
```html
<!-- DELETE ISTO: -->
<script src="https://assets.emergent.sh/scripts/emergent-main.js"></script>
<script src="https://unpkg.com/rrweb@latest/dist/rrweb.min.js"></script>
<script src="https://d2adkz2s9zrlge.cloudfront.net/rrweb-recorder-20250919-1.js"></script>
```

2. **Visual Edits Scripts** (no `<head>`):
```html
<!-- DELETE ESTE BLOCO INTEIRO: -->
<script>
    if (window.self !== window.top && '%REACT_APP_ENABLE_VISUAL_EDITS%' === 'true') {
        // ... todo este bloco
    }
</script>
```

3. **Badge "Made with Emergent"** (antes do `</body>`):
```html
<!-- DELETE ESTE LINK COMPLETO: -->
<a id="emergent-badge" target="_blank" href="https://app.emergent.sh/...">
    <div>
        <img src="..." />
        <p>Made with Emergent</p>
    </div>
</a>
```

### **Passo 4: Salvar e fazer commit**
```bash
git add frontend/public/index.html
git commit -m "Remove Emergent branding"
git push origin main
```

### **Passo 5: Vercel faz redeploy automático!**
- Aguarde 2-3 minutos
- ✅ Pronto! Site atualizado

---

## 🔍 FORMA 3: Buscar e Remover Tudo (Completa)

Se quiser garantir que removeu TUDO:

### **Arquivos para verificar:**

1. **`frontend/public/index.html`** ⭐ (principal)
2. `frontend/src/App.js`
3. `frontend/src/index.js`
4. Qualquer arquivo `.jsx` ou `.js` no `frontend/src/`

### **O que buscar e remover:**

**Busque por (Ctrl+F ou grep):**
- `emergent.sh`
- `emergent-badge`
- `Made with Emergent`
- `rrweb`
- `debug-monitor`
- `ENABLE_VISUAL_EDITS`

**Delete todas as ocorrências encontradas.**

---

## 📋 CHECKLIST DE VERIFICAÇÃO

Após remover e redeploy, verifique:

- [ ] Abra o site deployado
- [ ] Clique direito → **"View Page Source"** (Ver código fonte)
- [ ] Busque por "emergent" (Ctrl+F)
- [ ] **NÃO deve encontrar** nada além de URLs de imagens (customer-assets)
- [ ] Role até o final da página
- [ ] **NÃO deve ter** badge "Made with Emergent"
- [ ] ✅ Se não encontrou nada = Sucesso!

---

## 🎯 O QUE VOCÊ VAI REMOVER

### **1. Scripts no `<head>`:**
```html
❌ emergent-main.js
❌ rrweb.min.js
❌ rrweb-recorder
❌ debug-monitor.js
❌ Visual edits scripts
```

### **2. Badge no rodapé:**
```html
❌ Link "Made with Emergent"
❌ Logo da Emergent
```

### **3. NÃO remover (não são branding):**
```html
✅ customer-assets.emergentagent.com (CDN de imagens)
✅ LeadLovers scripts
✅ Google Tag Manager
```

---

## ⚡ ATALHO RÁPIDO

### **Se você tem acesso direto aos arquivos deployados:**

1. Edite: `frontend/public/index.html`
2. Delete linhas 30-60 (aproximadamente, onde estão os scripts Emergent)
3. Delete linhas ~80-120 (onde está o badge)
4. Salve
5. Redeploy

---

## 🆘 AINDA APARECE DEPOIS DE REMOVER?

### **Possíveis causas:**

1. **Cache do navegador:**
   - Pressione **Ctrl+Shift+R** (Windows/Linux)
   - Ou **Cmd+Shift+R** (Mac)
   - Isso força refresh sem cache

2. **CDN da Vercel não atualizou:**
   - Aguarde 5-10 minutos
   - CDN precisa propagar mudanças

3. **Arquivo errado:**
   - Certifique-se de editar `frontend/public/index.html`
   - **NÃO** editar `public/index.html` da raiz

4. **Deploy não completou:**
   - Verifique logs na Vercel
   - Pode ter dado erro no build

---

## 🔧 EXEMPLO PRÁTICO

### **ANTES (index.html):**
```html
<head>
    <title>Hertz Esquadrias</title>
    <script src="https://assets.emergent.sh/scripts/emergent-main.js"></script>  ❌
    <script src="...rrweb..."></script>  ❌
    <script id="llpixel" src="...leadlovers..."></script>  ✅ Manter
</head>
<body>
    <div id="root"></div>
    <a id="emergent-badge" href="...">Made with Emergent</a>  ❌
    <script>const chat = {...}</script>  ✅ Manter
</body>
```

### **DEPOIS (index.html):**
```html
<head>
    <title>Hertz Esquadrias</title>
    <script id="llpixel" src="...leadlovers..."></script>  ✅
</head>
<body>
    <div id="root"></div>
    <script>const chat = {...}</script>  ✅
</body>
```

---

## ✅ RESULTADO FINAL

Seu `index.html` deve ter APENAS:

```html
<!doctype html>
<html lang="en">
<head>
    <!-- Google Tag Manager -->
    <script>...</script>
    
    <meta charset="utf-8" />
    <link rel="icon" href="...favicon.svg" />
    <title>Hertz Esquadrias - Silêncio é o Novo Luxo</title>
    
    <!-- LeadLovers -->
    <script id="llpixel" src="...leadlovers..."></script>
    <link rel="stylesheet" href="...form-ll.css">
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript>...</noscript>
    
    <div id="root"></div>
    
    <!-- LeadLovers Form Script -->
    <script src="...async-form-capture.js"></script>
    
    <!-- LeadLovers Chat -->
    <script>
        const chat = {id:"0FF14590-1F55-4802-AB2C-BCF080723CA8"...};
    </script>
</body>
</html>
```

**Total de linhas:** ~60-70 (limpo e enxuto!)

---

## 💡 DICA PRO

Use a **FORMA 1** (editar no GitHub) - é mais rápido e não precisa instalar nada!

---

**Remova manualmente em 5 minutos seguindo a FORMA 1! 🚀**
