// /Backend/server.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes/rota'); // Importa o arquivo de rotas

// Importar o database força a execução do arquivo e cria o banco/tabelas
require('./database'); 

const app = express();

// Middlewares globais de conexão e comunicação
app.use(express.json());


//app.use(cors({
    //origin: 'http://localhost:5173', // Permite apenas o frontend local
//}));


const corsOptions = {
  origin: "https://atividade-pratica-sistema-cadastro-autenticacao-i23pjim4y.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
};

// 🔥 IMPORTANTE: isso garante resposta no preflight
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// garante headers antes das rotas
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", corsOptions.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.use(routes);


const PORT = process.env.PORT || 3000;

// para usar normal, de cima para aplicação da web

//const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
