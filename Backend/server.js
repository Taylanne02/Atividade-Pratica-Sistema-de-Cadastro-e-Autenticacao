// /Backend/server.js

const express = require('express');
const cors = require('cors');
const routes = require('./routes/rota');

// Importar o database força a execução do arquivo e cria o banco/tabelas
require('./database'); 

const app = express();


// Middlewares globais de conexão e comunicação
app.use(express.json());

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT' , 'DELETE' , 'OPTIONS'],
    allowedHeaders: ['Content-Type']
})); 

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});