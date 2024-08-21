import express from 'express';
import cors from 'cors';

import './conexao.js';  // Certifique-se de que a conexão está correta
import { usuario } from './bancodados.js';  // Verifique se o modelo está correto

const servidor = express();

servidor.use(cors());
servidor.use(express.json());

// Rota GET para listar todos os usuários
servidor.get("/", async (requisicao, resposta) => {
    try {
        const resultados = await usuario.find();
        resposta.status(200).json(resultados);
    } catch (erro) {
        console.error('Erro ao buscar usuários:', erro.message);
        resposta.status(500).json({ mensagem: 'Erro ao buscar usuários' });
    }
});

// Rota POST para adicionar um novo usuário
servidor.post("/", async (requisicao, resposta) => {
    try {
        const novoUsuario = new usuario(requisicao.body);
        const resultado = await novoUsuario.save();
        resposta.status(201).json(resultado);
    } catch (erro) {
        console.error('Erro ao adicionar usuário:', erro.message);
        resposta.status(500).json({ mensagem: 'Erro ao adicionar usuário' });
    }
});

servidor.listen(4000, () => {
    console.log('SERVIDOR EM FUNCIONAMENTO!');
    console.log('http://localhost:4000/');
});
