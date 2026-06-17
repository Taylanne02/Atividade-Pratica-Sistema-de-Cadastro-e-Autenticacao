const express = require('express');
const cors = require('cors');
const routes = require('./routes/rota');

const app = express();

app.use(express.json());

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT' , 'DELETE' , 'OPTIONS'],
    allowedHeaders: ['Content-Type']
})); 

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});