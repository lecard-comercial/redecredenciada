# LeCard — Guia de Estabelecimentos Credenciados

Aplicação React para consulta da rede credenciada LeCard.  
**86.696 estabelecimentos reais** em todo o Brasil.

---

## Requisitos

- **Node.js 18+** → https://nodejs.org  
  Verifique: `node -v`

---

## Como rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em desenvolvimento
```bash
npm run dev
```
Acesse: **http://localhost:5173**

> O primeiro carregamento pode levar alguns segundos — o arquivo contém ~86 mil registros embutidos.

### 3. Build de produção
```bash
npm run build
```
Arquivos gerados em `dist/`.

### 4. Visualizar o build localmente
```bash
npm run preview
```

---

## Deploy

### Vercel
```bash
npx vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta dist/ em app.netlify.com/drop
```

### Servidor próprio (Nginx)
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Estrutura do projeto

```
lecard-guia/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx       ← componente principal + dados
│   ├── main.jsx      ← entry point React
│   └── index.css     ← reset mínimo
├── index.html
├── package.json
└── vite.config.js
```

---

*LeCard Administradora de Cartões — CNPJ 19.207.352/0001-40 — Vitória/ES*
