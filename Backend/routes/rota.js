// /Backend/routes/rota.js
const express = require('express');
const router = express.Router();
const db = require('../database'); // Importa o banco de dados configurado

// Endpoint POST para Cadastro
router.post('/cadastro', (req, res) => {
    const { nome, email, senha, confirmacaoSenha } = req.body;

    // Requisito 4: Regras de validação rigorosas no servidor
    if (!nome || !email || !senha || !confirmacaoSenha) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
    }
    if (senha !== confirmacaoSenha) {
        return res.status(400).json({ erro: "As senhas não coincidem." });
    }
    if (senha.length < 6) {
        return res.status(400).json({ erro: "A senha deve ter no mínimo 6 caracteres." });
    }

    // Critério avançado de segurança para a senha (letras maiúsculas, minúsculas e caracteres especiais)
    const regexSeguranca = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).+$/;
    if (!regexSeguranca.test(senha)) {
        return res.status(400).json({ 
            erro: "A senha é muito fraca. Utilize letras maiúsculas, minúsculas e caracteres especiais." 
        });
    }

    // Executa a persistência no banco modularizado
    const query = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
    db.run(query, [nome, email, senha], function(err) {
        if (err) {
            // Requisito 5: Tratamento de exceções com mensagens descritivas
            if (err.message.includes("UNIQUE")) {
                return res.status(409).json({ erro: "Este e-mail já está em uso." });
            }
            return res.status(500).json({ erro: "Falha na comunicação com o banco de dados." });
        }
        res.status(201).json({ mensagem: "Cadastro realizado com sucesso!" });
    });
});

// Exporta o roteador para ser acoplado no servidor principal
module.exports = router;