// /Backend/server.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes/rota'); // Importa o arquivo de rotas

// Apenas importar o database força a execução do arquivo e cria o banco/tabelas
require('./database'); 

const app = express();

// Middlewares globais de conexão e comunicação
app.use(express.json());


//Para o render, local só usa o app.use(cors) 
app.use(cors({
    origin: [
        "https://atividade-pratica-sistema-cadastro-autenticacao-ga053e2fs.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.options("*", cors());
// Vincula todas as rotas isoladas ao servidor Express
app.use(routes);


const PORT = process.env.PORT || 3000;

// para usar normal, de cima para aplicação da web

//const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
