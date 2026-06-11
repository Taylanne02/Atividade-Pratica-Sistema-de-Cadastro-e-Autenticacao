// /Backend/database.js
const sqlite3 = require('sqlite3').verbose();

// Requisito 1: Inicialização e persistência do SQLite
const db = new sqlite3.Database('./banco.sqlite', (err) => {
    if (err) {
        console.error("Erro ao abrir o banco de dados:", err);
    } else {
        console.log("Banco de dados SQLite conectado com sucesso.");
        
        // Criação da tabela ao iniciar
        db.run(`CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL
        )`);
    }
});

// Exporta a instância do banco para que outros arquivos (como o de rotas) possam usá-la
module.exports = db;