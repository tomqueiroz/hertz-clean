# 🚀 Instruções de Deployment - Hertz Esquadrias

## ⚠️ IMPORTANTE: Configuração para Produção

### Problema de Memória Resolvido

O site estava crashando porque usava `yarn start` (servidor de desenvolvimento) em produção, consumindo mais de 200MB de memória.

### ✅ Solução Implementada

**Para deployment em produção, o supervisor deve usar:**

```bash
# Build do frontend (gera arquivos otimizados em /app/frontend/build)
cd /app/frontend && yarn build

# Servir os arquivos estáticos (usa apenas ~20MB de memória)
cd /app/frontend && yarn serve
```

### Configuração do Supervisor para Produção

O arquivo `/etc/supervisor/conf.d/supervisord.conf` deve ter:

```ini
[program:frontend]
command=bash -c "yarn build && yarn serve"
environment=HOST="0.0.0.0",PORT="3000"
directory=/app/frontend
autostart=true
autorestart=true
stderr_logfile=/var/log/supervisor/frontend.err.log
stdout_logfile=/var/log/supervisor/frontend.out.log
stopsignal=TERM
stopwaitsecs=50
stopasgroup=true
killasgroup=true
```

### Comparação de Uso de Memória

| Modo | Comando | Memória | Uso |
|------|---------|---------|-----|
| ❌ Desenvolvimento | `yarn start` | ~250MB | Apenas para desenvolvimento local |
| ✅ Produção | `yarn build && yarn serve` | ~20MB | **Use este para deployment** |

### Build de Produção

O build otimizado gera:
- **JS:** 110.67 kB (gzipped)
- **CSS:** 10.77 kB (gzipped)
- **Total:** ~121 KB apenas!

### Verificar que está funcionando

```bash
# Após deployment, verificar:
curl -I https://seu-dominio.com

# Deve retornar headers de servidor estático, não webpack-dev-server
```

### Integrações Preservadas

✅ Todas as integrações continuam funcionando:
- Google Tag Manager (GTM-T44TCHMF)
- LeadLovers Pixel (BB544324B8)
- LeadLovers Form (ids: 770370, mid: 770370, pid: 22030575)
- LeadLovers Chat Widget (0FF14590-1F55-4802-AB2C-BCF080723CA8)
- Favicon atualizado (favicon.svg)

### Arquivos .env

Os arquivos `.env` estão commitados no repositório:
- `/app/frontend/.env`
- `/app/backend/.env`

Eles serão automaticamente usados no deployment.

---

## 🔧 Para o Emergent Platform

Se o deployment ainda apresentar problemas de memória:

1. **Verificar supervisor config** está usando `yarn serve` e não `yarn start`
2. **Garantir que o build foi executado** antes de servir
3. **Confirmar recursos da máquina** são suficientes (mínimo 512MB RAM)

---

**Última atualização:** Novembro 2024
**Build testado:** ✅ Funcionando
**Memória otimizada:** ✅ ~200MB economia
