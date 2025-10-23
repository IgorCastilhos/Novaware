# Deploy na Vercel - Instruções

## 📦 O que foi configurado

Este projeto está pronto para deploy na Vercel com API Serverless para envio de emails via Resend.

### Arquivos criados/modificados:
- ✅ `/api/send-email.js` - Serverless function para enviar emails
- ✅ `vercel.json` - Configuração de rotas da Vercel
- ✅ `src/pages/Index.tsx` - Atualizado para usar a API serverless
- ✅ `.env.example` - Exemplo de variáveis de ambiente

## 🚀 Como fazer o deploy

### 1. Prepare o projeto localmente

Certifique-se de que todas as dependências estão instaladas:
```bash
npm install
```

### 2. Configure a Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New" → "Project"
3. Importe seu repositório do GitHub/GitLab/Bitbucket

### 3. Configure as variáveis de ambiente

Na Vercel, vá em **Settings** → **Environment Variables** e adicione:

- **Key:** `RESEND_API_KEY`
- **Value:** `re_sua_chave_aqui` (pegue em https://resend.com/api-keys)
- **Environment:** Production, Preview, Development (marque todos)

### 4. Deploy

Clique em **Deploy** e aguarde alguns minutos.

## 🧪 Testar localmente

Para testar localmente antes do deploy:

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Execute o projeto localmente
vercel dev
```

Isso vai simular o ambiente da Vercel na sua máquina.

## 📧 Configurar domínio próprio no Resend (opcional)

Se quiser usar emails com seu domínio (`@novaware.com.br`):

1. Acesse https://resend.com/domains
2. Clique em "Add Domain"
3. Digite `novaware.com.br`
4. Copie os registros DNS (SPF, DKIM, DMARC)
5. Adicione esses registros no painel do Registro.br
6. Aguarde a verificação (pode levar algumas horas)
7. Atualize o arquivo `/api/send-email.js` linha 33:
   ```javascript
   from: 'Novaware Orçamentos <noreply@novaware.com.br>',
   ```

## ⚠️ Importante

- **Não commite o arquivo `.env`** - ele está no `.gitignore`
- A API key do Resend deve ser configurada apenas na Vercel
- O plano gratuito do Resend permite 100 emails/dia
- O plano gratuito da Vercel permite deploys ilimitados

## 🔍 Verificar se está funcionando

Após o deploy:
1. Acesse seu site na Vercel
2. Preencha o formulário de contato
3. Verifique se o email chegou em `novawaresw@gmail.com`
4. Confira os logs na Vercel: **Deployments** → seu deploy → **Functions** → logs

## 📝 Estrutura do projeto

```
/
├── api/
│   └── send-email.js      # Serverless function (backend)
├── src/
│   └── pages/
│       └── Index.tsx      # Frontend com formulário
├── vercel.json            # Config da Vercel
└── .env                   # Variáveis locais (NÃO commitar)
```

## ❓ Troubleshooting

### Email não está chegando
1. Verifique se a variável `RESEND_API_KEY` está configurada na Vercel
2. Confira os logs da função na Vercel
3. Teste sua API key no painel do Resend

### Erro 404 na API
1. Certifique-se de que o arquivo está em `/api/send-email.js`
2. Verifique se o `vercel.json` existe na raiz
3. Faça um novo deploy

### CORS Error
- O CORS já está configurado na serverless function
- Se persistir, verifique se está usando `fetch('/api/send-email')` (caminho relativo)

