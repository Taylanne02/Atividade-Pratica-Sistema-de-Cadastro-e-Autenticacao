# 📝 Atividade Prática: Sistema de Cadastro e Autenticação

----------------------

## 📂 Estrutura do Projeto

O projeto está estruturado de forma modular e escalável na raiz:

```text
meu-projeto/
├── Backend/
│   ├── routes/
│   │   └── rota.js         # Isolamento e regras de validação das rotas
│   ├── database.js         # Conexão e criação automática das tabelas SQLite
│   ├── server.js           # Inicialização e middlewares globais do servidor
│   └── package.json
└── Frontend/
    ├── src/
    │   ├── Cadastro.jsx    # Componente do Formulário com React Hook Form e Axios
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

----------------------

# Configurando o Frontend (Interface com React)

## 1. Crie o projeto React via Vite. Dentro de uma pasta, abra o terminal e execute o comando:

```bash
npm create vite@latest Frontend -- --template react
```

Use o nome Frontend para nomear o projeto

## 2. Entre na pasta do Frontend que o Vite acabou de criar

```bash
cd Frontend
```

## 3. Instala as dependências padrão do React

```bash
npm install
```

## 4. Instala as bibliotecas (React Hook Form e Axios)

```bash
npm install react-hook-form axios
```

----------------------

# Configurando o Backend (Servidor e Banco de Dados)

## 1. Cria a pasta do Backend e a pasta de rotas dentro dela

```bash
mkdir -p Backend/routes
```

## 2. Entra na pasta do Backend

```bash
cd Backend
```

## 3. Inicializa o arquivo package.json padrão

```bash
npm init -y
```

## 4. Instala o Express, o SQLite3 e o CORS

```bash
npm install express sqlite3 cors
```

----------------------

# Como Executar o Sistema Completo

## Rodar o Backend: No terminal aberto dentro da pasta /Backend, digite:

```bash
node server.js
```


## Rodar o Frontend: No outro terminal aberto dentro da pasta /Frontend, digite:

```bash
npm run dev
```

# Lnk das aplicações Vercel e Render

## Frontend

https://atividade-pratica-sistema-cadastro.vercel.app/

## Backend 

https://atividade-pratica-sistema-de-cadastro-e-0o27.onrender.com
